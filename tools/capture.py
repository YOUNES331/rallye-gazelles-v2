"""Captures pleine page de la page d'accueil locale (outil de revue, hors site).
Usage : python tools/capture.py <url> <sortie.png> <largeur> <hauteur_fenetre> <mobile:0|1> [echelle]
Pilote Edge en mode sans fenêtre via le protocole DevTools ; fige les animations d'entrée pour la capture.
"""
import base64, json, subprocess, sys, time, urllib.request
import websocket

url, out, w, h, mobile = sys.argv[1], sys.argv[2], int(sys.argv[3]), int(sys.argv[4]), sys.argv[5] == '1'
scale = float(sys.argv[6]) if len(sys.argv) > 6 else 1
edge = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
port = 9333
proc = subprocess.Popen([edge, '--headless=new', '--disable-gpu', f'--remote-debugging-port={port}', '--user-data-dir=' + __import__('tempfile').mkdtemp(), 'about:blank'],
                        stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
try:
    for _ in range(60):
        try:
            tabs = json.load(urllib.request.urlopen(f'http://127.0.0.1:{port}/json')); break
        except Exception:
            time.sleep(0.5)
    ws = websocket.create_connection([t for t in tabs if t['type'] == 'page'][0]['webSocketDebuggerUrl'], timeout=60, suppress_origin=True)
    n = 0

    def call(method, **params):
        global n
        n += 1
        ws.send(json.dumps({'id': n, 'method': method, 'params': params}))
        while True:
            r = json.loads(ws.recv())
            if r.get('id') == n:
                return r.get('result', {})

    call('Emulation.setDeviceMetricsOverride', width=w, height=h, deviceScaleFactor=1, mobile=mobile)
    if mobile:
        call('Emulation.setUserAgentOverride', userAgent='Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148')
    call('Page.navigate', url=url)
    time.sleep(6)
    # parcourt la page pour déclencher les images différées et les apparitions, puis fige les animations
    height = call('Runtime.evaluate', expression='document.documentElement.scrollHeight', returnByValue=True)['result']['value']
    y = 0
    while y < height:
        call('Runtime.evaluate', expression=f'window.scrollTo(0,{y})')
        time.sleep(0.45)
        y += int(h * 0.7)
    # attend que toutes les images (y compris celles optimisées à la volée) soient chargées
    for _ in range(60):
        pending = call('Runtime.evaluate', expression="[...document.images].filter(i=>!(i.complete&&i.naturalWidth>0)).length", returnByValue=True)['result']['value']
        if pending == 0:
            break
        call('Runtime.evaluate', expression="document.querySelectorAll('img[loading=lazy]').forEach(i=>i.loading='eager')")
        time.sleep(1)
    time.sleep(1.5)
    call('Runtime.evaluate', expression="""(()=>{const s=document.createElement('style');s.textContent='*{animation-duration:.001ms!important;animation-delay:0s!important;transition-duration:.001ms!important;transition-delay:0s!important}.reveal{opacity:1!important;transform:none!important}[data-proto]{display:none!important}';document.head.appendChild(s);document.querySelectorAll('[data-count]').forEach(e=>e.textContent=e.dataset.count);window.scrollTo(0,0)})()""")
    time.sleep(2)
    height = call('Runtime.evaluate', expression='document.documentElement.scrollHeight', returnByValue=True)['result']['value']
    shot = call('Page.captureScreenshot', format='png', captureBeyondViewport=True, clip={'x': 0, 'y': 0, 'width': w, 'height': height, 'scale': scale})
    open(out, 'wb').write(base64.b64decode(shot['data']))
    print('ok', w, height)
finally:
    proc.terminate()

var createWs = function(){
    const WebSocket = require('ws');
    const ws = new WebSocket("ws://agileconfig_server.xbaby.xyz/ws",
        {
            "headers": {
                "Authorization": 'Basic dGVzdF9hcHA6dGVzdF9hcHA=',
            "appid": "xxxxx",
            "env": "DEV"
            }
        }
    );
    ws.on('open', function open() {
        ws.send('ping');
    });
    
    ws.on('message', function message(data) {
        console.log('received: %s', data);
    });
}

for (let index = 0; index < 500; index++) {
    createWs();
}
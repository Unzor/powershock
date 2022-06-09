function exec_powershell(code, onmsg) {
    var connection = new WebSocket('wss://psjs.seven7four4.repl.co/api/run');
    connection.onmessage = (msg) => {
        if (onmsg) onmsg(msg.data);
    }
    connection.onopen = () => {
        connection.send(code)
    }
}

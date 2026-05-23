const http = require('http');
const porta = 3000;
const host = '127.0.0.1';

const servidor = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/plain'});
    if(req.url === '/'){
        res.write('Olá mundo')
    }
    else if(req.url === '/usuarios'){
        res.write('Bem vindo, essa é a porta usuarios!')
    }
    else {
        res.write('Rota não encontrada');
    }

    res.end();

});

servidor.listen(porta,host, () => {console.log('Servidor ATIVO!!')});
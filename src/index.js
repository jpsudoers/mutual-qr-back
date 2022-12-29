import app from './app';
import fs from 'fs';
import https from 'https';

https.createServer({
    cert: fs.readFileSync(require.resolve("./keys/fichadigital.crt")),
    key: fs.readFileSync(require.resolve("./keys/apache.key")),
}, app).listen(app.get('port'));

console.log('init in', app.get('port'));
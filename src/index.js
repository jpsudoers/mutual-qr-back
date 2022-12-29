import app from './app';
import fs from 'fs';
import https from 'https';

https.createServer({
    cert: fs.readFileSync(require.resolve("./keys/fullchain.pem")),
    key: fs.readFileSync(require.resolve("./keys/privkey.pem")),
}, app).listen(app.get('port'));

console.log('init in', app.get('port'));
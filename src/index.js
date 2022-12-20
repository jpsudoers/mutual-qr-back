import app from './app';

app.listen(app.get('port'));

console.log('init in', app.get('port'));
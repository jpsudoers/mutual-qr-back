import {config} from 'dotenv';
config();

export default {
    port: process.env.PORT || 4000,
    userDatabase: process.env.USERDB || '',
    passwordDatabase: process.env.PSWD || '',
    database: process.env.DB || '',
    server: process.env.SERVER || '',
}
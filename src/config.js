import {config} from 'dotenv';
config();

export default {
    port: process.env.PORT || 4000,
    userDatabase: process.env.USERDB || '',
    passwordDatabase: process.env.PSWD || '',
    database: process.env.DB || '',
    server: process.env.SERVER || '',
    port2: process.env.PORT2 || 4000,
    userDatabase2: process.env.USERDB2 || '',
    passwordDatabase2: process.env.PSWD2 || '',
    database2: process.env.DB2 || '',
    server2: process.env.SERVER2 || '',
}
import sql from 'mssql';
import config from '../config';

const dbSettings =  {
    user: config.userDatabase,
    password: config.passwordDatabase,
    server: config.server,
    database: config.database,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

export const getConnection = async () => {
    try {
        return await sql.connect(dbSettings);
    } catch (e) {
        console.log(e)
    }
};
import sql from 'mssql';
import config from '../config';
import mssql from '../config/mssql-conection-pooling'

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

const dbSettings2 =  {
    user: config.userDatabase2,
    password: config.passwordDatabase2,
    server: config.server2,
    database: config.database2,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

export const getConnection = async () => {
    try {
        return await mssql.GetCreateIfNotExistPool(dbSettings)
    } catch (e) {
        console.log(e)
    }
};

export const getConnection2 = async () => {
    try {
        return await mssql.GetCreateIfNotExistPool(dbSettings2)
    } catch (e) {
        console.log(e)
    }
};
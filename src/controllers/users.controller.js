import {getConnection} from "../database/connection";

export const getUser = async (req, res) => {
    const {rut} = req.params;
    try {
        const pool = await getConnection();
        const result = await pool.request().query(`exec [dbo].[LectorQR] '${rut}',1`);
        res.json(result.recordset)
    } catch (e) {
        console.log(e)
    }
}

export const postLogin = async (req, res) => {
    const {id, password} = req.body;
    console.log(req.body)
    try {
        const pool = await getConnection();
        const result = await pool.request().query(`exec [dbo].[InicioSesion] '${id}','${password}'`);
        console.log(result);
        if (result.recordset[0]['Respuesta'] === 'Usuario No Válido') {
            res.status(203).json('No autorizado');
        } else {
            res.status(200)
            res.json(result.recordset)
        }
    } catch (e) {
        console.log(e)
    }
}


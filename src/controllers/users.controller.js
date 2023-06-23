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

export const getBiByUserId = async (req, res) => {
    const {id} = req.params;
    try {
        const pool = await getConnection();
        const result = await pool.request().query(`exec [dbo].[Paneles_Usuarios] ${id}`);
        res.json(result.recordset)
    } catch (e) {
        console.log(e)
    }
}

export const getUserByNameOrRut = async (req, res) => {
    const {reg} = req.params;
    try {
        const pool = await getConnection();
        const result = await pool.request().query(`exec [dbo].[BusquedaRutNombre] '${reg}',1`);
        res.json(result.recordset)
    } catch (e) {
        console.log(e)
    }
}

export const postLogin = async (req, res) => {
    const {id, password} = req.body;
    try {
        const pool = await getConnection();
        const result = await pool.request().query(`exec [dbo].[InicioSesion] '${id}','${password}'`);
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


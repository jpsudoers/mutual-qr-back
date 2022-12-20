import {getConnection} from "../database/connection";

const getUser = async (req, res) => {
    const {rut} = req.params;
    const pool = await getConnection();
    const result = await pool.request().query(`exec [dbo].[LectorQR] '${rut}',1`);
    res.json(result.recordset)
}

export default getUser;
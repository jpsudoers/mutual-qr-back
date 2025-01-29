import {getConnection, getConnection2} from "../database/connection";

export const getUser = async (req, res) => {
    const [rut, idRol, filtroRol, idUsuario] = req.params.rut.split('+');
    try {
        const pool = await getConnection();
        // const result = await pool.request().query(`exec [dbo].[LectorQR] '${rut}',1`);
        const result = await pool.request().query(`exec [dbo].[LectorQRV2] '${rut}',${idRol},'${filtroRol}',${idUsuario}`);
        res.json(result.recordset)
    } catch (e) {
        console.log(e)
    }
}

export const getBiByUserId = async (req, res) => {
    const [id, idRol, filtroRol, idUsuario] = req.params.id.split('+');
    try {
        const pool = await getConnection();
        // const result = await pool.request().query(`exec [dbo].[Paneles_Usuarios] ${id}`);
        const result = await pool.request().query(`exec [dbo].[Paneles_UsuariosV2] ${id},${idRol},'${filtroRol}'`);
        res.json(result.recordset)
    } catch (e) {
        console.log(e)
    }
}

export const getUserByNameOrRut = async (req, res) => {
    const [reg, idRol, filtroRol, idUsuario] = req.params.reg.split('+');
    try {
        const pool = await getConnection();
        // const result = await pool.request().query(`exec [dbo].[BusquedaRutNombre] '${reg}',1`);
        const result = await pool.request().query(`exec [dbo].[BusquedaRutNombreV2]  '${reg}',${idRol},'${filtroRol}',${idUsuario};
`);
        res.json(result.recordset)
    } catch (e) {
        console.log(e)
    }
}

// export const postLogin = async (req, res) => {
//     const {id, password} = req.body;
//     try {
//         const pool = await getConnection();
//         const result = await pool.request().query(`exec [dbo].[InicioSesion] '${id}','${password}'`);
//         if (result.recordset[0]['Respuesta'] === 'Usuario No Válido') {
//             res.status(203).json('No autorizado');
//         } else {
//             res.status(200)
//             res.json(result.recordset)
//         }
//     } catch (e) {
//         console.log(e)
//     }
// }

export const postLogin = async (req, res) => {
    const {id, password} = req.body;
    try {
        const pool = await getConnection2();
        const result = await pool.request().query("select * from dbmas.dbo.VW_USER_SACC WHERE rut = '" + id + "' and clave = '" + password + "'");
        if (result.recordset.length === 0) {
            res.status(401).json('No autorizado');
        } else {
            res.status(200)
            res.json(result.recordset)
        }
    } catch (e) {
        console.log(e)
    }
}

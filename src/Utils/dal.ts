import * as sql from 'mssql';
import { appConfig } from './appConfig';

const pool = new sql.ConnectionPool(appConfig);

export const executeSql = async (sqlQuery: string): Promise<any> => {
    try {
        await pool.connect();
        const result = await pool.request().query(sqlQuery);
        return result.recordset;
    } catch (err) {
        throw err;
    } finally {
        pool.close();
    }
};

export const insertUserToDB = async (firstName: string, lastName: string, userName: string, password: string, role: string) => {
    const sql = `INSERT INTO Users (firstname, lastname, username, password, role) VALUES ('${firstName}', '${lastName}', '${userName}', '${password}', '${role}')`;
    executeSql(sql)
    .then((result) => {
        console.log("User inserted successfully:", result);
    })
    .catch((err) => {
        console.error("Error inserting user:", err);
    });
}

export const insertProductToDB = async (ProductName: string, ProductPrice: number) => {
    const sql = `INSERT INTO Products (ProductName, ProductPrice) VALUES ('${ProductName}', ${ProductPrice})`;
    executeSql(sql)
    .then((result) => {
        console.log("Product inserted successfully:", result);
    })
    .catch((err) => {
        console.error("Error inserting Product:", err);
    });
}

export const checkIfTableEmpty = async (table: string) => {
    const sql = `SELECT CASE WHEN EXISTS(SELECT 1 FROM dbo.${table}) THEN 0 ELSE 1 END AS IsEmpty`;
    executeSql(sql).then((result) => {
        console.log(result[0].IsEmpty);
    }).catch((err) => console.log("err:", err));
}

export const resetTableCount = (table: string) => {
    const sql = `DBCC CHECKIDENT ('[${table}]', RESEED, 0)`;  
    executeSql(sql)
    .then((result) => {
        console.log("reset table count Done!", result);
    })
    .catch((err) => {
        console.error("Error reset table count...", err);
    });
}
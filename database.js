import mysql from 'mysql2';
//import dotenv from 'dotenv'
//dotenv.config()
//hello
const pool = mysql.createPool(
    {
        host: "127.0.0.1", //process.env.MYSQL_HOST,
        user: "root", //process.env.MYSQL_USER,
        password: "1296", //process.env.MYSQL_PASSWORD, 
        database: "stellarHub", //process.env.MYSQL_DATABASE, 
})
.promise();

// getting users
export async function getUsers(){
    const [row] = await pool.query("SELECT * FROM user");
    return row;
}

// getting single user by id
export async function getUser(id){
    const [row] = await pool.query(`
    SELECT * FROM user
    WHERE id = ?
    `, [id]);
    return row[0];
}


// creating new user
export async function createUser(firstname,lastname,email,phoneNo,userPassword){
    const [result] = await pool.query(`
    INSERT INTO user (firstname,lastname,email,phoneNo,userPassword)
    VALUES (?,?,?,?,?)
    `, [firstname, lastname, email, phoneNo, userPassword]);
    const userID = result.insertId;
    return getUser(userID);
}

//const result = await getUsers();
const result = await createUser('user','two','abc2@gmail.com','03001445677','1222');
console.log(result);
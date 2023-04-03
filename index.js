const express = require("express");
const mysql = require('mysql2/promise')
const cors = require("cors");

const app = express();

app.use(express.static('build'))

const path = require("path")



app.use(express.json());
app.use(cors());

const pool = mysql.createPool({
    host: 'localhost',
    user: '',       //TODO : insert username here, avalible in email
    password: '', //TODO : insert password here, avalible in email
    database: '',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

// app.get("/", (req, res) => {

//     res.send("hi")
// })
app.get("/api/getdata", async (req, res) => {
    const sql = `select * from users `;
    const [result] = await pool.query(sql)
        res.send(result)
})

app.get("/api/getdataall", async (req, res) => {
    const sql = `select * from products `;
    const [result] = await pool.query(sql)
    
    res.send(result)

})

app.get("/api/getorders", async (req, res) => {
    const sql = `select * from orders `;
    const [result] = await pool.query(sql)
    
    res.send(result)

})

app.get("/api/getvalues/:catId", async (req, res) => {
    const id = req.params.catId
    const sql = `select * from products WHERE category = ${id}  `;
    const [result] = await pool.query(sql)

    res.send(result)
})


// app.get("/getdataa", (req, res) => {
//     let sql = `select * from products ORDER BY RAND() limit 6`;
//     db.query(sql, (err, result) => {
//         if (err) {
//             console.log(err)
//         }
//         else {
//             res.send(result)
//         }
//     })

// })

app.get("/api/getdata/:id", async (req, res) => {
    const id = req.params.id;
    let sql = `select * from products where id=${id}`;
    const [result] = await pool.query(sql)
            
    res.send(result[0])

})

// app.get("/sort/:price", (req, res) => {
//     const price = req.params.price;
//     if (price === '200') {
//         let sql = `select * from products WHERE price > 200`;
//         db.query(sql, (err, result) => {
//             if (err) {
//                 console.log(err)
//             }
//             else {
//                 res.send(result)
//             }
//         })

//     }
//     else if (price === '200_500') {
//         let sql = `select * from products WHERE price >=200 && price <= 500`;
//         db.query(sql, (err, result) => {
//             if (err) {
//                 console.log(err)
//             }
//             else {
//                 res.send(result)
//             }
//         })

//     }
//     else if (price === '500_1000') {
//         let sql = `select * from products WHERE price > 500 && price <= 1000`;
//         db.query(sql, (err, result) => {
//             if (err) {
//                 console.log(err)
//             }
//             else {
//                 res.send(result)
//             }
//         })

//     }


// })


app.get("/api/account/:user_id", async (req, res) => {
    const user_id = req.params.user_id;
    const sql = `select * from orders where user_id=${user_id} && orderstatus='order done'`;
    const [result] = await pool.query(sql)

    res.send(result)

})

app.get("/api/myorder/:order_id", async (req, res) => {
    const order_id = req.params.order_id;
    let sql = `select * from orders where order_id=${order_id}`;
    const [result] = await pool.query(sql)
        
    res.send(result)

})




app.post('/api/register', async (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const sql = "INSERT INTO users (email, username, password) VALUES (?, ?, ?)"

    const [result] = await pool.query( sql , [email, username, password])

    if (result) {
        res.send(result);
    } else {
        res.send({ message: "ENTER CORRECT ASKED DETAILS!" })
    }
})

app.post('/api/addproduct', async (req, res) => {
    const {name, description, price, stock, image} = req.body
    const sql = "INSERT INTO products (name, description, price, stock, image) VALUES (?, ?, ?, ?, ?)"

    const [result] = await pool.query( sql , [name, description, price, stock, image])

    res.send(result);

})



app.post('/api/updateproduct/:id', async (req, res) => {
    const id = req.params.id;
    const stock = req.body.stock;
    const sql = "UPDATE products SET stock = ? WHERE id = ?"

    const [result] = await pool.query( sql , [stock, id])

    res.send(result);

})

app.post('/api/updateorder/:id', async (req, res) => {
    const id = req.params.id;
    const status = req.body.status;
    const sql = "UPDATE orders SET orderstatus = ? WHERE orderid = ?"

    const [result] = await pool.query( sql , [status, id])

    res.send(result);

})

app.post("/api/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?"
    const [result] = await pool.query(sql, [email, password])

    // if (err) {
    //     req.setEncoding({ err: err });
    // } else {
        if (result.length > 0) {
            res.send(result[0]);
        } else {
            res.send({ message: "WRONG EMAIL ADDRESS OR PASSWORD!" })
        }
    // }
})

app.get('*', function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, '/build/')});
  });

app.listen(3001, () => {
    console.log("running backend server");
})
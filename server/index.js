const express = require('express')
const app= express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'login',
});

app.post('/create', (req,res) => {

    const name= req.body.name
    const age= req.body.age

    db.query('INSERT INTO CRUD (name , age) VALUES (?,?)', [name, age], 
    (err, result) =>{
        if(err){
            console.log(err)
        }
        else{
            res.send("Values Inserted")
        }
    });

});

app.get('/show', (req, res) => {
  db.query("SELECT * FROM CRUD", (err, result) => {
      if(err){
          console.log(err)
      }
      else{
          res.send(result);
      }
  });
});

app.put('/update', (req, res) => {
const id = req.body.id
const age = req.body.newage
db.query("UPDATE CRUD SET age = ? WHERE id = ?", [age, id], (err, result)=>{
    if(err){
        console.log(err);
    }else{
        res.send(result);
    }
})
})

app.delete("/delete", (req, res)=>{
    const id = req.body.deleteitem;
    db.query("DELETE FROM CRUD WHERE id = ?", id, (err,result)=>{
        if(err) {
            console.log(err)
        }else {
            res.send(result)
        }
    });
});

app.listen(3003, ()=>{
    console.log("server is running on port 3003")
});
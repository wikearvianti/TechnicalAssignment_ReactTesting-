const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())

const hewan = [
    {id: 1, nama: 'Snowy', spesies: 'kucing'},
    {id: 2, nama: 'Blacki', spesies: 'anjing'},
    {id: 3, nama: 'Molly', spesies: 'kucing'},
    {id: 4, nama: 'Milo', spesies: 'kelinci'},
    {id: 5, nama: 'Rere', spesies: 'kucing'},
]

const postChecker = (req, res, next) => {
    const spesies = req.body.spesies
    const error = "not valid"
    if (spesies != 'kucing' && spesies != 'kelinci' && spesies != 'anjing') {
      return res.status(400).json({error})
    }
    else {
        next()
    }
}

app.get("/hewan", (req, res) => {
    const message = "SUCCESS"
    res.status(200);
    res.json({message, hewan});
});

app.get("/hewan/:id", (req, res) => {
    const getHewan = hewan.find(pet => pet.id === Number(req.params.id))
    if (getHewan) {
      const message = "SUCCESS"
      res.json({message, getHewan})
    } else {
      res.status(400).send("GAGAL")
    }
});

app.post("/hewan", postChecker ,(req, res) => {
    const {nama, spesies} = req.body
    const message = "SUCCESS"
    const postHewan = {
      id : hewan.length + 1,
      nama : nama,
      spesies : spesies
    };
    hewan.push(postHewan);
    res.status(201)
    res.json({message, hewan});
});

app.put("/hewan/:id", postChecker ,(req, res) => {
    const getHewan = hewan.find(pet => pet.id === Number(req.params.id))
    const {nama, spesies} = req.body
    if (getHewan) {
        const message = "SUCCESS"
        getHewan.nama = nama
        getHewan.spesies = spesies
        res.status(201)
        res.json({message, getHewan});
    } else {
      res.status(400).send("GAGAL")
    }
});  

app.delete("/hewan/:id", (req, res) => {
    const getHewan = hewan.find(pet => pet.id === Number(req.params.id))
    if (getHewan) {
        const message = "SUCCESS"
        hewan.splice(Number(req.params.id) - 1, 1)
        res.json({message, hewan});
    } else {
      res.status(400).send("GAGAL")
    }
});

app.listen(port, () => {
    console.log("Server is listening on port ",port);
    console.log("This is logger")
});
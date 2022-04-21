const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('MY First smarty smarty Node App')
})

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '01743756387' },
    { id: 2, name: 'moni', email: 'moni@gmail.com', phone: '01743756387' },
    { id: 3, name: 'Promi', email: 'Promi@gmail.com', phone: '01743756387' },
    { id: 4, name: 'Suborna', email: 'Suborna@gmail.com', phone: '01743756387' },
    { id: 5, name: 'Tonima', email: 'Tonima@gmail.com', phone: '01743756387' },
    { id: 6, name: 'Pritha', email: 'Pritha@gmail.com', phone: '01743756387' },
]

app.get('/users', (req, res) => {
    if (req.query.name) {
        const seacrh = req.query.name;
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(seacrh))
        res.send(matched);
    }
    else {
        res.send(users);
    }
})

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id === Number(id));
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log('post', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.get('/friuts', (req, res) => {
    res.send(['Apple', 'Mango', 'Painapple', 'Lichi'])
})

app.get('/friuts/Mango/fazle', (req, res) => {
    res.send('fazle fazle fazle')
})

app.listen(port, () => {
    console.log('Lisening the port', port);
})
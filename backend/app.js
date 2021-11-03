const express = require('express');
const mongoose = require('mongoose');

const User = require('./databases/user.schema');
const {HOST,MONGO_URI, PORT} = require('./configs/configs');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.post('/users', async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

const start = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        app.listen(+PORT, HOST, () => {
            console.log('server started');
        });
    } catch (e) {
        console.log(e.message);
    }
};
start();


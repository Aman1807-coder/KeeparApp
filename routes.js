const router = require('express').Router();
const User = require('../model/model');

router.post('/', (req, res) => {

    const user = new User({
        name: req.body.name,
        contact: req.body.contact,
        email: req.body.email,
        password: req.body.password,
        notes: []
    });

    user.save();
    res.send(JSON.stringify(user));
});

router.post('/signin', async (req, res) => {
    const singleUser = await User.findOne({ email: req.body.email });

    if (singleUser && req.body.password === singleUser.password)
        res.send(JSON.stringify(singleUser));

    else res.send(JSON.stringify(null));
});

router.post('/add', async (req, res) => {

    const user = await User.findOne({ email: req.body.email });
    const obj = {
        title: req.body.title,
        content: req.body.content
    }

    user.notes.push(obj);
    user.save();

    res.send(JSON.stringify(user.notes));

});

router.post('/delete', async (req,res) => {

    const user = await User.findOne({ email: req.body.email });
    user.notes.splice(req.body.id, 1);
    user.save();

    res.send(JSON.stringify(user.notes));
});

module.exports = router;
const User = require('../models/user')
module.exports = (router) => {
    router.post('/register', (req, res) => {
        if (!req.body.email) {
            res.json({succes: false, message: "You must  provide an email"})
        } else {
            if (!req.body.username) {
                res.json({succes: false, message: "You must  provide an username"})
            } else {
                if (!req.body.password) {
                    res.json({succes: false, message: "You must  provide an password"})
                } else {

                    const user = new User({
                        email: req.body.email.toLowerCase(),
                        username: req.body.username.toLowerCase(),
                        password: req.body.password
                    }).save()
                        .then((result) => {
                            console.log(result)
                            res.json({success: true, message: "User Successfully Added ", result})
                        })
                        .catch((err) => {
                            console.log(err)
                            res.json({success: false, message: "User Could not Save ", err})
                        })
                }

            }
        }

    })
    return router;
}
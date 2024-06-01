const User = require('../models/user')

const test = (req, res) => {
    res.json('test is working')
}

const registerUser = async(req, res) => {
    try {
        const {name, email, password} = req.body;
        //isim girilmiş mi kontrol eder
        if(!name) {
            return res.json({
                error: 'Bu alan zorunludur!'
            })
        };
        //Parola güçlü mü kontrol edilir
        if(!password || password.length < 6) {
            return res.json({
                error: 'Parola en az 6 karakterden oluşmalıdır!'
            })
        };
        //Mail kontrol
        const exist = await User.findOne({email});
        if(exist) {
            return res.json({
                error: 'Bu mail adresine sahip bir kullanıcı zaten var.'
            })
        }

        const user = await User.create({
            name, email, password
        })

        return res.json(user)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    test,
    registerUser
}
const User = require('../models/user');
const { hashPassword, comparePassword } = require('../helpers/auth')

const test = (req, res) => {
    res.json('test is working')
}
/*********************REGISTER ENDPOINT**************************/ 
const registerUser = async(req, res) => {
    try {
        const {name, email, password} = req.body;
        //isim girilmiş mi kontrol eder
        if(!name) {
            return res.json({
                error: 'Bu alan zorunludur!',
            })
        };
        //Parola güçlü mü kontrol edilir
        if(!password || password.length < 6) {
            return res.json({
                error: 'Parola en az 6 karakterden oluşmalıdır!',
            })
        };
        //Mail kontrol
        const exist = await User.findOne({email});
        if(exist) {
            return res.json({
                error: 'Bu mail adresine sahip bir kullanıcı zaten var.',
            })
        }

        const hashedPassword = await hashPassword(password)

        //veritabanında kullanıcı oluşturur
        const user = await User.create({
            name, 
            email, 
            password: hashedPassword,
        })

        return res.json(user)

    } catch (error) {
        console.log(error)
    }
}

/*********************LOGIN ENDPOINT**************************/ 
const loginUser = async(req, res) => {
    try {
        const {email, password} = req.body;
        //Kullanıcı var mı kontrol edilir
        const user = await User.findOne({email});
        if(!user){
            return res.json({
                error: 'Böyle bir kullanıcı bulunamadı :('
            })
        }

        //Parola doğru mu ontrol edilir
        const match = await comparePassword(password, user.password)
        if(match){
            //parolalar eşleşirse:
            res.json('parola doğru!')
        }
        if(!match){
            res.json({
                //Parolalar eşleşmezse:
                error: 'Parola hatalı!'
            })
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    test,
    registerUser,
    loginUser
}
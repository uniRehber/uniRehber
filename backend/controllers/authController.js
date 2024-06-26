const User = require('../models/user.js');
const { hashPassword, comparePassword } = require('../helpers/auth.js');

const test = (req, res) => {
    res.json('test is working');
};

/*********************REGISTER ENDPOINT**************************/ 
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // isim girilmiş mi kontrol eder
        if (!name) {
            return res.status(400).json({
                error: 'Bu alan zorunludur!',
            });
        }
        // Parola güçlü mü kontrol edilir
        if (!password || password.length < 6) {
            return res.status(400).json({
                error: 'Parola en az 6 karakterden oluşmalıdır!',
            });
        }
        // Mail kontrol
        const exist = await User.findOne({ email });
        if (exist) {
            return res.status(400).json({
                error: 'Bu mail adresine sahip bir kullanıcı zaten var.',
            });
        }

        const hashedPassword = await hashPassword(password);

        // veritabanında kullanıcı oluşturur
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        return res.json(user);

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Kayıt işlemi sırasında bir hata oluştu',
        });
    }
};

/*********************LOGIN ENDPOINT**************************/ 
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Kullanıcı var mı kontrol edilir
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                error: 'Böyle bir kullanıcı bulunamadı :(',
            });
        }

        // Parola doğru mu kontrol edilir
        const match = await comparePassword(password, user.password);
        if (match) {
            return res.json({ 
                message: 'Giriş başarılı', 
                user: { id: user._id, name: user.name, email: user.email } 
            });
        }

        // Parolalar eşleşmezse:
        return res.status(400).json({
            error: 'Parola hatalı!',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Giriş işlemi sırasında bir hata oluştu',
        });
    }
};



const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) {
            return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
        }
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Sunucu hatası' });
    }
};


module.exports = {
    test,
    registerUser,
    loginUser,
    getUser,
};


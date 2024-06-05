import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const registerUser = async (e) => {
        e.preventDefault();
        const { name, email, password } = data;
        try {
            const response = await axios.post('/register', { name, email, password });
            const result = response.data;
            if (result.error) { 
                toast.error(result.error);
            } else {
                setData({ name: '', email: '', password: '' });
                toast.success('Kayıt başarılı');
                navigate('/login');
            }
        } catch (error) {
            console.error('Axios request error:', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            } else if (error.request) {
                console.error('Request:', error.request);
            } else {
                console.error('Error:', error.message);
            }
            toast.error('Kayıt işlemi sırasında bir hata oluştu');
        }
    };

    return (
        <div>
            <form onSubmit={registerUser}>
                <label>İsim</label>
                <input 
                    type="text" 
                    placeholder="kullanıcı adı..." 
                    value={data.name} 
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    required
                />
                <label>Eposta</label>
                <input 
                    type="email" 
                    placeholder="eposta_adresi@mail.com..." 
                    value={data.email} 
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    required
                />
                <label>Parola</label>
                <input 
                    type="password" 
                    placeholder="parola..." 
                    value={data.password} 
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                    required
                />
                <button type="submit">Kaydol</button>
            </form>
        </div>
    );
}

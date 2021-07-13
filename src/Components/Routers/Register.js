import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { AiOutlineUser, AiOutlineUnlock, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'

//components
import Loading from '../Loading'

//api
import api from '../../Api/api';

//css
import './../../css/panel/form.css';

//img
import logo from './../../img/team-xx.png';


const Register = () => {

    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('');
    const [family, setFamily] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [message, setMessage] = useState('')

    const history = useHistory()

    const handleResponse = res => {
        setMessage(res.data.message);
        setLoading(false)
        if (res.data.success) {
            history.push('/login')
        }
    }
    const formHandeler = e => {
        e.preventDefault();
        let user = { name, family, username, password, email, mobile };
        setLoading(true)
        api.post('/', user)
            .then(response => handleResponse(response))
            .catch(err => {
                setLoading(false)
                setMessage("ارتباط با سرور برقرار نمی باشد")
            })


    }

    return (
        <div className="container register">
            <img className="logo" src={logo} alt="teamx-img" />
            <form className="text-center register-form" onSubmit={e => formHandeler(e)} >
                <AiOutlineUser className="icon" /><input className="text-right" type="text" name="name" placeholder="نام" value={name} onChange={e => setName(e.target.value)} required /><br />
                <AiOutlineUser className="icon" /><input className="text-right" type="text" name="lastname" placeholder="نام خانوادگی" value={family} onChange={e => setFamily(e.target.value)} required /><br />
                <AiOutlineUser className="icon" /><input className="text-right" type="text" name="family" placeholder="نام کاربری" value={username} onChange={e => setUsername(e.target.value)} required /><br />
                <AiOutlineUnlock className="icon" /><input className="text-right" type="password" name="password" placeholder="رمز عبور" value={password} onChange={e => setPassword(e.target.value)} required /><br />
                <AiOutlineMail className="icon" /><input className="text-right" type="text" name="email" placeholder="ایمیل" value={email} onChange={e => setEmail(e.target.value)} required /><br />
                <AiOutlinePhone className="icon" /><input className="text-right" type="text" name="mobile" placeholder="موبایل" value={mobile} onChange={e => setMobile(e.target.value)} required /><br />
                <button type="submit">ثبت نام</button>
            </form>
            { loading ? <Loading msg="در حال بررسی..." /> : <h4 id="message" className="text-center">{message}</h4>}
        </div>
    )
}

export default Register;
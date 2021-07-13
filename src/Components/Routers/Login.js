import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Cookies from 'universal-cookie';
import { AiOutlineUser, AiOutlineUnlock } from 'react-icons/ai';

//components
import Loading from '../Loading'

//api
import api from '../../Api/api';

//css
import './../../css/panel/form.css';

//img
import logo from './../../img/team-xx.png';



const Login = () => {

    const [loading, setLoading] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('')

    const history = useHistory()

    useEffect(() => {
        const cookies = new Cookies();
        let accessToken = cookies.get('authorization');
        let idToken = cookies.get('idtoken');

        if (accessToken != undefined || idToken != undefined)
            history.push('/panel')

    }, [])

    const handleResponse = res => {
        setMessage(res.data.message);
        setLoading(false)
        if (res.data.success) {
            const cookies = new Cookies();
            cookies.set('authorization', res.data.data.accessToken, { path: '/' });
            cookies.set('idtoken', res.data.data.idToken, { path: '/' });
            cookies.set('username', username, { path: '/' });
            history.push('/panel')
        }
    }

    const formHandeler = e => {
        e.preventDefault();
        let user = { username, password };
        setLoading(true)
        api.post('/login', user)
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
                <AiOutlineUser className="icon" /><input className="text-right" type="text" name="username" placeholder="نام کاربری" value={username} onChange={e => setUsername(e.target.value)} required /><br />
                <AiOutlineUnlock className="icon" /><input className="text-right" type="password" name="password" placeholder="رمز عبور" value={password} onChange={e => setPassword(e.target.value)} required /><br />
                <button type="submit">ورود</button> <br />
                <a className="login-option" href="/register">ثبت نام</a> <br />
                <a className="login-option" href="/verification-code-req"> ورود با شماره تلفن </a> <br />
            </form>
            { loading ? <Loading msg="در حال ورود..." /> : <h4 className="text-center">{message}</h4>}
        </div>
    )
}

export default Login;
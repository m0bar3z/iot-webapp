import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import Cookies from 'universal-cookie';
import { AiOutlinePhone, AiOutlineCheckCircle } from 'react-icons/ai';

//components
import Loading from '../Loading'
//api
import api from '../../Api/api';
//css
import './../../css/panel/form.css';

//img
import logo from './../../img/team-xx.png';



const VerificationCodeCheck = () => {

    const [loading, setLoading] = useState(false)
    const [mobile, setMobile] = useState('')
    const [code, setCode] = useState('')
    const [message, setMessage] = useState('')

    const history = useHistory()

    const handleResponse = res => {
        setMessage(res.data.message);
        setLoading(false)
        if (res.data.success) {
            const cookies = new Cookies();
            cookies.set('authorization', res.data.data.accessToken, { path: '/' });
            cookies.set('idtoken', res.data.data.idToken, { path: '/' });
            history.push('/penel')
        }
    }
    const formHandeler = e => {
        e.preventDefault();
        let user = { mobile, code };
        setLoading(true)
        api.post('/login/mobile/check', user)
            .then(response => handleResponse(response))
            .catch(err => {
                setMessage('ارتباط با سرور برقرار نمی باشد')
                setLoading(false)
                console.log(err)
            })


    }


    return (
        <div className="container register">
            <img className="logo" src={logo} alt="teamx-img" />
            <form className="text-center register-form" onSubmit={e => formHandeler(e)} >
                <AiOutlinePhone className="icon" /><input className="text-right" type="text" name="mobile" placeholder="موبایل"
                    value={mobile} onChange={e => setMobile(e.target.value)} required /><br />
                <AiOutlineCheckCircle className="icon" /><input className="text-right" type="text" name="code" placeholder="کد تایید"
                    value={code} onChange={e => setCode(e.target.value)} required /><br />
                <button type="submit">ورود</button>
            </form>
            { loading ? <Loading msg="در حال بررسی..." /> : <h4 className="text-center">{message}</h4>}
        </div>
    )
}

export default VerificationCodeCheck;
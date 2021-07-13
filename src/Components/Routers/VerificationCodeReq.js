import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { AiOutlinePhone } from 'react-icons/ai';

//components
import Loading from '../Loading'

//api
import api from '../../Api/api';

//css
import './../../css/panel/form.css';

//img
import logo from './../../img/team-xx.png';



const VerificationCodeReq = () => {

    const [loading, setLoading] = useState(false)
    const [mobile, setMobile] = useState('')
    const [message, setMessage] = useState('')

    const history = useHistory()

    const handleResponse = res => {
        setMessage(res.data.message);
        setLoading(false)
        if (res.data.success) {
            history.push('/verification-code-check')
        }
    }
    const formHandeler = e => {
        e.preventDefault();
        let user = { mobile };
        setLoading(true)
        api.post('/login/mobile', user)
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
                <AiOutlinePhone className="icon" /><input className="text-right" type="text" name="mobile" placeholder="موبایل" value={mobile} onChange={e => setMobile(e.target.value)} required /><br />
                <button type="submit">ورود</button>
            </form>
            { loading ? <Loading msg="در حال ارسال کد..." /> : <h4 className="text-center">{message}</h4>}
        </div>
    )
}

export default VerificationCodeReq;
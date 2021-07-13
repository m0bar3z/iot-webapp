import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import Cookies from 'universal-cookie';
import { AiOutlineUser } from 'react-icons/ai';
import { Alert } from 'react-bootstrap'

//components
import Loading from '../Loading'
//api
import api from '../../Api/api';
//css
import './../../css/panel/form.css';
//img
import logo from './../../img/team-xx.png';
import Header from '../Panel/Header';



const ShareDevice = ({ location }) => {

    const [loading, setLoading] = useState(false)
    const [username, setUsername] = useState('')
    const [message, setMessage] = useState('')

    const history = useHistory()

    const handleResponse = res => {
        setLoading(false)
        setMessage(res.data.message);

        if (res.data.success) {
            history.push('/panel')
        }
    }

    const cookies = new Cookies();

    let headers = {
        headers: {
            'Authorization': cookies.get('authorization'),
            'idToken': cookies.get('idtoken')
        }
    }

    const formHandeler = e => {
        e.preventDefault();
        let deviceId = location.state.deviceId
        console.log(location.state)
        let user = { username, deviceId };
        setLoading(true)
        api.post('/device/share', user, headers)
            .then(response => handleResponse(response))
            .catch(err => {
                setLoading(false)
                setMessage('مشکلی وجود دارد')
                //history.push('/login')
            })
    }


    return (
        <div className="panel">
            <Header />
            <div className="container register">
                <img className="logo" src={logo} alt="teamx-img" />
                <form className="text-center register-form" onSubmit={e => formHandeler(e)} >
                    <AiOutlineUser className="icon" /><input className="text-right" type="text" name="username" placeholder="نام کاربری"
                        value={username} onChange={e => setUsername(e.target.value)} required /><br />
                    <button type="submit">ارسال</button>
                </form>
                {loading ? <Loading msg="در حال اشتراک گذاری..." /> : <h4 className="text-center">{message}</h4>}
            </div>
        </div>

    )
}

export default ShareDevice;
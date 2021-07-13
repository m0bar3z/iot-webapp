import React from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useState } from 'react';

//api
import api from '../../Api/api';

//img
import logo from './../../img/team-xx.png';



const DeleteDevice = () => {

    const [username, setUsername] = useState('')
    const [deviceId, setDeviceId] = useState('')
    const [message, setMessage] = useState('')

    const history = useHistory()

    const handleResponse = res => {
        setMessage(res.data.message)
        if (res.data.success) {
            history.push('/panel')
        }
    }

    const formHandeler = e => {
        e.preventDefault();
        const cookies = new Cookies();
        let device = {
            username,
            deviceId,
        }

        let headers = {
            headers: {
                'Authorization': cookies.get('authorization'),
                'idToken': cookies.get('idtoken')
            }
        }
        api.post('/device/remove', device, headers)
            .then(res => handleResponse(res))
            .catch(err => {
                history.push('/login')
            })
    }

    return (
        <div className="container register">
            <img className="logo" src={logo} alt="teamx-img" />
            <form className="text-center register-form" onSubmit={e => formHandeler(e)} >

                <input className="text-right" type="text" name="username" placeholder="نام کاربری"
                    value={username} onChange={e => setUsername(e.target.value)} required /><br />

                <input className="text-right" type="text" name="deviceId" placeholder="آیدی دستگاه"
                    value={deviceId} onChange={e => setDeviceId(e.target.value)} required /><br />

                <button type="submit">حذف</button>
            </form>
            <p>{message}</p>
        </div>
    );

}

export default DeleteDevice;

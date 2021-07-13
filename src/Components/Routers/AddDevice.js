import React from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useState } from 'react';

//components
import Loading from '../Loading'
//api
import api from '../../Api/api';
//img
import logo from './../../img/team-xx.png';
import Header from '../Panel/Header';



const AddDevice = () => {

    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [macId, setMacId] = useState('')
    const [relay, setRelay] = useState('')
    const [message, setMessage] = useState('')

    const history = useHistory()

    const handleResponse = res => {
        setMessage(res.data.message)
        setLoading(false)
        if (res.data.success) {
            history.push('/panel')
        }
    }

    const formHandeler = e => {
        e.preventDefault();
        const cookies = new Cookies();
        let device = {
            name,
            macId,
            relay,
        }

        let headers = {
            headers: {
                'Authorization': cookies.get('authorization'),
                'idToken': cookies.get('idtoken')
            }
        }
        setLoading(true)
        api.post('/device', device, headers)
            .then(res => handleResponse(res))
            .catch(err => {
                setLoading(false)
                setMessage('ارتباط با سرور برقرار نمیباشد')
                //history.push('/login')
            })
    }

    return (
        <div className="panel">
            <Header />
            <div className="container register">
                <img className="logo" src={logo} alt="teamx-img" />
                <form className="text-center register-form" onSubmit={e => formHandeler(e)} >

                    <input className="text-right" type="text" name="name" placeholder="نام"
                        value={name} onChange={e => setName(e.target.value)} required /><br />

                    <input className="text-right" type="text" name="macId" placeholder="مک آیدی"
                        value={macId} onChange={e => setMacId(e.target.value)} required /><br />

                    <input className="text-right" type="text" name="relay" placeholder="تعداد رله"
                        value={relay} onChange={e => setRelay(e.target.value)} required /><br />

                    <button type="submit">ثبت</button>
                </form>
                {loading ? <Loading msg="در حال اضافه کردن..." /> : <h4 className="text-center mt-4">{message}</h4>}
            </div>
        </div>
    );

}

export default AddDevice;

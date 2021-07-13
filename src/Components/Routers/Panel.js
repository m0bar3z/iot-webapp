import { NavLink, useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { Card, Col, Row, Button, Container } from 'react-bootstrap'
import { deviceActions } from '../../actions'

//components
import DeviceList from '../Panel/DeviceList';
import Loading from '../Loading'
import DeviceCard from '../Panel/DeviceCard'

//api
import api from '../../Api/api';
import Header from '../Panel/Header';



const Panel = () => {

    const [loading, setLoading] = useState(false)
    const [devices, setDevices] = useState([])
    const [message, setMessage] = useState('')
    const history = useHistory();
    const dispatch = useDispatch()

    const logout = () => {
        const cookies = new Cookies();
        cookies.remove('authorization');
        cookies.remove('idtoken');
        history.push('/login')
    }

    const handleResponse = res => {
        setLoading(false)
        if (res.data.success) {
            dispatch(deviceActions.addDevices(res.data.data))
            setDevices(res.data.data)
        } else {
            //history.push('/login')
            setMessage(res.data.message)
        }
    }

    const callAPI = () => {
        const cookies = new Cookies();
        let accessToken = cookies.get('authorization');
        let idToken = cookies.get('idtoken');

        let user = {
            headers: {
                'Authorization': accessToken,
                'idToken': idToken
            }
        }
        setLoading(true)
        api.get('/device', user)
            .then(res => handleResponse(res))
            .catch(err => {
                history.push('/login')
                setLoading(false)
                setMessage('ارتباط با سرور برقرار نمی باشد')
                if (err.request.status === 403)
                    logout()
                console.log(err.request.status)
            })
    }

    useEffect(() => {
        callAPI();
    }, [])

    return (
        <div className="panel">
            <Header />

            <Container>
                <DeviceCard />
                {loading ? <Loading msg="در حال بارگذاری..." /> : <h4 className="mt-5 text-center">{message}</h4>}
                {
                    devices.length ? <DeviceList /> : null
                }
            </Container>
        </div >
    );

}

export default Panel;

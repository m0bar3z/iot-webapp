import React from 'react';
import Cookies from 'universal-cookie';
import { useState } from 'react';
import { AiOutlineDown, AiOutlineShareAlt, AiOutlineDelete } from 'react-icons/ai';

//components
import RelayLoading from '../RelayLoading'
//api
import api from '../../Api/api';
import { useHistory } from 'react-router';
//css
import './../../css/panel/switch.css'


const Device = ({ device }) => {

    const [loading, setLoading] = useState(false)
    const [relays, setRelays] = useState(device.relay)
    const [show, setShow] = useState(false)
    const history = useHistory()

    const handleResponse = (res, no) => {
        setLoading(false)
        let relay = { no: no, status: !relays[no - 1].status };

        let newRelays = relays.filter(relay => relay.no !== no)
        newRelays = [...newRelays, relay]
        newRelays.sort((a, b) => a.no - b.no)
        if (res.data.success) {
            setRelays(newRelays)
        }

    }

    const handleChange = no => {
        const cookies = new Cookies();
        let data = {
            name: device.name,
            deviceId: device._id,
            relayNumber: no
        }

        let headers = {
            headers: {
                'Authorization': cookies.get('authorization'),
                'idToken': cookies.get('idtoken')
            }
        }
        setLoading(true)
        api.put('device/relay', data, headers)
            .then(res => handleResponse(res, no))
            .catch(err => console.log(err))
    }

    const shareDevice = e => {
        let state = {
            deviceId: device._id
        }

        history.push('/share-device', state)
    }

    const deleteDevice = e => {
        // e.preventDefault()
        const cookies = new Cookies();
        let data = {
            username: cookies.get('username'),
            deviceId: device._id
        }
        let headers = {
            headers: {
                'Authorization': cookies.get('authorization'),
                'idToken': cookies.get('idtoken')
            }
        }
        api.post('/device/remove', data, headers)
            .then(res => window.location.reload(false))
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h4 className="device-title" onClick={e => setShow(!show)}>{device.name}</h4>
            <AiOutlineShareAlt className="share-icon" onClick={e => shareDevice(e)} />
            <AiOutlineDelete className="share-icon" onClick={e => deleteDevice(e)} /><br />
            <AiOutlineDown className="down-icon" onClick={e => setShow(!show)} />
            { loading ? <RelayLoading /> : null}
            {
                show ? (
                    <div className="row text-center relays">
                        {
                            relays ? relays.map((relay, index) => {
                                return (<div key={index} className="text-center col-sm-3">
                                    <p className="col-sm-1 relay-label" >{relay.no}</p>
                                    <label className="col-sm-2 checker">
                                        <input className="checkbox" type="checkbox" checked={relay.status} onChange={e => handleChange(relay.no)} />
                                        <div className="check-bg"></div>
                                        <div className="checkmark">
                                            <svg viewBox="0 0 100 100">
                                                <path d="M20,55 L40,75 L77,27" fill="none" stroke="#FFF" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </label>
                                </div>
                                )
                            }) : null
                        }
                    </div>) : null
            }

        </div>
    );

}

export default Device;

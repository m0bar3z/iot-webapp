import { Button, Spinner } from 'react-bootstrap'
import { useState } from 'react'
import { deviceActions } from '../../../actions'
import { useDispatch } from 'react-redux'
import Cookies from 'universal-cookie';
import { AiTwotonePropertySafety } from 'react-icons/ai';

//api
import api from '../../../Api/api'


function RelayButton(props) {

    const [loading, setLoading] = useState(false)
    const [relayStatus, setRelayStatus] = useState(props.relay.status)
    const dispatch = useDispatch()

    const handleResponse = (res, no, id) => {
        setLoading(false)
        if (res.data.success) {
            dispatch(deviceActions.updateDeviceRelay(no, id))
            setRelayStatus(!relayStatus)
        }
    }

    let handleChange = () => {

        const cookies = new Cookies();
        let data = {
            name: props.name,
            deviceId: props.id,
            relayNumber: props.relay.no
        }

        let headers = {
            headers: {
                'Authorization': cookies.get('authorization'),
                'idToken': cookies.get('idtoken')
            }
        }
        setLoading(true)
        api.put('device/relay', data, headers)
            .then(res => handleResponse(res, props.relay.no, props.id))
            .catch(err => console.log(err))
    }

    return (
        <>
            <Button
                variant={`${relayStatus ? 'success' : 'danger'}`}
                onClick={() => handleChange()}
                className={`${loading ? 'd-none' : ''} w-25 px-4 mx-4 my-2`}
            >
                شماره   {props.relay.no}
            </Button>
            <Button
                variant="primary"
                className={`${loading ? '' : 'd-none'} w-25 px-4 mx-4 my-2`}
                disabled
            >
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                <span></span>
            </Button>
        </>
    )
}

export default RelayButton;
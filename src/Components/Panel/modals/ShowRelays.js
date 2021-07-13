import { useState, useEffect } from 'react'
import { Modal, Button, Form, Spinner } from 'react-bootstrap'
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'

//components
import RelayButton from './RelayButton'

function ShowRelays(props) {

    const [relays, setRelays] = useState([])
    const [device, setDevice] = useState({})
    const [message, setMessage] = useState('')
    const history = useHistory();
    //////////////////////////////////////////

    let reduxDevices = useSelector(state => state.devicesReducer.devices)
    let findDevice = () => {
        let device = reduxDevices.find(item => item._id === props.id)
        setDevice(device)
        setRelays(device.relay)
    }

    //////////////////////////////////////////

    useEffect(() => {
        if (props.show) {
            findDevice()
        }
    }, [props.show])

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {device.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    relays.map((relay, index) => {
                        return <RelayButton key={index} relay={relay} name={device.name} id={device._id} />
                    }
                    )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={props.onHide}>بستن</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ShowRelays
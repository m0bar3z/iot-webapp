import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Cookies from 'universal-cookie';
import { Modal, Button, Form, Row, Col, Spinner } from 'react-bootstrap'

//api
import api from '../../../Api/api'

function ShareDevice(props) {

    const [username, setUsername] = useState('')
    const [device, setDevice] = useState({})
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    let reduxDevices = useSelector(state => state.devicesReducer.devices)
    let findDevice = () => {
        let device = reduxDevices.find(item => item._id === props.id)
        setDevice(device)
    }

    let handleResponse = res => {
        console.log('this is response')
        console.log(res)
    }

    let formHandler = (e) => {
        e.preventDefault()
        const cookies = new Cookies();
        let accessToken = cookies.get('authorization');
        let idToken = cookies.get('idtoken');

        let headers = {
            headers: {
                'Authorization': cookies.get('authorization'),
                'idToken': cookies.get('idtoken')
            }
        }

        let user = { username }

        setLoading(true)
        api.post('/device/share', user, headers)
            .then(res => handleResponse(res))
            .catch(err => {
                setLoading(false)
                setMessage('ارتباط با سرور برقرار نمیباشد')
            })
    }

    useEffect(() => {
        if (props.show)
            findDevice()
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
                    اشتراک گذاری دستگاه {device.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <span>
                    نام کاربری مورد نظر خود را وارد کنید:
                </span>
                <Form onSubmit={e => formHandler(e)}>
                    <Row className="ms-4 my-1">

                        <Col lg={6} md={6} sm={6} xs={6} >
                            <Form.Control
                                type="text"
                                placeholder="نام کاربری"
                                name="username"
                                onChange={e => setUsername(e.target.value)}
                                disabled={loading ? true : false}
                            />
                        </Col>

                        <Col lg={6} md={6} sm={6} xs={6}>
                            <Button
                                variant="success"
                                className={`${loading ? 'd-none' : ''}`}
                                type="submit"
                            >
                                اشتراک گذاری
                            </Button>

                            <Button
                                variant="success"
                                className={`${loading ? '' : 'd-none'}`}
                                disabled
                            >
                                <span className="sr-only">در حال بررسی ... </span>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                            </Button>
                        </Col>

                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={props.onHide}>بستن</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ShareDevice
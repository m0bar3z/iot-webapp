import { useState, useEffect } from 'react'
import { Modal, Button, Form, Spinner, Table } from 'react-bootstrap'
import { NavLink, useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';
import api from '../../../Api/api'
import { AiOutlineDelete } from 'react-icons/ai'

//components
import RelayButton from './RelayButton'

function ShowUsers(props) {

    const [loading, setLoading] = useState(false)
    const [device, setDevice] = useState(props.device)
    const [message, setMessage] = useState('')
    const history = useHistory();

    const removeUser = username => {
        console.log("remove")
        const cookies = new Cookies();
        let data = {
            username: username,
            deviceId: device._id
        }
        let headers = {
            headers : {
                'Authorization' : cookies.get('authorization') ,
                'idToken' : cookies.get('idtoken')
            }
        }
        setLoading(true)
        api.post('/device/stopShare', data, headers)
            .then(res => {
                // window.location.reload(false)
                console.log(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.device.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               {
                   device.user.length
                   ? <Table responsive striped bordered hover size="lg" className="border border-dark">
                       <thead>
                           <tr>
                           <th></th>
                           <th>نام</th>
                           <th>نام خانوادگی</th>
                           <th>نام کاربری</th>
                           <th>ویرایش</th>
                           </tr>
                       </thead>
                       <tbody>
                       {
                           device.user.map((user, index) => 
                                <tr key={index} className="user">
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.family}</td>
                                    <td>{user.username}</td>
                                    <td>
                                        <Button 
                                            className={`${loading ? 'd-none' : ''} delete-icon btn btn-success`} onClick={e => removeUser(user.username)}>
                                                حذف <AiOutlineDelete />                            
                                        </Button>
                                        <Button
                                            className={`${loading ? '' : 'd-none'} delete-icon btn btn-success`}
                                            disabled>
                                            <Spinner
                                                as="span"
                                                animation="border"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                            <span></span>
                                        </Button>
                                    </td>
                                </tr>
                            )
                       }
                       </tbody>
                       </Table>
                   : <p>این دستگاه با هیچ کاربر دیگری به اشتراک گذاشته نشده است</p>
               }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={props.onHide}>بستن</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ShowUsers
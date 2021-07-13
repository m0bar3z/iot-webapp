import React from 'react';
import { Table, Button, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'

//components
import Device from './Device';
import Device2 from './Device2'

//css
import './../../css/panel/panel.css';



const DeviceList = () => {

    let devices = useSelector(state => state.devicesReducer.devices)

    return (
        <Table striped bordered hover className="text-center border border-dark">
            <thead>
                <tr>
                    <th>نام دستگاه</th>
                    <th>اقدامات</th>
                </tr>
            </thead>
            <tbody>
                {
                    devices.map((device, index) => <Device2 key={index} device={device} />)
                }
            </tbody>
        </Table>
        // <div className="container register">
        //     <form className="text-center register-form" >
        //         {
        //             devices.map((device, index) => <div key={index} className="device" ><Device device={device} /><br /><hr /></div>)
        //         }
        //     </form>
        // </div>
    );

}

export default DeviceList;

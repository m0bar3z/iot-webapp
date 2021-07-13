import React from 'react';
import { Table, Button, Form } from 'react-bootstrap'

//components
import Device from './Device'

//css
import '../../../css/panel/panel.css';



const DeviceList = ({ devices }) => {
    return (
        <Table striped bordered hover className="text-center border border-dark">
            <thead>
                <tr>
                    <th className="col-3">نام دستگاه</th>
                    <th>اقدامات</th>
                </tr>
            </thead>
            <tbody>
                {
                    devices.map((device, index) => <Device key={index} device={device} />)
                }
            </tbody>
        </Table>
    );

}

export default DeviceList;

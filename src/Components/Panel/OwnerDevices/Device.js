import { Button, Row, Col } from 'react-bootstrap'
import { useState } from 'react'

//modals components
import ShowUsers from '../modals/ShowUsers'

function Device({ device }) {

    const [userShow, setUserShow] = useState(false)
    return (
        <>
            <tr className="">
                <td className="h5">{device.name}</td>
                <td>
                    <Row>
                        <Col>
                            <Button className="mx-4" variant="success" onClick={() => setUserShow(true)} >مشاهده کاربر ها</Button>
                        </Col>
                    </Row>
                </td>
            </tr>

            <ShowUsers show={userShow} device={device} onHide={() => setUserShow(false)} />

        </>
    )
}

export default Device
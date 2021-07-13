import { Button, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

//modals components
import ShowRelays from './modals/ShowRelays'
import ShareDevice from './modals/ShareDevice'

function Device2({ device }) {

    const [relayShow, setRelayShow] = useState(false)
    const [shareModal, setShareModal] = useState(false)


    return (
        <>
            <tr className="">
                <td className="h5">{device.name}</td>
                <td>
                    <Row>
                        <Col>
                            <Button className="mx-4" variant="success" onClick={() => setRelayShow(true)} >مشاهده کلید ها</Button>
                        </Col>
                        <Col>
                            <Button className="mx-4" variant="primary" onClick={() => setShareModal(true)} >اشتراک گذاری</Button>
                        </Col>
                        <Col>
                            <Button className="mx-4" variant="danger" >حذف اشتراک</Button>
                        </Col>
                        <Col>
                            <Button className="mx-4" variant="dark" >غیر فعال کردن</Button>
                        </Col>
                    </Row>
                </td>
            </tr>

            <ShowRelays show={relayShow} id={device._id} onHide={() => setRelayShow(false)} />
            <ShareDevice show={shareModal} id={device._id} onHide={() => setShareModal(false)} />

        </>
    )
}

export default Device2
import { Card, Button, Col, Row , ListGroup , ListGroupItem } from 'react-bootstrap'
import { useState } from 'react' 
import {AiOutlineSearch} from 'react-icons/ai'

//css
import './../../../css/panel/owner-devices.css'


function DeviceCard(props) {

    let {ownerDevices, search, searchInput} = props

    return (
        <Card className="text-center mt-5 m-auto border border-dark">
            <Card.Header className="h3">دستگاه های شما</Card.Header>
            <ListGroup className="list-group-flush">
                <ListGroupItem>
                    <Row>
                        <Col>
                            <Card.Title>تعداد دستگاه های شما</Card.Title>
                            <Card.Text className="h4">
                                {ownerDevices.length}
                            </Card.Text>
                        </Col>
                        <Col>
                            <Card.Title>تعداد دستگاه های فعال شما</Card.Title>
                            <Card.Text className="h4">
                                {ownerDevices.filter(device => device.active).length}
                            </Card.Text>
                        </Col>
                    </Row>
                </ListGroupItem>
                <ListGroupItem>
                    <div>
                        <input type="search" placeholder="جستجو" value={searchInput} onChange={e => search(e)} className="search-input" />
                    </div> 
                </ListGroupItem>
            </ListGroup>
        </Card>

    )
}

export default DeviceCard
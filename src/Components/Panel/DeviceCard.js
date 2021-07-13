import { Card, Button, Col, Row } from 'react-bootstrap'


function DeviceCard() {
    return (
        <Card className="text-center mt-5 m-auto border border-dark">
            <Card.Header className="h3">دستگاه ها</Card.Header>
            <Card.Body>
                <Row>
                    <Col>
                        <Card.Title>تعداد دستگاه های شما</Card.Title>
                        <Card.Text className="h3">
                            5
                                </Card.Text>
                    </Col>
                    <Col>
                        <Card.Title>تعداد کل دستگاه ها</Card.Title>
                        <Card.Text className="h3">
                            8
                                </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer className="text-muted">
                <Button href="/owner-devices">مشاهده و بررسی دستگاه های شما</Button>
            </Card.Footer>
        </Card>

    )
}

export default DeviceCard
import { Spinner } from 'react-bootstrap'

function RelayLoading() {
    return (
        <>
            <Spinner className="d-block m-auto" animation="border" variant="success" role="status" />
        </>
    )
}

export default RelayLoading
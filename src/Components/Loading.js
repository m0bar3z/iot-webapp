import { Spinner } from 'react-bootstrap'

function Loading(props) {
    return (
        <>
            <Spinner className="d-block m-auto mt-5 p-4" animation="border" role="status" />
            <h3 className="text-center mt-5">
                {props.msg}
            </h3>
        </>
    )
}

export default Loading
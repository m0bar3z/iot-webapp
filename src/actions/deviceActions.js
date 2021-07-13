// import constants
import { actionTypes } from '../constants/'


const addDevices = devices => {
    return {
        type: actionTypes.ADD_DEVICES,
        devices
    }
}

const updateDeviceRelay = (no, id) => {
    return {
        type: actionTypes.UPDATE_DEVICE_RELAY,
        no,
        id
    }
}

export const deviceActions = {
    addDevices, updateDeviceRelay
}

import { noAuto } from '@fortawesome/fontawesome-svg-core'
import { actionTypes } from '../constants/'

const devicesReducer = (state = [], action) => {
    console.log(action)
    console.log(state)
    switch (action.type) {
        case actionTypes.ADD_DEVICES:
            return addDevices(state, action.devices)
        case actionTypes.UPDATE_DEVICE_RELAY:
            return updateRelays(state, action.no, action.id)
        default:
            return state;
    }
}

export default devicesReducer

let addDevices = (state, devices) => {
    return {
        ...state,
        devices
    }
}

let updateRelays = (state, no, id) => {
    console.log('updateRelay')
    state.devices.map(device => {
        if (device._id === id) {
            device.relay[no - 1].status = !device.relay[no - 1].status
        }
    })

    return {
        ...state
    }
}
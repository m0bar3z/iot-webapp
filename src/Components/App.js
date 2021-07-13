import React from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import '../css/home/home.css'
import 'bootstrap/dist/css/bootstrap.css';


//components
import Home from './home/Home';
import Register from './Routers/Register';
import Login from './Routers/Login';
import VerificationCodeReq from './Routers/VerificationCodeReq';
import VerificationCodeCheck from './Routers/VerificationCodeCheck';
import AddDevice from './Routers/AddDevice';
import Panel from './Routers/Panel';
import ShareDevice from './Routers/ShareDevice'
import DeleteDevice from './Routers/DeleteDevice';
import OwnerDevices from './Routers/OwnerDevices';


class App extends React.Component{
    render(){
        return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/verification-code-req" component={VerificationCodeReq} />
                <Route path="/verification-code-check" component={VerificationCodeCheck} />
                <Route path="/panel" component={Panel} />
                <Route path="/add-device" component={AddDevice} />
                <Route path="/share-device" component={ShareDevice} />
                <Route path="/delete-device" component={DeleteDevice} />
                <Route path="/owner-devices" component={OwnerDevices} />

            </Switch>

        </BrowserRouter>
        )
    }
}

export default App;
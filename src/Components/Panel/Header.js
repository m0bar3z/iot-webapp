import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import Cookies from 'universal-cookie';


const Header = () => {

    const history = useHistory()

    const logout = e => {
        e.preventDefault()
        const cookies = new Cookies();
        cookies.remove('authorization');
        cookies.remove('idtoken');
        console.log(cookies.get('authorization'))
        history.push('/login')
    }

    return (
        <header>
            <nav className="navbar-light bg-light navbar-expand-md shadow-sm">
                <div className="container d-flex justify-content-between">

                    <a href="/owner-devices" className="navbar-brand d-flex align-items-center">
                        دستگاه ها
                    </a>
                    <ul className="navbar-nav mr-auto" >
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/add-device"><button className="mybtn"><AiOutlinePlus /></button></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#"><button className="mybtn" onClick={e => logout(e)}>خروج</button></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/panel"><button className="mybtn">پنل</button></NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );

}

export default Header;

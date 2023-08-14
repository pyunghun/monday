import all from '../css/all.css';
import {NavLink} from 'react-router-dom';

function Navbar() {

    const activeStyle = {
        backgroundColor: "whitesmoke"
    }

    return(
        <div className="navbar">
            <div className="area" id="text"><NavLink to="main" style={({isActive} ) => isActive? activeStyle: undefined}><a id="a">Home</a></NavLink></div>
            <div className="area" id="text"><NavLink to="loginpage" style={({isActive}) => isActive? activeStyle: undefined}><a id="a">LogIn</a></NavLink></div>
            <div className="area" id="text"><NavLink to="searchpage" style={({isActive}) => isActive? activeStyle: undefined}><a id="a">장소검색</a></NavLink></div>
            <div className="area" id="text"><NavLink to="map" style={({isActive}) => isActive? activeStyle: undefined}><a id="a">위치검색</a></NavLink></div>
        </div>
    );
}

export default Navbar;
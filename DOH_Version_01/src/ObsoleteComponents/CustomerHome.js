import React from "react";
import mystore from "../Components/Strore";
import { useNavigate } from "react-router-dom";
function CustomerHome11() 
{
    let navigate = useNavigate();
    const logout=()=>{
        mystore.dispatch({type:'LOGGEDOUT'});
        localStorage.removeItem("loggedinuser");
        navigate('/login');
    }
        return (
            <div>
                {/*<h1>Welcome { JSON.parse(localStorage.getItem("loggedinuser")).user_id.first_name}</h1>*/}
                <h1>Welcome Admin</h1>
                <ul>
                    <li><a href="#">Book Ride</a></li>
                    <li><a href="/" onClick={logout}>Logout</a></li>
                </ul>
            </div>
        );
    
}
export default CustomerHome11;
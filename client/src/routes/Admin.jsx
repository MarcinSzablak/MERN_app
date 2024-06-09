import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './Admin.css'

import { useState, useEffect } from 'react';
import { Alert, Button } from 'bootstrap';
import { useCookies } from 'react-cookie';
import { fetchData } from '../components/serversConectionHelpers/serverFunctions';

function Admin() {
  const [admins, setAdmins] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [cookie, setCookie, removeCookie] = useCookies(["admin"]);

  const checkLogin = () =>{
    fetchData(setAdmins, "http://localhost:8080/api/GetAdmins")
    admins.forEach( admin => {
      if(name != admin.name || password != admin.password){
        return
      }
      else{
        setCookie("admin", {"id":admin.id, "name":name, "password":password},{ path:"/" })
        window.open("/AdminPanel","_self")
        return
      }
    })
  }

  return (
    <>
      <NavBar></NavBar>
      <div style={{paddingTop:'56px'}}></div>
      <div className='admin-main'>
        <div className='admin-content-box'>
          <h1>Zaloguj się</h1>
          <div className='admin-input'>
            <label>Nazwa:</label>
            <input type='text' placeholder='admin' onChange={ e => setName(e.target.value)}></input>
            <label>Hasło:</label>
            <input type='password' placeholder='admin' onChange={ e => setPassword(e.target.value)}></input>
            <button onClick={ () => checkLogin()}>Zaloguj</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Admin
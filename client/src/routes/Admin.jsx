import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './Admin.css'

import { useState, useEffect } from 'react';
import { Alert, Button } from 'bootstrap';
import { useCookies } from 'react-cookie';

function Admin() {
  const [admins, setAdmins] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [cookie, setCookie, removeCookie] = useCookies(["admin"]);


  const fetchData = async () => {
    try{
        const res = await fetch("http://localhost:8080/api/GetAdmins", {method: "GET"});
        if(!res.ok){
            throw new Error(`network response was not ok: ${res.status}`)
        }

        const data = await res.json();
        setAdmins(data);

    }catch(err){
        console.log("error: ", err);
    }
  }

  const checkLogin = () =>{
    fetchData()
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
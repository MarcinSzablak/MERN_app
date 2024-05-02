import { useState } from 'react';
import './TestUser.css'


function TestUser() {
    const [usersList, setUsersList] = useState([]);

    const fetchData = async () => {
        try{
            const res = await fetch("http://localhost:8080/api/Cienkie", {method: "GET"});
            if(!res.ok){
                throw new Error(`network response was not ok: ${res.status}`)
            }

            const data = await res.json();
            await setUsersList(data)
            console.log(usersList)

        }catch(err){
            console.log("error: ", err);
        }
    }

    return (
        <>
            <h1>Lista Użytkowników</h1>
            <h2>Users:</h2>
            <button onClick={fetchData}>pobierz dane</button>
            <ul style={{listStyle:'none'}}>
                {
                    usersList.map((user)=>{
                        return(
                            <p>user</p>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default TestUser;
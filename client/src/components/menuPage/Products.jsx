import "./Products.css";
import { useState, useEffect } from 'react';


function Products(){
    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        fetchData()
    },[]);

    const fetchData = async () => {
        try{
            const res = await fetch("http://localhost:8080/api/Cienkie", {method: "GET"});
            if(!res.ok){
                throw new Error(`network response was not ok: ${res.status}`)
            }
  
            const data = await res.json();
            setProductsList(data);
            console.log(productsList);
  
        }catch(err){
            console.log("error: ", err);
        }
    }

    return(
        <>
        da
        </>
    )
}

export default Products;
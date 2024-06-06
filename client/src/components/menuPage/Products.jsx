import "./Products.css";
import { useState, useEffect } from 'react';


function Products(){
    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        fetchData()
    },[]);

    const fetchData = async () => {
        try{
            const res = await fetch("http://localhost:8080/api/Kebabs", {method: "GET"});
            if(!res.ok){
                throw new Error(`network response was not ok: ${res.status}`)
            }

            const data = await res.json();
            setProductsList(data);

        }catch(err){
            console.log("error: ", err);
        }
    }

    return(
        <div className="product-list">
            {
                productsList.map((product)=>{
                    return(
                        <div className="product-list-component">
                            <img src="http://localhost:8080/images/kebab_to_database.png"/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products;
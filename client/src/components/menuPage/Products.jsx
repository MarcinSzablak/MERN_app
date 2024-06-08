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

    const deleteData = async (id) =>{
        try{
            const res = await fetch(`http://localhost:8080/api/Kebabs/${id}`, {method: "DELETE"})
            if(!res.ok){
                throw new Error(`network response was not ok: ${res.status}`)
            }
        }catch(err){
            console.log("error: ", err);
        }
        fetchData()
    }

    return(
        <div className="product-list">
            {
                productsList.map((product)=>{
                    return(
                        <div key={product.id} className="product-list-component">
                            <div className="product-info">
                                <p>id: {product.id}</p>
                                <p>wCzym: {product.wCzym}</p>
                                <p>mieso: {product.mieso}</p>
                                <p>sos: {product.sos}</p>
                                <p>dodatki: {product.dodatki}</p>
                                <p>cena: {product.cena}</p>
                                <p>rozmiar: {product.rozmiar}</p>
                                <p>popularnosc: {product.popularnosc}</p>
                                <p>img: {product.img}</p>
                                <button onClick={ () => deleteData(product.id)}>usuń</button>
                            </div>
                            <img src="http://localhost:8080/images/kebab_to_database.png"/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products;
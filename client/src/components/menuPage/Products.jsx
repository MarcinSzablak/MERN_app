import "./Products.css";
import { useState, useEffect } from 'react';
import { fetchData, deleteData, modifyOneData } from "../serversConectionHelpers/serverFunctions";

function Products(){
    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        fetchData(setProductsList, "http://localhost:8080/api/Kebabs")
    },[]);


    return(
        <div className="product-list">
            {
                productsList.map((product)=>{
                    return(
                        <div key={product.id} className="product-list-component">
                            <div className="product-info">
                                <p>id: <input type="Number" defaultValue={product.id}></input></p>
                                <p>wCzym: <input defaultValue={product.wCzym}></input></p>
                                <p>mieso: <input defaultValue={product.mieso}></input></p>
                                <p>sos: <input defaultValue={product.sos}></input></p>
                                <p>dodatki: <input defaultValue={product.dodatki}></input></p>
                                <p>cena: <input type="Number" defaultValue={product.cena}></input></p>
                                <p>rozmiar: <input defaultValue={product.rozmiar}></input></p>
                                <p>popularnosc: <input defaultValue={product.popularnosc}></input></p>
                                <p>img: {product.img}</p>
                                <button onClick={ () => deleteData(product.id, setProductsList)}>usuń</button>
                                <button onClick={ () => modifyOneData(product, setProductsList)}>zapisz</button>
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
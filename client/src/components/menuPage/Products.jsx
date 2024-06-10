import "./Products.css";
import { useState, useEffect } from 'react';
import { fetchData, deleteData, modifyOneData } from "../serversConectionHelpers/serverFunctions";

function Products(){
    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        fetchData(setProductsList, "http://localhost:8080/api/Kebabs")
    },[]);

    const modifyObject = (object) =>{
        console.log(object)
        //modifyOneData(object)
        //window.location.reload();
    }

    return(
        <div className="product-list">
            {
                productsList.map((product)=>{
                    return(
                        <div key={product._id} className="product-list-component">
                            <div className="product-info">
                                <p>id: <input type="Number" defaultValue={product.id} onChange={ e => product.id = e.target.value} min={1}></input></p>
                                <p>wCzym: <input defaultValue={product.wCzym} onChange={ e => product.wCzym = e.target.value}></input></p>
                                <p>mieso: <input defaultValue={product.mieso} onChange={ e => product.mieso = e.target.value}></input></p>
                                <p>sos: <input defaultValue={product.sos} onChange={ e => product.sos = e.target.value}></input></p>
                                <p>dodatki: {product.dodatki}</p>
                                <p>cena: <input type="Number" defaultValue={product.cena} onChange={ e => product.cena = e.target.value}></input></p>
                                <p>rozmiar: <input defaultValue={product.rozmiar} onChange={ e => product.rozmiar = e.target.value}></input></p>
                                <p>popularnosc: <input type="Number" defaultValue={product.popularnosc} onChange={ e => product.popularnosc = e.target.value}></input></p>
                                <p>img: {product.img}</p>
                                <button onClick={ () => 
                                    {
                                        deleteData(product.id)
                                        fetchData(setProductsList, "http://localhost:8080/api/Kebabs")
                                    }}>usuń</button>
                                <button onClick={ () => modifyObject(product)}>zapisz</button>
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
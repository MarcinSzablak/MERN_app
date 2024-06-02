import './TopDishes.css';
import { useState, useEffect } from 'react';

function TopDishes() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
      fetchData()
  },[]);

  const fetchData = async () => {
      try{
          const res = await fetch("http://localhost:8080/api/TopKebabs", {method: "GET"});
          if(!res.ok){
              throw new Error(`network response was not ok: ${res.status}`)
          }

          const data = await res.json();
          setProductsList(data);

      }catch(err){
          console.log("error: ", err);
      }
  }

  return (
    <div className='top-dishes-main'>
        <h2>Poznaj nasze <b><i>Topowe Kebaby</i></b></h2>
        <div className='top-dishes-box'>
        {
          productsList.map( (product) =>{
            return(
              <div key={product.id} className='dish-box'>
                <div className='dish-box-text'>
                  <p>w czym: {product.wCzym}</p>
                  <p>mięso: {product.mieso}</p>
                  <p>sos: {product.sos}</p>
                  <p>rozmiar: {product.rozmiar}</p>
                  <p>cena: {product.cena}zł</p>
                </div>
                <img src={"http://localhost:8080/images/"+product.img} />
              </div>
            )
          })
        }
        </div>
    </div>
  )
}

export default TopDishes;
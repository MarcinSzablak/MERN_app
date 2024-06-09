const fetchData = async (setData, link) => {

    try{
        const res = await fetch(link, {method: "GET"});
        if(!res.ok){
            throw new Error(`network response was not ok: ${res.status}`)
        }

        const data = await res.json();
        setData(data);

    }catch(err){
        console.log("error: ", err);
    }
}

const deleteData = async (id, setData) =>{
    try{
        const res = await fetch(`http://localhost:8080/api/Kebabs/${id}`, {method: "DELETE"})
        if(!res.ok){
            throw new Error(`network response was not ok: ${res.status}`)
        }
    }catch(err){
        console.log("error: ", err);
    }
    fetchData(setData)
}

const modifyOneData = async (object, setData) =>{
    try{
        const res = await fetch(`http://localhost:8080/api/Kebabs/${object.id}`, {method: "PATH", body: JSON.stringify(object)})
        if(!res.ok){
            throw new Error(`network response was not ok: ${res.status}`)
        }
    }catch(err){
        console.log("error: ", err);
    }
    fetchData(setData)
}

export { fetchData, deleteData, modifyOneData }
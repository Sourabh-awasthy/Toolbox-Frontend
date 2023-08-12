import React, { useState,useEffect } from "react";
import NewItem from "./newItem";
import { Link } from "react-router-dom";

function List() {
  const [inputText, setInput] = useState("");
  const [items, setItems] = useState([]);
  const jwttoken= localStorage.getItem("jwttoken");

  function handleChange(event) {
    const newEntry = event.target.value;
    setInput(newEntry);
  }

  const addEntry=async(e)=> {

    e.preventDefault();
   
    
    const res =await fetch("https://mern-backend-2w8y.onrender.com/add",{
      method:"POST",
      headers:{
          "Content-Type":"application/json"
      },
      withCredentials:true,
      body:JSON.stringify({
        inputText,jwttoken
      })
    })
   
  setInput("");
  location.reload();
  }

  const callAbout = async () => {
    try {

      const res= await fetch("https://mern-backend-2w8y.onrender.com/call",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true,
        body:JSON.stringify({
          jwttoken: jwttoken
        })
      });
      const data = await res.json()
      console.log(data);
      if(res.status===401 || !data){
        console.log("error data not found")
      }
      else{
        setItems(data)
        
      }
 
    }
    catch(err){
      console.log(err);
    }
  };

  useEffect(() => {
    callAbout();
  }, []);

  const  deleteItem= async (index)=> {
    const id = items[index]._id;
    const res= await fetch(`https://mern-backend-2w8y.onrender.com/delete/${id}`,{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true,
        body:JSON.stringify({
          id,jwttoken
        })
      });
      const data = await res.json();
      if(!data || res.status===404){
        console.log("error data not found")
      }
      else{
        const updatedItems = items.filter((item, index) => index !== id);
        setItems(updatedItems);
        location.reload();
      }

  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText} placeholder="Add your Tasks" />
        <button onClick={addEntry}>
          <span>Add</span>
        </button>
      </div>
      <div>
      {items.length === 0 ? (
          <p>No items available.</p>
        ) : (
          <ul>
            {items.map((item, index) => (
              <NewItem
                text={item.item}
                key={index}
                id={item._id}
                onChecked={() => deleteItem(index)}
              />
            ))}
          </ul>
        )}
      </div>
      <h6>Click on task to remove</h6>
      <Link to ="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default List;

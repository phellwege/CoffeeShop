import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import {navigate} from '@reach/router'

// officer form makes items

export default (props) => {
    const [itemName, setItemName] = useState(""); 
    const [price, setPrice] = useState("");
    const [inventory, setInventory] = useState("");
    const [description, setDescription] = useState("");
    const [media, setMedia] = useState("");
    const [category, setCategory] = useState("");
    const [errors, setErrors] = useState(null);
    //handler when the form is submitted

    const onSubmitHandler = e => {
        e.preventDefault();
        const data = {
            itemName: itemName,
            price: price,
            inventory: inventory,
            description: description,
            media: media,
        };
        axios.post('http://localhost:8000/api/item',
            data,
        )
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err=>{
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            });
    }
    return (
        <div>
        <Link to={"/"}>Home</Link>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Item name</label><br/>
                <input type="text" onChange={(e)=>setItemName(e.target.value)} value={itemName}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <p>
                <label>Number in Inventory</label><br/>
                <input type="text" onChange={(e)=>setInventory(e.target.value)} value={inventory}/>
            </p>
            <p>
                <label>Pictures</label><br/>
                <input type="text" onChange={(e)=>setMedia(e.target.value)} value={media}/>
            </p>
            <p>
                <label>category</label><br/>
                <input type="text" onChange={(e)=>setCategory(e.target.value)} value={category}/>
            </p>
            <input type="submit"/>

        {errors?.itemName && (
            <span style={{ color: "red" }}>{errors?.itemName?.message}</span>
        )}
        {errors?.price && (
            <span style={{ color: "red" }}>{errors?.price?.message}</span>
        )}
        {errors?.inventory && (
            <span style={{ color: "red" }}>{errors?.inventory?.message}</span>
        )}
        {errors?.description && (
            <span style={{ color: "red" }}>{errors?.description?.message}</span>
        )}
        {errors?.media && (
            <span style={{ color: "red" }}>{errors?.media?.message}</span>
        )}
        </form>
        </div>
    )
}

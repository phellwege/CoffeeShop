import React, {Component, useState, useEffect}from 'react'
import axios from 'axios';
import { Link } from '@reach/router'


const Items = props => {
    const { removeFromDom } = props;
    const [item, setItem] = useState({});
    const deleteItem = (itemId) => {
        axios.delete('http://localhost:8000/api/item/delete/' + itemId)
            .then(res => {
                removeFromDom(itemId)
            })
    }
    // const updateExistingItem = (itemId) => {
    //     axios.put('http://localhost:8000/api/item/' + itemId + '/edit')
    //         .then(res => {
    //             updateExistingItem(itemId)
    //         })
    // }
    useEffect(() => {
        axios.get('http://localhost:8000/api/items')
            .then(res => {
                setItem(res.data);
                // setItemName(res.data.itemName)
                console.log("does this display?")
                console.log(res.data)
                console.log(res.data.results)
                console.log(item)
            });
    }, []);

    return (
        <div>
            {/* { props.items && props.items.map((item, idx) => {
                return <p key={idx}>
                    <Link to={`/api/item/${item._id}`}>
                        {item.itemName}
                    </Link> 
                    {item.price} 
                    {item.inventory} 
                    {item.description} 
                    {item.media} 
                    {item.category}
                    <button onClick={(e) => { updateExistingItem(item._id) }}>
                    Edit
                    </button>
                    <button onClick={(e) => { deleteItem(item._id) }}>
                    Delete
                    </button></p>
            })} */}
            <table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Item Name </th>
                        <th>price </th>
                        <th>number in inventory </th>
                        <th>description </th>
                        <th>pictures </th>
                        <th>category </th>
                    </tr>
                </thead>
                <tbody>
                    <div>
                    {props.items && props.items.map((item, idx) =>  {
                        return (
                        <tr key={idx}>
                            <td>
                                {item.itemName}
                            </td>
                            <td>
                                {item.price}
                            </td>
                            <td>
                                {item.inventory}
                            </td>
                            <td>
                                {item.description} 
                            </td>
                            <td>
                                {item.media}
                            </td>
                            <td>
                                {item.category}
                            </td>
                            <td>
                            <button onClick={(e) => { deleteItem(item._id) }}>
                                Delete
                            </button>
                            </td>
                        </tr>
)}
)}
                    </div>
                </tbody>
            </table>
        </div>
    )
}
export default Items

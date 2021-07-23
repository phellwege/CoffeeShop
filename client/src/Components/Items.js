import React, {Component, useState, useEffect}from 'react'
import axios from 'axios';


const Items = props => {
    const [items, setItems] = useState([]);
    const removeFromDom = itemId => {
        setItems(items.filter(item => item._id !== itemId));
    }
    const deleteItem = (itemId) => {
        axios.delete('http://localhost:8000/api/item/delete/' + itemId)
            .then(res => {
                removeFromDom(itemId)
                console.log(res);
            })
    }
    useEffect(() => {
        axios.get('http://localhost:8000/api/items')
            .then(res => {
                setItems(res.data);
            });
    }, [items]);
    return (
        <div>
            <table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Item Name </th>
                        <th>price </th>
                        <th>number in inventory </th>
                        <th>description </th>
                        <th>pictures </th>
                        <th>category </th>
                        <th>options</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, idx) =>  {
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
                </tbody>
            </table>
        </div>
    )
}
export default Items

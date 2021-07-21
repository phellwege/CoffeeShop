import React, {Component, useState, useEffect}from 'react'
import axios from 'axios';
import { Link } from '@reach/router'


export default props => {
    const { removeFromDom } = props;
    const [items, setItems] = useState([]);
    const deleteItem = (itemId) => {
        axios.delete('http://localhost:8000/api/item/delete/' + itemId)
            .then(res => {
                removeFromDom(itemId)
            })
    }

    const {} = props;
    // const updateExistingItem = (itemId) => {
    //     axios.put('http://localhost:8000/api/item/' + itemId + '/edit')
    //         .then(res => {
    //             updateExistingItem(itemId)
    //         })
    // }
    useEffect(() => {
        axios.get('http://localhost:8000/api/items')
            .then(res => {
                setItems(res.data.results);
                console.log("_______________")
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
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <div>
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
                    </div>
                </tbody>
            </table>
        </div>
    )
}

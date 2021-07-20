import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router'


export default props => {
    const { removeFromDom } = props;
    const deleteItem = (itemId) => {
        axios.delete('http://localhost:8000/api/item/delete/' + itemId)
            .then(res => {
                removeFromDom(itemId)
            })
    }
    const {} = props;
    const updateExistingItem = (itemId) => {
        axios.put('http://localhost:8000/api/item/' + itemId + '/edit')
            .then(res => {
                updateExistingItem(itemId)
            })
    }

    return (
        <div>
            { props.items && props.items.map((item, idx) => {
                return <p key={idx}>
                    <Link to={`/items/${item._id}`}>
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
            })}
        </div>
    )
}

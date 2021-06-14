import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router'

function items() {
    const { removeFromDom } = props;
    const deleteItem = (itemId) => {
        axios.delete('http://localhost:8000/api/item/delete/' + itemId)
            .then(res => {
                removeFromDom(itemId)
            })
    }
    return (
        <div>
            {props.items.map((item, idx) => {
                return <p key={idx}><Link to={`/items/${item._id}`}>{item.itemName}</Link> <button onClick={(e) => { deleteItem(item._id) }}>
                    Delete
                    </button></p>
            })}
        </div>
    )
}
export default items;
import React, {Component, useState, useEffect}from 'react'
import axios from 'axios';


const Items = props => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/items')
            .then(res => {
                setItems(res.data);
                setItems(items.sort((a, b) => a.category.localeCompare(b.category)));
                // setItems(items.sort(function(a, b){
                //     if(a.firstname < b.firstname) { return -1; }
                //     if(a.firstname > b.firstname) { return 1; }
                //     return 0;
                // })
                // );

            });
    }, [items]);
    return (
        <div>
            <table striped bordered hover>
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

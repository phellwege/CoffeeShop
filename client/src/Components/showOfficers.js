import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router'

export default props => {
    const { removeFromDom } = props;
    const deleteOfficer = (OfficerId) => {
        axios.delete('http://localhost:8000/api/item/delete/' + officerId)
            .then(res => {
                removeFromDom(officerId)
            })
    }

    return (
        <div>
            { props.officers && props.officers.map((officer, idx) => {
                return <p key={idx}>
                    <Link to={`/officers/${officer._id}`}>
                        {officer.FirstName}
                    </Link> 
                    <button onClick={(e) => { deleteItem(officer._id) }}>
                    Delete
                    </button></p>
            })}
        </div>
    )
}

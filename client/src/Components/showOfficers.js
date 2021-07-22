import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router'

const ShowOfficers = props => {
    const { removeFromDom } = props;
    const deleteOfficer = (OfficerId) => {
        axios.delete('http://localhost:8000/api/item/delete/' + OfficerId)
            .then(res => {
                removeFromDom(OfficerId)
            })
    }

    return (
        <div>
            { props.officers && props.officers.map((officer, idx) => {
                return <p key={idx}>
                        {officer.FirstName} {officer.LastName}
                    <button onClick={(e) => { deleteOfficer(officer._id) }}>
                    Delete
                    </button></p>
            })}
        </div>
    )
}
export default ShowOfficers
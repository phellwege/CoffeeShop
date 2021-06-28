import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

function HeadPanel() {
    return (
        <div>
            <Link to="/">Login</Link> || <Link to="/">Logout</Link>
        </div>
    )
}
export default HeadPanel;
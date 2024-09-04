import React from "react";
import { Link } from 'react-router-dom'
import './Card.css'

function Card({ issue }){
    return(
        <div className="card">
            <Link to={`/issues/${issue.number}`}>
                <h3>{issue.title}</h3>
                <p>{issue.body.substring(0, 100)}...</p>
                <p>#{issue.number} opened by {issue.user.login}</p>
            </Link>
        </div>
    );
}

export default Card
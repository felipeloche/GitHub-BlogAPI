import React, {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from 'react-markdown';
import './IssueDetail.css'

function IssueDetail(){
    const {issueNumber} = useParams();
    const [issue, setIssue] = useState(null);

    useEffect(() => {
        fetchIssue();
    }, [issueNumber]);

    const fetchIssue = async () => {
        try {
            const response = await axios.get('https://api.github.com/search/issues?q=${searchText}repo:felipeloche/acervoAulasBruno/issues/${issueNumber');
            setIssue(response.data);
        } catch (error) {
            console.error('Erro ao buscar os detalhes da issue', error);
        }
    };

    if(!issue) {
        return<div>Loading...</div>
    }

    return (
        <div className="issue-detail">
            <h1>{issue.title}</h1>
            <p>#{issue.number} opened by {issue.user.login}</p>
            <ReactMarkdown>{issue.body}</ReactMarkdown>
        </div>
    );
}

export default IssueDetail
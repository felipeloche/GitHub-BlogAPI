import React, { useEffect, useState} from "react";
import axios from 'axios'
import './Issues.css'
import Card from '../../components/card/Card.jsx'
//import Search from '../../components/search/Search.jsx'

function Issues(){
    const [issues, setIssues] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchIssues();
    }, [searchText]);

    const fetchIssues = async () => {
        try {
            const response = await axios.get(`https://api.github.com/search/issues?q=repo:felipeloche/acervoAulasBruno`);
            setIssues(response.data.items);
        } catch(error) {
            console.error('Erro ao buscar issues', error);
        }
    };

    return(
        <div className="issues">
            {/*
            <Search searchText={searchText} setSearchText={setSearchText} />
            */}
            <div className="issues-list">
                {issues.map(issue => (
                    <Card key={issue.id} issue={issue} />
                ))}
            </div>
        </div>
    );
}

export default Issues;
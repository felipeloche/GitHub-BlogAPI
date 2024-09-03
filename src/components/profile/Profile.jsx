import React, {useEffect, useState} from "react";
import axios from 'axios';
import './Profile.css';

function Profile(){
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        axios.get('https://api.github.com/users/felipeloche')
        .then(response => {
            setProfileData(response.data);
        })
        .catch(error => {
            console.error('Erro ao buscar os dados do perfil', error);
        })
    }, [])

    if (!profileData) {
        return <div>Loading...</div>
    }

    return (
        <div className="profile">
            <img src={profileData.avatar_url} alt="Profile Avatar" className="profile-avatar" />
            <h1>{profileData.name}</h1>
            <p>{profileData.bio}</p>
            <p>Followers: {profileData.followers}</p>
            <p>Following: {profileData.following}</p>
            <p>Public Repositories: {profileData.public_repos}</p>
        </div>
    )
}

export default Profile
import React, { useState, useEffect } from 'react';
import './styles.scss';

import { Card } from '../../components/Card';

interface StudantCards {
    name: string;
    time: string;
}

export function Home() {

    const [studantName, setStudantName] = useState("");
    const [studants, setStudants] = useState<StudantCards[]>([]);
    const [user, setUser] = useState({ name: '', avatar: '' });

    function handleAddStudant() {
        const newStudant = {
            name: studantName,
            time: new Date().toLocaleTimeString("pt-br", {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            })
        }

        setStudants(prevState => [...prevState, newStudant]);
    }

    useEffect(() => {
        fetch('https://api.github.com/users/lilicrst')
            .then(response => response.json())
            .then(data => {
                setUser({
                    name: data.name,
                    avatar: data.avatar_url,
                })
            })
    }, []);

    return (
        <section className="container">
            <header>
                <h1>Presence List</h1>
                <div>
                    <strong>{user.name}</strong>
                    <img src={user.avatar} alt="Foto de perfil" />
                </div>
            </header>
            <input
                type="text"
                placeholder='Type the name...'
                onChange={e => setStudantName(e.target.value)}
            />
            <button type="button" onClick={handleAddStudant}>
                Put
            </button>

            {
                studants.map(studant => (
                    <Card
                        key={studant.time}
                        name={studant.name}
                        time={studant.time}
                    />)
                )
            }
        </section>
    )
}
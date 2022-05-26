import React, { useState } from 'react';
import './styles.scss';

import { Card } from '../../components/Card';

export function Home() {

    const [studantName, setStudantName] = useState();
    const [studants, setStudants] = useState([]);

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

    return (
        <section className="container">
            <h1>Presence List</h1>
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
                        key={studant.name}
                        name={studant.name}
                        time={studant.time}
                    />)
                )
            }
        </section>
    )
}
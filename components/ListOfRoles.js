'use client';

import { useEffect, useState } from 'react';

const ListOfRoles = ({ onRoleSelect }) => {
    const [roles, setRoles] = useState([]);
    const [isActive, setIsActive] = useState(false);


    useEffect(() => {
        async function fetchRoles() {
            try {
                const response = await fetch('/api/agents');
                if (!response.ok) {
                    throw new Error('Failed to fetch agents');
                }
                const data = await response.json();

                const roles = data
                    .filter(agent => agent.role)
                    .map(agent => agent.role);

                const uniqueRoles = [...new Set(roles)];

                setRoles(uniqueRoles);
            } catch (error) {
                console.error("Failed to fetch agents: ", error);
            }
        }

        fetchRoles();
    }, []);

    const handleClick = () => {
        setIsActive(!isActive);
    }

    const handleRoleSelect = (role) => {
        onRoleSelect(role);
        setIsActive(false); // Ferme le menuToggle après avoir sélectionné un rôle
    }

    return (
        <div className={`list-role-container ${isActive ? "active" : ""}`}>
            <div className='menuToggle' onClick={handleClick}>
                <p>Rôle</p>
            </div>
            <ul>
                <li>
                    <a href="#agents" onClick={() => handleRoleSelect('')}>Tous</a>
                </li>
                {roles.map((role) => (
                    <li key={role}>
                        <a href="#agents" onClick={() => handleRoleSelect(role)}>{role}</a>
                    </li>
                ))}
            </ul>
            
        </div>
        
    );
}

export default ListOfRoles;

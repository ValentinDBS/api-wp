'use client';

import { useEffect, useState } from 'react';

const ListOfRoles = ({ onRoleSelect }) => {
    const [roles, setRoles] = useState([]);

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

    return (
        <ul>
            <li>
                <a href="#agents" onClick={() => onRoleSelect('')}>All</a>
            </li>
            {roles.map((role) => (
                <li key={role}>
                    <a href="#agents" onClick={() => onRoleSelect(role)}>{role}</a>
                </li>
            ))}
        </ul>
    );
}

export default ListOfRoles;

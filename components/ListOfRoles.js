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
        <select onChange={(e) => onRoleSelect(e.target.value)}>
            <option value="">All</option>
            {roles.map((role) => (
                <option key={role} value={role}>{role}</option>
            ))}
        </select>
    );
}

export default ListOfRoles;

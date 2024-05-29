'use client'

import { useEffect, useState } from 'react';

const ListOfRoles = () => {
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        async function fetchRoles() {
          try {
            const response = await fetch('/api/agents');
            if (!response.ok) {
              throw new Error('Failed to fetch agents');
            }
            const data = await response.json();
            
            // Extraire les noms des rôles à partir des agents
            const roles = data
              .filter(agent => agent.role && agent.role.displayName) // Filtrer les agents ayant un rôle
              .map(agent => agent.role.displayName); // Extraire les noms des rôles
            
            // Supprimer les doublons
            console.log('Roles:', roles);
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
            {roles.map((role) => (
            <li key={role}>{role}</li>
            ))}
        </ul>
    )
}

export default ListOfRoles;

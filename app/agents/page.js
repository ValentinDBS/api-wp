// Agent.js
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Agent = ({ selectedRole }) => {
    const [agents, setAgents] = useState([]);
    const [filteredAgents, setFilteredAgents] = useState([]);
    const router = useRouter();

    useEffect(() => {
        async function fetchAgents() {
            try {
                const response = await fetch('/api/agents');
                if (!response.ok) {
                    throw new Error('Failed to fetch agents');
                }
                const data = await response.json();
                setAgents(data);
                setFilteredAgents(data);
            } catch (error) {
                console.error("Failed to fetch agents: ", error);
            }
        }

        fetchAgents();
    }, []);

    useEffect(() => {
        if (selectedRole) {
            setFilteredAgents(agents.filter(agent => agent.role === selectedRole));
        } else {
            setFilteredAgents(agents);
        }
    }, [selectedRole, agents]);

    // const handleAgentClick = (agentId) => {
    //     router.push(`/agents/${agentId}`); // Rediriger vers la page DetailAgent correspondant à l'agent sélectionné
    // onClick={() => handleAgentClick(agent.uuid)}
    // };

    return (
        <>
            {filteredAgents.map((agent, index) => (
                <Link key={agent.uuid} className="select-agent-container" id={`${agent.uuid}`} href={`/agents/${agent.uuid}`}>
                    <span className="agent-number">
                        {String(index + 1).padStart(2, '0')}.
                    </span>
                    <div className="agent-info">
                        <p className="agent-name">{agent.displayName}</p>
                        <p className="agent-role">{agent.role}</p>
                    </div>
                </Link>
            ))}
        </>
    );
}

export default Agent;

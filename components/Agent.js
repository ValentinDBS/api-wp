'use client';

import { useEffect, useState } from 'react';

const Agent = ({ selectedRole }) => {
    const [agents, setAgents] = useState([]);
    const [filteredAgents, setFilteredAgents] = useState([]);

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

    return (
        <>
            {filteredAgents.map(agent => (
                <div key={agent.uuid} className="select-agent-container" id="agents">
                    <span className="agent-number">
                        {agent.uuid}.
                    </span>
                    <div className="agent-info">
                        <p className="agent-name">{agent.displayName}</p>
                        <p className="agent-role">{agent.role}</p>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Agent;




// const Agent = (props) => {

//     return (
//         <div className="select-agent-container" id="agents">
//             <span className="agent-number">
//                 01.
//             </span>
//             <div className="agent-info">
//                 <p className="agent-name">{props.name}</p>
//                 <p className="agent-role">Initiateur</p>
//             </div>
//         </div>
//     )
// }

// export default Agent
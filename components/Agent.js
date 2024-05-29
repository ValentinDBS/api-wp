// 'use client';

// import { useEffect, useState } from 'react';

const Agent = (props) => {
    // useEffect(() => {
    //     async function fetchAgents() {
    //       try {
    //         const response = await fetch('/api/agents');
    //         if (!response.ok) {
    //           throw new Error('Failed to fetch agents');
    //         }
    //         const data = await response.json();
    //         setAgents(data);
    //       } catch (error) {
    //         console.error("Failed to fetch agents: ", error);
    //       }
    //     }
    
    //     fetchAgents();
    // }, []);

    return (
        <div className="select-agent-container" id="agents">
            <span className="agent-number">
                01.
            </span>
            <div className="agent-info">
                <p className="agent-name">{props.name}</p>
                <p className="agent-role">Initiateur</p>            
            </div>
        </div>
    )
}

export default Agent
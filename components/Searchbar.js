'use client';

import { useEffect, useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = () => {
    const [agents, setAgents] = useState([]);
    const [activeSearch, setActiveSearch] = useState([]);
  
    useEffect(() => {
      async function fetchAgents() {
        try {
          const response = await fetch('/api/agents');
          if (!response.ok) {
            throw new Error('Failed to fetch agents');
          }
          const data = await response.json();
          setAgents(data);
        } catch (error) {
          console.error("Failed to fetch agents: ", error);
        }
      }
  
      fetchAgents();
    }, []);
  
    const handleSearch = (e) => {
      const searchValue = e.target.value.toLowerCase();
      if (searchValue === "") {
        setActiveSearch([]);
        return;
      }
      const filteredAgents = agents.filter(agent => 
        agent.displayName.toLowerCase().includes(searchValue)
      );
      setActiveSearch(filteredAgents);
    }

  return (
    <form className='searchbar-form'>
      <div className='searchbar'>
        <input placeholder="Rechercher un agent" onChange={handleSearch} />
        <button type="button">
          <AiOutlineSearch />
        </button>
      </div>
      {activeSearch.length > 0 && (
        <div className='result-search'>
          {activeSearch.map(agent => (
            <span key={agent.uuid}>
              <a href={`${agent.uuid}`}>{agent.displayName}</a>
            </span>
          ))}
        </div>
      )}
    </form>
  )
}

export default Searchbar;

'use client';

import Link from 'next/link';
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

    const handleSelectAgent = () => {
      setActiveSearch([]);
      setSearchValue(""); // Réinitialiser le contenu de la barre de recherche
    }
    
    const [searchValue, setSearchValue] = useState(""); // Ajouter un état pour le contenu de la barre de recherche
    
    const handleSearch = (e) => {
      const searchValue = e.target.value.toLowerCase();
      setSearchValue(searchValue); // Mettre à jour l'état du contenu de la barre de recherche
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
        <input placeholder="Rechercher un agent" onChange={handleSearch} value={searchValue}/>
        <button type="button">
          <AiOutlineSearch />
        </button>
      </div>
      {activeSearch.length > 0 && (
        <div className='result-search'>
          {activeSearch.map(agent => (
            <span key={agent.uuid} onClick={handleSelectAgent}>
              <Link href={`/agentDetail/${agent.uuid}`}>{agent.displayName}</Link>
            </span>
          ))}
        </div>
      )}
    </form>
  )
}

export default Searchbar;

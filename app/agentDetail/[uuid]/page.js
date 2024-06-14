'use client'

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Agent from '@/components/Agent';
import ListOfRoles from '@/components/ListOfRoles';

const Page = () => {
  const [agents, setAgents] = useState([]);
  const [displayedAgents, setDisplayedAgents] = useState([]);
  const [selectedCompetence, setSelectedCompetence] = useState(null);
  const [selectedRole, setSelectedRole] = useState('');

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

  const params = useParams();
  // Définie l'agent à afficher selon l'id dans l'url
  useEffect(() => {
    setDisplayedAgents(agents.filter(agent => agent.uuid.toString() === params.uuid));
  }, [agents, params.uuid]);

  // Affiche par défaut la compétence 1 de l'agent
  useEffect(() => {
    if (displayedAgents.length > 0) {
      const firstAgent = displayedAgents[0];
      if (firstAgent.competences && Object.keys(firstAgent.competences).length > 0) {
        const firstCompetenceKey = Object.keys(firstAgent.competences)[0];
        setSelectedCompetence(firstAgent.competences[firstCompetenceKey].nom);
      }
    }
  }, [displayedAgents]);
  // Permet de changer la compétence sélectionnée
  const handleCompetenceClick = (competence) => {
    setSelectedCompetence(competence);
  };

  return (
    <>
      <section id='detail-container'>
        {displayedAgents.map(agent => (
          <div className='wrap-center' key={agent.uuid}>
            <div className='fullportrait-container'>
              <Image 
                src={agent.fullPortrait} 
                alt={agent.displayName} 
                fill={true}
                // sizes="(min-width: 600px) 100vw, 50vw"
                style={{ objectFit: "cover" }} 
                className='agent-fullportrait'
              />
            </div>
            <div className='info-container'>
              <h1>{agent.displayName}</h1>
              <span className='role'>
                // Rôle
              </span>
              <h2>{agent.role}</h2>
              <span className='biographie'>
                // Biographie
              </span>
              <p>{agent.description}</p>
              <div className='line-separation'></div>
              <h3>Compétences</h3>
              <div className='skills-container'>
                {Object.keys(agent.competences).map((key) => (
                  <motion.div 
                    className='skills-choice' 
                    key={key} 
                    onClick={() => handleCompetenceClick(agent.competences[key].nom)}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: selectedCompetence === agent.competences[key].nom ? 1 : 0.5 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image 
                      src={agent.competences[key].icone} 
                      height={65}
                      width={65}
                    />
                  </motion.div>
                ))}
              </div>
              {selectedCompetence && (
                <motion.div className='skills-description'
                key={selectedCompetence} // Clé unique pour déclencher la transition
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: "linear"
                }}
                >
                  <p className='skill-name'>  
                    {
                      (Object.keys(agent.competences).find(key => agent.competences[key].nom === selectedCompetence)).toUpperCase()
                    }
                    &nbsp;-&nbsp;
                    {
                      agent.competences[Object.keys(agent.competences).find(key => agent.competences[key].nom === selectedCompetence)].nom
                    }
                  </p>
                  <p className='skill-desc'> 
                    {
                      agent.competences[Object.keys(agent.competences).find(key => agent.competences[key].nom === selectedCompetence)].description
                    }
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        ))}
      </section>
      <section id='more'>
        <h3>Envie d'en apprendre d'avantage ?</h3>
        <div className='filter-agent'>
            <div className="filter-container">
                <p>Sélectionne un agent</p>
                <div className="filter-role">
                    <ListOfRoles onRoleSelect={setSelectedRole} />
                </div>
            </div>
        </div>
        <div className='select-agent'>
          
          <Agent selectedRole={selectedRole}/>
        </div>
        
      </section>
    </>
  );
};

export default Page;

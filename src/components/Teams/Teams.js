import React, { useEffect, useState } from 'react';
import Team from './Team';
import './Team.css'

const Teams = () => {
  const [teams, setTeams]= useState([])
  useEffect(()=>{
    fetch('./teams.json')
    .then(res=>res.json())
    .then(data=>setTeams(data))
  },[])
  return (
    <div className="container">
      <h1 className="text-center fw-bold">Our Team</h1>
<div className="team-container">
      {
        teams.map(team=><Team key={team.id} team={team}></Team>)
      }
    </div>
    </div>
    
  );
};

export default Teams;
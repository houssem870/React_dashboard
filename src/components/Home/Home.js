import React from 'react'
import './Home.css'


import { Users } from "./users";
import { Teams } from "./TeamMember";

import  { useState } from 'react'
import Table from './Table';
import UserList from './UserList'
import Jobs from '../Jobs';


const Home = () => {
  const [query , setQuery] = useState("");
  const keys = ["first_name", "last_name", "email"];
  const search = (data) => {
            return data.filter((item) =>
       keys.some((key) => item[key].toLowerCase().includes(query))
  );
    };

    /*<div className='titre'>
          <h1>Recherche Notre future Talents</h1>
        </div>
        <form id='searchbox'  method='get' action='/search' autocomplete='off' >
           <input  name='q' type='text' size= '15' placeholder= 'Enter keywords here… '  
                     onChange={(e) => setQuery(e.target.value)}/>
           <input id='button-submit' type='submit' value='' />
           <Table data={search(Users)}/>   
        </form>  */ 
  return (
    <div>
    <div id='butt'>
    <h1>All Job published </h1>
    <div class="button"><span>Create new one</span></div>
    </div>

    <div id='global' className='row '>
    
    <div id='home' className='truc-a-centrer col ' style={{ width: '41rem' }}>
        <Jobs />     
     </div >
     <div class="col users"> 
     <h1>Team Members </h1> 
        <UserList data={Teams} />

     </div>


  </div>
  </div>

  )
}

export default Home
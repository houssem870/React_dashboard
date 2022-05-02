import React from 'react'
import "./ListView.css"
import { Users } from "./users";
import  { useState } from 'react'
import Table from './Table';

const ListView = () => {
    const [query , setQuery] = useState("");
    const keys = ["first_name", "last_name", "email"];
    const search = (data) => {
              return data.filter((item) =>
         keys.some((key) => item[key].toLowerCase().includes(query))
    );
      };
  return (
    <div className=''>
        <input type="text" placeholder='search.....' 
        className='search'
        onChange={(e) => setQuery(e.target.value)}/>
       <Table data={search(Users)}/>
    </div>
  )
}

export default ListView
import React from 'react'
import '../Home/UserList.css'
import  { useState } from 'react'
const UserList = ({data}) => {
    const [query , setQuery] = useState("");
    const keys = ["first_name", "last_name", "email"];

    var colorcode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    const images = [
    'https://imgur.com/xSQ9JZC.jpg',
    'https://imgur.com/R90UNeJ.jpg',
    'https://imgur.com/SAW83ZY.jpg',
    'https://imgur.com/6ax0o8i.jpg',
    'https://i.imgur.com/xSQ9JZC.jpg',
    'https://i.imgur.com/SAW83ZY.jpg'
    ];



  return (
 
    <div id='user' >
        <div className="card" >
        {data.map((item) =>(
            <div key={item.id} className="profile_details">
                <div className="profile_images">
                    <img src={item.image} />
                </div>
                <div className="profile">
                    <h2>{item.first_name}</h2>
                    <h2>{item.last_name}</h2>
                    <div className="specification">
                        <span>UX Designer</span>
                        <small className="line"></small>
                        <span>California, USA</span>
                    </div>
                    <button>Message</button>
                </div>
            </div>
             )
             )}
        </div>
    </div>
  )
}

export default UserList
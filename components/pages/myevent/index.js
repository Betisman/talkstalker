import React, { useState } from 'react';
import { Layout } from '../../common';
import Admin from './admin';
import Speakers from './speakers';
import '../../../styles/pages/myevent.scss';

const menuItems = ['admin', 'talks', 'speakers', 'venue', ' catering', 'ticket', 'accomodation'];

const MyEvent = () => {
    
  const [topic, setTopic] = useState('admin');
  const handleSelect = (menu) => {
    setTopic(menu);
  };
  return(
    <Layout>
      <div className="myeventPage">
        <div className="menu">
          {menuItems.map((menu)=>{
            return (
              <div key={menu} className={`menuItem ${topic === menu ? 'active' : null}`} data-topic={menu} onClick={()=>handleSelect(menu)}>{menu}</div> 
            );
          })}
        </div>
        { topic === 'admin' && <Admin />}
        { topic === 'speakers' && <Speakers />}
        { topic === 'admin' && <Admin />}
        { topic === 'admin' && <Admin />}
        { topic === 'admin' && <Admin />}
        { topic === 'admin' && <Admin />}
      </div>
    </Layout>
   
  );
};

export default MyEvent;
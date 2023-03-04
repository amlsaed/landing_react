import { click } from '@testing-library/user-event/dist/click';
import React from 'react';
import Client_1 from '../assets/client-1.png'
import Client_2 from '../assets/client-2.png'
import Client_3 from '../assets/client-3.png'
import Client_4 from '../assets/client-4.png'
import Client_5 from '../assets/client-5.png'
const imgs =[
    Client_1,
    Client_2,
    Client_3,
    Client_4,
    Client_5
]

function Brands() {
  
  return (
    <div className='Clients'>
        <ul>
        {
            imgs.map((imgs)=>{
                return(
                    <li>
                    <a href="#"><img src={imgs} alt="client img"/></a>
                   </li>
                )
            })
        }
                   
        </ul> 
    </div>
  )
}

export default Brands
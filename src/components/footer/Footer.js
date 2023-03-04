import React from 'react'
import './footer.css'
function Footer() {
  return (
    <footer>
         <div>
            <h3>
            Study
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget diam at mi sollicitudin
            </p>
         </div>
         <div>
            <h4>
            Nos services
            </h4>
            <ul>
                <li>
                    <a herf="#">Avis clients</a>
                </li>
                <li>
                    <a herf="#">Mentions légales</a>
                </li>
                <li>
                    <a herf="#">Plan du site</a>
                </li>
                <li>
                    <a herf="#">Blog d’Idéematic</a>
                </li>
                <li>
                    <a herf="#">Le dictionnaire du digital</a>
                </li>
                <li>
                    <a herf="#">Notre boutique</a>
                </li>
            </ul>
         </div>

         <div>
            <h4>
            Sign up for Special Offers!
            </h4>
            <label>
                <input type="text" placeholder='Mail'/>
                <button>Subscribe</button>
            </label>
         </div>
        
    </footer>
  )
}

export default Footer
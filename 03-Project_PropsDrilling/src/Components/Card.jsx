import React from "react";
import { Bookmark } from 'lucide-react';


 function Card() {
    return (
        <>
        <div className="card">
            <div>
                <div className="top">
                <img src="https://imgs.search.brave.com/GxVOq9xuqtiB4Tpa8JJxeWKumoDP0A9x9UXm7yU0e4A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMTg2/MC8xNjM3NS9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE2Mzc1NzYz/Mi1zdG9jay1waG90/by1hbWF6b24tbG9n/by1vbi1hLXdoaXRl/LmpwZw" alt="Amazon Logo" className="logo_img" />

                <button className="save_button">Save<Bookmark size={13} /></button>
            </div>

            <div className="center">
                <h3>Amazon<span> 5 days age</span></h3>
                <h2>Senior UI/UX Designer</h2>

                <div className="tag">
                    <button>Part-time</button>
                    <button>Senior Level</button>
                </div>
            </div>
            </div>

            <div className="bottom">
                <div>
                    <h3>$120/hour</h3>
                     <p>Mumbai, India</p>
                    
                </div>
               <button>Apply now</button>
            </div>
        </div>
        </>
    )
}

export default Card
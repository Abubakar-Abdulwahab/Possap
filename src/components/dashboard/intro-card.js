import React from 'react'
import './card.css'

const IntroCards = () => {
    // const gradient = (color) =>{
    //     return {
    //         backgroundImage: linear-gradient('135 deg', color , color)
    //     }
    // }
    let cards = [
        {
            count: 754,
            title: 'December Revenue',
            color: '#005249',
            icon: 'icon-activity',
            gradient: ['#007b55', '#007b553d'],
            bg: '#c8facd'
        },
        {
            count: 754,
            title: 'Cost of Service',
            color: '#04297a',
            icon: 'icon-activity',
            gradient: ['#0c53b7', '#0c53b73d'],
            bg: '#d0f2ff'
        },
        {
            count: 754,
            title: 'Pending Request',
            color: '#7a4f01',
            icon: 'icon-activity',
            gradient: ['#b78103', '#b781033d'],
            bg: '#fff7cd'
        },
        {
            count: 754,
            title: 'Pending Request',
            color: '#7a0c2e',
            icon: 'icon-activity',
            gradient: ['#b72136', '#b721363d'],
            bg: '#ffe7d9'
        }
    ]
    return (
        
        <>
            {cards.map(e =>(
             <div className="col-md-3 pt-5 pl-5">
                 <div class="intro-card" style={{background: e.bg, color: e.color}}>
                    <div class="icon-detail" style={{ backgroundImage: ` linear-gradient(
135deg, ${e.gradient[0]} 0%, ${e.gradient[1]} 100%)` }} >
                    <span className="pcoded-micon"><i className={"feather " + e.icon}></i></span>
                    
                    </div>
                    <h3 className="h3-css" style={{color: `${e.color}`}}>{e.count}</h3>
                    <h6 className="h6-css" style={{color: `${e.color}`}}>{e.title}</h6>
                 </div>
                 
                
               
            </div>

            ))}
        </>
    )
}

export default IntroCards

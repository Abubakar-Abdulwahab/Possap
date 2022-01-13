import React from 'react'
import { cardItemBody, cardItemIcon, cardItem1, cardItemPadding, cardItem2, cardItem3, cardItem4, cardItemIconColor } from './card-css'
import './card.css'

const IntroCards = () => {
    // const gradient = (color) =>{
    //     return {
    //         backgroundImage: linear-gradient('135 deg', color , color)
    //     }
    // }
    const getStyle =(i) =>{
        switch (i) {
            case 1:
                return cardItem1
                break;
        
            case 2:
                return cardItem2
                break;
        
            case 3:
                return cardItem3
                break;
        
            case 4:
                return cardItem4
                break;
        
            default:
                break;
        }
    }
    let cards = [
        {
            count: '50,000,000.00',
            title: 'Revenue Generated',
            color: '#005249',
            icon: 'icon-activity',
            gradient: ['#007b55', '#007b553d'],
            bg: '#c8facd'
        },
        {
            count: '250,000',
            title: 'Total no of Officers',
            color: '#04297a',
            icon: 'icon-users',
            gradient: ['#0c53b7', '#0c53b73d'],
            bg: '#d0f2ff'
        },
        {
            count: '250,000',
            title: 'Total no of Users',
            color: '#7a4f01',
            icon: 'icon-users',
            gradient: ['#b78103', '#b781033d'],
            bg: '#fff7cd'
        },
        {
            count: 1754,
            title: 'Total no of Commands',
            color: '#7a0c2e',
            icon: 'icon-codepen',
            gradient: ['#b72136', '#b721363d'],
            bg: '#ffe7d9'
        }
    ]
    return (
        
        <>
            {cards.map((e,i) =>(
             <div className="col-md-3" style={{...cardItemPadding}}>
                 <div  style={{...cardItemBody, ...getStyle(i+1)}}>
                    <div style={{...cardItemIcon, ...cardItemIconColor[i]}} >
                    <span className="pcoded-micon" style={{color: e.color}}><i className={"feather " + e.icon}></i></span>
                    
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

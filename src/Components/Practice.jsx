import React from 'react';
import './Practice.css'
// import photo from '../image/photosnap.svg';
import  { useEffect, useState } from 'react';


const Practice = ({data}) => {

    const logoImg = data.logo;
    const companyName = data.company;
    const positionName = data.position;
    const roleName = data.role;
    const levelName = data.level;
    const language = data.languages;
    const dayName = data.postedAt;
    const contractName = data.contract;
    const locationNAme = data.location;
    const newName = data.new;
    const featureName = data.featured;

    const [lang, setLang] = useState("");
    useEffect(()=>{
        setLang(
            language.map((lg)=>{
                return <h4 className='kenger' style={{listStyle:"none"}}>{lg}</h4>
            })
        )
    }, [])



  


  return (
    <div className="overall">
        <div className='container'>
            <div className="first">
                <div className="image"><img className='picture' src={logoImg} alt="" /></div>
                <div className="enclosure">
                    <div className="top">
                        <h4>{companyName}</h4>
                        {
                                newName ? <h4>New!</h4> : null
                            }
                        {
                            featureName ? <h4>Feature</h4> : null
                        }
                    </div>
                    <h3>{positionName}</h3>
                    <div className="bottom">
                        <h4>{dayName}</h4>
                        <h4>{contractName}</h4>
                        <h4>{locationNAme}</h4>
                    </div>
                </div>
            </div>
            <div className="second">
                <h4>{roleName}</h4>
                <h4>{levelName}</h4>
                <h4 className='special'>{lang}</h4>
            </div>
        </div>

    </div>

    
  )
}


export default Practice;
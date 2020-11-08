import React, {useState, useEffect} from 'react';
import Me from '../images/imageedit_3_6701281239.png';
import Mody from '../images/Mody.png';
import Sav from '../images/Screenshot (51).png';
import Mule from '../images/Screenshot (24).png';
import Social from '../images/social-distance.png';
import data from '../data.js';
import Experience from '../Components/Experience/Experience';
import Project from '../Components/Project/Project';
import './Main.css';

export default function Main() {
    const [bigState, setBigState] = useState([]);

    useEffect(() => {
        setBigState('');
    }, [])

    function big(e){
        let box = e.target.value
        setBigState(box);
    }

    function small(){
        setBigState('');
    }

    return (
        <div className = 'all-div'>
            <div className = 'name-div'>
                <h1>Devin Heigert</h1>
            </div>
            <div className = 'main-content'>
                <div className = {bigState === 'box1'? 'box1 expanded' : 'box1 shrink'}>
                    <div className={bigState === 'box1'? 'hidden' : 'unhidden'}>
                        <div className = 'color-block'></div>
                        <button value = 'box1' onClick = {big}>About Avenue</button>
                    </div>
                    <div className={bigState === 'box1'? '' : 'hidden'}>
                        <div className = 'button-div'>
                            <button onClick = {small}>X</button>
                        </div>
                        <div className = 'content-div'>
                            <div className = 'text-div'>
                                <p>{data[0].con1}</p>
                                <div>
                                    <h3>Experience</h3>
                                    <div className = 'xp-div'>
                                        {data[0].xp.map(element => { 
                                            return <Experience image = {element.image} title = {element.title} />
                                        })} 
                                    </div>
                                </div>
                            </div>
                            <div className = 'img-div'>
                                <img className = 'me' src={Me} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className = {bigState === 'box2'? 'box2 expanded' : 'box2 shrink'}>
                    <div className={bigState === 'box2'? 'hidden' : 'unhidden'}>
                        <div className = 'color-block'></div>
                        <button value = 'box2' onClick = {big}>Portfolio Place</button>
                    </div>
                    <div className={bigState === 'box2'? '' : 'hidden'}>
                        <div className = 'button-div'>
                            <button onClick = {small}>X</button>
                        </div>
                        <div className = 'content-div'>
                            <Project img = {Sav} tech = {data[1].projects[0].techs} description = {data[1].projects[0].description} title = {data[1].projects[0].title} depolyedSite = {data[1].projects[0].depolyedSite} />
                            <Project img = {Mule} tech = {data[1].projects[1].techs} description = {data[1].projects[1].description} title = {data[1].projects[1].title} depolyedSite = {data[1].projects[1].depolyedSite} />
                            <Project img = {Mody} tech = {data[1].projects[2].techs} description = {data[1].projects[2].description} title = {data[1].projects[2].title} depolyedSite = {data[1].projects[2].depolyedSite} />
                            <Project img = {Social} tech = {data[1].projects[3].techs} description = {data[1].projects[3].description} title = {data[1].projects[3].title} depolyedSite = {data[1].projects[3].depolyedSite} />
                        </div>
                    </div>
                </div>
                <div className = {bigState === 'box3'? 'box3 expanded' : 'box3 shrink'}>
                    <div className={bigState === 'box3'? 'hidden' : 'unhidden'}>
                        <div className = 'color-block'></div>
                        <button value = 'box3' onClick = {big}>Contact Center</button>
                    </div>
                    <div className={bigState === 'box3'? 'contact' : 'hidden'}>
                        <div className = 'button-div'>
                            <button onClick = {small}>X</button>
                        </div>
                        <div className = 'content-div'>
                            <h3><a href='https://github.com/heigertd'>GitHub</a></h3>
                            <h3><a href='https://linkedin.com/in/devin-heigert-2459a319b'>LinkedIn</a></h3>
                            <h3>Email: heigertd@gmail.com</h3>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}
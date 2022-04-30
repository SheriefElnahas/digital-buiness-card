import React from 'react';
import Info from '../Info/Info';
import About from '../About/About';
import Personality from '../Personality/Personality';
import Footer from '../Footer/Footer';


export default function Character(props) {
    const aboutContent = props.children[0].props.children;
    const personalityContent = props.children[1].props.children;
    
    return (
        <div>
                <Info name={props.name} titan={props.titan} img={props.img}/>
                <About content={aboutContent} />
                <Personality content={personalityContent} />
                <Footer />
        </div>
    )
}
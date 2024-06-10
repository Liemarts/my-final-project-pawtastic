import imageMain from './Pictures/bgremoved Cat and Dog.png';
import logo from './Pictures/paw-tastic-care-high-resolution-logo-transparent.png';
import iconNext from './Pictures/icons8-next-page-48.png';
import iconBack from './Pictures/icons8-back-page-48.png';
import iconMail from './Pictures/icons8-email-48.png';
import iconCall from './Pictures/icons8-phone-48.png';
import { clients } from './clients';
import { useState } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { About } from './About';
import { Areas } from './Areas';
import Progress from './Progress';

gsap.registerPlugin(useGSAP);



function Home () {
    const container = useRef();

    useGSAP(
        () => {
        gsap.from('.logo', { x: 200, rotation: "+=180", duration: 2.3 }); 
        gsap.from('.logoTitle', { opacity: 0, delay: 2, duration: 3.8 });
        gsap.to('.boxSix', { y: 20, ease:"bounce", duration:2.5, repeat:-1});
        },
    { scope: container }
);

    const [client, setClient] = useState (0);

    const {image, description} = clients[client];


    const previousClient = () => {
        setClient ((client => {
            client --;
            if (client < 0) {
                return clients.length-1;
            }
            return client;
        }))
    }

    const nextClient = () => {
        setClient ((client => {
            client ++;
            if (client > clients.length-1) {
                client = 0;
            }
            return client;
        }))

    }

    return (
    <div ref={container}>
        <div className='boxOne'>
            <div>
                <img className='mainImage' src={imageMain} alt='Cat and Dog' width="750px"/>
            </div>
            <div className='boxTwo'>
                <img className='logo' src= {logo} alt='logo' width="380px" height="238px"/>
                <h1 className='logoTitle'>для ваших любимых питомцев</h1>
            </div>
        </div>

        <div>
            <Progress />
        </div>

        <div className='about'> 
            <About />
        </div>

        <div className='block'>
            <Areas />
        </div>

        <div className='block'>
            <h2 className='titles'>Любимые клиенты</h2>
            <div className='container pics'>
                <button onClick={previousClient}><img className='clientBtn' src={iconBack} alt='Back'/></button>
                <img className='clientImage' src={image} width="650px" height="400px" alt='client' />
                <button onClick={nextClient}><img className='clientBtn' src={iconNext} alt='Next'/></button>
            </div>

            <div className='container'>
                <h4>{description}</h4>
            </div>
        </div>

        <div className='block'>
            <h2 className='titles'>Контактная информация</h2>
            <div className='boxSix'>
                <h3>Для записи обращайтесь в любое время:</h3>
                <div className='record'>
                    <p><span><img className='callIcon' src={iconCall} alt='Call'/> +7(812) 563 24 17</span></p>
                    <span><img className='mailIcon' src={iconMail} alt='Mail'/><a className='email' href="mailto:elena.mogunova@gmail.com"> paw-tastic@gmail.com</a></span>
                </div>
            </div>
        </div>

    </div>
    
)
}

export default Home;
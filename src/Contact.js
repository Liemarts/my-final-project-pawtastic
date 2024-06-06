import iconMail from './Pictures/icons8-email-48.png';
import iconCall from './Pictures/icons8-phone-48.png';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);


function Contact () {
    const container = useRef();

    useGSAP(
        () => {
        gsap.from('.recordTwo', { y: -1100, delay: 1.5, duration: 3, ease: "bounce" }); 
        gsap.from('.recordThree', { y: -1100, delay: 1.5, duration: 3, ease: "bounce" });
        },
    { scope: container }
);

    return <div ref={container}>
    <h1 className='titles'>Контакты</h1>
    
    <div className='contacts'>

        <div className='map'>
            <iframe title="This is a unique title" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2002.677065420317!2d30.3792773!3d59.8711082!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46962feff7b5afd7%3A0x6482e450f2a7a45b!2z0JHRg9GF0LDRgNC10YHRgtGB0LrQsNGPINGD0LsuLCA3NCwg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsIDE5MjIzOA!5e0!3m2!1sru!2sru!4v1649596663945!5m2!1sru!2sru" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className='adress'>
            <h3>Ждем вас ежедневно c 8 до 21ч по адресу:</h3>
            <h4>город Санкт-Петербург, ул.Бухарестская д.74</h4>

            <div className='recordTwo'>
                <p><span><img src={iconCall} alt='Call'/>+7(812) 563 24 17</span></p>
            </div>
            
            <div className='recordThree'>
                <span><img src={iconMail} alt='Mail'/><a className='email' href="mailto:elena.mogunova@gmail.com"> paw-tastic@gmail.com </a></span>
            </div>
        </div>

        
    </div>
    
    
    
    </div>
}

export default Contact;

import imageMain from './Pictures/bgremoved Cat and Dog.png';
import logo from './Pictures/paw-tastic-care-high-resolution-logo-transparent.png';
import imageGrooming from './Pictures/груминг 2.png';
import imageChip from './Pictures/чипирование.png';
import imageDogHandler from './Pictures/кинолог.png';
import imageZooHotel from './Pictures/зоогостиница.png';
import imageDayCare from './Pictures/daycare.png';
import imageFavicon from './Pictures/icons8-cat-footprint-40.png';
import iconNext from './Pictures/icons8-next-page-48.png';
import iconBack from './Pictures/icons8-back-page-48.png';
import iconMail from './Pictures/icons8-email-48.png';
import iconCall from './Pictures/icons8-phone-48.png';
import { clients } from './clients';
import { useState } from 'react';



function Home () {

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
    <div>
        <div className='boxOne'>
            <div>
                <img src={imageMain} alt='Cat and Dog' width="750px"/>
            </div>
            <div className='boxTwo'>
                    <img src= {logo} alt='logo' width="380px" height="238px"/>
                    <h1>для ваших любимых питомцев</h1>
            </div>
        </div>

        <div className='boxThree'>
            <div className='boxFour'>
                <h2 className='title'>12</h2>
                <p className='statisticPar'>квалифицированных специалистов</p>
            </div>
            <div className='boxFour'>
                <h2 className='title'>8</h2>
                <p className='statisticPar'>лет успешной практики</p>
            </div>
            <div className='boxFour'>
                <h2 className='title'>7 360</h2>
                <p className='statisticPar'>довольных клиентов</p>
            </div>
        </div>

        <div className='about'> 
            <h2>Добро пожаловать "Paw-tastic Care"!</h2>
            <span><p className='par'><img src={imageFavicon} width="20px" height="20px" alt='fav'/> Мы успешно работаем уже более 8 лет и предлагаем широкий спектр услуг для ваших домашних любимцев. Наш салон гордится своим грамотным и профессиональным персоналом, который обеспечит вашим питомцам качественный уход и внимание.</p></span>
            <p className='par'><span><img src={imageFavicon} width="20px" height="20px" alt='fav'/></span> Мы предоставляем весь спектр услуг по уходу, включая стрижку, купание, чистку ушей и зубов, а также консультации кинолога и услуги зоогостиницы. Наши мастера всегда стремятся создать комфортную атмосферу для вашего питомца и обеспечить ему максимальный комфорт во время процедур.</p>
            <p className='par'><span><img src={imageFavicon} width="20px" height="20px" alt='fav'/> У нас удобный график работы – 24/7. Внимательный персонал обеспечивает индивидуальный подход к каждому клиенту. Возможна предварительная запись. Мы предлагаем доступные цены на услуги и регулярно проводим акции.</span></p>
            <p className='par'>Не упустите возможность привести своего пушистого друга в наш салон и подарить ему заботу и внимание, которых он заслуживает. Мы рады видеть вас и ваших питомцев в числе наших постоянных клиентов!</p>
        </div>

        <div className='block'>
            <h2 className='title'>Наши основные направления</h2>
            <div className='boxFive'>
                <div className='order'>
                    <img src={imageGrooming} width="200px" height="200px" alt='grooming'/>
                    <h3>ГРУМИНГ</h3>
                </div>

                <div className='order'>
                    <img src={imageChip} width="200px" height="200px" alt='grooming'/>
                    <h3>ЧИПИРОВАНИЕ</h3>
                </div>

                <div className='order'>
                    <img src={imageDogHandler} width="200px" height="200px" alt='grooming'/>
                    <h3>КИНОЛОГ</h3>
                </div>

                <div className='order'>
                    <img src={imageZooHotel} width="200px" height="200px" alt='grooming'/>
                    <h3>ЗООГОСТИНИЦА</h3>
                </div>

                <div className='order'>
                    <img src={imageDayCare} width="200px" height="200px" alt='grooming'/>
                    <h3>ДЕТСКИЙ САД</h3>
                </div>
            </div>
        </div>

        <div className='block'>
            <h2 className='title'>Любимые клиенты</h2>
            <div className='container pics'>
                <button onClick={previousClient}><img src={iconBack} alt='Back'/></button>
                <img src={image} width="650px" height="400px" alt='client' />
                <button onClick={nextClient}><img src={iconNext} alt='Next'/></button>
            </div>

            <div className='container'>
                <h4>{description}</h4>
            </div>
        </div>

        <div className='block'>
            <h2 className='title'>Контактная информация</h2>
            <div className='boxSix'>
                <h3>Для записи обращайтесь в любое время:</h3>
                <div className='record'>
                    <span><p><img src={iconCall} alt='Call'/> +7(812) 563 24 17</p></span>
                    <span><img src={iconMail} alt='Mail'/><a class="email" href="mailto:elena.mogunova@gmail.com"> paw-tastic@gmail.com</a></span>
                </div>
            </div>
        </div>

    

    </div>
    
)
}

export default Home;
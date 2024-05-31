import iconMail from './Pictures/icons8-email-48.png';
import iconCall from './Pictures/icons8-phone-48.png';


function Contact () {
    return <div>
    <h1 className="title">Контакты</h1>
    
    <div className="contacts">

        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2002.677065420317!2d30.3792773!3d59.8711082!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46962feff7b5afd7%3A0x6482e450f2a7a45b!2z0JHRg9GF0LDRgNC10YHRgtGB0LrQsNGPINGD0LsuLCA3NCwg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsIDE5MjIzOA!5e0!3m2!1sru!2sru!4v1649596663945!5m2!1sru!2sru" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className="adress">
            <h3>Ждем вас ежедневно с 8 до 21ч по адресу:</h3>
            <h4>г.Санкт-Петербург, ул.Бухарестская д.74</h4>

            <div className='recordTwo'>
                <span><p><img src={iconCall} alt='Call'/>+7(812) 563 24 17</p></span>
            </div>
            
            <div>
                <span><img src={iconMail} alt='Mail'/><a class="email" href="mailto:elena.mogunova@gmail.com"> paw-tastic@gmail.com </a></span>
            </div>
        </div>

        
    </div>
    
    
    
    </div>
}

export default Contact;

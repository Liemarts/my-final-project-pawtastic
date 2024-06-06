
import { members } from "./members";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

function Team () {
    const container = useRef();

    useGSAP(
        () => {
        gsap.from('.teamMembers', { opacity: 0, delay: 1, duration: 2, stagger: 0.6 });
        },
    { scope: container }
);

    return <div ref={container}>
        <h2 className="titles">Наша команда</h2>
        
        <div className="teamAbout"> 
            <h3>Встречайте команду сотрудников компании "Paw-tastic Care" - настоящих профессионалов c горячим сердцем и безграничной преданностью своему делу!</h3>

            <h4>Уже много лет эти замечательные люди обеспечивают заботу и радость своим клиентам - пушистым друзьям и их заботливым хозяевам. Каждый из них приносит в работу уникальные навыки, любовь к животным и глубокое понимание того, что значит быть ответственным за благополучие и счастье питомцев.</h4>
            <h4>C "Paw-tastic Care" ваш питомец не просто в хороших руках, он находится под заботой настоящей семьи. И в этой семье каждый сотрудник - надежная опора и верный друг, готовый поделиться своей любовью и заботой c каждым клиентом, который входит в наши двери.</h4>
        </div>

        <div className="team">
            {members.map ((element => {
                const {id, imageMember, name, position} = element;

                return (
                    <div className="teamMembers" key={id}>
                        <img src={imageMember} alt="member" width="200px" />
                        <h3>{name}</h3>
                        <p>{position}</p>
                    </div>
                )
            }))}
        </div>

    </div>
}

export default Team;

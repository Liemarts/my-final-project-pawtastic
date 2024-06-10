import imageGrooming from './Pictures/груминг 2.png';
import imageChip from './Pictures/чипирование.png';
import imageDogHandler from './Pictures/кинолог.png';
import imageZooHotel from './Pictures/зоогостиница.png';
import imageDayCare from './Pictures/daycare.png';

export function Areas () {

    return (<div>

<h2 className='titles'>Наши основные направления</h2>
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
                    <h3>ПЕРЕДЕРЖКА</h3>
                </div>
            </div>

    </div>)
}
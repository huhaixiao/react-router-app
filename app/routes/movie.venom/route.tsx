import venom from './assets/venom.webp';
import venom2 from './assets/venom2.webp';
import venom3 from './assets/venom3.webp';

export default function () {
    return <>
        <div>Venom</div>
        <img src={venom} className='w-96 rounded' />
        <img src={venom2} className='w-96 rounded' />
        <img src={venom3} className='w-96 rounded' />
    </>
}

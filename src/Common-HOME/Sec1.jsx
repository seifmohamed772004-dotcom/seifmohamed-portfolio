import './Sec1.css';
import Sec1Img from '../Assets/PortSeifMohImage.png';
import WBP from '../Common-HOME/WhiteButtonProp.jsx';
import BBP from '../Common-HOME/BorderButtonProp.jsx';
import PlayImg from '../Assets/playicon.png'
import UD2 from '../Assets/UD2.png'

const Sec1Home = () => {
  return (
    <section className='Sec1HomeMain'>
      <img src={Sec1Img} alt='' className='Sec1Img' />

      <section className='ButtonHoldingDiv'>
        <WBP Btntitle='Create Together!' />
    <BBP Btntitle='Watch Demo' Btnimg={PlayImg} />
      </section>


<section className='Sec1Lower'>
<img src={UD2} alt='' className='UD2img'/>

<section className='Sec1LowerRight'>
<div className='Sec1LowerRightDot'></div>

<h1 className='OFW'>Open For Work</h1>
</section>

</section>
    </section>
  );
};

export default Sec1Home;
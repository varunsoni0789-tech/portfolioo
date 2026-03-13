import './Cirtificate.css';
import reactImg from './assets/react.png';
import pyImg from './assets/py.png';

const Cirtificate = () => {
  return (
    <div className='card'id='Certificate'>
      <h1 className='Heading' >Certificates</h1>

      <div className='images-container'>
        <div className='card1'>
          <img src={reactImg} alt="React Certificate" />
        </div>

        <div className='card1'>
          <img src={pyImg} alt="Python Certificate" />
        </div>
      </div>
    </div>
  );
};

export default Cirtificate;

import React from 'react';
import photo1 from './assets/casa.jpg';
import photo2 from './assets/brasov.jpg';
import photo3 from './assets/cluj.jpg';
import photo4 from './assets/constanta.jpg';
import photo5 from './assets/sibiu.jpg';

const App = () => {
  return (
    <div>
      <header>
        <p>
          We've unlocked <br /> spaces <span>worldwide</span>
        </p>
      </header>
      <div className='photos'>
        <img className='big-photo img-fluid' src={photo1} alt='casa' />
        <div className='small-photos'>
          <img className='img-fluid' src={photo2} alt='brasov' />
          <img className='img-fluid' src={photo3} alt='cluj' />
          <img className='img-fluid' src={photo4} alt='constanta' />
          <img className='img-fluid' src={photo5} alt='sibiu' />
        </div>
      </div>
    </div>
  );
};

export default App;

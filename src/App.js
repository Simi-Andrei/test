import React, { useEffect, useState } from 'react';
import photo2 from './assets/brasov.jpg';
import photo3 from './assets/cluj.jpg';
import photo4 from './assets/constanta.jpg';
import photo5 from './assets/sibiu.jpg';

const App = () => {
  const [img, setImg] = useState();

  const imageUrl =
    'https://cdn.budgetyourtrip.com/images/photos/headerphotos/large/romania_sibiu.jpg';

  const fetchImage = async () => {
    const res = await fetch(imageUrl);
    const imageBlob = await res.blob();
    const imageObjectUrl = URL.createObjectURL(imageBlob);
    setImg(imageObjectUrl);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div>
      <header>
        <p>
          We've unlocked <br /> spaces <span>worldwide</span>
        </p>
      </header>
      <div className='photos'>
        <img className='big-photo img-fluid' src={img} alt='casa' />
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

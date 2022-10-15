import React from 'react';
import Massanger from './massanger/Massanger';

const Homeright = () => {
    return (
      <main className='h-screen overflow-y-scroll scrollBar'>
        {/* horaizental line */}
        <div className='my-4'>
          <hr />
        </div>
        {/* massage sitebar part  */}
        <Massanger/>
      </main>
    );
};

export default Homeright;
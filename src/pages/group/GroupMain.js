import React from 'react';
import StatusFeed from '../home/Homemiddle/statusFeed/StatusFeed';

const GroupMain = () => {
    return (
      <>
        <section className='flex flex-col justify-center items-center'>
          <div className="w-full md:w-4/6">
            <StatusFeed />
          </div>
        </section>
      </>
    );
};

export default GroupMain;
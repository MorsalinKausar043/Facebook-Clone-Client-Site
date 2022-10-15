import React from 'react';
import UsersGroupMenu from './LeftMenuData/UsersGroupMenu';
import UsersMenu from './LeftMenuData/UsersMenu';

const Homeleft = () => {
    
    return (
      // left site menu bar app all menu
      <>
        <main className='h-screen overflow-y-scroll scrollBar'>
          <section>
            <UsersMenu />
          </section>
          {/* horaizantal bar  */}
          <div>
            <hr />
          </div>
          {/* left site group data all menu  */}
          <section>
            <UsersGroupMenu />
          </section>
        </main>
      </>
    );
};

export default Homeleft;
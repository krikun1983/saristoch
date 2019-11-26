import React from 'react';
import s from './Main.module.css';
import Navbar from './Navbar/Navbar';
import Content from './Content/Content';

const Main = () => {
  return (
      <main className={s.main}>
        <div className={s.main__block}>
          {/* <Navbar /> */}
          {/* <Content /> */}
        </div>
      </main>
  );
}

export default Main;
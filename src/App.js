import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Grant from './components/Grant/Grant';
import Navbar from './components/Main/Navbar/Navbar';
import s from './components/Main/Main.module.css';
import AboutUs from './components/Header/MenuTop/Link/AboutUs';
import AboutProject from './components/Header/MenuTop/Link/AboutProject';
import Reports from './components/Header/MenuTop/Link/Reports';
import Main from './components/Nav/Link/Main';
import NewsContainer from './components/Nav/Link/NewsContainer';
import Activity from './components/Nav/Link/Activity';
import OurFilms from './components/Nav/Link/OurFilms';
import Questions from './components/Main/Navbar/Link/Questions/Questions';
import PersonsContainer from './components/Main/Navbar/Link/Persons/PersonsContainer';
import UsersContainer from './components/Main/Navbar/Link/Users/UsersContainer';
import Gallery from './components/Nav/Link/Gallery';
import Regions from './components/Nav/Link/Regions';
import Analytics from './components/Nav/Link/Analytics';
import Law from './components/Main/Navbar/Link/Law';
import Recommendations from './components/Main/Navbar/Link/Recommendations';
import Footer from './components/Footer/Footer';
import {Route} from 'react-router-dom';

const App = (props) => {

  return (
      <div>
        <Header />
        <Nav />
        <Grant />
        <main className={s.main}>
          <div className={s.main__block}>
            <div className={s.main__navbar}>
              <Navbar />
            </div>
            <div className={s.main__content}>
              <Route path='/aboutUs' component={AboutUs} />
              <Route path='/aboutProject' component={AboutProject} />
              <Route path='/reports' component={Reports} />

              <Route exact path="/" component={Main} />
              {/* <Route path='/news' component={News} /> */}
              <Route path='/news' render={ () => <NewsContainer />} />
              <Route path='/activity' component={Activity} />
              <Route path='/analytics' component={Analytics} />
              <Route path='/ourFilms' component={OurFilms} />
              <Route path='/gallery' component={Gallery} />
              <Route path='/regions' component={Regions} />

              <Route path='/questions' render={ () => <Questions /> } />
              <Route path='/persons' render={ () => <PersonsContainer /> } />
              <Route path='/users' render={ () => <div><UsersContainer /></div> } />
              <Route path='/law' component={Law} />
              <Route path='/recommendations' component={Recommendations} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
  );
}

export default App;

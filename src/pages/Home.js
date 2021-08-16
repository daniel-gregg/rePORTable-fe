import React from 'react';
import '../components/Report/report.scss';
import '../components/styles.scss';
import Typical from 'react-typical';
import { Link } from 'react-router-dom';

import HomePageEditor from '../components/Report/HomePageEditor';

const Home = () => {
  return (
    <section>
      <div className="homePageHero1">
        <Typical
          className="text-6xl text-center text-grey font-bold leading-loose"
          loop={Infinity}
          steps={[
            'rePORTable',
            2000,
            'rich-text documents',
            2000,
            'strong permissioning framework',
            2000,
            'publish to your cms',
            2000,
            'writers marketplace',
            2000,
          ]}
        />
      </div>
      <div className="homePageHero2">
        <HomePageEditor />
      </div>
      <div className="homePageContainer">
        <Link to={`/about`} className="homePageBox">
          <p className="text-xl text-center align-otems-center text-grey font-bold leading-loose">About</p>
        </Link>
        <div className="homePageBox">
          <p className="text-xl text-center text-grey font-bold leading-loose">Market Place (coming soon!)</p>
        </div>
      </div>
    </section>
  );
};

export default Home;

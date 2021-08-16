import React from 'react';
import '../components/Report/report.scss';
import '../components/styles.scss';

const Home = () => {
  return (
    <section className="">
      <div className="aboutHero1">
        <p className="text-6xl text-center text-grey font-bold leading-loose">rePORTable</p>
      </div>
      <div className="aboutHero2">
        <p className="text-xl text-center text-grey font-bold leading-loose">
          rePORTable is a dynamic reporting application that provides for core requirements of technical writers. It to
          provide a framework for structuring large, complex, and technical reports within a team-based framework. Using
          a rich-text document model built on Tip-Tap/ProseMirror, rePORTable adds team-based organisational
          functionality. In the near future we will be seeking to add functionality to:
        </p>
      </div>
      <div className="aboutContainer">
        <div className="aboutBox">
          <p className="text-m text-center align-otems-center text-grey font-bold leading-loose">
            Export documents to popular CMS frameworks (e.g. Gatsby)
          </p>
        </div>
        <div className="aboutBox">
          <p className="text-m text-center align-otems-center text-grey font-bold leading-loose">
            Add improved team/user functionality and visibility including a teams/private messages component
          </p>
        </div>
        <div className="aboutBox">
          <p className="text-m text-center align-otems-center text-grey font-bold leading-loose">
            Provide for partitioning of larger documents and for separate permissions over separate document components
          </p>
        </div>
        <div className="aboutBox">
          <p className="text-m text-center align-otems-center text-grey font-bold leading-loose">
            Target the creation of a marketplace for trade in technical writing services that are fully traceable,
            original, and anonymous
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;

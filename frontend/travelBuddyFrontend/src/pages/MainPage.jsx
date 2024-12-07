import { StyledContainer } from './MainPageStyles';
import { useRef } from 'react';
import backgroundImage from '../assets/backgroud-first.jpg';

const MainPage = () => {
  const sectionRefs = {
    start: useRef(null),
    recent: useRef(null),
    meet: useRef(null),
    add: useRef(null), // Zmienione na useRef
  };

  return (
    <StyledContainer>
      <section className="start" ref={sectionRefs.start}>
        <img src={backgroundImage} alt="foto" className="background-image" />
        <div className="overlay"></div>
      </section>

      <section className="trvel-type">What is your travel style?</section>
      <section className="recent" ref={sectionRefs.recent}>
        Recent content
      </section>
      <section className="add" ref={sectionRefs.add}>
        Add content
      </section>
      <section className="travelers" ref={sectionRefs.meet}>
        Meet content
      </section>
      <section className="how">How it works?</section>
      <footer className="footer">stópka</footer>
    </StyledContainer>
  );
};

export default MainPage;

import { StyledContainer } from './MainPageStyles';
import backgroundImage from '../assets/backgroud-first.jpg';
import TravelStyle from '../components/TravelStyle/TravelStyle';

const MainPage = () => {
  return (
    <StyledContainer>
      <section className="start" id="start">
        <img src={backgroundImage} alt="foto" className="background-image" />
        <div className="overlay"></div>
      </section>

      <TravelStyle />
      <section className="recent" id="recent">
        Recent content
      </section>
      <section className="add">Add content</section>
      <section className="meet" id="meet">
        Meet content
      </section>
      <section className="how">How it works?</section>
      <footer className="footer">stópka</footer>
    </StyledContainer>
  );
};

export default MainPage;

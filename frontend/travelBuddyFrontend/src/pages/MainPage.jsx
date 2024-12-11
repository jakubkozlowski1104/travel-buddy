import { StyledContainer } from './MainPageStyles';
import backgroundImage from '../assets/backgroud-first.jpg';
import TravelStyle from '../components/TravelStyle/TravelStyle';
import RecentTrips from '../components/RecentTrips/RecentTrips';

const MainPage = () => {
  return (
    <StyledContainer>
      <section className="start" id="start">
        <img src={backgroundImage} alt="foto" className="background-image" />
        <div className="overlay"></div>
      </section>

      <TravelStyle />
      <RecentTrips className="recent" id="recent" />
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

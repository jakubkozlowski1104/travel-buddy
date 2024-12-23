import { StyledContainer } from './MainPageStyles';
import backgroundImage from '../assets/backgroud-first.jpg';
import TravelStyle from '../components/TravelStyle/TravelStyle';
import RecentTrips from '../components/RecentTrips/RecentTrips';
import StartTripBanner from '../components/StartTripBanner/StartTripBanner';
import MeetPeople from '../components/MeetPeople/MeetPeople';

const MainPage = () => {
  return (
    <StyledContainer>
      <section className="start" id="start">
        <img src={backgroundImage} alt="foto" className="background-image" />
        <div className="overlay"></div>
      </section>

      <TravelStyle />
      <RecentTrips className="recent" id="recent" />
      <StartTripBanner className="add" />
      <MeetPeople className="meet" id="meet" />
      <section className="how">How it works?</section>
      <footer className="footer">stópka</footer>
    </StyledContainer>
  );
};

export default MainPage;

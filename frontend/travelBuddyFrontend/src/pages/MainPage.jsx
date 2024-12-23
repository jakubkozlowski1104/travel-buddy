import { StyledContainer } from './MainPageStyles';
import backgroundImage from '../assets/backgroud-first.jpg';
import TravelStyle from '../components/TravelStyle/TravelStyle';
import RecentTrips from '../components/RecentTrips/RecentTrips';
import StartTripBanner from '../components/StartTripBanner/StartTripBanner';
import MeetPeople from '../components/MeetPeople/MeetPeople';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Footer from '../components/Footer/Footer';

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
      <HowItWorks className="how" />
      <Footer className="footer" />
    </StyledContainer>
  );
};

export default MainPage;

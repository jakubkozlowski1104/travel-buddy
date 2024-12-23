import { StyledContainer } from './MainPageStyles';
import backgroundImage from '../assets/backgroud-first.jpg';
import TravelStyle from '../components/TravelStyle/TravelStyle';
import RecentTrips from '../components/RecentTrips/RecentTrips';
import StartTripBanner from '../components/StartTripBanner/StartTripBanner';
import MeetPeople from '../components/MeetPeople/MeetPeople';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Footer from '../components/Footer/Footer';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const MainPage = () => {
  return (
    <StyledContainer>
      <section className="start" id="start">
        <img src={backgroundImage} alt="foto" className="background-image" />
        <div className="overlay"></div>
        <div className="center">
          <div className="info">
            <div className="slogan">FIND A TRAVEL BUDDY</div>
            <div className="description">
              Going on a trip? Meet people who love to travel. <br /> Share your
              adventures with a travel companion.
            </div>
            <form action="">
              <div className="search-bar">
                <i className="search-icon">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </i>
                <input type="text" placeholder="Search trip destination" />
                <Button color="own" variant="contained" className="btn">
                  SEARCH
                </Button>
              </div>
            </form>
          </div>
        </div>
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

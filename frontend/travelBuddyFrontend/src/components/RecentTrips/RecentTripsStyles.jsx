import styled from '@emotion/styled';
import palette from '../../themes/pallete';

export const StyledRecentTrips = styled.div`
  position: relative;
  margin-top: 5vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 50px;

  .center {
    display: flex;
    justify-content: center;
    .banner {
      width: 70vw;
      display: flex;
      align-items: center;
      h1 {
        font-size: 2rem;
      }
      .slogan {
        flex-grow: 1;
        color: ${palette.primary.lightBlue};
        font-size: 1rem;
        margin-top: 20px;
        font-weight: 400;
        margin-left: 20px;
      }
      .search {
        display: flex;
        align-items: center;
        font-size: 1rem;
        display: flex;

        i {
          font-size: 1.8rem;
          padding: 10px;
          color: ${palette.primary.lightBlue};
        }
      }
    }
  }
`;

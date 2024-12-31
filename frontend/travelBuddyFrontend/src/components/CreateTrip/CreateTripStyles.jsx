import styled from '@emotion/styled';
import palette from '../../themes/pallete';

export const StyledCreateTripContainer = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 10px;
  height: 85vh;
  margin-top: 20px;
  font-family: 'Lato', sans-serif;

  .center {
    position: relative;
    z-index: 3;
    width: 300px;
    height: 100%;
    width: 66%;
    margin: auto;
    text-align: center;

    .banner {
      font-size: 2.3rem;
    }

    .forms {
      margin-top: 50px;
      height: 100%;
      padding: 10px;
      display: flex;
      justify-content: space-around;
      gap: 30px;
      background-color: red;
    }
  }
`;

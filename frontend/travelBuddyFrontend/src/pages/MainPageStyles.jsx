import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  position: relative;
  top: -20vh;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500vh;
  width: 100vw;
  max-width: 100%;
  overflow-x: hidden;
  font-family: 'Lato', sans-serif;
  background-color: #f8f8f8;

  .start {
    background-color: #72e7ff;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: flex-start;

    .background-image {
      position: absolute;
      top: 0vh;
      left: 0;
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 90;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 10;
    }
  }
  .recent {
    background-color: #ff66d6;
    height: 90vh;
  }
  .add {
    background-color: #23ff89;
    height: 70vh;
  }
  .meet {
    background-color: #4fffd9;
    height: 50vh;
  }
  .how {
    background-color: blue;
    height: 10vh;
  }
  .footer {
    background-color: #494949;
    height: 15vh;
  }
`;

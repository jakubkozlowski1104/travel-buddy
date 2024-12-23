import styled from '@emotion/styled';

export const StyledNav = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  font-family: 'Lato', sans-serif;
  nav {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 11vh;
    color: white;
    display: flex;
    padding: 20px 250px;
    justify-content: space-between;
    align-items: center;
    transition: 0.3s;
    background: linear-gradient(90deg, #5ca2d3, #75d5ee);

    .logo {
      transition: 0.3s;
      width: 13%;
    }

    .buttons {
      display: flex;
      justify-content: center;

      button {
        margin: 10px;
        font-weight: bold;
        letter-spacing: 0.5px;
      }
    }
  }

  nav > * {
    margin: 10px;
  }

  nav.scrolled {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    color: white;
    display: flex;
    padding: 20px 250px;
    justify-content: space-between;
    align-items: center;
    transition: 0.3s;
    background: linear-gradient(90deg, #004475, #75d5ee);
    position: sticky;
    height: 7vh;
    border-bottom: 4px solid #2cb9ff;
    z-index: 100;

    .logo {
      transition: 0.3s;
      width: 10%;
    }
  }
`;

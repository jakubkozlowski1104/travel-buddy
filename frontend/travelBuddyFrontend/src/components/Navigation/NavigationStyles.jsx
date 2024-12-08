import styled from '@emotion/styled';

export const StyledNav = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 3;
  nav {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 20vh;
    color: white;
    display: flex;
    padding: 20px 250px;
    justify-content: space-between;
    align-items: center;
    transition: 0.3s;

  
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
    top: 0;
    left: 0;
    width: 100%;
    color: white;
    display: flex;
    padding: 20px 250px;
    justify-content: space-between;
    align-items: center;
    transition: 0.3s;
    background-color: #486b6a;
    position: sticky;
    height: 9vh;
    border-bottom: 2px solid #2cb9ff;
  }
`;

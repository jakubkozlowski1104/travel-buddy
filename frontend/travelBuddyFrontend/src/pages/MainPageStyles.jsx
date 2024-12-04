import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500vh;
  width: 100%;
  background-color: #eddbdb;

  nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 20vh;
    color: white;
    z-index: 5;
    display: flex;
    padding: 20px 250px;
    justify-content: space-between;
    align-items: center;

    .logo {
    }

    .menu {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 20px;
      flex: 5;
      background-color: #2cb9ff;

      li {
        text-transform: uppercase;
        font-weight: bold;
        margin: 5px 10px;
        list-style-type: none;
        font-size: 1rem;
      }
    }
    .login {
      flex: 1;
    }
    .language {
      justify-content: center;
      flex: 1;
    }
  }

  .banner {
    background-color: #72e7ff;
    height: 130vh;
    width: 100%;
    display: flex;
    justify-content: flex-start;

    .background-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      object-fit: cover;
      z-index: 1;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: rgba(0, 41, 45, 0.4);
      z-index: 2;
    }
  }

  .trvel-type {
    background-color: #2cb9ff;
    height: 60vh;
  }
  .recent {
    background-color: #ff66d6;
    height: 90vh;
  }
  .meet-people {
    background-color: #23ff89;
    height: 70vh;
  }
  .travelers {
    background-color: #4fffd9;
    height: 50vh;
  }
  .how {
    background-color: blue;
    height: 80vh;
  }
  footer {
    background-color: #494949;
    height: 15vh;
  }
`;

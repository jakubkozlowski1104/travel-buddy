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

    .menu {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0 20px;
      flex: 5;

      li.active {
        color: #48f3ff;
      }

      li:hover {
        color: #d0fcff;
      }

      li {
        text-transform: uppercase;
        font-weight: bold;
        margin: 5px 10px;
        list-style-type: none;
        font-size: 1rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        cursor: pointer;
        border-radius: 50px;
        padding: 10px 5px;
        white-space: nowrap;
      }
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
    .language {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;

      div {
        margin: 5px;
      }

      .circle {
        position: relative;
        width: 55px;
        height: 55px;
        background-color: green;
        border-radius: 50%;
        border: 2px solid black;
        cursor: pointer;

        img {
          width: 100%;
        }

        .dropdown.open {
          max-height: 180px;
        }

        .dropdown {
          position: absolute;
          top: -7px;
          left: calc(50% - 32.5px);
          width: 55px;
          max-height: 0;
          overflow: hidden;
          border-radius: 50px;
          display: flex;
          flex-direction: column;
          transition: max-height 0.5s ease-in-out;
          img {
            padding: 3px;
          }
        }
      }

      .name {
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
    height: 20vh;
    color: white;
    display: flex;
    padding: 20px 250px;
    justify-content: space-between;
    align-items: center;
    transition: 0.3s;

    background-color: #486b6a;
    position: sticky;
    height: 12vh;
    border-bottom: 2px solid #2cb9ff;
  }
`;

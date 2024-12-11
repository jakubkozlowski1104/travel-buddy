import styled from '@emotion/styled';

export const StyledLanguageSelect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-family: 'Lato', sans-serif;

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
`;

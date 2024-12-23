import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  max-width: 100%;
  overflow-x: hidden;
  font-family: 'Lato', sans-serif;
  min-height: 100vh; /* Zapewnia pełną wysokość widoku */

  .start {
    position: absolute;
    top: -10vh;
    background-color: #72e7ff;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    position: relative;

    .background-image {
      position: absolute;
      top: -20vh; /* Przywrócenie przesunięcia na obraz */
      left: 0;
      width: 100%;
      height: calc(100vh + 20vh); /* Umożliwia pokrycie całego obszaru */
      object-fit: cover;
    }

    .overlay {
      position: absolute;
      top: -20vh; /* Dopasowanie do obrazu */
      left: 0;
      width: 100%;
      height: calc(100vh + 20vh); /* Dopasowanie do obrazu */
      background-color: rgba(0, 0, 0, 0.3);
      z-index: 10;
    }
  }

  .footer {
    background-color: blue;
    width: 100%;
    height: 15vh;
    margin-top: auto; /* Stopka zawsze na dole */
  }
`;

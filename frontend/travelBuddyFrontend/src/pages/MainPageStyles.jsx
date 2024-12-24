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
      background-color: rgba(0, 0, 0, 0.4);
      z-index: 10;
    }

    .center {
      width: 66%;
      height: 85vh;
      z-index: 10;
      top: 100px;
      width: 65.5%;
      margin: auto;

      .info {
        color: white;
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
        gap: 0px;

        .slogan {
          font-size: 3.5rem;
          font-weight: bold;
        }

        .description {
          font-size: 1.7rem;
          line-height: 1.2;
        }

        form {
          position: absolute;
          bottom: 7vh;
          display: flex;
          justify-content: center;
          align-items: baseline;

          .search-bar {
            display: flex;
            align-items: center;
            background: linear-gradient(90deg, #004475, #4db8d3);
            border-radius: 20px;
            padding: 10px 30px;
            width: 800px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            font-size: 1.5rem;

            .search-icon {
              font-size: 30px;
              color: white;
              margin-right: 20px;
            }

            input {
              border: none;
              outline: none;
              background: transparent;
              color: white;
              font-size: 1.6rem;
              width: 100%;
              font-family: 'Lato', sans-serif;

              &::placeholder {
                color: rgba(255, 255, 255, 0.8);
              }
            }
          }

          .btn {
            background-color: #43d0d7;
            margin-right: -20px;
            border-radius: 15px;
            padding: 12px 25px;
            font-weight: bold;
            font-size: 1.1rem;
          }
        }
      }
    }
  }
`;

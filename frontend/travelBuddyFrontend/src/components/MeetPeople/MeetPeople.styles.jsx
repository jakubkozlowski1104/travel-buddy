import styled from '@emotion/styled';
import palette from '../../themes/pallete';

export const StyledMeetContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  flex: 1;
  font-family: 'Lato', sans-serif;
  width: 100%;
  margin: 40px;
  transition: 1s;
  transition: 0.3s;

  .center-header {
    width: 66%;
    justify-content: center;
    margin: auto;

    .banner {
      width: 66vw;
      display: flex;
      align-items: center;
      margin-left: 5px;
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
    }
  }

  .center {
    transition: 1s;
    position: relative;
    z-index: 3;
    width: 300px;
    height: 200px;
    width: 66%;
    justify-content: center;
    margin: auto;
    transition: 0.3s;

    .left-arrow {
      cursor: pointer;
      position: absolute;
      top: calc(50% - 40px); /* 50% od góry minus połowa wysokości */
      left: -68px;
      width: 50px;
      height: 80px;
      background-color: #0f5987;
      display: flex;
      justify-content: center;
      align-items: center;

      i {
        color: white;
        font-size: 40px;
      }
    }

    .right-arrow {
      cursor: pointer;
      position: absolute;
      top: calc(50% - 40px); /* 50% od góry minus połowa wysokości */
      right: -68px;
      width: 50px;
      height: 80px;
      background-color: #0f5987;
      display: flex;
      justify-content: center;
      align-items: center;

      i {
        color: white;
        font-size: 40px;
      }
    }
    .people-wrapper {
      overflow: hidden;
      width: 100%;
      position: relative;
      transition: 0.3s;
      .people {
        display: flex;
        gap: 0px;
        height: 100%;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        will-change: transform;

        .person {
          display: flex;
          flex-direction: column;
          width: 400px;
          height: 100%;
          .top {
            position: relative;
            display: flex;
            justify-content: center;
            flex: 1;
            overflow: hidden;

            img {
              width: 93%;
            }

            .user-info {
              position: absolute;
              bottom: 3px;
              left: 15px;
              color: white;
              font-size: 1.1rem;
              text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
            }
          }

          .bottom {
            display: flex;

            .chat,
            .wave {
              cursor: pointer;
              padding: 5px;
              flex: 1;
              text-align: center;
              font-size: 1.1rem;
              color: #0f5987; /* Kolor początkowy tekstu */
              transition: color 0.3s; /* Animacja zmiany koloru tekstu */

              i {
                color: #0f5987; /* Kolor początkowy ikony */
                transition: color 0.3s; /* Animacja zmiany koloru ikony */
              }

              &:hover {
                color: red; /* Kolor tekstu po najechaniu */
              }

              &:hover i {
                color: red; /* Kolor ikony po najechaniu */
              }
            }

            .wave {
              position: relative;
            }

            .wave:after {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              height: 90%;
              width: 3px;
              background-color: #0f5987; /* Pasek obok tekstu */
              transition: background-color 0.3s; /* Dodanie płynności zmiany koloru (opcjonalne) */
            }

            /* Usunięcie zmiany koloru pseudo-elementu przy hover */
            .wave:hover {
              color: red; /* Kolor tekstu na czerwony */
            }

            .wave:hover:after {
              background-color: #0f5987; /* Pasek pozostaje niezmieniony */
            }
          }
        }
      }
    }
  }
`;

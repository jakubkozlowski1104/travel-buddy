import styled from '@emotion/styled';
import palette from '../../themes/pallete';

export const StyledRecentTrips = styled.div`
  position: relative;
  margin-top: 5vh;
  width: 100vw;
  min-height: 1200px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 50px;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  margin-bottom: -100px;

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;

    .banner {
      width: 66vw;
      display: flex;
      align-items: center;
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
      .search {
        display: flex;
        align-items: center;
        font-size: 1rem;
        display: flex;

        i {
          font-size: 1.8rem;
          padding: 10px;
          color: ${palette.primary.lightBlue};
        }
      }
    }

    .trips-container {
      width: 66vw;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 55px;

      .item {
        position: relative;
        flex-basis: 20vw;
        height: 50vh;
        display: flex;
        flex-direction: column;
        background-color: white;

        .time-left {
          top: 2vh;
          right: 1vw;
          position: absolute;
          height: 35px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          border-radius: 50px;
          padding: 10px 20px;
          font-size: 1rem;
          background: linear-gradient(
            90deg,
            #004e92,
            ${palette.primary.lightBlue}
          );
        }

        .img {
          width: 100%;
          height: 55%;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .details {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          position: relative;
          padding: 20px 15px;
          padding-bottom: 10px;
          box-shadow: 20px 10px 50px rgba(0, 0, 0, 0.3);
          background-color: white;

          .user {
            position: absolute;
            top: -6vh;
            left: 1.4vw;
            display: flex;
            flex-direction: column;

            .icon {
              width: 80px;
              height: 80px;
              border-radius: 50px;
              background-color: blue;

              img {
                width: 100%;
                height: 100%;
                border-radius: 50px;
                object-fit: cover;
                border: 2px solid aqua;
              }
            }

            .name {
              margin: 0;
              padding: 0;
              font-size: 1.2rem;

              span {
                font-size: 1rem;
                font-weight: 400;
                color: gray;
              }
            }
          }

          h1 {
            padding: 15px;
            margin: 0;
            font-size: 1.4rem;
            padding-top: 40px;
            padding-bottom: 2px;
          }

          .bottom-info {
            display: flex;
            flex-grow: 1;

            .left-info {
              flex-grow: 1;
              display: flex;
              flex-direction: column;
              justify-content: center;

              .more-info {
                display: flex;
                align-items: center;
                gap: 7px;
                padding: 2px 20px;
                border-right: 1px solid lightgray;
                margin-right: 10px;

                i {
                  padding: 0;
                  margin: 0;
                  font-size: 1rem;
                  font-weight: 500;
                  color: ${palette.primary.lightBlue};
                }

                p {
                  padding: 0;
                  margin: 0;
                  font-size: 1rem;
                  font-weight: 500;
                }
              }
            }

            .right-info {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              padding: 5px;
              padding-top: 10px;

              .price-name {
                display: flex;
                flex-direction: column;
                margin: 0;
                padding: 0;
                font-size: 0.8rem;
                align-items: center;
                font-weight: 400;

                .budget {
                  padding: 0;
                  margin-bottom: -7px;
                  padding-top: 3px;
                }
              }

              .price {
                font-size: 2rem;
                color: #0058ca;
                font-family: 'Lato', sans-serif;

                margin: 0;
                padding: 0;
                margin-top: -3px;
              }
            }
          }
        }
      }
    }
  }
`;

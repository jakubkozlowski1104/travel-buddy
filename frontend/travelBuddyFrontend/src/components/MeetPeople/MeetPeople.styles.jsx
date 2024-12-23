import styled from '@emotion/styled';

export const StyledMeetContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-family: 'Lato', sans-serif;
  width: 100%;
  margin: 40px;

  .center {
    position: relative;
    z-index: 3;
    width: 300px;
    height: 200px;
    width: 66%;
    justify-content: center;
    margin: auto;

    .people {
      display: flex;
      gap: 0px;
      height: 100%;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

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
            font-size: 1.3rem;
          }
        }

        .bottom {
          display: flex;
          .chat,
          .wave {
            padding: 5px;
            flex: 1;
            text-align: center;
            font-size: 1.1rem;
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
            background-color: #6fceee;
          }
        }
      }
    }
  }
`;

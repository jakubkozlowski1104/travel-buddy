import styled from '@emotion/styled';

export const StyledMeetContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-family: 'Lato', sans-serif;
  background-color: red;
  width: 100%;
  margin: 40px;

  .center {
    position: relative;
    z-index: 3;
    width: 300px;
    height: 280px;
    width: 66%;
    justify-content: center;
    margin: auto;

    .people {
      display: flex;
      gap: 35px;
      height: 100%;

      .person {
        display: flex;
        flex-direction: column;
        background-color: blue;
        width: 400px;
        height: 100%;

        .top {
          position: relative;
          flex: 1;
          background-color: yellow;

          .user-info {
            position: absolute;
            bottom: 3px;
            left: 5px;
          }
        }

        .bottom {
          display: flex;
          .chat,
          .wave {
            padding: 5px;
            border: 1px solid red;
            flex: 1;
            text-align: center;
          }
        }
      }
    }
  }
`;

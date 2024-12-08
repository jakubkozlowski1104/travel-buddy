import styled from '@emotion/styled';
import palette from '../../themes/pallete';

export const StyledTravelStyles = styled.div`
  position: relative;
  margin-top: 5vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .center {
    display: flex;
    justify-content: center;
    .banner {
      width: 70vw;
      display: flex;
      align-items: center;

      .scroll-left {
        position: absolute;
        background-color: red;
        top: 20vh;
        left: 0;
        width: 50px;
        height: 200px;
        z-index: 15;
      }

      .scroll-right {
        position: absolute;
        top: 0;
        right: 0;
        top: 20vh;

        background-color: red;
        width: 50px;
        height: 200px;
        z-index: 15;
      }
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
  }

  .container {
    position: relative;
    display: flex;
    justify-content: center;
    width: 3000px;
    gap: 30px;


    }

    .item {
      position: relative;
      flex-basis: 500px;
      height: 400px;
      background-color: rosybrown;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .info {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        color: white;
        display: flex;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0;
        padding: 12px 23px;

        h2 {
          margin: 0;
        }

        p {
          margin: 0;
        }
      }
    }
  }
`;

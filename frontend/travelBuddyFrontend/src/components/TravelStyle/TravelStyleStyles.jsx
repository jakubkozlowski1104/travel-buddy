import styled from '@emotion/styled';
import palette from '../../themes/pallete';

export const StyledTravelStyles = styled.div`
  position: relative;
  margin-top: 10vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 40px;  

  .center {
    display: flex;
    justify-content: center;
    .banner {
      width: 65vw;
      display: flex;
      align-items: center;

      .scroll-left {
        position: absolute;
        top: 10.3vh;
        left: 0;
        width: 150px;
        height: 400px;
        z-index: 15;
        cursor: pointer;
        max-width: 100vw;
        overflow: hidden;
        background: linear-gradient(
          to right,
          rgba(70, 212, 255, 1),
          rgba(70, 212, 255, 0)
        );
      }

      .scroll-right {
        position: absolute;
        top: 10.3vh;
        right: 0;
        cursor: pointer;
        width: 150px;
        height: 44vh;
        z-index: 15;
        max-width: 100vw;
        overflow: hidden;
        background: linear-gradient(
          to left,
          rgba(70, 212, 255, 1),
          rgba(70, 212, 255, 0)
        );
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
    overflow-x: auto;
    overflow-y: hidden;
    position: relative;
    display: flex;
    width: 100%;
    overflow-x: auto;
    gap: 30px;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .item {
    position: relative;
    flex: 0 0 500px;
    height: 400px;
    background-color: rosybrown;
    transition: 0.4s;
    cursor: pointer;
    overflow: hidden;

    img {
      transition: 0.4s;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0);
      transition: background-color 0.3s ease;
      pointer-events: none;
    }

    &::before {
      content: '${(props) => props.translation}'; /* Use prop for content */
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
      text-align: center;
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 2;
    }

    &:hover img {
      transform: scale(1.1);
    }

    &:hover::after {
      background-color: rgba(0, 0, 0, 0.2);
    }

    &:hover::before {
      opacity: 1;
    }

    .info {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      color: white;
      display: flex;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      align-items: center;
      justify-content: space-between;
      padding: 12px 23px;
      margin-bottom: 20px;

      h2 {
        margin: 0;
      }

      p {
        margin: 0;
      }
    }
  }
`;


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

        top: 10.3vh;
        left: 0;
        width: 50px;
        height: 400px;
        z-index: 15;
        cursor: pointer;
        background: linear-gradient(
          to right,
          rgba(70, 212, 255, 1),
          rgba(70, 212, 255, 0)
        );
      }

      .scroll-right {
        position: absolute;
        top: 0;
        right: 0;
        top: 10.3vh;
        cursor: pointer;
        width: 50px;
        height: 44vh;
        z-index: 15;
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
    position: relative;
    display: flex;
    width: 100%; /* Ensure it spans the parent width */
    overflow-x: auto; /* Allow horizontal scrolling */
    gap: 30px;

    &::-webkit-scrollbar {
      display: none; /* Optional: Hide the scrollbar for a cleaner UI */
    }
  }

  .item {
    position: relative;
    flex: 0 0 500px; /* Ensure fixed width for each item */
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
      align-items: center;
      justify-content: space-between;
      padding: 12px 23px;

      h2 {
        margin: 0;
      }

      p {
        margin: 0;
      }
    }
  }
`;
import styled from '@emotion/styled';
import palette from '../../themes/pallete';

export const StyledStartContainer = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 10px;
  height: 75vh;
  margin-top: 70px;

  .img {
    position: absolute;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 35%;
    }
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 44, 75, 0.4);
    z-index: 2;
  }

  .center {
    position: relative;
    z-index: 3;
    width: 300px;
    height: 280px;
    width: 66%;
    justify-content: center;
    margin: auto;

    .img-logo {
      position: absolute;
      right: 0;
      bottom: -70px;
      padding: 0;
      margin: 0;
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
      color: white;

      .slogan {
        font-weight: 900;
        font-size: 3rem;
      }

      .description {
        width: 50%;
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.2;
      }

      .bottom {
        display: flex;
        align-items: center;
        gap: 10px;

        .btn {
          font-size: 1.2rem;
          text-transform: uppercase;
          font-weight: 500;
          letter-spacing: 1px;
          padding: 5px 15px;
        }

        .btn:hover {
          background-color: #9bf3ff;
        }

        .text {
          margin-left: 20px;
        }
      }
    }
  }
`;

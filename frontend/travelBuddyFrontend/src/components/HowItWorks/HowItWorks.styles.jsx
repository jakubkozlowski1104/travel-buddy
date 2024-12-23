import styled from '@emotion/styled';
import palette from '../../themes/pallete';

export const StyledHowItWorks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  font-family: 'Lato', sans-serif;
  width: 100%;
  transition: 1s;
  transition: 0.3s;
  padding: 90px 0;

  .center {
    width: 65.5%;
    margin: auto;

    .items {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .slogan {
        display: flex;
        flex-direction: column;
        justify-items: center;

        h2 {
          font-size: 2.1rem;
          padding: 0;
          margin: 0;
        }

        .names {
          display: flex;

          p {
            font-size: 1.1rem;
            padding: 0;
            margin: 0;
            color: ${palette.primary.lightBlue};
          }
        }
      }

      .item {
        display: flex;
        justify-content: center;
        align-items: center;

        .graphic {
          background: linear-gradient(90deg, #004475, #75d5ee);
          width: 100px;
          height: 100px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 20px;

          i {
            color: white;
            font-size: 2.4rem;
          }
        }

        .info {
          display: flex;
          flex-direction: column;
          h4 {
            padding: 0;
            margin: 0;
            font-size: 1.4rem;
          }

          p {
            font-size: 1.1rem;
            padding: 0;
            margin: 0;
            color: ${palette.primary.lightBlue};
          }
        }
      }
    }
  }
`;

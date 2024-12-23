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
  padding: 50px 0;

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
          font-size: 1.9rem;
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
          background: linear-gradient(135deg, #074a7a, #4db8d3);
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 20px;

          i {
            color: white;
            font-size: 2.2rem;
          }
        }

        .info {
          display: flex;
          flex-direction: column;
          h4 {
            padding: 0;
            margin: 0;
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

import styled from '@emotion/styled';
import palette from '../../themes/pallete';

export const StyledSettingsContainer = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 10px;
  height: 85vh;
  margin-top: 20px;
  font-family: 'Lato', sans-serif;

  .center {
    position: relative;
    z-index: 3;
    width: 300px;
    height: 100%;
    width: 66%;
    margin: auto;
    text-align: center;

    .banner {
      font-size: 2.3rem;
    }

    .forms {
      height: 100%;
      padding: 10px;
      display: flex;
      justify-content: space-around;
      gap: 20px;

      .photo-form {
        flex: 1;
      }
      .details {
        flex: 1;

        .form {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          gap: 10px;

          label {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: bold;
            width: 100%;

            input,
            textarea,
            select {
              padding: 8px;
              border: 1px solid black;
              width: 50%;
            }

            span {
              font-size: 1rem;
            }

            select[multiple] {
              height: auto;
              width: 100%;
              padding: 10px;
              border: 1px solid black;
            }
          }

          button {
            margin-top: 20px;
            width: 50%;
            padding: 10px;
            font-weight: bold;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
          }
        }
      }
    }
  }
`;

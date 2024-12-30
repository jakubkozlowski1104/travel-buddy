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
            font-weight: bold;
            width: 100%;

            input,
            textarea {
              padding: 8px;
              border: 1px solid #ccc;
              border-radius: 5px;
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

            &:hover {
              background-color: #0056b3;
            }
          }
        }
      }
    }
  }
`;

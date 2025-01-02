import styled from '@emotion/styled';
import palette from '../../themes/pallete';

export const StyledCreateTripContainer = styled.div`
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
    width: 66%;
    margin: auto;
    text-align: center;

    .banner {
      font-size: 2.3rem;
    }

    .forms {
      margin-top: 0px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .submitButton {
        margin-top: 8px;
        width: 100%;
        padding: 10px;
        font-weight: bold;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(8, auto);
        gap: 10px;
        width: 100%;

        .tripName {
          grid-column: span 3;
        }

        .lookingFor {
          grid-column: 1;
          font-size: 1rem;
        }

        select.lookingFor-placeholder {
          color: gray;
        }
        select {
          color: black;
        }

        .budget {
          grid-column: 2;
        }

        .travelType {
          grid-column: 3;
        }

        .startDate {
          grid-column: span 1.5;
        }

        .endDate {
          grid-column: span 1.5;
        }

        .meetingBefore {
          grid-column: 3;
        }

        .meetingBefore {
          grid-column: 3;
          font-size: 1rem;
        }

        select.meetingBefore {
          color: black;
        }

        select.meetingBefore-placeholder {
          color: gray;
        }

        .countries {
          grid-column: span 2;
          background-color: red;
        }

        .language {
          grid-column: span 2;
        }

        .itinerary {
          grid-column: 3;
        }
        select.itinerary-placeholder {
          color: gray;
        }
        select {
          color: black;
        }

        .description {
          grid-column: span 3;
          height: 100px;
        }

        .wantToSee {
          grid-column: span 3;
          height: 100px;
        }

        .wantToDo {
          grid-column: span 3;
          height: 100px;
        }

        input,
        textarea {
          width: 100%;
          padding: 10px;
          font-size: 1rem;
          border: 1px solid gray;
          border-radius: 4px;
          box-sizing: border-box;
        }

        textarea {
          resize: none;
        }
      }
    }
  }
`;

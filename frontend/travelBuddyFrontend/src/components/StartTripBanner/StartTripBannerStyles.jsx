import styled from '@emotion/styled';
import palette from '../../themes/pallete';

export const StyledStartContainer = styled.div`
  position: relative;
  margin-top: 10vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 10px;
  height: 80vh;

  .center {
    background-color: red;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover; /* Zapewnia skalowanie obrazu */
      object-position: 50% 50%; /* Pozycjonowanie obrazu */
    }
  }
`;

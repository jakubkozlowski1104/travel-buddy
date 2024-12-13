import styled from '@emotion/styled';

export const StyledMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px;
  flex: 5;
  font-family: 'Lato', sans-serif;

  li.active {
    color: #48f3ff;
  }

  li:hover {
    color: #d0fcff;
  }

  li {
    text-transform: uppercase;
    font-weight: bold;
    margin: 5px 10px;
    list-style-type: none;
    font-size: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    border-radius: 50px;
    padding: 10px 5px;
    white-space: nowrap;
  }
`;

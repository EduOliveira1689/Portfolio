
import styled from "styled-components";

export const Container = styled.div<{ visible: boolean }>`
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  position: fixed;
  top: ${({ visible }) => (visible ? "0" : "-80px")};
  left: 0;
  right: 0;
  z-index: 1000;
  transition: top 0.3s ease-in-out;

  &.hidden {
    top: -80px;
  }
`;

export const ItensList = styled.div`
  width: 60%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 10px;

  a {
    margin: 5px;
    padding: 8px 12px;
    font-size: 20px;
    font-weight: bold;
    color: aliceblue;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out, border-radius 0.3s ease-in-out;
    text-transform: uppercase;
    text-decoration: none;

    &:hover {
      color: black;
      background-color: grey;
      border-radius: 5px;
      margin: 0 5px;
    }
  }
`;

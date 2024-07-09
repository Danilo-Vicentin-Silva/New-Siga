import styled from "styled-components";

export const Menu_styled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 20px;
  list-style: none;

  li:hover {
    background-color: ${(props) => props.theme.colors.color1};
    border-radius: 12px;
  }
`;

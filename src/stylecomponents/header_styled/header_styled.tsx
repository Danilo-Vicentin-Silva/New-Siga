import styled from "styled-components";

export const Header_styled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;
  width: 100%;
  height: 110px;
  padding: 20px;

  .title h3 {
    color: #5a5a5a;
  }

  .mini_menu {
    color: ${(props) => props.theme.colors.color4};
    display: flex;
    flex-direction: row;
    gap: 40px;

    position: absolute;
    right: 5%;
  }

  .mini_menu svg:hover {
    color: ${(props) => props.theme.colors.color2};
    background-color: ${(props) => props.theme.colors.color1};
    border-radius: 12px;
  }
`;

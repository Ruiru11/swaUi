import { styled } from "goober";

export const PeopleContainer = styled("section")`
  max-width: 1024px;
  margin: 0px auto;
  padding: 8px;
`;

export const PeopleHeader = styled("h1")`
  font-family: "Press Start 2P", cursive;
  color: #ffd523;
`;

export const InputContainer = styled("section")`
  padding: 8px;
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
`;

export const SearchInput = styled(`input`)`
  width: 100%;
  padding: 16px;
  font-size: 18px;
  border-radius: 4px;
  color: #000;
  border: 4px solid rgba(0, 0, 0, 0);
  outline: none;
  opacity: 0.7;
  position: sticky;
  transition: 0.5s all;

  &:focus {
    border: 4px solid #ffd523;
    opacity: 1;
  }
`;

export const Content = styled("section")`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  grid-column-gap: 0px;
  grid-row-gap: 16px;
`;

export const PaginationContainer = styled("section")`
  display: flex;
  justify-content: center;
`;

export const PaginationButton = styled<{ isActive: boolean; onClick: any }>(
  "button"
)`
  width: auto;
  padding: 8px;
  margin: 4px;
  background: ${(props) => (props.isActive ? "#000" : "#ffd523")};
  color: ${(props) => (props.isActive ? "#fff" : "#000")};
  font-family: "Press Start 2P", cursive;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  border: none;
`;

export const ListItems = styled("ul")`
  list-style-type: none;
  color: #fff;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 280px) {
    justify-content: center;
  }
`;

export const ListItem = styled("li")`
  width: 100%;
  max-width: 280px;
  border: 2px solid #ffd523;
  margin: 8px;
  padding: 16px;

  @media (max-width: 280px) {
    width: 100%;
  }
`;

export const ListTitle = styled("h2")`
  font-family: "Press Start 2P", cursive;
  color: #ffd523;
`;

export const ListDescription = styled<{ inverse: boolean }>("p")`
  ${(props) =>
    props.inverse
      ? `
    color: #ffd523;
    font-size: 18px;
  `
      : `color: #fff;`}
`;

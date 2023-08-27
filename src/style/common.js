import { styled } from "styled-components";

export const StyledFlex = styled.div`
  display: flex;
`;

export const StyledAlignFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledFlexColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const StyledBetweenFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledBetweenAlignFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  width: 100%;
`;

export const StyledSection = styled.div`
  background-color: var(--white-color);
  border: 1px solid var(--gray-300-color);
  border-radius: 8px;
  padding: ${(props) => (props.padding === true ? "20px" : "0px")};
  margin: 20px 0 30px;
  position: relative;
`;

"use client"
import { styled } from "styled-components";

export const StyledPage = styled.div`
  min-height: 100vh;
`;

export const StyledFlex = styled.div`
  display: flex;
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
`;

export const StyledAlignFlex = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margin};
`;

export const StyledFlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margin};
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

export const StyledGrid180 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: ${(props) => props.gap};
  width: 100%;
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${(props) => props.gap};
  width: 100%;
`;

export const StyledGrid250 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${(props) => props.gap};
  width: 100%;
`;

export const StyledGridProducts = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 25px;
`;

export const StyledSection = styled.div`
  background-color: var(--white-color);
  border: 1px solid var(--gray-300-color);
  border-radius: 8px;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  position: relative;
`;

import { styled } from "styled-components";

export const StyledMyCart = styled.div`
  display: grid;
  grid-template-columns: 880px 1fr;
  gap: 20px;
  margin: 15px 0;

  @media (min-width: 769px) and (max-width: 1189px) {
    grid-template-columns: 650px 1fr;
  }

  @media (max-width: 769px) {
    grid-template-columns: 1fr;
  }

  .my_card {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: 321px) {
    .my_card + div button {
      font-size: 13px;
    }
  }
`;

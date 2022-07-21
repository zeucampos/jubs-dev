import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100vw;

  margin: 0 auto;
  background-color: black;
`;

export const SlideContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  height: 100vh;

  background: radial-gradient(
    700px 700px at 100% 0%,
    rgba(255, 28, 187, 0.3) 0%,
    rgba(213, 82, 90, 0.59) 78.77%,
    rgba(213, 82, 90, 0.059) 100%
  );
`;

export const Row = styled.div`
  display: flex;
  gap: 8px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

import styled, { keyframes } from "styled-components";

const CenterDivAnimation = keyframes`
  from {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(0.8);
  }

  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const CenterDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  animation: ${CenterDivAnimation} 1s cubic-bezier(0.4, 0, 0.2, 1) alternate infinite;
`;

export default CenterDiv;

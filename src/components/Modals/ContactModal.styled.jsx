import styled from '@emotion/styled';
// import { theme } from 'styles/theme';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(47, 48, 58, 0.4);
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Modal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 290px;
    // padding: 40px;
    border-radius: 4px;
    transform: translate(-50%, -75%) scale(1);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
`;

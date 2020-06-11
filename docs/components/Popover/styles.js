import styled from 'styled-components';

export const Item = styled.div``;

export const PopoverContainer = styled.div`
  background-color: black;
  position: absolute;
  left: 50%;
  top: 28px;
  transform: translateX(-50%);

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -7px;
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 5px 7px 5px;
    border-color: transparent transparent black transparent;
  }
`;

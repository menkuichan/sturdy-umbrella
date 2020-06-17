import styled from 'styled-components';

export const Item = styled.div``;

export const PopoverContainer = styled.div`
  background-color: inherit;
  box-shadow: 0 0 2px ${(props) => props.theme.popover.borderShadowColor};
  position: absolute;
  left: 50%;
  top: 28px;
  transform: translateX(-50%);
  border-radius: 6px;

  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -5px;
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 2px 4px 2px;
    border-color: transparent transparent
      ${(props) => props.theme.popover.triangleColor} transparent;
  }
`;

import styled from 'styled-components';

const _Dropdown = styled.div`
  position: relative;
  border: 1px solid #000;

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    border: none;
    text-align: left;
    padding-right: 1.3rem;
    background-color: transparent;
  }

  svg {
    width: 1.3rem;
    height: 1.3rem;
    position: absolute;
    top: 0;
    right: 0;
    pointer-events: none;
  }
`;

export default _Dropdown;

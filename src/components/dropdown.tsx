import { ChangeEvent, FunctionComponent } from 'react';
import _Dropdown from './dropdown.style';

interface Props {
  onChange?: (e: ChangeEvent) => any;
  chevronColor?: string;
}

const Dropdown: FunctionComponent<Props> = (props) => {
  return (
    <_Dropdown>
      <select onChange={props.onChange}>{props.children}</select>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={props.chevronColor || '#000'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </_Dropdown>
  );
};

export default Dropdown;

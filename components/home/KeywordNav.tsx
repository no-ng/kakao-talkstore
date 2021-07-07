import { ChangeEvent } from 'react';
import Dropdown from '../Dropdown';
import _KeywordNav from './KeywordNav.style';

const KeywordNav = () => {
  const onChange = (e: ChangeEvent) => console.log(e);

  return (
    <_KeywordNav>
      <ul role="tablist">
        <li>
          <Dropdown onChange={onChange} chevronColor={'#fff'}>
            <option value="LATEST">최신순</option>
            <option value="OLDEST">마감순</option>
          </Dropdown>
        </li>
      </ul>
    </_KeywordNav>
  );
};

export default KeywordNav;

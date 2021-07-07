import styled from 'styled-components';

export const _Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: var(--header-h);
  text-align: center;
  background-color: #fff;
  display: flex;
  justify-content: center;

  .wrapper {
    width: 750px;
    display: flex;
    justify-content: space-between;
  }

  .menu,
  .search {
    width: 3.5rem;
    height: 3.5rem;

    a {
      display: block;
      padding: 1rem;
    }
  }

  .menu,
  .logo,
  .search {
    align-self: center;
  }

  .logo {
    h2 {
      a {
        text-decoration: none;
        font-weight: 700;
        color: #000;
      }

      svg {
        vertical-align: bottom;
        margin-right: 0.3rem;
      }
    }
  }
`;

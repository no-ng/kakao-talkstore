import styled from 'styled-components';

const _Products = styled.div`
  margin: 0 18px;

  .product {
    padding-bottom: 40px;
    position: relative;

    .thumb {
      border-radius: 8px;
      display: block;
      overflow: hidden;
      position: relative;
      aspect-ratio: 16/9;

      img {
        display: block;
        width: 100%;
      }

      .badge_wrapper {
        position: absolute;
        top: 10px;
        left: 10px;

        .badge {
          float: left;
          padding: 0 7px;
          border-radius: 3px;
          font-size: 0.9rem;
          line-height: 1.8rem;
          color: #111;
          background-color: #ffe73e;
        }
      }

      &::before {
        border: 1px solid rgba(0, 0, 0, 0.03);
        border-radius: 8px;
        background-color: rgba(0, 0, 0, 0.03);
        position: absolute;
        inset: 0px;
        content: '';
      }
    }

    .info {
      margin: 0;
      padding: 68px 4px 0;
      display: block;
      position: relative;

      .name {
        display: block;
        padding-right: 60px;
        font-size: 1.5rem;
        line-height: 2rem;
        color: #222;
        letter-spacing: -0.03rem;
        word-brak: keep-all;
      }

      .detail {
        margin-top: 5px;
        display: block;
        overflow: hidden;
        color: #999;
        font-size: 1.2rem;

        .price {
          float: left;
          font-size: 1.3rem;
          color: #000;

          .txt {
            display: inline-block;
            margin-left: 3px;
            vertical-align: top;
          }
        }

        .regular {
          float: left;
          margin-left: 5px;
        }
      }

      .label {
        display: inline-block;
        position: static;
        margin-top: 11px;
        font-size: 1rem;
        color: #424242;
        vertical-align: top;

        padding: 0 7px;
        background-color: #f3f3f3;
        border-radius: 3px;
      }
    }
  }
`;

export default _Products;

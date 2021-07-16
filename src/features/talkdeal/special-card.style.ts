import styled from 'styled-components';

const _SpecialCard = styled.div<any>`
  aspect-ratio: 1/1;
  margin: 0 18px 40px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
  }

  .top {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 0.9rem;
    color: black;
    letter-spacing: 0.05rem;

    .badge {
      background-color: #fff;
      float: left;
      line-height: 24px;
      border-radius: 3px;
      padding: 0 6px 0 8px;
      font-weight: 700;
      mask-image: radial-gradient(circle at center left, transparent 3px, black 1px);

      span {
        color: ${(props) => props.specialCard?.specialCardCoupon?.backgroundColor};
      }
    }

    .timer {
      display: inline-block;
      line-height: 24px;
      color: #fff;
      margin-left: 4px;
      padding: 0 7px;
      border-radius: 3px;
      background-color: rgba(0, 0, 0, 0.65);

      &.impended {
        background-color: #ff5451;
      }
    }
  }

  .down {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 132px;
    padding: 0 10px;
    text-align: center;
    background-color: ${(props) => props.specialCard?.specialCardBackgroundColor};

    .title {
      color: ${(props) => props.specialCard?.specialCardPrimaryColor};
      display: block;
      padding-top: 19px;
      font-size: 1.2rem;
      letter-spacing: -0.03rem;
    }

    .desc {
      display: block;
      padding-top: 5px;
      font-size: 1.5rem;
      line-height: 23px;
      letter-spacing: -0.03rem;
      color: ${(props) => props.specialCard.specialCardSecondaryColor};
    }

    .price {
      display: block;
      padding-top: 6px;
      line-height: 19px;
      color: #fff;

      .special {
        display: inline-block;
        font-size: 1.2rem;
        letter-spacing: -0.02rem;
      }

      .regular {
        display: inline-block;
        font-size: 1.1rem;
        opacity: 0.5;
        margin-left: 5px;
      }
    }
  }
`;

export default _SpecialCard;

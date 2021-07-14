import styled from 'styled-components';

const _SpecialCard = styled.div<any>`
  aspect-ratio: 1/1;
  margin: 0 18px 40px;
  position: relative;

  img {
    display: block;
    width: 100%;
    border-radius: 8px;
  }

  .top {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 0.9rem;
    font-weight: 700;
    color: black;
    letter-spacing: 0.05rem;

    .badge {
      background-color: #fff;
      float: left;
      line-height: 24px;
      border-radius: 3px;
      padding: 0 6px 0 8px;
      mask-image: radial-gradient(circle at center left, transparent 3px, black 1px);

      span {
        color: ${(props) => props.specialCard.specialCardCoupon.backgroundColor};
      }
    }
  }
`;

export default _SpecialCard;

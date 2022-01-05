import styled from 'styled-components';

export const NftContainer = styled.section`
  max-width: 1920px;
  margin: 0 0 20px 0;
`;

export const NftTitle = styled.h2`
  width: 100%;
  text-align: center;
  font: normal normal 600 36px/72px Poppins;
  letter-spacing: 1.8px;
  color: #FFFFFF;
`;

export const Hr = styled.hr`
  width: 30px;
  height: 5px;
  background-color: #B8C00D;
  border-radius: 3px;
  border: 0px solid #B8C00D;
  margin: 0 auto;
`;

export const NftCards = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const NftCard = styled.div`
  width: 30vw;
  margin-top: 25px;
  min-width: 260px;
  max-width: 390px;
  background-color: #151E21;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HalfLine = styled.div`
  border-radius: 0px 0px 5px 5px;
  margin: 0 auto;
  height: 5px;
  width: 80%;
  background-color: ${({color}) => color};
`;

export const NftCardImg = styled.img`
  max-height: 200px;
  padding-top: 55px;
`;

export const NftCardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10%;
`;

export const NftCardTitleText = styled.h3`
  text-align: center;
  font: normal normal 600 30px/30px Poppins;
  letter-spacing: 1.5px;
  color: #FFFFFF;
  padding-top: 20px;
`

export const NftCardSubText = styled.div`
  padding: 40px 0 20px 0;
  text-align: left;
  font: normal normal normal 20px/36px Poppins;
  color: #FFFFFF;
`;

export const NftCardText = styled.text`
  text-align: left;
  font: normal normal normal 16px/30px Poppins;
  color: ${({color}) => color || '#6B7682'};
`;

export const NftCardFooter = styled.div`
  font: normal normal 300 16px/36px Poppins;
  align-self: flex-end;
  padding: 0 10% 40px 10%;
  margin-top: auto;
`;

export const NftCardFooterAction = styled.div`
  text-align: right;
  &:hover {
    cursor: pointer;
  }
`;
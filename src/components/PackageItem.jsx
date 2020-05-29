/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';


const PackageItemDiv = styled.div`
width: 100%;
max-width: 750px;
min-height: 230px;
display: flex;
align-items: center;
justify-content: flex-start;
display: flex;
align-items: center;
justify-content: flex-start;
border-radius: 5px;
padding: 15px;
margin: 0 0 20px 0;
border-radius: 5px;
box-shadow: 0px 0px 4px #80808078;
transition-duration: 0.2s;
transition-property: transform;
transition-timing-function: ease;
@media (max-width: 768px) {
  flex-direction: column;
};
:hover {
  transform: scale(1.05);
};
`;

const PackageItemName = styled.h1`
  color: gray;  
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

`;
const PackageItemId = styled.h1`
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

`;
const PackageItemArrivalDate = styled.h1`
  color: gray;  
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const PackageItemDescBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 15px;
  font-weight: 300;
  @media (max-width: 768px) {
    align-items: center;
    font-size: 13px;
  };
`;

const PackageItemDate = styled.h1`
  color: gray;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

`;
const PackageItemImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
box-shadow: 0px 0px 4px #80808078;
width: 200px;
margin: 0 10px 0 0;
@media (max-width: 768px) {
  margin: 0 0 10px;
};
`;
const PackageItemSign = styled.img`
  width: 20%;
  align-items: center;
  justify-content: center;
`;
const PackageItemStatus = styled.h1`
  font-size: 30px;
  font-weight: 300;
`;

const CategoryTagBtn = styled.button`
width: auto;
height: 30px;
padding: 0 8px;
margin: 0 5px 5px;
background-color:${({ status }) => (status === 1 ? 'rgb(234, 79, 79)' : '#5896c1')};
  color:white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 13px;  
  :hover {
    opacity: 0.8;
  };
`;
const PackageItem = ({
  community_id, have_sign, mb_id, mb_name, pg_arrival_date,
  pg_date, pg_id, pg_pic, pg_sign, pg_status,
}) => (
  <PackageItemDiv>
    <PackageItemImg src={`http://140.136.155.97/package/uploads/${pg_pic}`} />
    <PackageItemDescBlock>
      <PackageItemId>
        包裹編號:
        {pg_id}
      </PackageItemId>
      <PackageItemName>{mb_name}</PackageItemName>
      <PackageItemArrivalDate>{pg_arrival_date}</PackageItemArrivalDate>
      {parseInt(pg_status, 10) === 1 ? <CategoryTagBtn status={parseInt(pg_status, 10)}>待領取</CategoryTagBtn> : <CategoryTagBtn>已領取</CategoryTagBtn>}
    </PackageItemDescBlock>

  </PackageItemDiv>
);

export default PackageItem;

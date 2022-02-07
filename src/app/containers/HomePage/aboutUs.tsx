import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";

import JeepImg from "../../../assets/images/jeep.png";

const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    justify-center
    pt-4
    pb-4
    pr-7
    pl-7
    md:pl-0
    md:pr-0
    bg-white
  `};
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }

  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `};
`;

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
  `};
`;

const InfoText = styled.p`
  ${tw`
    md:max-w-2xl
    text-sm
    md:text-base
    text-gray-500
    font-normal
    mt-4
  `};
`;

export function AboutUs() {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={JeepImg} />
      </CarContainer>
      <InfoContainer>
        <Title>Feel The Best Experience With Our Rental Deals</Title>
        <InfoText>
        Auto Car Rental  Surprice Car Rentals is a constantly growing car rental brand,
         which has as priority to provide quality services at affordable rates and flexible 
         terms and conditions, combined with real 24 hours support. This has established us 
         as one of the most competitive companies in the market.We are very clear on the terms 
         and conditions of our rentals, with no hidden costs and many offers for our loyal customers and cooperators.

  Our fleet is consisted of a variety of car groups, serving all requirements and needs.
   Our personnel are very well trained, always willing to go the extra mile in order to 
   help our customers to feel like home! We pay great attention to our after sales service, 
   by investing on our customer care department and the so called “repeaters”. Our vision is to become one of the world leaders in the rent a car industry and we are fighting towards this mission with honesty, consciousness, professionalism and very hard work.

        
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}

import Sidebar from 'components/Sidebar'
import React from 'react'
import styled from "styled-components";
import FilterFeature from './FilterFeature';
import upload from "../../assets/img/filter.PNG"

 

const FilterYear = () => {

    
  return (
    <>
    <div className='bg-white'>
    <div > 
        <Sidebar />  
         <ColorRoot>
        <div className="grid grid-cols-5 py-4 mx-4 resultcolor">
       <div className="col-span-4"> 
       <FlexColumnRoot>
      <Paragraph> Filter Out Result</Paragraph> 
     </FlexColumnRoot>
        
       </div>
       <div className="">   
       <ImageRoot src={upload} /> 
       </div>  
     
    </div> 
    </ColorRoot>

           <SelectAcademicYearRoot>Enter Student Id </SelectAcademicYearRoot>
           <FilterFeature />
   
   
      

    </div>
    </div> 
    </> 
  )
}
const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};



const FlexColumnRoot = styled.div`
    
flex-direction: column;
gap: 15px;

`;


const Paragraph = styled.div`
font-size: 36px;
font-family: Product Sans Medium;
line-height: 34.92px;
color: #2d0353;
text-align: left;
padding-left: 91px;
font-weight: bold;

@media ${devices.mobileL} { 
  
  padding-left: 33px;
} 
`; 

const ImageRoot = styled.img`
width: 89px;
height: 89px;
`;
const ColorRoot = styled.div`
background-color: rgba(224, 137, 9, 0.1);
margin-right:25px;
@media ${devices.tablet} { 
  
    margin-left: 33px;
  } 
`;

const SelectAcademicYearRoot = styled.div`
  font-size: 16px;
  font-family: Product Sans Medium;
  line-height: 15.52px;
  color: #2d0353;
  padding-bottom: 40px; 
  padding-left: 18px;
  padding-top: 40px;
`;


export default FilterYear
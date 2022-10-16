import React from 'react'
import "../br.css" 
import SearchYear from './SearchYear'
import styled from "styled-components";


const YourResult = () => {
  return (
    <div className='bg-white'>
        <SearchYear />
        <br />
        <div className='ml-4'>
       
        </div>
        

        <div style={{overflowX: "auto"}} className='bg-white mx-3 '> 
       
       <table className='Yourcoursereg mx-auto my-6' style={{width:"100%"}} >    
   <tr style={{height:"40px", backgroundColor: "#e5e5e5"}}>
       <th style={{width:"5%", textAlign: "center"}}>S/N</th> 
       <th style={{width:"15%", paddingLeft: "7px"}}>Course Code 1</th>
       
       <th style={{width:"26.6%"}}>Course Title</th>
       <th style={{width:"26.6%"}}>Registered Students</th>
       <th style={{width:"26.6%"}}>Number of Records</th> 
        
       
   </tr>    

   <tr style={{height:"70px"}}> 
       <td style={{ paddingLeft: "5px"}} > 1
       </td> 
       <td><label for="firstcourse"> <Text3>STA 101</Text3></label></td>
       
       <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
       <td><label  for="firstcourse"><Text4>1035</Text4></label></td>
       <td><label for="firstcourse"><Text4>1020</Text4></label></td>
       
   </tr>

   <tr className='bg-gray-100' style={{height:"70px"}}> 
       <td style={{ paddingLeft: "5px"}}> 2
       </td> 
       <td><label for="firstcourse"> <Text3>STA 101</Text3></label></td>
       
       <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
       <td><label for="firstcourse"><Text4>1035</Text4></label></td>
       <td><label for="firstcourse"><Text4>1020</Text4></label></td>
       
   </tr>

   <tr style={{height:"70px" }}> 
       <td style={{ paddingLeft: "5px"}} > 3
       </td> 
       <td><label for="firstcourse"> <Text3>STA 101</Text3></label></td>
       
       <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
       <td><label for="firstcourse"><Text4>1035</Text4></label></td>
       <td><label for="firstcourse"><Text4>1020</Text4></label></td>
       
   </tr>

   <tr className='bg-gray-100' style={{height:"70px" }}> 
       <td style={{ paddingLeft: "5px"}}> 4
       </td> 
       <td><label for="firstcourse"> <Text3>STA 101</Text3></label></td>
       
       <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
       <td><label for="firstcourse"><Text4>1035</Text4></label></td>
       <td><label for="firstcourse"><Text4>1020</Text4></label></td>
       
   </tr>

   <tr style={{height:"70px"}}> 
       <td style={{ paddingLeft: "5px"}} > 5
       </td> 
       <td><label for="firstcourse"> <Text3>STA 101</Text3></label></td>
       
       <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
       <td><label for="firstcourse"><Text4>1035</Text4></label></td>
       <td><label for="firstcourse"><Text4>1020</Text4></label></td>
       
   </tr>

   <tr className='bg-gray-100' style={{height:"70px" }}> 
       <td style={{ paddingLeft: "5px"}} > 6
       </td> 
       <td><label for="firstcourse"> <Text3>STA 101</Text3></label></td>
       
       <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
       <td><label for="firstcourse"><Text4>1035</Text4></label></td>
       <td><label for="firstcourse"><Text4>1020</Text4></label></td>
       
   </tr>

   <tr style={{height:"70px"}}> 
       <td style={{ paddingLeft: "5px"}} > 7
       </td> 
       <td><label for="firstcourse"> <Text3>STA 101</Text3></label></td>
       
       <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
       <td><label for="firstcourse"><Text4>1035</Text4></label></td>
       <td><label for="firstcourse"><Text4>1020</Text4></label></td>
         
   </tr>

   <tr style={{height:"70px"}}> 
       <td style={{ paddingLeft: "5px"}} > 8
       </td> 
       <td><label for="firstcourse"> <Text3>STA 101</Text3></label></td>
       
       <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
       <td><label for="firstcourse"><Text4>1035</Text4></label></td>
       <td><label for="firstcourse"><Text4>1020</Text4></label></td>
         
   </tr>

      </table>
    

</div>
        
    </div>
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

const Text3 = styled.div`
  mix-blend-mode: normal;
  font-size: 17px;
  font-family: Roboto;
  line-height: 21px;
  color: #787878;
  text-align: left;
 
`;
const Text4 = styled.div`
  mix-blend-mode: normal;
  font-size: 17px;
  font-family: Roboto;
  line-height: 21px;
  color: #787878;
  padding-left: 50px;
 
  @media ${devices.mobileL} { 
   
    padding-left: 20px;
  } 

  @media ${devices.tablet} { 
   
    padding-left: 20px;
  } 
  
`;




export default YourResult
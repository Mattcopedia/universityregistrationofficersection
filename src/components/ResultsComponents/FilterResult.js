import React from 'react'
import "../br.css" 
import FilterYear from './FilterYear'
import styled from "styled-components";


const FilterResult = () => {
  return (
    <div className='bg-white'>
        <FilterYear />
        <br />
        <div className='ml-4'>
       
        </div>
        

        <div style={{overflowX: "auto"}} className='bg-white mx-3 '> 
       
       <table className='Yourcoursereg mx-auto my-6' style={{width:"100%"}} >    
   <tr style={{height:"40px", backgroundColor: "#e5e5e5"}}>
       <th style={{width:"28.3%", paddingLeft: "25px"}}>Course title</th>
       <th style={{width:"28.3%"}}>Course code</th>
       <th style={{width:"23.3%"}}>Score</th>
   </tr>     


   <tr style={{height:"70px"}}> 
       <td style={{ paddingLeft: "25px"}} > <Text3>Computer Science</Text3></td> 
       <td><label for="firstcourse"> <Text3>CSC 101</Text3></label></td>
       
       <td><label for="firstcourse"><Text3>89</Text3></label></td>
   </tr>

   <tr style={{height:"70px", backgroundColor: "#e5e5e5"}}> 
       <td style={{ paddingLeft: "25px"}} > <Text3>Computer Science</Text3></td> 
       <td><label for="firstcourse"> <Text3>CSC 101</Text3></label></td>
       
       <td><label for="firstcourse"><Text3>89</Text3></label></td>
   </tr>

   <tr style={{height:"70px"}}> 
       <td style={{ paddingLeft: "25px"}} > <Text3>Computer Science</Text3></td> 
       <td><label for="firstcourse"> <Text3>CSC 101</Text3></label></td>
       
       <td><label for="firstcourse"><Text3>89</Text3></label></td>
   </tr>

   <tr style={{height:"70px", backgroundColor: "#e5e5e5"}}> 
       <td style={{ paddingLeft: "25px"}} > <Text3>Computer Science</Text3></td> 
       <td><label for="firstcourse"> <Text3>CSC 101</Text3></label></td>
       
       <td><label for="firstcourse"><Text3>89</Text3></label></td>
   </tr>

   <tr style={{height:"70px"}}> 
       <td style={{ paddingLeft: "25px"}} > <Text3>Computer Science</Text3></td> 
       <td><label for="firstcourse"> <Text3>CSC 101</Text3></label></td>
       
       <td><label for="firstcourse"><Text3>89</Text3></label></td>
   </tr>

   <tr style={{height:"70px", backgroundColor: "#e5e5e5"}}> 
       <td style={{ paddingLeft: "25px"}} > <Text3>Computer Science</Text3></td> 
       <td><label for="firstcourse"> <Text3>CSC 101</Text3></label></td>
       
       <td><label for="firstcourse"><Text3>89</Text3></label></td>
   </tr>

   <tr style={{height:"70px"}}> 
       <td style={{ paddingLeft: "25px"}} > <Text3>Computer Science</Text3></td> 
       <td><label for="firstcourse"> <Text3>CSC 101</Text3></label></td>
       
       <td><label for="firstcourse"><Text3>89</Text3></label></td>
   </tr>

   <tr style={{height:"70px", backgroundColor: "#e5e5e5"}}> 
       <td style={{ paddingLeft: "25px"}} > <Text3>Computer Science</Text3></td> 
       <td><label for="firstcourse"> <Text3>CSC 101</Text3></label></td>
       
       <td><label for="firstcourse"><Text3>89</Text3></label></td>
   </tr>

   <tr style={{height:"70px"}}> 
       <td style={{ paddingLeft: "25px"}} > <Text3>Computer Science</Text3></td> 
       <td><label for="firstcourse"> <Text3>CSC 101</Text3></label></td>
       
       <td><label for="firstcourse"><Text3>89</Text3></label></td> 
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




export default FilterResult
import Sidebar from 'components/Sidebar';
import React from 'react'
import styled from "styled-components"; 
import Stats from "../../assets/img/stats.PNG"


const CourseRegStats = () => {
  return (
    <div>
        <Sidebar />


        
        <div className="grid grid-cols-5 py-4 mx-4 mb-7 resultcolor ">
       <div className=" col-span-4"> 
       <FlexColumnRoot>
      <Paragraph>Registration <br className="responsivemodal"></br> Statistics</Paragraph> 
     </FlexColumnRoot>
        
       </div>
       <div className="">   
       <ImageRoot src={`https://file.rendit.io/n/WV1XnWUqsc0YCi5HuCdS.svg`} /> 
       </div>  
     
    </div>

  {/* here */}
  <div className='flex flex-row gap-2 justify-end mr-2'>
      <div className="box  pl-2 py-2">
      <select className='bg-gray-200'>
        <option selected>1st Semester 2020-2021 </option> 
        <option>1st Semester 2020-2021</option>
        <option>1st Semester 2020-2021</option>
        <option>1st Semester 2020-2021</option>
        <option>1st Semester 2020-2021</option>
      </select> 

    </div>

    <div className="box  pl-2 py-2">
      <select className='bg-gray-200' >
        <option selected>Register Student </option> 
        <option>Register Student</option>
        <option>Register Student</option>
        <option>Register Student</option>
        <option>Register Student</option>
      </select> 

    </div>




    </div>



    <div className='flex flex-start pl-4'>
        <EditProfileRoot>Analysis</EditProfileRoot>
        </div> 
    
    <div className="my-4 mx-2 flex justify-center">   
       <img width={1050} src={Stats} alt="statistics"/>  
       </div>  

      <div className='flex justify-end '>
       <div className="level  mr-5">
      <select  className='bg-gray-200 '>
        <option  selected>Level All </option> 
        <option>Level All</option>
        <option>Level All</option>
        <option>Level All</option>
        <option>Level All</option>
      </select> 
 
    </div>
    </div> 


    <div className='flex flex-start pl-4'>
        <EditProfileRoot>Science</EditProfileRoot>
        </div> 

    <div style={{overflowX: "auto"}} className='bg-white mx-3 '> 
       
       <table className='Yourcoursereg mx-auto my-6' style={{width:"100%"}} >    
   <tr style={{height:"40px", backgroundColor: "#e5e5e5"}}>
      
       <th style={{width:"15%",paddingLeft:"10px"}}>Level</th> 
       <th style={{width:"20%"}}>Number of student</th> 
       <th style={{width:"25%"}}>Number of Registered Students</th> 
       <th style={{width:"20%"}}>Yet to Register</th> 
       <th style={{width:"20%"}}>%Registered</th> 
   </tr>    

   <tr style={{height:"70px"}}> 
       <td style={{paddingLeft:"10px"}}><label for="firstcourse"> <Text3>100</Text3></label></td>
       <td ><label for="firstcourse"><Text3>100</Text3></label></td>
       <td><label for="firstcourse"><Text3>80</Text3></label></td>
       <td><label for="firstcourse"><Text3>20</Text3></label></td>
       <td><label for="firstcourse"><Text3>89%</Text3></label></td> 
   </tr> 

   <tr style={{height:"70px" , backgroundColor: "#e5e5e5"}}> 
       <td style={{paddingLeft:"10px"}}><label for="firstcourse"> <Text3>100</Text3></label></td>
       <td ><label for="firstcourse"><Text3>100</Text3></label></td>
       <td><label for="firstcourse"><Text3>80</Text3></label></td>
       <td><label for="firstcourse"><Text3>20</Text3></label></td>
       <td><label for="firstcourse"><Text3>89%</Text3></label></td> 
   </tr> 

   <tr style={{height:"70px"}}> 
       <td style={{paddingLeft:"10px"}}><label for="firstcourse"> <Text3>100</Text3></label></td>
       <td ><label for="firstcourse"><Text3>100</Text3></label></td>
       <td><label for="firstcourse"><Text3>80</Text3></label></td>
       <td><label for="firstcourse"><Text3>20</Text3></label></td>
       <td><label for="firstcourse"><Text3>89%</Text3></label></td> 
   </tr> 

   <tr style={{height:"70px", backgroundColor: "#e5e5e5"}}> 
       <td style={{paddingLeft:"10px"}}><label for="firstcourse"> <Text3>100</Text3></label></td>
       <td ><label for="firstcourse"><Text3>100</Text3></label></td>
       <td><label for="firstcourse"><Text3>80</Text3></label></td>
       <td><label for="firstcourse"><Text3>20</Text3></label></td>
       <td><label for="firstcourse"><Text3>89%</Text3></label></td> 
   </tr> 

   <tr style={{height:"70px"}}> 
       <td style={{paddingLeft:"10px"}}><label for="firstcourse"> <Text3>100</Text3></label></td>
       <td ><label for="firstcourse"><Text3>100</Text3></label></td>
       <td><label for="firstcourse"><Text3>80</Text3></label></td>
       <td><label for="firstcourse"><Text3>20</Text3></label></td>
       <td><label for="firstcourse"><Text3>89%</Text3></label></td> 
   </tr> 

   <tr style={{height:"70px" , backgroundColor: "#e5e5e5"}}> 
       <td style={{paddingLeft:"10px"}}><label for="firstcourse"> <Text3>100</Text3></label></td>
       <td ><label for="firstcourse"><Text3>100</Text3></label></td>
       <td><label for="firstcourse"><Text3>80</Text3></label></td>
       <td><label for="firstcourse"><Text3>20</Text3></label></td>
       <td><label for="firstcourse"><Text3>89%</Text3></label></td> 
   </tr> 

   <tr style={{height:"70px"}}> 
     <td style={{paddingLeft:"10px"}} ><label for="firstcourse"> <Text4>Total Unit</Text4></label></td>
       <td><label for="firstcourse"><Text4>108</Text4></label></td>
       <td><label for="firstcourse"><Text4>88</Text4></label></td>
       <td><label for="firstcourse"><Text4>750</Text4></label></td>
       <td><label for="firstcourse"><Text4>90%</Text4></label></td> 
   </tr>

      </table>
    

</div>



<div className='flex justify-end '>
       <div className="level  mr-5">
      <select  className='bg-gray-200 '>
        <option  selected>Level All </option> 
        <option>Level All</option>
        <option>Level All</option>
        <option>Level All</option>
        <option>Level All</option>
      </select> 
 
    </div>
    </div> 


<div className='flex flex-start pl-4'>
        <EditProfileRoot>Engineering</EditProfileRoot>
        </div> 

    <div style={{overflowX: "auto"}} className='bg-white mx-3 '> 
       
       <table className='Yourcoursereg mx-auto my-6' style={{width:"100%"}} >    
   <tr style={{height:"40px", backgroundColor: "#e5e5e5"}}>
      
       <th style={{width:"15%",paddingLeft:"10px"}}>Level</th> 
       <th style={{width:"20%"}}>Number of student</th> 
       <th style={{width:"25%"}}>Number of Registered Students</th> 
       <th style={{width:"20%"}}>Yet to Register</th> 
       <th style={{width:"20%"}}>%Registered</th> 
   </tr>    

   <tr style={{height:"70px"}}> 
       <td style={{paddingLeft:"10px"}}><label for="firstcourse"> <Text3>100</Text3></label></td>
       <td ><label for="firstcourse"><Text3>100</Text3></label></td>
       <td><label for="firstcourse"><Text3>80</Text3></label></td>
       <td><label for="firstcourse"><Text3>20</Text3></label></td>
       <td><label for="firstcourse"><Text3>89%</Text3></label></td> 
   </tr> 

   <tr style={{height:"70px" , backgroundColor: "#e5e5e5"}}> 
       <td style={{paddingLeft:"10px"}}><label for="firstcourse"> <Text3>100</Text3></label></td>
       <td ><label for="firstcourse"><Text3>100</Text3></label></td>
       <td><label for="firstcourse"><Text3>80</Text3></label></td>
       <td><label for="firstcourse"><Text3>20</Text3></label></td>
       <td><label for="firstcourse"><Text3>89%</Text3></label></td> 
   </tr> 

   <tr style={{height:"70px"}}> 
       <td style={{paddingLeft:"10px"}}><label for="firstcourse"> <Text3>100</Text3></label></td>
       <td ><label for="firstcourse"><Text3>100</Text3></label></td>
       <td><label for="firstcourse"><Text3>80</Text3></label></td>
       <td><label for="firstcourse"><Text3>20</Text3></label></td>
       <td><label for="firstcourse"><Text3>89%</Text3></label></td> 
   </tr> 

   <tr style={{height:"70px", backgroundColor: "#e5e5e5"}}> 
       <td style={{paddingLeft:"10px"}}><label for="firstcourse"> <Text3>100</Text3></label></td>
       <td ><label for="firstcourse"><Text3>100</Text3></label></td>
       <td><label for="firstcourse"><Text3>80</Text3></label></td>
       <td><label for="firstcourse"><Text3>20</Text3></label></td>
       <td><label for="firstcourse"><Text3>89%</Text3></label></td> 
   </tr> 

   <tr style={{height:"70px"}}> 
       <td style={{paddingLeft:"10px"}}><label for="firstcourse"> <Text3>100</Text3></label></td>
       <td ><label for="firstcourse"><Text3>100</Text3></label></td>
       <td><label for="firstcourse"><Text3>80</Text3></label></td>
       <td><label for="firstcourse"><Text3>20</Text3></label></td>
       <td><label for="firstcourse"><Text3>89%</Text3></label></td> 
   </tr> 

   <tr style={{height:"70px" , backgroundColor: "#e5e5e5"}}> 
       <td style={{paddingLeft:"10px"}}><label for="firstcourse"> <Text3>100</Text3></label></td>
       <td ><label for="firstcourse"><Text3>100</Text3></label></td>
       <td><label for="firstcourse"><Text3>80</Text3></label></td>
       <td><label for="firstcourse"><Text3>20</Text3></label></td>
       <td><label for="firstcourse"><Text3>89%</Text3></label></td> 
   </tr> 

   <tr style={{height:"70px"}}> 
     <td style={{paddingLeft:"10px"}} ><label for="firstcourse"> <Text4>Total Unit</Text4></label></td>
       <td><label for="firstcourse"><Text4>108</Text4></label></td>
       <td><label for="firstcourse"><Text4>88</Text4></label></td>
       <td><label for="firstcourse"><Text4>750</Text4></label></td>
       <td><label for="firstcourse"><Text4>90%</Text4></label></td> 
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
font-size: 18px;
font-family: Product Sans Medium;
line-height: 17.46px;
color: orange;
 
`;
const EditProfileRoot = styled.div`
  color: #2d0353;
  font-size: 24px;
  font-family: Product Sans Medium;
  line-height: 23.28px;
  display:flex;
  justify-content: center; 
  margin-bottom: 10px;
  font-weight: bold;
  padding-top: 20px;
`;



export default CourseRegStats
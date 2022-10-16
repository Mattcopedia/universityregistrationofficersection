import Sidebar from 'components/Sidebar'
import React, {useRef} from 'react'
import styled from "styled-components";  
import "../br.css"
import Print from "../../assets/img/Vector.png"
import Download from "../../assets/img/Vector (1).png"

const ResultHistory = () => {
    const focusDiv = useRef();

    
    if(focusDiv.current) {
      focusDiv.current.focus(); 
    }

  return (
    <div>
        <Sidebar />
        <div className="grid grid-cols-5 py-4 mx-4 resultcolor ">
       <div className=" col-span-4"> 
       <FlexColumnRoot>
      <Paragraph> Result <br className="responsivemodal"></br> History</Paragraph> 
     </FlexColumnRoot>
        
       </div>
       <div className="">   
       <ImageRootw src={`https://file.rendit.io/n/H5cBdyWtycaRxkh4P5g9.png`}  /> 
       </div>  
     
    </div> 
    <br />
    <Text4 htmlFor="StudentId"> Enter student Matric Number</Text4> 

    <div className=' ml-7 flex flex-row mb-3 pt-3 '> 
        <div className="box bg-gray-100 pl-2 py-2">
        <div className='pt-0.5'>
      <input ref={focusDiv} className='enterId' placeholder='Sta/11/2009'  type="text" id="StudentId"/>  
      </div>
 

</div>

      <div className=' pl-3  bg-gray-100 py-2 '>
      <RoyalPurpleText>Search History</RoyalPurpleText>
          
      </div>
      

    </div>

       {/* here */}

       <div className='bg-white py-5 md:mx-10 my-16 md:px-3'> 

<div>
<FlexColumn1>
   <Image1 src={`https://file.rendit.io/n/JnOqE2H4quDJGQJVpikq.png`} />
   <Text2>ONDO STATE UNIVERSITY OF SCIENCE AND TECHNOLOGY, OKTIPUPA RESULT HISTORY</Text2>
 </FlexColumn1>
</div>


<div>
<div class="grid grid-cols-5 py-2 mx-2 bg-white">
<div class="bg-white  mx-auto col-span-5"> 

<div>
<table  style={{border: "none", marginBottom: "50px"}}>  
<tr style={{height:"40px"}}>

  <th style={{ fontWeight: "normal"}}></th>
  <th style={{ fontWeight: "normal"}}> </th>


</tr> 
<tr className='' style={{height:"25px"}}> 
  <td><label className="tabelinput" for="firstcourse"><Text3n>Matric Number:</Text3n></label></td>
  <td style={{paddingLeft:"40px"}}><label className="tabelinput" for="firstcourse"><Text3 >STA/20/7009</Text3></label></td>

</tr>


<tr className='' style={{height:"25px"}}> 
  <td><label className="tabelinput" for="firstcourse"><Text3n>Full Name:</Text3n></label></td>
  <td style={{paddingLeft:"40px"}}><label className="tabelinput" for="firstcourse"><Text3 >Ayomide Akinyemi</Text3></label></td>

</tr>

<tr className='' style={{height:"25px"}}> 
  <td><label className="tabelinput" for="firstcourse"><Text3n>Level:</Text3n></label></td>
  <td style={{paddingLeft:"40px"}}><label className="tabelinput" for="firstcourse"><Text3 >100</Text3></label></td>

</tr>

<tr className='' style={{height:"25px"}}> 
  <td><label className="tabelinput" for="firstcourse"><Text3n>Programme:</Text3n></label></td>
  <td style={{paddingLeft:"40px"}}><label className="tabelinput" for="firstcourse"><Text3 >Statistics</Text3></label></td>

</tr>


<tr className='' style={{height:"25px"}}> 
  <td><label className="tabelinput" for="firstcourse"><Text3n>Department:</Text3n></label></td>
  <td style={{paddingLeft:"40px"}}><label className="tabelinput" for="firstcourse"><Text3 >Engineering</Text3></label></td>

</tr>





<tr className='' style={{height:"25px"}}> 
  <td><label className="tabelinput" for="firstcourse"><Text3n>Faculty:</Text3n></label></td>
  <td style={{paddingLeft:"40px"}}><label className="tabelinput" for="firstcourse"><Text3 >Engineering</Text3></label></td>

</tr>

</table>
</div>


</div>
</div> 
</div>

  <div className=' bg-white drop-shadow-md mx-3 pb-3  pr-3'>

  {/* next notice */}

  <div style={{overflowX: "auto", border: "1px solid black"}} className='bg-white mx-3 '> 

       
      <Text15>1st Semester of 2014-2015</Text15>
   
       
       <table className='Yourcoursereg mx-auto my-6' style={{width:"100%"}} >    
   <tr style={{height:"40px", backgroundColor: "#e5e5e5"}}>
       <th style={{width:"4%", paddingLeft:"5px"}}>S/N</th> 
       <th style={{width:"11.8%"}}>Course Code</th>
       <th style={{width:"23.4%"}}>Description</th> 
       <th style={{width:"23.4%"}}>Status</th>
       <th style={{width:"9.3%"}}>Unit</th>
       <th style={{width:"9.3%"}}>Score</th>
       <th style={{width:"9.3%"}}>Grade</th> 
       <th style={{width:"9.3%"}}>Level</th>    
       
   </tr>    

   <tr style={{height:"70px"}}> 
       <td style={{paddingLeft:"10px"}}> 1</td> 
       <td><label for="firstcourse"> <Text3>CSC 101</Text3></label></td>
       <td ><label for="firstcourse"><Text3>Introduction to Computer Science</Text3></label></td>
       <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
       <td><label for="firstcourse"><Text3>C</Text3></label></td>
       <td><label for="firstcourse"><Text3>3</Text3></label></td>
       <td><label for="firstcourse"><Text3>45</Text3></label></td>
       <td><label for="firstcourse"><Text3>D</Text3></label></td>
   </tr>
  
   <tr style={{height:"70px"}}> 
       <td style={{paddingLeft:"10px"}}> 3</td> 
       <td><label for="firstcourse"> <Text3>CSC 101</Text3></label></td>
       <td ><label for="firstcourse"><Text3>Introduction to Computer Science</Text3></label></td>
       <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
       <td><label for="firstcourse"><Text3>C</Text3></label></td>
       <td><label for="firstcourse"><Text3>3</Text3></label></td>
       <td><label for="firstcourse"><Text3>45</Text3></label></td>
       <td><label for="firstcourse"><Text3>D</Text3></label></td>
   </tr>

   <tr style={{height:"70px"}}> 
       <td style={{paddingLeft:"10px"}}> 4</td> 
       <td><label for="firstcourse"> <Text3>CSC 101</Text3></label></td>
       <td ><label for="firstcourse"><Text3>Introduction to Computer Science</Text3></label></td>
       <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
       <td><label for="firstcourse"><Text3>C</Text3></label></td>
       <td><label for="firstcourse"><Text3>3</Text3></label></td>
       <td><label for="firstcourse"><Text3>45</Text3></label></td>
       <td><label for="firstcourse"><Text3>D</Text3></label></td>
   </tr>

   <tr style={{height:"70px"}}> 
       <td style={{paddingLeft:"10px"}}> 5</td> 
       <td><label for="firstcourse"> <Text3>CSC 101</Text3></label></td>
       <td ><label for="firstcourse"><Text3>Introduction to Computer Science</Text3></label></td>
       <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
       <td><label for="firstcourse"><Text3>C</Text3></label></td>
       <td><label for="firstcourse"><Text3>3</Text3></label></td>
       <td><label for="firstcourse"><Text3>45</Text3></label></td>
       <td><label for="firstcourse"><Text3>D</Text3></label></td>
   </tr>

   <tr style={{height:"70px"}}> 
       <td style={{paddingLeft:"10px"}}> 6</td> 
       <td><label for="firstcourse"> <Text3>CSC 101</Text3></label></td>
       <td ><label for="firstcourse"><Text3>Introduction to Computer Science</Text3></label></td>
       <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
       <td><label for="firstcourse"><Text3>C</Text3></label></td>
       <td><label for="firstcourse"><Text3>3</Text3></label></td>
       <td><label for="firstcourse"><Text3>45</Text3></label></td>
       <td><label for="firstcourse"><Text3>D</Text3></label></td>
   </tr>


   <tr style={{height:"70px"}}> 
       <td style={{paddingLeft:"10px"}}> 7</td> 
       <td><label for="firstcourse"> <Text3>CSC 101</Text3></label></td>
       <td ><label for="firstcourse"><Text3>Introduction to Computer Science</Text3></label></td>
       <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
       <td><label for="firstcourse"><Text3>C</Text3></label></td>
       <td><label for="firstcourse"><Text3>3</Text3></label></td>
       <td><label for="firstcourse"><Text3>45</Text3></label></td>
       <td><label for="firstcourse"><Text3>D</Text3></label></td>
   </tr>

   <tr style={{height:"70px"}}> 
       <td style={{paddingLeft:"10px"}}> 8</td> 
       <td><label for="firstcourse"> <Text3>CSC 101</Text3></label></td>
       <td ><label for="firstcourse"><Text3>Introduction to Computer Science</Text3></label></td>
       <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
       <td><label for="firstcourse"><Text3>C</Text3></label></td>
       <td><label for="firstcourse"><Text3>3</Text3></label></td>
       <td><label for="firstcourse"><Text3>45</Text3></label></td>
       <td><label for="firstcourse"><Text3>D</Text3></label></td>
   </tr>

   <tr style={{height:"70px"}}> 
       <td style={{paddingLeft:"10px"}}> 9</td> 
       <td><label for="firstcourse"> <Text3>CSC 101</Text3></label></td>
       <td ><label for="firstcourse"><Text3>Introduction to Computer Science</Text3></label></td>
       <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
       <td><label for="firstcourse"><Text3>C</Text3></label></td>
       <td><label for="firstcourse"><Text3>3</Text3></label></td>
       <td><label for="firstcourse"><Text3>45</Text3></label></td>
       <td><label for="firstcourse"><Text3>D</Text3></label></td> 
   </tr>

      </table>
    

</div>

<div style={{overflowX: "auto", border: "1px solid black"}} className='bg-white mx-3 mt-7 '> 

       
<Text15>2nd Semester of 2014-2015</Text15>

 
 <table className='Yourcoursereg mx-auto my-6' style={{width:"100%"}} >    
<tr style={{height:"40px", backgroundColor: "#e5e5e5"}}>
 <th style={{width:"4%", paddingLeft:"5px"}}>S/N</th> 
 <th style={{width:"11.8%"}}>Course Code</th>
 <th style={{width:"23.4%"}}>Description</th> 
 <th style={{width:"23.4%"}}>Status</th>
 <th style={{width:"9.3%"}}>Unit</th>
 <th style={{width:"9.3%"}}>Score</th>
 <th style={{width:"9.3%"}}>Grade</th> 
 <th style={{width:"9.3%"}}>Level</th>    
 
</tr>    

<tr style={{height:"70px"}}> 
 <td style={{paddingLeft:"10px"}}> 1</td> 
 <td><label for="firstcourse"> <Text3>CSC 101</Text3></label></td>
 <td ><label for="firstcourse"><Text3>Introduction to Computer Science</Text3></label></td>
 <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
 <td><label for="firstcourse"><Text3>C</Text3></label></td>
 <td><label for="firstcourse"><Text3>3</Text3></label></td>
 <td><label for="firstcourse"><Text3>45</Text3></label></td>
 <td><label for="firstcourse"><Text3>D</Text3></label></td>
</tr>

<tr style={{height:"70px"}}> 
 <td style={{paddingLeft:"10px"}}> 3</td> 
 <td><label for="firstcourse"> <Text3>CSC 101</Text3></label></td>
 <td ><label for="firstcourse"><Text3>Introduction to Computer Science</Text3></label></td>
 <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
 <td><label for="firstcourse"><Text3>C</Text3></label></td>
 <td><label for="firstcourse"><Text3>3</Text3></label></td>
 <td><label for="firstcourse"><Text3>45</Text3></label></td>
 <td><label for="firstcourse"><Text3>D</Text3></label></td>
</tr>

<tr style={{height:"70px"}}> 
 <td style={{paddingLeft:"10px"}}> 4</td> 
 <td><label for="firstcourse"> <Text3>CSC 101</Text3></label></td>
 <td ><label for="firstcourse"><Text3>Introduction to Computer Science</Text3></label></td>
 <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
 <td><label for="firstcourse"><Text3>C</Text3></label></td>
 <td><label for="firstcourse"><Text3>3</Text3></label></td>
 <td><label for="firstcourse"><Text3>45</Text3></label></td>
 <td><label for="firstcourse"><Text3>D</Text3></label></td>
</tr>

<tr style={{height:"70px"}}> 
 <td style={{paddingLeft:"10px"}}> 5</td> 
 <td><label for="firstcourse"> <Text3>CSC 101</Text3></label></td>
 <td ><label for="firstcourse"><Text3>Introduction to Computer Science</Text3></label></td>
 <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
 <td><label for="firstcourse"><Text3>C</Text3></label></td>
 <td><label for="firstcourse"><Text3>3</Text3></label></td>
 <td><label for="firstcourse"><Text3>45</Text3></label></td>
 <td><label for="firstcourse"><Text3>D</Text3></label></td>
</tr>

<tr style={{height:"70px"}}> 
 <td style={{paddingLeft:"10px"}}> 6</td> 
 <td><label for="firstcourse"> <Text3>CSC 101</Text3></label></td>
 <td ><label for="firstcourse"><Text3>Introduction to Computer Science</Text3></label></td>
 <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
 <td><label for="firstcourse"><Text3>C</Text3></label></td>
 <td><label for="firstcourse"><Text3>3</Text3></label></td>
 <td><label for="firstcourse"><Text3>45</Text3></label></td>
 <td><label for="firstcourse"><Text3>D</Text3></label></td>
</tr>


<tr style={{height:"70px"}}> 
 <td style={{paddingLeft:"10px"}}> 7</td> 
 <td><label for="firstcourse"> <Text3>CSC 101</Text3></label></td>
 <td ><label for="firstcourse"><Text3>Introduction to Computer Science</Text3></label></td>
 <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
 <td><label for="firstcourse"><Text3>C</Text3></label></td>
 <td><label for="firstcourse"><Text3>3</Text3></label></td>
 <td><label for="firstcourse"><Text3>45</Text3></label></td>
 <td><label for="firstcourse"><Text3>D</Text3></label></td>
</tr>

<tr style={{height:"70px"}}> 
 <td style={{paddingLeft:"10px"}}> 8</td> 
 <td><label for="firstcourse"> <Text3>CSC 101</Text3></label></td>
 <td ><label for="firstcourse"><Text3>Introduction to Computer Science</Text3></label></td>
 <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
 <td><label for="firstcourse"><Text3>C</Text3></label></td>
 <td><label for="firstcourse"><Text3>3</Text3></label></td>
 <td><label for="firstcourse"><Text3>45</Text3></label></td>
 <td><label for="firstcourse"><Text3>D</Text3></label></td>
</tr>

<tr style={{height:"70px"}}> 
 <td style={{paddingLeft:"10px"}}> 9</td> 
 <td><label for="firstcourse"> <Text3>CSC 101</Text3></label></td>
 <td ><label for="firstcourse"><Text3>Introduction to Computer Science</Text3></label></td>
 <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
 <td><label for="firstcourse"><Text3>C</Text3></label></td>
 <td><label for="firstcourse"><Text3>3</Text3></label></td>
 <td><label for="firstcourse"><Text3>45</Text3></label></td>
 <td><label for="firstcourse"><Text3>D</Text3></label></td> 
</tr>

</table>


</div>





<div className='justifyprint mt-7'> 
<WhiteFlexRowRoot>
<FlexRowy>
<Image2 src={Print}  />
 <Texty>Print </Texty>
</FlexRowy> 
</WhiteFlexRowRoot>  

<WhiteFlexRowRoot>
<FlexRowy>
 <Image2 src={Download}  /> 
 <Texty>Download </Texty>
</FlexRowy>  
</WhiteFlexRowRoot>  




</div>
 
</div>



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
  
 
  
 
  

  
  const ImageRootw = styled.img`
    width: 89px;
    height: 89px;
  `;
  
  
  const Image1 = styled.img`
    width: 96px;
    height: 94px;
    margin: 0px 0px 22px 0px;
  `;
  const Text2 = styled.div`
    font-size: 24px;
    font-family: Product Sans Medium;
    line-height: 23.28px;
    color: black;
    margin: 0px 0px 10px 0px;
    text-align: center; 
  
    @media ${devices.tablet} { 
      text-align: center; 
      font-size: 20px;
    } 
  
  `;
  
  const Text3 = styled.div`
    font-size: 16px;
    font-family: Product Sans Medium;
    line-height: 15.52px;
    color: #505050;
    align-self: ${(props) => props.alignSelf};
  `;

  const Text3n = styled.div`
    font-size: 19px;
    font-family: Product Sans Medium;
    line-height: 15.52px;
    font-weight: bold;
    color: #505050;
    align-self: ${(props) => props.alignSelf};
  `;
  
  
  
  const FlexColumn1 = styled.div`
    height: 165px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 0px 37.5px 0px;
  `;
  
 
  
  const Text15 = styled.div`
    font-size: 19.5px;
    font-family: Product Sans Medium;
    line-height: 17.46px;
    color: black;
    margin-top: 30px;
    font-weight: bold;
    display: flex;
    justify-content: flex-start; 
    padding-left:10px;
  `;
  
  
  const WhiteFlexRowRoot = styled.div`
    width: 180px;
    background-color: #f0f0f0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    padding: 12px 0px;
    margin-left: 20px; 
    cursor: pointer;
  
   
  
  `;
  const FlexRowy = styled.div`
    display: flex;
    flex-direction: row;
    gap: 11px;
    justify-content: center;
    align-items: center;
  
    @media ${devices.mobileL} { 
      gap: 2px;
    } 
  
  `;
  const Image2 = styled.img`
    width: 16px;
    height: 14px;
    align-self: flex-end;
    margin: 0px 0px 3px 0px;
    @media ${devices.mobileL} { 
      margin-right: 10px;
    } 

  `;
  
  const Texty = styled.div`
    font-size: 14px;
    font-family: Roboto;
    line-height: 21px;
    color: #787878;
    cursor: pointer;
  
    @media ${devices.mobileL} { 
      width: 72px; 
    } 
  
  `;
  
  
  
  





  
  const Text4 = styled.label`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #505050;
  align-self: flex-start;
  padding-left: 30px;
   

  @media ${devices.mobileL} { 
  
    padding-left: 30px;
  }

`;
  
  const RoyalPurpleText = styled.div`
    mix-blend-mode: normal;
    display: flex;
    font-size: 14px;
    font-family: Roboto;
    line-height: 21px;
    color: #ffffff;
    width: 135px;
    height: 40px;
    background-color: #2d0353;
    flex-direction: row;
    justify-content: center;
    padding: 11px 0px 13px 0px;
    margin-right: 10px;
  `;
  
  

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





export default ResultHistory
import Sidebar from 'components/Sidebar'
import React from 'react'
 
import styled from "styled-components";  
import "../br.css" 


const Fees = () => {
   

 
   

  return (
    <>
    <div>
        <Sidebar />
        <div className="grid grid-cols-5 py-4 mb-16 mx-4 resultcolor ">
       <div className=" col-span-4"> 
       <FlexColumnRoot>
      <Paragraph> Fee <br className="responsivemodal"></br>Structure</Paragraph> 
     </FlexColumnRoot>
        
       </div>
       <div className="">   
       <ImageRoot src={`https://file.rendit.io/n/j76L2SriXLBfmppY2tD6.png`}  /> 
       </div>  
     
    </div> 
       
    <div className='flex justify-between pl-4'>
        <EditProfileRoot>Fees for Indigene and Non-Indigene</EditProfileRoot>

        <button className="editfee"> Edit Fee</button> 
        </div> 
    
    <div style={{overflowX: "auto"}} className='bg-white mx-3 '> 
       
       <table className='Yourcoursereg mx-auto my-6' style={{width:"100%"}} >    
   <tr style={{height:"40px", backgroundColor: "#e5e5e5"}}>
      
       <th style={{width:"10%",paddingLeft:"10px"}}>S/N</th> 
       <th style={{width:"30%"}}>Faculty</th> 
       <th style={{width:"30%"}}>Indigene</th> 
       <th style={{width:"30%"}}>Non-Indigene</th> 
     
   </tr>    

   <tr style={{height:"70px"}}> 
       <td style={{paddingLeft:"10px"}}><label for="firstcourse"> <Text3>1</Text3></label></td>
       <td ><label for="firstcourse"><Text3>Engineering</Text3></label></td>
       <td><label for="firstcourse"><Text3>₦20000</Text3></label></td>
       <td><label for="firstcourse"><Text3>₦25000</Text3></label></td>
   </tr> 

   <tr style={{height:"70px", backgroundColor: "#e5e5e5"}}> 
       <td style={{paddingLeft:"10px"}}><label for="firstcourse"> <Text3>2</Text3></label></td>
       <td ><label for="firstcourse"><Text3>Sciences</Text3></label></td>
       <td><label for="firstcourse"><Text3>₦20000</Text3></label></td>
       <td><label for="firstcourse"><Text3>₦25000</Text3></label></td>
   </tr> 

   <tr style={{height:"70px"}}> 
       <td style={{paddingLeft:"10px"}}><label for="firstcourse"> <Text3>3</Text3></label></td>
       <td ><label for="firstcourse"><Text3>Agriculture</Text3></label></td>
       <td><label for="firstcourse"><Text3>₦20000</Text3></label></td>
       <td><label for="firstcourse"><Text3>₦25000</Text3></label></td>
   </tr> 

   <tr style={{height:"70px", backgroundColor: "#e5e5e5"}}> 
       <td style={{paddingLeft:"10px"}}><label for="firstcourse"> <Text3>4</Text3></label></td>
       <td ><label for="firstcourse"><Text3>Management</Text3></label></td>
       <td><label for="firstcourse"><Text3>₦20000</Text3></label></td>
       <td><label for="firstcourse"><Text3>₦25000</Text3></label></td>
   </tr> 


      </table>
    

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

const Text3 = styled.div`
  mix-blend-mode: normal;
  font-size: 17px;
  font-family: Roboto;
  line-height: 21px;
  color: #787878;
  text-align: left;
 
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


export default Fees
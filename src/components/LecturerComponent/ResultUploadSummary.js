import Sidebar from 'components/Sidebar';
import React from 'react'
import styled from "styled-components"; 


const ResultUploadSummary = () => {

   
  return (

     <>
        <Sidebar />


        
        <div className="grid grid-cols-5 py-4 mx-4 mb-7 resultcolor ">
       <div className=" col-span-4"> 
       <FlexColumnRoot>
      <Paragraph>Result Upload<br className="responsivemodal"></br> Summary</Paragraph> 
     </FlexColumnRoot>
        
       </div>
       <div className="">   
       <ImageRoot src={`https://file.rendit.io/n/WV1XnWUqsc0YCi5HuCdS.svg`}  /> 
       </div>  
     
    </div> 

 

  <div className='flex flex-row pl-3 gap-2 justify-end mr-2'>

     <Text3de>Department</Text3de>

       <div className="level pt-1 mr-5">
      <select  className='bg-gray-200 '>
        <option  selected> All </option> 
        <option>Level All</option>
        <option>Level All</option>
        <option>Level All</option>
        <option>Level All</option>
      </select> 
 
    </div>
     
    <GroupRootRoot>
      <Text1range>1-10 of 1000</Text1range>
      <FlexRowrange>
        <Image1range src={`https://file.rendit.io/n/s9B2vGLf4Zltt4ZrUnvJ.svg`} />
        <Image1range src={`https://file.rendit.io/n/TwpM28lpKKJjUKn6TcHt.svg`} />
      </FlexRowrange>
    </GroupRootRoot>

    </div>

    <div className='ml-3 flex justify-start'>
  <EditProfileRoot>Engineering</EditProfileRoot>
  </div>



    <div style={{overflowX: "auto"}} className='bg-white mx-3 '> 
       
       <table className='Yourcoursereg mx-auto my-6' style={{width:"100%"}} >    
   <tr style={{height:"40px", backgroundColor: "#e5e5e5"}}>
      
       <th style={{width:"5%",paddingLeft:"10px"}}>S/N</th> 

       <th style={{width:"10%"}}>Course code</th> 
       <th style={{width:"17.5%"}}>Course description</th> 
       <th style={{width:"17.5%"}}>Department</th> 
       <th style={{width:"15%"}}>No. registered</th> 
       <th style={{width:"15%"}}>No. Uploaded</th> 

       <th style={{width:"10%"}}>Diff</th> 
       <th style={{width:"10%"}}>Status</th> 
     
   </tr>    

   <tr style={{height:"70px"}}> 
       <td style={{paddingLeft:"10px"}}><label> <Text3>1</Text3></label></td>
       <td ><label><Text3>CSC 201</Text3></label></td>
       <td><label><Text3>Basics of Computing</Text3></label></td>
       <td><label><Text3>Computer Science</Text3></label></td>
       <td><label><Text3>718</Text3></label></td> 
       <td><label><Text3>718</Text3></label></td>
       <td><label><Text3>0</Text3></label></td>
       <td><label> Completed   </label></td>
  
   </tr> 

   <tr style={{height:"70px", backgroundColor: "#e5e5e5"}}> 
       <td style={{paddingLeft:"10px" }}><label> <Text3>2</Text3></label></td>
       <td ><label><Text3>CSC 201</Text3></label></td>
       <td><label><Text3>Basics of Computing</Text3></label></td>
       <td><label><Text3>Computer Science</Text3></label></td>
       <td><label><Text3>718</Text3></label></td> 
       <td><label><Text3>718</Text3></label></td>
       <td><label><Text3>0</Text3></label></td>
       <td><label> Completed   </label></td>
  
   </tr> 

   <tr style={{height:"70px"}}> 
       <td style={{paddingLeft:"10px"}}><label> <Text3>3</Text3></label></td>
       <td ><label><Text3>CSC 201</Text3></label></td>
       <td><label><Text3>Basics of Computing</Text3></label></td>
       <td><label><Text3>Computer Science</Text3></label></td>
       <td><label><Text3>718</Text3></label></td> 
       <td><label><Text3>718</Text3></label></td>
       <td><label><Text3>0</Text3></label></td>
       <td><label> Completed   </label></td>
  
   </tr> 

   <tr style={{height:"70px", backgroundColor: "#e5e5e5"}}> 
       <td style={{paddingLeft:"10px"}}><label> <Text3>4</Text3></label></td>
       <td ><label><Text3>CSC 201</Text3></label></td>
       <td><label><Text3>Basics of Computing</Text3></label></td>
       <td><label><Text3>Computer Science</Text3></label></td>
       <td><label><Text3>718</Text3></label></td> 
       <td><label><Text3>718</Text3></label></td>
       <td><label><Text3>0</Text3></label></td>
       <td><label> Completed </label></td>
  
   </tr> 

   <tr style={{height:"70px"}}> 
       <td style={{paddingLeft:"10px"}}><label> <Text3>5</Text3></label></td>
       <td ><label><Text3>CSC 201</Text3></label></td>
       <td><label><Text3>Basics of Computing</Text3></label></td>
       <td><label><Text3>Computer Science</Text3></label></td>
       <td><label><Text3>718</Text3></label></td> 
       <td><label><Text3>718</Text3></label></td>
       <td><label><Text3>0</Text3></label></td>
       <td><label> Completed   </label></td>
  
   </tr> 


      </table>
    

</div>

<div className='ml-3 flex justify-start'>
  <EditProfileRoot>Upload Summary </EditProfileRoot>
  </div>


  <div style={{overflowX: "auto"}} className='bg-gray-100 mb-5 mx-3 '> 
       
       <table className='Yourcoursereg  my-6' style={{width:"70%"}} >    
   <tr style={{height:"40px"}}>
      
       <th style={{paddingLeft:"10px", width:"15%"}}><Text1>Status</Text1></th> 

       <th style={{width:"15%"}} ></th> 
       <th style={{width:"15%"}} ></th> 
       <th style={{width:"15%"}} ></th> 
     

   </tr>    

   <tr style={{height:"70px"}}> 
       <td style={{paddingLeft:"10px"}}><label><Text2>Uploaded</Text2> </label></td>


       <td><label><Text3a>358</Text3a></label></td>
       <td><label><Text1>Total</Text1></label></td>
       <td><label><Text1>394</Text1></label></td>
      
   </tr> 

   <tr style={{height:"70px"}}> 
       <td style={{paddingLeft:"10px"}}><label><Text2>Not Uploaded</Text2> </label></td>


       <td><label><Text3a>36</Text3a></label></td>
       <td><label><Text1>Percentage Uploaded</Text1></label></td>
       <td><label><Text1>90.68</Text1></label></td>
      
   </tr> 

   <tr style={{height:"70px"}}> 
       <td style={{paddingLeft:"10px"}}><label><Text2a>Error</Text2a> </label></td>


       <td><label><Text2a>116</Text2a></label></td>
       <td><label></label></td>
       <td><label></label></td>
      
   </tr> 

      </table>
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

const Text3de = styled.div`
  mix-blend-mode: normal;
  font-size: 16px;
  font-family: Roboto;
  line-height: 21px;
  color: #787878;
  text-align: left;
  padding-top:15px;
 
  @media ${devices.mobileL} { 
    font-size: 13px;
  } 
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


const Image1range = styled.img`
  width: 20px;
  height: 20px;
  @media ${devices.mobileL} { 
    width: 14px;
  } 
`;
const GroupRootRoot = styled.div`
  gap: 19px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media ${devices.mobileL} { 
    padding-right: 16px;
  } 
 
`;
const Text1range = styled.div`
  color: #787878;
  font-size: 16px;
  font-family: Product Sans Medium;
  line-height: 15.52px;
  white-space: nowrap;
  @media ${devices.mobileL} { 
  
    font-size: 12px;
  } 
`;
const FlexRowrange = styled.div`
  gap: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;



const Text1 = styled.div`
  color: #2d0353;
  font-size: 18px;
  font-family: Product Sans Medium;
  line-height: 17.46px;
  white-space: nowrap;
  
`;

const Text2 = styled.div`
  color: #27ae60;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
`;
const Text2a = styled.div`
  color: orange;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
`;

const Text3a = styled.div`
  color: #27ae60;
  font-size: 18px;
  font-family: Product Sans Medium;
  line-height: 17.46px;
  white-space: nowrap;
`;


export default ResultUploadSummary
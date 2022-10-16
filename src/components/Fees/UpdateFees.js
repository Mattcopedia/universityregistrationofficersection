import Sidebar from 'components/Sidebar'
import React, {useState} from 'react'
 
import styled from "styled-components";  
import "../br.css" 


const UpdateFees = () => {
    const [shouldshow, setShouldshow] = useState(false);
    const [submit, setSubmit] = useState(false);

  return (
    <>
    { shouldshow && (
        <ModalBackground onClick={() => setShouldshow(false)}>
            <ModalBody onClick={(e) => e.stopPropagation()}>
                
            <WhiteFlexColumnRoot> 
      <FlexColumn>
        <Image2 src={`https://file.rendit.io/n/sTOHrcyJpvB1xdSHuhfh.svg`} />
        <Text1>Information</Text1>
        <Paragraphw>
          Are you sure you want to <br className="responsivemodal"></br>Update student Fees{" "}
        </Paragraphw>
        <div className='flex flex-row gap-2'>
        <RoyalPurpleText onClick={() => setShouldshow(false)}>No</RoyalPurpleText>
        <RoyalPurpleTextw>Yes</RoyalPurpleTextw>
        </div>
      </FlexColumn>
    </WhiteFlexColumnRoot>

    
            </ModalBody>
        </ModalBackground>
      )}
    
    { submit && (
        <ModalBackground onClick={() => setSubmit(false)}>
            <ModalBody onClick={(e) => e.stopPropagation()}>
                
            <WhiteFlexColumnRoot> 
      <FlexColumn>
        <Image2 src={`https://file.rendit.io/n/7I3yZRjpHsAGEb48rZcx.svg`} />
        <Text1>Successful</Text1>
        <Paragraphw>
        New Student Fees <br className="responsivemodal"></br>has been updated
          successfully{" "}
        </Paragraphw>
        <RoyalPurpleText onClick={() => setSubmit(false)}>Ok</RoyalPurpleText>
      </FlexColumn>
    </WhiteFlexColumnRoot>

    
            </ModalBody>
        </ModalBackground>
      )}
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
       
    <div className='flex justify-center pl-4 mb-7'>
        <EditProfileRoot>Update Fees for Indigene and Non-Indigene</EditProfileRoot>
        </div> 


    
    <div style={{overflowX: "auto" }} className='bg-gray-100 lg:mx-11'> 
       
       <table className='Yourcoursereg mx-auto my-6' style={{width:"60%"}} >    
   <tr style={{height:"40px"}}>
      
       <th style={{width:"33%"}}></th> 
      
       <th style={{width:"33%",paddingLeft:"10px"}}><Text3>Indigene</Text3></th> 
       <th style={{width:"33%",paddingLeft:"10px"}}><Text3>Non-Indigene</Text3></th> 
     
   </tr>    

   <tr style={{height:"70px"}}> 
       <td ><label><Text3>Engineering</Text3></label></td>
       <td><label>  <Input type="text" placeholder="₦20000" /></label></td>
       <td><label ><Input type="text" placeholder="₦25000" /></label></td>
   </tr> 

   <tr style={{height:"70px"}}> 
       <td ><label><Text3>Sciences</Text3></label></td>
       <td><label>  <Input type="text" placeholder="₦20000" /></label></td>
       <td><label ><Input type="text" placeholder="₦25000" /></label></td>
   </tr>

   <tr style={{height:"70px"}}> 
       <td ><label><Text3>Agriculture</Text3></label></td>
       <td><label>  <Input type="text" placeholder="₦20000" /></label></td>
       <td><label ><Input type="text" placeholder="₦25000" /></label></td>
   </tr>

   <tr style={{height:"70px"}}> 
       <td ><label><Text3>Management</Text3></label></td>
       <td><label>  <Input type="text" placeholder="₦20000" /></label></td>
       <td><label ><Input type="text" placeholder="₦25000" /></label></td>
   </tr>

      </table>
    
      <div className='flex justify-center pl-4'>
    <button className='purplebtn' >Update Fees </button> 
        </div>

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

  
const Input = styled.input`
mix-blend-mode: normal;
display: flex;
font-size: 14px;
font-family: Product Sans Medium;
line-height: 21.21px;
color: #787878;
border-style: solid;
border-color: #b3b1b1;
max-width: 266px;
height: 44px;
background-color: #ffffff;
flex-direction: row;
justify-content: flex-start;
border-radius: 6px;
padding: 11.5px 21.5px;
border-width: 0.5px;
margin-top: 10px; 
margin-left: 10px;
text-align: center; 

::placeholder {
  color: grey;
}


@media ${devices.tablet} {
  width: 120px;    
} 

@media ${devices.mobileL} {
  width: 60px;    
} 


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
  margin:auto;
`;



const ModalBackground = styled.div`
     position:fixed;
     z-index: 1;
     left: 0;
     top: 0;
     width: 100%;
     height: 100%;
     overflow: auto;
     background-color: rgba(0,0,0,0.5);
`

const ModalBody = styled.div`
     background-color: white;
     margin: 10% auto;
     padding: 20px; 
     width: 50%;
     @media ${devices.tablet} {
        width: 90%;   
      } 

      @media ${devices.mobileL} { 
        width: 100%;
      } 

`



const WhiteFlexColumnRoot = styled.div`
  height: 390px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 0px 40px 0px 43px;
`;
const FlexColumn = styled.div`
  height: 273px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

 ]

`;
const Image2 = styled.img`
  width: 112px;
  height: 112px;
  margin: 0px 0px 12px 0px;
`;
const Text1 = styled.div`
  font-size: 18px;
  font-family: Product Sans Medium;
  line-height: 17.46px;
  color: #219653;
  margin: 0px 0px 13px 0px;
`;
const Paragraphw = styled.div`
  text-align: center;
  width: 313px;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #505050;
  margin: 0px 0px 32px 0px;
  white-space: pre-wrap;

  @media ${devices.mobileL} { 
    margin-left:10px; 
    margin-right:10px;
  } 

`;
const RoyalPurpleText = styled.div`
  display: flex;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #ffffff;
  width: 170px;
  height: 45px;
  background-color: #2d0353;
  flex-direction: row;
  justify-content: center;
  border-radius: 6px;
  padding: 13px 0px 11px 0px;
  cursor: pointer;
`;


const RoyalPurpleTextw = styled.div`
  display: flex;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: black;
  width: 170px;
  height: 45px;
  background-color: #f0f0f0;
  flex-direction: row;
  justify-content: center; 
  border-radius: 6px;
  padding: 13px 0px 11px 0px;
  cursor: pointer;
`;


export default UpdateFees
import React,{useState} from 'react'
import styled from "styled-components"; 
import AmendmentApproval from './AmendmentApproval';


const AmendmentApprovalList = () => {
    
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
        <Paragraph>
          Are you sure you want to <br className="responsivemodal"></br>accept this amended result{" "}
        </Paragraph>
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
        <Paragraph>
        Amended result<br className="responsivemodal"></br>has been updated
          successfully{" "}
        </Paragraph>
        <RoyalPurpleText onClick={() => setSubmit(false)}>Ok</RoyalPurpleText>
      </FlexColumn>
    </WhiteFlexColumnRoot>

    
            </ModalBody>
        </ModalBackground>
      )}




    <div>
        <AmendmentApproval />     

        <div className='flex flex-start pl-4'>
        <EditProfileRoot>CSC201 (Computer analysis) amendment list</EditProfileRoot>
        </div> 

        <div className='flex justify-end mr-3'>
        <NewRootRootRoot>
      <WhiteTexta>Download</WhiteTexta>
    </NewRootRootRoot>
        </div>

        <div style={{overflowX: "auto"}} className='bg-white mx-3 '> 
       
       <table className='Yourcoursereg mx-auto my-6' style={{width:"100%"}} >    
   <tr style={{height:"40px", backgroundColor: "#e5e5e5"}}>
       <th style={{width:"17.5%", paddingLeft:"10px"}}>Date</th>
       <th style={{width:"17.5%"}}>Name</th> 
       <th style={{width:"12.5%"}}>Old Score</th>
       <th style={{width:"12.5%"}}>New Score</th>
       <th style={{width:"20%"}}>Instructor</th>
       <th style={{width:"10%"}}>Action</th> 
       <th style={{width:"10%"}}></th>    
       
   </tr>    

   <tr style={{height:"70px"}}> 
       <td style={{ paddingLeft:"10px"}}><label for="amendresult"> <Text3>24/10/2020</Text3></label></td>
       <td ><label for="amendresult"><Text3>Ayomide Akinyemi</Text3></label></td>
       <td><label for="amendresult"><Text3>55</Text3></label></td>
       <td><label for="amendresult"><Text3>75</Text3></label></td>
       <td><label for="amendresult"><Text3>Dr.Ayomide Akinyemi</Text3></label></td>
       <td><label for="amendresult"> <WhiteText>Approve</WhiteText></label></td>
       <td><label for="amendresult"><WhiteText1>Decline</WhiteText1></label></td>
   </tr>

   <tr style={{height:"70px", backgroundColor: "#e5e5e5"}}> 
       <td style={{ paddingLeft:"10px"}}><label for="amendresult"> <Text3>24/10/2020</Text3></label></td>
       <td ><label for="amendresult"><Text3>Ayomide Akinyemi</Text3></label></td>
       <td><label for="amendresult"><Text3>55</Text3></label></td>
       <td><label for="amendresult"><Text3>75</Text3></label></td>
       <td><label for="amendresult"><Text3>Dr.Ayomide Akinyemi</Text3></label></td>
       <td><label for="amendresult"> <WhiteText>Approve</WhiteText></label></td>
       <td><label for="amendresult"><WhiteText1>Decline</WhiteText1></label></td>
   </tr>

   <tr style={{height:"70px"}}> 
       <td style={{ paddingLeft:"10px"}}><label for="amendresult"> <Text3>24/10/2020</Text3></label></td>
       <td ><label for="amendresult"><Text3>Ayomide Akinyemi</Text3></label></td>
       <td><label for="amendresult"><Text3>55</Text3></label></td>
       <td><label for="amendresult"><Text3>75</Text3></label></td>
       <td><label for="amendresult"><Text3>Dr.Ayomide Akinyemi</Text3></label></td>
       <td><label for="amendresult"> <WhiteText>Approve</WhiteText></label></td>
       <td><label for="amendresult"><WhiteText1>Decline</WhiteText1></label></td>
   </tr>

   <tr style={{height:"70px", backgroundColor: "#e5e5e5"}}> 
       <td style={{ paddingLeft:"10px"}}><label for="amendresult"> <Text3>24/10/2020</Text3></label></td>
       <td ><label for="amendresult"><Text3>Ayomide Akinyemi</Text3></label></td>
       <td><label for="amendresult"><Text3>55</Text3></label></td>
       <td><label for="amendresult"><Text3>75</Text3></label></td>
       <td><label for="amendresult"><Text3>Dr.Ayomide Akinyemi</Text3></label></td>
       <td><label for="amendresult"> <WhiteText>Approve</WhiteText></label></td>
       <td><label for="amendresult"><WhiteText1>Decline</WhiteText1></label></td>
   </tr>

   <tr style={{height:"70px"}}> 
       <td style={{ paddingLeft:"10px"}}><label for="amendresult"> <Text3>24/10/2020</Text3></label></td>
       <td ><label for="amendresult"><Text3>Ayomide Akinyemi</Text3></label></td>
       <td><label for="amendresult"><Text3>55</Text3></label></td>
       <td><label for="amendresult"><Text3>75</Text3></label></td>
       <td><label for="amendresult"><Text3>Dr.Ayomide Akinyemi</Text3></label></td>
       <td><label for="amendresult"> <WhiteText>Approve</WhiteText></label></td>
       <td><label for="amendresult"><WhiteText1>Decline</WhiteText1></label></td>
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
const Paragraph = styled.div`
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

const Text3 = styled.div`
  mix-blend-mode: normal;
  font-size: 17px;
  font-family: Roboto;
  line-height: 21px;
  color: #787878;
  text-align: left;
 
`;


const WhiteText = styled.div`
   width: 90px;
  height: 37px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
  color: #219653;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
  border-style: solid;
  border-color: #219653;
  background-color: #ffffff;
  border-radius: 6px;
  padding: 4.5px 19.5px 5.5px 20.5px;
  margin: 0px 5px 0px 0px;
  border-width: 0.5px;
`;
const WhiteText1 = styled.div`
  width: 90px;
  height: 37px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
  color: #bc0808;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
  border-style: solid;
  border-color: #bc0808;
  background-color: #ffffff;
  border-radius: 6px;
  padding: 4.5px 22.5px 5.5px 23.5px;
  border-width: 0.5px;
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



const NewRootRootRoot = styled.div`
  background-color: rgba(0, 0, 0, 0);
`;
const WhiteTexta = styled.div`
  width: 120px;
  height: 39px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: #2d0353;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
  background-color: #f0f0f0;
  border-radius: 6px;
  padding: 10px 32px 9px 31px;
`;


export default AmendmentApprovalList
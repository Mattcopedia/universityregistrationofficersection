

import React, { useRef, useState} from 'react'
import styled from "styled-components";  
import "../br.css" 
import Sidebar from 'components/Sidebar';
 
 
const PublicServiceEdition = () => {
    
    const [shouldshow, setShouldshow] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [Edit, setEdit] = useState(true);
    const focusDiv = useRef();

    const handleEdit = () => {
      setEdit(!Edit);
      
    };
  
    
    if(focusDiv.current) {
      focusDiv.current.focus(); 
    }

    return  ( 
        <>
        { shouldshow && (
        <ModalBackground onClick={() => setShouldshow(false)}>
            <ModalBody onClick={(e) => e.stopPropagation()}>
                
            <WhiteFlexColumnRoot> 
      <FlexColumnp>
        <Image2 src={`https://file.rendit.io/n/sTOHrcyJpvB1xdSHuhfh.svg`} />
        <Text1>Information</Text1>
        <Paragraphp>
          Are you sure you want to <br className="responsivemodal"></br>send an announcement{" "}
        </Paragraphp>
        <div className='flex flex-row gap-2'>
        <RoyalPurpleTextp onClick={() => setShouldshow(false)}>No</RoyalPurpleTextp>
        <RoyalPurpleTextw>Yes</RoyalPurpleTextw>
        </div>
      </FlexColumnp>
    </WhiteFlexColumnRoot>

    
            </ModalBody>
        </ModalBackground>
      )}
    
    { submit && (
        <ModalBackground onClick={() => setSubmit(false)}>
            <ModalBody onClick={(e) => e.stopPropagation()}>
                
            <WhiteFlexColumnRoot> 
      <FlexColumnp>
        <Image2 src={`https://file.rendit.io/n/7I3yZRjpHsAGEb48rZcx.svg`} />
        <Text1>Successful</Text1>
        <Paragraphp>
        Student <br className="responsivemodal"></br>Announcement has been sent successfully{" "}
        </Paragraphp>
        <RoyalPurpleTextp onClick={() => setSubmit(false)}>Ok</RoyalPurpleTextp>
      </FlexColumnp>
    </WhiteFlexColumnRoot>

    
            </ModalBody>
        </ModalBackground>
      )}



        <Sidebar />
     
    
        <div className="grid grid-cols-5 py-4 mb-16 mx-4 resultcolor ">
       <div className=" col-span-4"> 
       <FlexColumnRoot>
      <Paragraph> Public Service<br className="responsivemodal"></br> Announcement</Paragraph> 
     </FlexColumnRoot>
        
       </div>
       <ImageRoot>  
       </ImageRoot> 
     
    </div> 

   

       <div> 
       <div className='pr-11 pb-5'>
              <PreviewRootRoot>Preview</PreviewRootRoot>
              </div>

              {Edit ? (
              <NewRootRootRoot>
              <WhiteFlexRow>
                <FlexColumn>
                  <FlexColumn1>
                    <StudentID>Sent to:</StudentID>
                    <StudentID1>All student ( 100,200,300,400,500)</StudentID1>
                  </FlexColumn1>
                  <FlexColumn2>
                    <StudentID>Message body</StudentID>
                    <StudentID3>
                      Lorem ipsum dolor sit amet, consectetu adipiscing elit. Sed
                      adipiscing  <br />tellus turpis felis <br />diam  ullamcorper non, egestas.<br />
                      
                    </StudentID3>
                  </FlexColumn2>
                  <Line src={`https://file.rendit.io/n/CCbnd52cZ1OJ9cQ6NRrB.svg`} />
                  <FlexRow>
                    <WhiteText onClick={handleEdit}>Edit</WhiteText>
                    {/* <RoyalPurpleText>Send</RoyalPurpleText> */}
                  </FlexRow>
        
                </FlexColumn>
              </WhiteFlexRow>
            </NewRootRootRoot>
              ) : (
                <NewRootRootRoot>
                <WhiteFlexRow>
                  <FlexColumn>
                    <FlexColumn1>
                      <StudentID>Sent to:</StudentID>
                      <StudentID1>All student ( 100,200,300,400,500)</StudentID1>
                    </FlexColumn1>
                    <FlexColumn2>
                      <StudentID>Message body</StudentID>   
                  <Input ref={focusDiv} rows="4" cols="46"  placeholder='Send Message'  />
                    </FlexColumn2>
                    <Line src={`https://file.rendit.io/n/CCbnd52cZ1OJ9cQ6NRrB.svg`} />
                    <FlexRow>
                    <WhiteTextCancel onClick={handleEdit}>Cancel</WhiteTextCancel>
                      <RoyalPurpleText>Send</RoyalPurpleText>
                    </FlexRow>
          
                  </FlexColumn>
                </WhiteFlexRow>
              </NewRootRootRoot>
              )}
      
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

const ImageRoot = styled.div`
width: 89px;
height: 89px;
`;


  const Input = styled.textarea`
  width:360px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: #bdbdbd;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
  border-style: solid;
  border-color: #787878;
  background-color: #ffffff;
  border-radius: 6px;

 
  border-width: 0.5px;
  ::placeholder {
    color: #bdbdbd;
    font-size: 14px;
    font-family: Roboto;
    line-height: 21px;
    white-space: nowrap;
    padding-left: 8px; 
  }
  :focus {
    padding-left:10px;
  }

  @media ${devices.tablet} { 
  
    margin-right: 60px;
  }

  @media ${devices.mobileL} { 
    width: 280px;
    
  }
`;




const StudentID = styled.div`
  color: #2d0353;
  font-size: 16px;
  font-family: Product Sans Medium;
  line-height: 15.52px;
  white-space: nowrap;
`;
const NewRootRootRoot = styled.div`
 
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0);
  margin-bottom:20px;

`;
const WhiteFlexRow = styled.div`
   margin:auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  border-radius: 6px;
  padding: 35px 35px 36px 35px;

    @media ${devices.mobileL} {
       padding-top: 20px;
       padding-bottom: 20px;
       padding-left: 25px;
       padding-right: 25px;
   
    }
`;
const FlexColumn = styled.div`
 
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const FlexColumn1 = styled.div`

  gap: 9px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  align-items: flex-start;
  margin: 0px 0px 20px 0px;
`;
const StudentID1 = styled.div`
  align-self: flex-end;
  color: #787878;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
`;
const FlexColumn2 = styled.div`
  gap: 9px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0px 0px 14.5px 0px;
`;
const StudentID3 = styled.div`
 
  height: 151px;
  align-self: flex-end;
  color: #787878;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
`;
const Line = styled.img`
  height: 0.5px;
  margin: 0px 0px 21px 0px;
`;
const FlexRow = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: flex-end;
  align-items: center;

    @media ${devices.mobileL} {
        align-self: start;
    }
`;
const WhiteText = styled.div`
  width: 40px;
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: #787878;
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  white-space: nowrap;
  border-style: solid;
  border-color: #787878;
  background-color: #ffffff;
  border-radius: 6px;
  padding: 10.5px 65.5px 9.5px 41.5px;
  border-width: 0.5px;
  cursor: pointer;
`;


const WhiteTextCancel = styled.div`
  width: 40px;
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: #787878;
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  white-space: nowrap;
  border-style: solid;
  border-color: #787878;
  background-color: #ffffff;
  border-radius: 6px;
  padding: 10.5px 80px 9.5px 37px;
  border-width: 0.5px;
  cursor: pointer;
`;

const RoyalPurpleText = styled.div`
width: 40px;
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: white;
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  white-space: nowrap;
  border-style: solid;
  border-color: #787878;
  background-color: #2d0353;
  border-radius: 6px;
  padding: 10.5px 74.5px 9.5px 47.5px;
  border-width: 0.5px;

`;



const PreviewRootRoot = styled.div`
  width: 387px;
  color: #2d0353;
  font-size: 24px;
  font-family: Product Sans Medium;
  line-height: 23.28px;
  font-weight:bold;
  margin:auto;

    @media ${devices.mobileL} {
      margin-left:20px;
    }
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
const FlexColumnp = styled.div`
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
const Paragraphp = styled.div`
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
const RoyalPurpleTextp = styled.div`
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




export default PublicServiceEdition; 


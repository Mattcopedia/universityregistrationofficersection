import Sidebar from 'components/Sidebar'
import React, { useRef, useState } from 'react'
import styled from "styled-components";  
import "../br.css" 


const ShowResult = () => {
    
  const [shouldshow, setShouldshow] = useState(false);
  const [Enable, setEnable] = useState(false);

  const handleToggle = () => {
    setEnable(!Enable);
    
  };

    const focusDiv = useRef();

    if(focusDiv.current) {
      focusDiv.current.focus();  
    }

   
 

  return (
    <>
 
     { shouldshow && (
        <ModalBackground onClick={() => setShouldshow(false)}>
            <ModalBody onClick={(e) => e.stopPropagation()}>
                
            <WhiteFlexColumnRoot> 
      <FlexColumn>
        <Image2 src={`https://file.rendit.io/n/7I3yZRjpHsAGEb48rZcx.svg`} />
        <Text1a>Successful</Text1a>
        <Paragrapha>
          Successfully Updated
        </Paragrapha>
        <RoyalPurpleTexta onClick={() => setShouldshow(false)}>Ok</RoyalPurpleTexta>
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
      <Paragraph> Hide/Show<br className="responsivemodal"></br> Student Result</Paragraph> 
     </FlexColumnRoot>
        
       </div>
       <ImageRoot>  
       </ImageRoot> 
     
    </div> 

    <RectangleRootRoot1>
            <WhiteFlexRow>
              
              <Text1>Show all faculty results</Text1>
              <label className="switch">
              <input type="checkbox" value={Enable} onClick={handleToggle} />
              <span className="slider round"></span>
            </label>
            </WhiteFlexRow> 
          </RectangleRootRoot1>
                  
                  <div className='mx-auto'>
          <RectangleRootRoot>
            <WhiteFlexRow>
              <Text1>Engineering {Enable}</Text1>
              <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            </WhiteFlexRow>
            <WhiteFlexRow>
              <Text2>Sciences</Text2>
                <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            </WhiteFlexRow>
            <WhiteFlexRow>
              <Text1>Environmental</Text1>
              <label className="switch">
              <input type="checkbox"  />
              <span className="slider round"></span>
            </label>
            </WhiteFlexRow>
            <WhiteFlexRow>
              <ShowAllFacultyResult>Agriculture</ShowAllFacultyResult>
              <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            </WhiteFlexRow>
            <div className='mt-2'>
            <RoyalPurpleText onClick={() => setShouldshow(true)}>Update</RoyalPurpleText>
            </div>
          
          </RectangleRootRoot>
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

const ImageRoot = styled.div`
width: 89px;
height: 89px;
`;


const WhiteFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-style: solid;
  border-color: #e8e8e8;
  background-color: #ffffff;
  border-radius: 6px;
  padding: 17.5px 14.5px 16.75px 30.5px;
  margin: 0px 0px 4px 0px;
  border-width: 0.5px;
`;
const Text1 = styled.div`
  align-self: flex-end;
  color: #787878;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
  margin: 0px 0px 1.75px 0px;
`;

const RectangleRootRoot = styled.div`
  width: 368px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #fafafa;
  border-radius: 6px;
  padding: 37px 42px 35px 43px;
  margin:auto;
`;

const RectangleRootRoot1 = styled.div`
  width: 368px;
  height: 135px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #fafafa;
  border-radius: 6px;
  padding: 37px 42px 35px 43px;
  margin:auto;
  margin-bottom:30px;
`;

const Text2 = styled.div`
  align-self: flex-end;
  color: #787878;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
  margin: 0px 0px 3.75px 0px;
`;

const ShowAllFacultyResult = styled.div`
  align-self: flex-start;
  color: #787878;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
  margin: 3px 0px 0px 0px;
`;
const RoyalPurpleText = styled.div`
 
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: #ffffff;
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  white-space: nowrap;
  border-style: solid;
  border-color: #787878;
  background-color: #2d0353;
  border-radius: 6px;
  padding: 10.5px 120px 9.5px 120.5px;
  border-width: 0.5px;  
`;


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
const Text1a = styled.div`
  font-size: 18px;
  font-family: Product Sans Medium;
  line-height: 17.46px;
  color: #219653;
  margin: 0px 0px 13px 0px;
`;
const Paragrapha = styled.div`
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
const RoyalPurpleTexta = styled.div`
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


export default ShowResult
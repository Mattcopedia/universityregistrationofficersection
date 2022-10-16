import React,{useState} from 'react'
import styled from "styled-components"; 
import AddDelete from './Add&Delete';

const AddDeleteProfile = () => {
    
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
          Are you sure you want to <br className="responsivemodal"></br>add or remove this course{" "}
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
        Student has been <br className="responsivemodal"></br> successfully added or removed{" "}
        </Paragraph>
        <RoyalPurpleText onClick={() => setSubmit(false)}>Ok</RoyalPurpleText>
      </FlexColumn>
    </WhiteFlexColumnRoot>

    
            </ModalBody>
        </ModalBackground>
      )}




    <div>
        <AddDelete />

                               <div className="flex flex-wrap">
  <div className="w-full sm:w-1/1 md:w-1/1 lg:w-1/2 xl:w-1/3 mb-4   mx-  mt-4">
  <WhiteFlexColumnRootyw>
      <Ellipseyw src={`https://file.rendit.io/n/tsYpb8jtUOnBDZAMizwM.png`} />
      <FlexColumnyw>
        <Text1yw>Department</Text1yw>
        <Text2yw>Statistics</Text2yw>
      </FlexColumnyw>

      <FlexColumnyw>
        <Text1yw onClick={() => setShouldshow(true)}>Matric No:</Text1yw>
        <Text2yw onClick={() => setSubmit(true)}>STA/19/7009</Text2yw>
      </FlexColumnyw>

    
      <div style={{height: "60px"}}> 
      </div>
      
    </WhiteFlexColumnRootyw>
    
    </div>
  <div className="w-full sm:w-1/1 md:w-1/1 lg:w-1/2 xl:w-1/3 mb-4 ">
  <WhiteFlexRowRootzw>
      <FlexColumnzw>
          
          <div className="flex flex-row">
        <FlexColumn1zw margin={`0px 40px 0px 1px`}>
          <Text1zw margin={`0`}>First name</Text1zw>
          <Text2zw alignSelf={`inherit`}>Ayomide Joy</Text2zw>
        </FlexColumn1zw>
          
        <FlexColumn1zw margin={`0`}>
          <Text1zw margin={`0px 0px 0px 1px`}>Last name</Text1zw>
          <Text2zw alignSelf={`inherit`}>Akinyemi</Text2zw>
        </FlexColumn1zw>
        
        </div>
        
             
        <FlexColumn1zw margin={`0px 0px 0px 1px`}>
          <Text1zw margin={`0`}>Email</Text1zw>
          <Text2zw alignSelf={`inherit`}>Akinzzz@universitystudent.com</Text2zw>
        </FlexColumn1zw>
        <FlexColumn1zw margin={`0px 0px 0px 1px`}>
          <Text1zw margin={`0`}>UTME number</Text1zw>
          <Text2zw alignSelf={`inherit`}>47230493743988</Text2zw>
        </FlexColumn1zw>
        
        <FlexColumn1zw margin={`0px 0px 0px 1px`}>
        <Text1zw margin={`0`}>State of Origin</Text1zw>
          <Text2zw alignSelf={`flex-start`}>Ekiti</Text2zw>
        </FlexColumn1zw> 

        <FlexColumn1zw margin={`0px 0px 0px 1px`}>
          <Text1zw margin={`0`}>Registered for the semester</Text1zw>
          <Text2zw alignSelf={`flex-start`}>No</Text2zw>
        </FlexColumn1zw> 

        <FlexColumn1zw margin={`0px 0px 0px 1px`}>
          <Text1zw margin={`0`}>Course form Submitted</Text1zw>
          <Text2zw alignSelf={`flex-start`}>No</Text2zw>
        </FlexColumn1zw> 

        
       
      </FlexColumnzw>

    </WhiteFlexRowRootzw> 
    
    </div>
  <div className="w-full sm:w-1/1 md:w-1/1 lg:w-1/2 xl:w-1/3   "> 
  <SelectAcademicYearRoot>Registered Courses</SelectAcademicYearRoot>
   <div className='bg-gray-100 mr-7 pl-14 py-3'>
    <div className='flex flex-row gap-3'>
    <Text2zw>CSC 201 </Text2zw>
    <Text2zw>CSC 201 </Text2zw>
    <Text2zw>CSC 201 </Text2zw>
    </div>

    <div className='flex flex-row gap-3'>
    <Text2zw>CSC 201 </Text2zw>
    <Text2zw>CSC 201 </Text2zw>
    <Text2zw>CSC 201 </Text2zw>
    </div>

    <div className='flex flex-row gap-3'>
    <Text2zw>CSC 201 </Text2zw>
    <Text2zw>CSC 201 </Text2zw>
    <Text2zw>CSC 201 </Text2zw>
    </div>

    <div className='flex flex-row gap-3'>
    <Text2zw>CSC 201 </Text2zw>
    <Text2zw>CSC 201 </Text2zw>
    <Text2zw>CSC 201 </Text2zw>
    </div>

    <div className='flex flex-row gap-3'>
    <Text2zw>CSC 201 </Text2zw>
    <Text2zw>CSC 201 </Text2zw>
    <Text2zw>CSC 201 </Text2zw>
    </div>
   </div>


   <SelectAcademicYearRoot>Add / Remove Course</SelectAcademicYearRoot>
  
  <NewRootRootRoot>
      <WhiteFlexColumn>
        <Text11>Enter course code</Text11>
        <Text1input placeholder={`course code`} type="text"  />
        <FlexRow>
          <RoyalPurpleText1>Add</RoyalPurpleText1>
          <RoyalPurpleText1>Remove</RoyalPurpleText1>
        </FlexRow>
      </WhiteFlexColumn>
    </NewRootRootRoot>
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

 


const WhiteFlexColumnRootyw = styled.div`
  max-height: 500px;
  background-color: #FAFAFA;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  padding: 41px 43px 30px 44px;
  margin-left: 10px; 
  margin-bottom: 10px; 
  margin-top: 1px;
`;
const Ellipseyw = styled.img`
  max-width: 141px;
  height: 141px;
  margin: 0px 0px 25px 0px;
`;
const FlexColumnyw = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 15px 0px;
`;
const Text1yw = styled.div`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #2d0353;
`;
const Text2yw = styled.div`
  font-size: 18px;
  font-family: Product Sans Medium;
  line-height: 17.46px;
  color: #2d0353;
  align-self: flex-start;
  margin: 0px 0px 0px 2px;
  font-weight: bold;
`;


const FlexColumn1zw = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const Text1zw = styled.div`
  font-size: 12px;
  font-family: Roboto;
  line-height: 18px;
  color: #b3b1b1;
  align-self: flex-start;
  margin: ${(props) => props.margin};
`;
const Text2zw = styled.div`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #505050;
  align-self: ${(props) => props.alignSelf};
`;





const WhiteFlexRowRootzw = styled.div`
  max-width: 409px;
  background-color: #fafafa;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  padding: 45px 58px;
  margin-left: 5px;
  margin-right:5px; 
  margin-top: 15px; 
`;



const FlexColumnzw = styled.div`
  width: 348px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: space-between;
  align-items: flex-start;
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








const RoyalPurpleText1 = styled.div`
  width: 126px;
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 11.5px 0px;
  color: #ffffff;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
  border-width: 0.5px;
  border-radius: 6px;
  border-style: solid;
  border-color: #2d0353;
  background-color: #2d0353;
  cursor:pointer;
`;
const NewRootRootRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0);
 
`;
const WhiteFlexColumn = styled.div`
  max-height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 18px 30px 18px 29px;
  border-radius: 6px;
  background-color: #fafafa;

`;
const Text11 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 9px 0px;
  color: #787878;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
`;
const Text1input = styled.input`
  max-width: 266px;
  height: 44px;
  display: inline-block;
  padding: 10px;
  color: #b3b1b1;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
  outline-width: 0px;
  border-width: 0px;
  background-color: #ffff;
  margin-top:0px;
  margin-bottom:10px; 
  border: 1px solid black;

  :: placeholder {
    color: #b3b1b1;
  }

  @media ${devices.tablet} {
    width: 120px;    
  } 
  
  @media ${devices.mobileL} {
    width: 80px;    
  } 
  
`;
const FlexRow = styled.div`
  gap: 9px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-right:30px;
`;



const SelectAcademicYearRoot = styled.div`
font-size: 18px;
font-family: Product Sans Medium;
line-height: 15.52px;
color: #2d0353;
padding-bottom: 26px; 
padding-left: 18px;
padding-top: 20px;
font-weight: bold;
`;

export default AddDeleteProfile
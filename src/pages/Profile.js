import Sidebar from "components/Sidebar";
import React, {useRef, useState} from 'react'
import styled from "styled-components"; 
import "../components/br.css"  
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "./Calendar.css"; 

export default function Dashboard() {
    

  const focusDiv = useRef();

    if(focusDiv.current) { focusDiv.current.focus(); 
   }
   const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

    return (
        <>
          
         <Sidebar /> 
 
         <div>
         
         <div className="grid grid-cols-5 py-4 mx-4 bg-red-50">
       <div className="bg-red-50 col-span-4"> 
       <FlexColumnRoot>
      <Paragraph>Profile</Paragraph> 
     </FlexColumnRoot>
       
       </div>
       <div className="bg-red-50">   
       <ImageRoot src={`https://file.rendit.io/n/RQ0oa7syT3LS05ykj6o7.svg`} /> 
       </div>  
     
    </div>  
         

                         <div className="flex flex-wrap">
  <div className="w-full sm:w-1/1 md:w-1/1 lg:w-1/2 xl:w-1/3  mb-4  mt-4">
  <WhiteFlexColumnRootyw>
      <Ellipseyw src={`https://file.rendit.io/n/tsYpb8jtUOnBDZAMizwM.png`} />
      <FlexColumnyw>
        <Text1yw>Department</Text1yw>
        <Text2yw>Statistics</Text2yw>
      </FlexColumnyw>

      <FlexColumnyw>
        <Text1yw>Matric No:</Text1yw>
        <Text2yw>STA/19/7009</Text2yw>
      </FlexColumnyw>

      <FlexColumn1yw> 
        <Text3yw></Text3yw>
        <Text4yw></Text4yw>
        
      </FlexColumn1yw>
      <div className="bg-gray-100"> 
      <Link to="/profile-edit">
      <button className="editprofile2"> Edit Profile</button> 
      </Link>
      
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
          <Text1zw margin={`0`}>Phone number</Text1zw>
          <Text2zw alignSelf={`inherit`}>08064540969</Text2zw>
        </FlexColumn1zw> 
        <FlexColumn6zw>
          <Text1zw margin={`0`}>Address</Text1zw>
          <Text2zw alignSelf={`inherit`}>
            B2-33, Block 66 omole estate iyanan ipaja, Lagos
          </Text2zw>
        </FlexColumn6zw>

        <FlexColumn1zw margin={`0px 0px 0px 1px`}>
        <Text1zw margin={`0`}>Assigned Course</Text1zw>
          <Text2zw alignSelf={`inherit`}>CSC203,CSC205,CSC305</Text2zw>
        </FlexColumn1zw> 

        <FlexColumn1zw margin={`0px`}>
        <Text1zw margin={`0`}>Role</Text1zw>
          <Text2zw alignSelf={`inherit`}>lecturer 2</Text2zw>
        </FlexColumn1zw> 

        <FlexColumn1zw margin={`0px 0px 0px 1px`}>
        <Text1zw margin={`0`}>Access</Text1zw>
          <Text2zw alignSelf={`flex-start`}>Full</Text2zw>
        </FlexColumn1zw>  

        
       
      </FlexColumnzw>
    </WhiteFlexRowRootzw> 
    
    </div>
  <div className="w-full sm:w-1/1 md:w-1/1 lg:w-1/2 xl:w-1/3 mb-4   "> 

  <NewRootRootaw>
  <div>
      <Calendar onChange={onChange} value={date} />
    </div>
    </NewRootRootaw>

  <RectangleRoot>
  <div className="bg-gray-100 px-5 py-5">
      <FlexRow>    
        <Text1>Note</Text1>
        <GreenText>Save</GreenText>
      </FlexRow>
      <Input ref={focusDiv} type="text" />
      </div>
      
    </RectangleRoot>
    </div>
  
</div>



                        
         </div>
        </>
    ); 
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
    laptop: `(max-width: ${sizes.laptop})`,
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
  
    @media ${devices.mobileL} { 
      
      padding-left: 33px;
    } 
  `; 
  
  const ImageRoot = styled.img`
    width: 89px;
    height: 89px;
  `;









const WhiteFlexColumnRootyw = styled.div`
  max-height: 700px;
  background-color: #FAFAFA;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  padding: 41px 43px 100px 44px;
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
`;
const FlexColumn1yw = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 89px 13px;
`;
const Text3yw = styled.div`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #2d0353;
  align-self: flex-end;
  margin: 0px 14px 0px 0px;
`;
const Text4yw = styled.div`
  font-size: 18px;
  font-family: Product Sans Medium;
  line-height: 17.46px;
  color: #2d0353;
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
  padding: 80px 58px;
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

const FlexColumn6zw = styled.div`
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const RectangleRoot = styled.div`
  height: 166px;
  gap: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left:10px;
  padding-top:17px;
  border-radius: 6px;
  align-self: flex-start;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 140px;
  
`;
const Text1 = styled.div`
  color: #2d0353;
  font-size: 18px;
  font-family: Roboto;
  line-height: 27.09px;
  text-align: center;
  white-space: nowrap;


`;
const GreenText = styled.div`
  width: 73px;
  height: 30px;
  text-align: center;
  padding: 4px 0px;
  color: #ffffff;
  font-size: 12px;
  font-family: Roboto;
  line-height: 18px;
  white-space: nowrap;
  border-radius: 6px;
  background-color: #219653;
  margin-bottom: 10px; 
`;
const Input = styled.textarea`
  width: 257px;
  height: 118px;
  border-width: 0.5px;
  border-radius: 6px;
  border-style: solid;
  border-color: #b3b1b1;
  background-color: #ffffff;

  &:focus {
   padding-left: 5px; 
  }
`;


const NewRootRootaw = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 15px;
  margin-left: 0px;  
  margin-right:47px;

  @media ${devices.tablet} {
    margin-right:170px;
 
  }  

  @media ${devices.mobileL} {
    margin:auto;
 
  }  
`;

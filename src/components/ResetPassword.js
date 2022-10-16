

import React, {useRef} from 'react'
import styled from "styled-components";  
import login from "../assets/img/lecturer (2).PNG";
import "./br.css"  
import { useHistory } from "react-router-dom"; 
 

const ResetPassword = () => {
  


  const focusDiv = useRef();

  
  if(focusDiv.current) {focusDiv.current.focus(); 
 }

//Password Validation


const history = useHistory()

const onSubmit = (e) => {
  e.preventDefault(); 
      history.push("/createaccount")     
}; 

 
    return  (
        <>
  



            <div class="bg-white">
            <div class="max-w-7xl  grid grid-cols-12 ">
              <div class="col-span-12 md:col-span-12 object-fill lg:col-span-6">

              <img width={1000} src={login} alt="Login" />
                
                         


              </div>
              <div class="col-span-12 md:col-span-12 lg:col-span-6 mx-auto"> 

            
              <RootRoot>
                
            <FlexRow>
            
              <Text1> </Text1>

              
                <Text2></Text2> 
               
            
                
                    
            </FlexRow>

            <div>
            <FlexColumn>

            <FlexColumn1>
            <ItsFineWeUnderstandYouForgotYourPasswordRoot>
      Its fine 🤗 we understand you forgot your password
    </ItsFineWeUnderstandYouForgotYourPasswordRoot>

            <form id="createPassword"  onSubmit={onSubmit}>            

             <FlexColumn2 margin={`0px 0px 14px 0px`}>
                <Text4 htmlFor="password">Enter your email address</Text4> 

                <input ref={focusDiv} className='form'  id="Password"
                type="email"
                name="email"
                required
                />     
               
            </FlexColumn2>

           
            <button className='purplebtn' type='submit'>Reset Password</button> 
            </form> 
            </FlexColumn1> 
            <div>
            <PoweredByRakoniRoot>Powered by Rakoni</PoweredByRakoniRoot>
             </div>
        </FlexColumn>
            </div>  
            
           </RootRoot>  


              
                </div>
              
            </div>
            </div>
          

          <br />
          <br />
          <br />
     
      
    
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



const Text1 = styled.div`
font-size: 14px;
font-family: Roboto;
line-height: 21px;
color: #505050;
padding-top: 40px;


`;


const FlexColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const Text4 = styled.div`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #505050;
  align-self: flex-start;
`;
const RootRoot = styled.div`


  

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 20px; 
 

  @media ${devices.mobileL} {
    margin-left: 10px;  
  }  

`;
const FlexRow = styled.div`
    align-self: stretch;
    min-height: 24px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 13px;
    align-items: flex-start;
    margin-right: 8px;

    @media ${devices.mobileL} {
      margin-right: 80px;  
    }  
    
  `;
  const Text2 = styled.div`
    font-size: 14px;
    font-family: Product Sans Black;
    text-decoration: underline;
    line-height: 21.21px;
    color: #df8909;
    padding-top: 40px;
    font-weight: 900;
  `;

const FlexColumn = styled.div`
  max-height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 250px;
  @media ${devices.tablet} {
     
    margin: auto;
    padding-bottom: 100px;
    padding-top: 150px;
    
  } 


`;
const FlexColumn1 = styled.div`
  max-height: 206px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 33px 0px;
`;





const PoweredByRakoniRoot = styled.div`
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px; 
  margin: auto; 
  margin-top: 20px; 

  @media ${devices.laptop} {
    margin-top: 120px; 
    
  }  
  
`;

const ItsFineWeUnderstandYouForgotYourPasswordRoot = styled.div`
  width: 319px;
  color: #505050;
  font-size: 24px;
  font-family: Product Sans Medium;
  line-height: 23.28px;
  margin-right:50px; 
  padding-bottom: 20px;

  @media ${devices.mobileL} {
    margin-right:0px;
    margin-left: 32px;

  } 

`;



export default ResetPassword;


















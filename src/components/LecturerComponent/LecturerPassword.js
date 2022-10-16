
import React,{useState} from 'react'
import styled from "styled-components";  
import "../br.css" 
import Sidebar from 'components/Sidebar';
 

const ResetLecturerPassword = () => {
    const [shouldshow, setShouldshow] = useState(false);
 
    return  ( 
        <>

{ shouldshow && (
        <ModalBackground onClick={() => setShouldshow(false)}>
            <ModalBody onClick={(e) => e.stopPropagation()}>
                
            <WhiteFlexColumnRoot> 
      <FlexColumna>
        <Image2 src={`https://file.rendit.io/n/7I3yZRjpHsAGEb48rZcx.svg`} />
        <Text1>Successful</Text1>
        <Paragraph>
          Lecturer new password <br className="responsivemodal"></br>has been updated successfully{" "}
        </Paragraph>
        <RoyalPurpleText onClick={() => setShouldshow(false)}>Ok</RoyalPurpleText>
      </FlexColumna>
    </WhiteFlexColumnRoot>

    
            </ModalBody>
        </ModalBackground>
      )}

        <Sidebar />

        <div className="grid grid-cols-5 py-4 mb-16 mx-4 resultcolor ">
       <div className=" col-span-4"> 
       <FlexColumnRoot>
      <Paragrapha> Reset<br className="responsivemodal"></br> Password</Paragrapha> 
     </FlexColumnRoot> 
        
       </div>
       <div className="">   
       <ImageRoot src={`https://file.rendit.io/n/EqPTLqpwdN4RfgX8LArn.svg`} /> 
       </div>  

    </div> 

        <div className='mx-auto'>
        <EditProfileRoot>Enter Lecturer Details</EditProfileRoot>
        </div>

        <section className=" mb-4 mx-auto body-font overflow-hidden bg-white"> 
        <div className="container ">
          <div className="flex flex-wrap ">       
              <div className="flex items-center flex-wrap w-full ">
  
              <RootRoot>
             
            <div>
            <FlexColumn>
                
                           

                <FlexColumn1>
                

                <form> 

                    <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                 <Text4 onClick={() => setShouldshow(true)} htmlFor="studentId"> Lecturer ID</Text4>        
                 <input className='form'  type="text" id="Lecturerid"/>  
                 </FlexColumn2>            
             
                 <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                 <Text4 htmlFor="Lectureremail"> Lecturer Email</Text4>        
                 <input className='form'  type="text" id="Lectureremail"/>  
                 </FlexColumn2>  

                 <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                 <Text4 htmlFor="newpassword"> New Password</Text4>        
                 <input className='form'  type="password" id="newpassword"/>  
                 </FlexColumn2>  

                 <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                    <Text4 htmlFor="re-enter-password"> Re-enter new password</Text4>         
                    <input className='form'  type="password" id="re-enter-password"/>   
                    </FlexColumn2> 
                 
                <button   className='purplebtn' type='submit'>Reset</button> 
                </form> 
               
                </FlexColumn1> 
                <div>
           
             </div>
            </FlexColumn>

            </div>  
            
           </RootRoot>  


              
              </div> 
            
            </div>
          </div>
    
      </section>

       <div> 
       
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


const Paragrapha = styled.div`
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



const FlexColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const Text4 = styled.label`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #505050;
  align-self: flex-start;
`;
const RootRoot = styled.div`


  min-width: 424px;
  min-height: 549px;    
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: auto;
  background-color: #FAFAFA;
  margin-bottom: 170px; 

  @media ${devices.mobileL} { 
    min-width: 100px; 
    margin-left: 15px;
    overflow: hidden; 
    margin-bottom:10px;
   }   

`;








const FlexColumn = styled.div`
  min-height: 600px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  padding-right:60px; 
  padding-left:60px; 


  @media ${devices.tablet} {
    margin-left: 90px;
    height: 319px;
    padding-left:27px;  
    padding-right:40px; 
    margin-left:10px
  }    


  @media ${devices.mobileL} { 
    
    margin-left: 0px;
    height: 319px;
    padding-left:0px;  
    padding-right:0px; 
   
  }  

`;
const FlexColumn1 = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 5px 0px;

  @media ${devices.mobileL} { 
    margin: 0px 0px 0px 0px;
    margin-right: 145px; 

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
const FlexColumna = styled.div`
  height: 273px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

 

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

export default ResetLecturerPassword; 



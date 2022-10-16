
import React, {useState, useRef} from 'react'
import styled from "styled-components";  
import "../br.css" 
import Sidebar from 'components/Sidebar';
import upload from "../../assets/img/amend.PNG"
 

const ResultAmendment = () => {
    const [shouldshow, setShouldshow] = useState(false);
    const focusDiv = useRef();

    
    if(focusDiv.current) {
      focusDiv.current.focus(); 
    }
    return  ( 
        <>

{ shouldshow && (
        <ModalBackground onClick={() => setShouldshow(false)}>
            <ModalBody onClick={(e) => e.stopPropagation()}>
                
            <RootRootaw>
             
             <div className='md:pt-7 md:mx-auto mx-auto lg:mx-1 pt-8 lg:pt-2'>
             <FlexColumnaw>
                 
                            
                 <FlexColumn1aw>
                 
 
                 <form>           
              
                 <Text4aw htmlFor="studentname"> Student name</Text4aw>
                  <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
                  <div className='pr-14 md:pr-0 lg:pr-0'>      
                  <input ref={focusDiv} className='form' placeholder='Ayomide Akinyemi'  type="text" id="newpassword"/>  
                  </div>
                  </FlexColumn2aw>  

                  <Text4aw htmlFor="newpassword"> Student Id</Text4aw>
                  <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
                  <div className='pr-14 md:pr-0 lg:pr-0'>      
                  <input ref={focusDiv} className='form' placeholder='Sta/11/7009'  type="text" id="newpassword"/>  
                  </div>
                  </FlexColumn2aw>  

                  <Text4aw htmlFor="newpassword"> Semester</Text4aw>
                  <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
                  <div className='pr-14 md:pr-0 lg:pr-0'>      
                  <input ref={focusDiv} className='form' placeholder='1st Semester for 2020/2021'  type="text" id="newpassword"/>  
                  </div>
                  </FlexColumn2aw>  


                  <Text4aw htmlFor="coursecode"> Course code</Text4aw>
                  <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
 
                     <div className='pr-14 md:pr-0 lg:pr-0'>     
                     <input ref={focusDiv} className='form' placeholder='CSC234'  type="text" id="re-enter-password"/>   
                     </div> 
                     </FlexColumn2aw> 
                    
                    {/* next stop here */}

                    <div className="flex flex-col lg:flex-row">
            
                            <div>
                            <Texto>Old Score</Texto>
                        <Inputemail ref={focusDiv} type="text" placeholder='50'  /> 
                            </div>
                            <div>
                        
                            <Textn>New Score</Textn> 
                        <Inputpn ref={focusDiv} type="text" placeholder='70'   /> 
                            </div>
                        </div>

 
                     <div className='newbtn mr-11 md:mr-0 lg:mr-0 '>
                    <button onClick={() => setShouldshow(true)} className='purplebtn' >Update</button> 
                    </div>
               
                 </form> 
                
                 </FlexColumn1aw> 
                 <div>
            
              </div>
             </FlexColumnaw>
 
             </div>  
             
            </RootRootaw>  

             
    
            </ModalBody>
        </ModalBackground>
      )} 

        <Sidebar />
        <div className="grid grid-cols-5 py-4 mx-4 resultcolor ">
       <div className=" col-span-4"> 
       <FlexColumnRoot>
      <Paragraph> Result <br className="responsivemodal"></br> Amendment</Paragraph> 
     </FlexColumnRoot>
        
       </div>
       <div className="">   
       <ImageRoot src={upload} /> 
       </div>  
     
    </div> 

        <div className='mx-auto'>
        <EditProfileRoot>Enter Result details to be amended</EditProfileRoot>
        </div>

        <section className=" mb-4 mx-auto body-font overflow-hidden bg-white"> 
        <div className="container ">
          <div className="flex flex-wrap ">       
              <div className="flex items-center flex-wrap w-full ">
  
              <RootRoot>
             
            <div>
            <FlexColumn>                          
                <FlexColumn1>            
                 <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                 <Text4 htmlFor="OldPassword"> Select semester</Text4>        
                 <div className="amendment  pr-16 md:pr-0 lg:pr-0 ">
                <select>
                    <option selected>1st Semester for 2020-2021 </option> 
                    <option>1st Semester for 2020-2021</option>
                    <option>1st Semester for 2020-2021</option>
                    <option>1st Semester for 2020-2021</option>
                    <option>1st Semester for 2020-2021</option> 
                </select> 

                </div> 

                 </FlexColumn2>  
                 <Text4 htmlFor="newpassword"> Student Id</Text4>   
                 <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                
                 <div className='pr-14 md:pr-0 lg:pr-0'>      
                 <input ref={focusDiv} className='form' placeholder='Sta/11/7009'  type="text" id="newpassword"/>  
                 </div>
                 </FlexColumn2>  
                 <Text4 htmlFor="coursecode"> Course code</Text4>
                 <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                   

                    <div className='pr-14 md:pr-0 lg:pr-0'>     
                    <input ref={focusDiv} className='form' placeholder='CSC234'  type="text" id="re-enter-password"/>   
                    </div> 
                    </FlexColumn2> 
                    

                    <div className='newbtn mr-14 md:mr-0 lg:mr-0 '>
                    <button onClick={() => setShouldshow(true)} className='purplebtn' >Submit</button> 
                    </div>
              
                 
               
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
     margin: 5% auto;
     
     width: 50%;
     @media ${devices.tablet} {
        width: 90%;   
      } 
`


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

  @media ${devices.mobileL} { 
  
    padding-left: 10px;
  }

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
    margin: 0px;
    overflow: hidden; 
   }  

`;








const FlexColumn = styled.div`
  min-height: 5px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  padding-right:60px; 
  padding-left:60px; 


  @media ${devices.tablet} {
   
    height: 500px;
    margin: auto;
  }    


  @media ${devices.mobileL} { 
    
  
    height: 319px;
    padding-left:10px;  
    padding-right:0px; 
    margin: auto;
   
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
  font-weight: bold; 
  margin-bottom:20px;
  margin-top: 50px;
  text-align: center;
`;





const Text4aw = styled.label`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #505050;
  align-self: flex-start;

  @media ${devices.mobileL} { 
  
    padding-left: 10px;
  }

`;
const RootRootaw = styled.div`


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
    max-width:900px;
    margin: 0px;
    overflow: hidden; 

   }  

`;








const FlexColumnaw = styled.div`
  min-height: 5px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  padding-right:60px; 
  padding-left:130px; 
 

  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: 500px;
    padding-left:30px; 
  
  }    


  @media ${devices.mobileL} { 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: 500px;
    padding-left:8px; 
   
  }  

`;
const FlexColumn1aw = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 5px 0px;

  @media ${devices.tablet} { 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;

  } 

  @media ${devices.mobileL} { 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    

  } 
`; 
const FlexColumn2aw = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center; 
  align-items: center;
  margin: ${(props) => props.margin};
`;



const Inputemail = styled.input`
  border-style: solid;
  border-color: #b3b1b1;
  width: 100px;
  height: 34px;
  mix-blend-mode: normal;
  background-color: #ffffff;
  border-radius: 6px;
  border-width: 0.5px; 
  margin-bottom: 20px;

  :focus {
    padding-left: 10px;
  } 
  ::placeholder {
    padding-left: 10px;
  } 

    @media ${devices.tablet} {
      width: 100px;
    }
`;

const Inputpn = styled.input`
  border-style: solid;
  border-color: #b3b1b1;
  width: 100px;
  height: 34px;
  mix-blend-mode: normal;
  background-color: #ffffff;
  border-radius: 6px;
  border-width: 0.5px; 
  margin-bottom: 20px;
  margin-left: 20px;

  :focus {
    padding-left: 10px;
  }  
  ::placeholder {
    padding-left: 10px;
  } 

    @media ${devices.tablet} {
      width: 100px;
      margin-left: 2px;
      
    }
`; 

const Texto = styled.div`
  mix-blend-mode: normal;
  font-size: 16.5px;
  font-family: Roboto;
  line-height: 21px;
  color: #505050;
  align-self: flex-start;
  padding-bottom: 10px;
  @media ${devices.mobileL} { 
    margin-left: 10px;
    font-size: 16px;

   }  
`;

const Textn = styled.div`
  mix-blend-mode: normal;
  font-size: 16.5px;
  font-family: Roboto;
  line-height: 21px;
  color: #505050;
  align-self: flex-start;
  padding-bottom: 10px;
  padding-left: 20px; 

  @media ${devices.tablet} { 
    
    padding-left: 0px;

   } 

  @media ${devices.mobileL} { 
    margin-left: 10px;
    font-size: 16px;
    padding-left: 0px;

   }  
`;



export default ResultAmendment; 



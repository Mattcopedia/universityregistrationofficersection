import Sidebar from 'components/Sidebar';
import React from 'react'

import { useRef} from 'react'
import styled from "styled-components";  

const CreateCourse = () => {
    const focusDiv = useRef();

    
    if(focusDiv.current) {
      focusDiv.current.focus(); 
    }
   return (
    <>
    <Sidebar />
    <div>
       <RootRootaw>
             
             <div className='md:pt-7 md:mx-auto bg-gray-100 pl-5 lg:pl-0  mx-auto lg:mx-1 pt-8 lg:pt-4'>
             <FlexColumnaw>
                 
                            
                 <FlexColumn1aw>
                 
 
                 <form>           
                <div className='flex lg:gap-10 flex-col md:flex-col lg:flex-row'>

                    <div className="flex-col">
                 <Text4aw htmlFor="studentname"> First Name</Text4aw>
                  <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
                  <div className='pr-14 md:pr-0 lg:pr-0'>      
                  <input ref={focusDiv} className='form'  type="text" id="newpassword"/>  
                  </div>
                  </FlexColumn2aw> 
                  </div> 

                 <div className='flex-col'>
                  <Text4aw htmlFor="newpassword">Last Name</Text4aw>
                  <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
                  <div className='pr-14 md:pr-0 lg:pr-0'>      
                  <input ref={focusDiv} className='form'   type="text" id="newpassword"/>  
                  </div>
                  </FlexColumn2aw>   
                  </div>
                  </div>

                  <div className='flex lg:gap-10 flex-col md:flex-col lg:flex-row'>

                    <div className="flex-col">
                 <Text4aw htmlFor="studentname"> Staff ID</Text4aw>
                  <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
                  <div className='pr-14 md:pr-0 lg:pr-0'>      
                  <input ref={focusDiv} className='form'  type="text" id="newpassword"/>  
                  </div>
                  </FlexColumn2aw> 
                  </div> 

                 <div className='flex-col'>
                  <Text4aw htmlFor="newpassword">Phone number</Text4aw>
                  <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
                  <div className='pr-14 md:pr-0 lg:pr-0'>      
                  <input ref={focusDiv} className='form'   type="text" id="newpassword"/>  
                  </div>
                  </FlexColumn2aw>   
                  </div>
                  </div>

                  <div className='flex lg:gap-10 flex-col md:flex-col lg:flex-row'>

                    <div className="flex-col">
                 <Text4aw htmlFor="studentname"> Email</Text4aw>
                  <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
                  <div className='pr-14 md:pr-0 lg:pr-0'>      
                  <input ref={focusDiv} className='form'  type="text" id="newpassword"/>  
                  </div>
                  </FlexColumn2aw> 
                  </div> 

                 <div className='flex-col'>
                  <Text4aw htmlFor="newpassword">Address</Text4aw>
                  <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
                  <div className='pr-14 md:pr-0 lg:pr-0'>      
                  <input ref={focusDiv} className='form'   type="text" id="newpassword"/>  
                  </div>
                  </FlexColumn2aw>   
                  </div>
                  </div>

                  <div className='flex lg:gap-10 flex-col md:flex-col lg:flex-row'>

                    <div className="flex-col">
                 <Text4aw htmlFor="studentname"> Password</Text4aw>
                  <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
                  <div className='pr-14 md:pr-0 lg:pr-0'>      
                  <input ref={focusDiv} className='form'  type="text" id="newpassword"/>  
                  </div>
                  </FlexColumn2aw> 
                  </div> 

                 <div className='flex-col'>
                  <Text4aw htmlFor="newpassword">Re-enter password</Text4aw>
                  <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
                  <div className='pr-14 md:pr-0 lg:pr-0'>      
                  <input ref={focusDiv} className='form'   type="text" id="newpassword"/>  
                  </div>
                  </FlexColumn2aw>   
                  </div>
                  </div>

                  <div className='flex lg:gap-10 flex-col md:flex-col lg:flex-row'>

                        <div className="flex-col">
                        <Text4aw htmlFor="studentname"> Role</Text4aw>
                        <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
                     
                                <div className="boxaccount ">
                        <select >
                            <option selected>Lecturer </option> 
                            <option>Lecturer</option>
                            <option>Lecturer</option>
                            <option>Lecturer</option>
                            <option>Lecturer</option>
                        </select> 

                        </div>
                        </FlexColumn2aw> 
                        </div> 

                        <div className='flex-col'>
                        <Text4aw htmlFor="newpassword">Department</Text4aw>
                        <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
                        <div className="boxaccount "> 
                        <select>
                            <option selected>Computer Science</option> 
                            <option>Computer Science</option>
                            <option>Computer Science</option>
                            <option>Computer Science</option>
                            <option>Computer Science</option>
                        </select> 

                        </div>
                        </FlexColumn2aw>   
                        </div>
                        </div>
                        <Text4aw >Access</Text4aw>
                          
                          <div className='flex flex-row gap-5'>
                        <div className='flex flex-row gap-4'>
                        <input type="radio" value="Full" name="gender" /> <Text4aw >Full</Text4aw>
                        </div>

                        <div className='flex flex-row gap-4'>
                        <input type="radio" value="View Only" name="gender" /> <Text4aw >View Only</Text4aw>
                        </div>
                        </div>

 
                <div class='justify'> 
                 <RectangleRoot>
                <p  className='text-white  pl-2 text-center lg:pl-1 cursor-pointer'>Create Account</p>   
                </RectangleRoot>  
                </div>
               
                 </form> 
                
                 </FlexColumn1aw> 
                 <div>
            
              </div>
             </FlexColumnaw>
 
             </div>  

            </RootRootaw>  


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

  const RectangleRoot = styled.div`
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  width: 200px;
  height: 50px;
  background-color: #2d0353;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top:10px;

  @media ${devices.mobileL} { 
    width: 200px;
    height: 50px; 
   padding-right: 10px; 
   margin-left:10px; 
   padding-bottom: 2px;
  } 
  
`;

const RootRootaw = styled.div`


  
  display: flex;
  flex-direction: column;
  margin-right:130px;
  margin-top:90px;

  @media ${devices.tablet} { 
    margin-top:5px;
    margin-right:2px; 
    margin-left:8px;
   }  

  @media ${devices.mobileL} { 
    margin-top:5px;
    margin:auto;
    overflow: hidden;
    margin-left:12px;
   }  

`;

const Text4aw = styled.label`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #505050;
  align-self: flex-start;

 

`;







const FlexColumnaw = styled.div`
 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 

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
    padding-left:8px;  
   
  }  

`;
const FlexColumn1aw = styled.div`

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






export default CreateCourse






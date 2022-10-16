
import React from 'react'
import styled from "styled-components";  
import "../br.css" 
import { Link } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
 

const EditPassword = () => {
 
    return  ( 
        <>
        <Sidebar />
        <div className='mx-auto'>
        <EditProfileRoot>Change Password</EditProfileRoot>
        </div>

        <section className=" mb-4 mx-auto body-font overflow-hidden bg-white"> 
        <div className="container ">
          <div className="flex flex-wrap ">       
              <div className="flex items-center flex-wrap w-full ">
  
              <RootRoot>
             
            <div>
            <FlexColumn>
                <div className='mb-'>
                <GroupRootyw>
                    
                    <Lineyw src={`https://file.rendit.io/n/OYu2xn0faX7xcwwhEVap.svg`} />
                    <Link to="/profile-edit">
                    <FlexColumnyw left={`34px`}>
                        <Text1yw>Profile</Text1yw>   
                        <RoyalPurpleRectangle1yw />   
                        </FlexColumnyw>
                        </Link>
              
                     <FlexColumnyw left={`106px`}>
                        <Text1yw>Password</Text1yw>
                        <RoyalPurpleRectangle1 />                        
                     </FlexColumnyw>

                  
                    <Link to="/editmedia">
                    <FlexColumnyw left={`194px`}>
                        <Text1yw>Media</Text1yw>
                        <RoyalPurpleRectangle2yw />
                    </FlexColumnyw>
                    </Link>
                    
                    </GroupRootyw>  
                </div>
                           

                <FlexColumn1>
                

                <form>           
             
                 <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                 <Text4 htmlFor="OldPassword"> Old Password</Text4>        
                 <input className='form'  type="password" id="OldPassword"/>  
                 </FlexColumn2>  

                 <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                 <Text4 htmlFor="newpassword"> New Password</Text4>        
                 <input className='form'  type="password" id="newpassword"/>  
                 </FlexColumn2>  

                 <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                    <Text4 htmlFor="re-enter-password"> Re-enter Password</Text4>         
                    <input className='form'  type="password" id="re-enter-password"/>   
                    </FlexColumn2> 
                 
                <button className='purplebtn' type='submit'>Save</button> 
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
    margin: 0px;
    overflow: hidden; 
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








const FlexColumnyw = styled.div`
  display: flex;
  position: absolute;
  top: 11px;
  flex-direction: column;
  gap: 14px;
  justify-content: center;
  align-items: center;
  left: ${(props) => props.left};
`;

const GroupRootyw = styled.div`
  width: 453px;
  height: 49px;
  position: relative;
`;
const Lineyw = styled.img`
  width: 453px;
  height: 0.5px;
  position: absolute;
  top: 48.5px;
`;
const Text1yw = styled.div`
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #2d0353;
  align-self: flex-start;
`;

const RoyalPurpleRectangle1yw = styled.div`
  width: 62px;
  height: 3px;
  background-color: #2d0353;
  opacity: 0;
`;
const RoyalPurpleRectangle2yw = styled.div`
  width: 39px;
  height: 3px;
  background-color: #2d0353;
  opacity: 0;
`;

const RoyalPurpleRectangle1 = styled.div`
  width: 62px;
  height: 3px;
  background-color: #2d0353;
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




export default EditPassword; 



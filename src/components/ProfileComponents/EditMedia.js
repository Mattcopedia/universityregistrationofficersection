
import React,{useState} from 'react'
import styled from "styled-components";  
import "../br.css" 
import { Link } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
 

const EditMedia = () => {
  const [shouldshow, setShouldshow] = useState(false);

    return  ( 
        <>
         { shouldshow && (
        <ModalBackground onClick={() => setShouldshow(false)}>
            <ModalBody onClick={(e) => e.stopPropagation()}>
                
            <WhiteFlexColumnRootip> 
      <FlexColumnip>
        <Image2ip src={`https://file.rendit.io/n/7I3yZRjpHsAGEb48rZcx.svg`} />
        <Text1ip>Successful</Text1ip>
        <Paragraphip>
          Your profile has  <br className="responsivemodal"></br>been saved successfully{" "}
        </Paragraphip>
        <RoyalPurpleTextip onClick={() => setShouldshow(false)}>Ok</RoyalPurpleTextip>
      </FlexColumnip>
    </WhiteFlexColumnRootip>

    
            </ModalBody>
        </ModalBackground>
      )}

        <Sidebar />

        <div className='mx-auto'>
        <EditProfileRoot>Image and Signature</EditProfileRoot>
        </div>

        <section class=" mb-4 mx-auto body-font overflow-hidden bg-white"> 
        <div class="container ">
          <div class="flex flex-wrap ">       
              <div class="flex items-center flex-wrap w-full ">

              <RootRoot>
    
            <div>
            <FlexColumn>
              <div>
            <Element1>
            <FlexColumnaw>
              <Link to="/profile-edit">
                <Text1z>Profile</Text1z>
                </Link>
              </FlexColumnaw>

              <Line src={`https://file.rendit.io/n/6cBDw74bzdqLtcJNebMN.svg`} />
              <FlexColumnaw>
              <Link to="/editpassword">
                <Text1z>Password</Text1z>
                </Link>
              </FlexColumnaw>

              <Line src={`https://file.rendit.io/n/6cBDw74bzdqLtcJNebMN.svg`} />
              
              <FlexColumnaw>
              <Link to="/editmedia">
                <Text1>Media</Text1>
                </Link>
                <RoyalPurpleRectangle />
              </FlexColumnaw>
            </Element1> 
            </div>


                           

                <FlexColumn1>
                

                <form>   
                 
               


              
                    <FlexRowyt>
                    <Element2yt>
                        <Text1yw left={`23px`}>Profile Picture</Text1yw>
                          <label className='cursor-pointer' htmlFor="uploadpic">
                          <Image1yt src={`https://file.rendit.io/n/dAGk2wWCFjaRIPqyrp8E.png`} />
                            <input className='file' id="uploadpic" type="file"/>
                            </label>    
                        
                    </Element2yt>
                    <Element3yt>

                        <Text1yw left={`12px`}>Student signature</Text1yw>

                        
                        <label className='cursor-pointer' htmlFor="uploadpic">
                        <Image2yt src={`https://file.rendit.io/n/kKEXT2GCVBjGZLYyKG97.png`} />
                            <input className='file' id="uploadpic" type="file"/>
                            </label>  

                    </Element3yt>
                    </FlexRowyt>  


                 
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






const RootRoot = styled.div`

  min-width: 600px; 
 
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


//flex column is the problem





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
    margin-left: 10px;
    height: 100px;
    padding-left:3px;  
    padding-right:3px; 
    margin-left:3px
    min-height: 120px; 
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
    margin-right: 85px; 

  } 
`; 





const Element1 = styled.div`
  width: 484px;
  height: 31px;
  display: flex;
  flex-direction: row; 
  margin-top:10px;
`;
const FlexColumnaw = styled.div`
  
  position: static;
  gap: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text1 = styled.div`
 
  margin: 0px 2px 0px 0px;
  color: #2d0353;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
`;

const Text1z = styled.div`
  align-self: flex-start;
  margin: 0px 2px 0px 0px;
  color: #2d0353;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
  padding-bottom:10px; 
`;

const RoyalPurpleRectangle = styled.div`
  width: 90px;
  height: 3px;
  border-radius: 8px 8px 0px 0px;
  background-color: #2d0353;
`;
const Line = styled.img`
  width: 30px;
  height: 0.5px;
  top: 30.5px;
  position: static;
`;
const Text1yw = styled.div`
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #2d0353;
  align-self: flex-start;
`;







const Element2yt = styled.div`
  

`;

const Element3yt = styled.div`

 s
`;

const Image1yt = styled.img`
  width: 123px;
  height: 124px;

  top: 33px;
`;

const Image2yt = styled.img`
  width: 125px;
  height: 124px;
  
  top: 33px;
`;


const FlexRowyt = styled.div`
  display: flex;
  flex-direction: row;
  gap: 42px;
  justify-content: center;
  align-items: center;
  margin: 0px 71px 24.5px 0px;

  

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



const WhiteFlexColumnRootip = styled.div`
  height: 390px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 0px 40px 0px 43px;
`;
const FlexColumnip = styled.div`
  height: 273px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

 ]

`;
const Image2ip = styled.img`
  width: 112px;
  height: 112px;
  margin: 0px 0px 12px 0px;
`;
const Text1ip = styled.div`
  font-size: 18px;
  font-family: Product Sans Medium;
  line-height: 17.46px;
  color: #219653;
  margin: 0px 0px 13px 0px;
`;
const Paragraphip = styled.div`
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
const RoyalPurpleTextip = styled.div`
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


export default EditMedia; 



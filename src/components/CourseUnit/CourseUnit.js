

import React, { useRef, useState} from 'react'
import styled from "styled-components";  
import "../br.css" 
import Sidebar from 'components/Sidebar';
 
 
const CourseUnit = () => {
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
                
            <WhiteFlexColumnRoot> 
      <FlexColumns>
        <Image2 src={`https://file.rendit.io/n/7I3yZRjpHsAGEb48rZcx.svg`} />
        <Text1s>Successful</Text1s>
        <Paragraphs>
          Student Unit has been <br className="responsivemodal"></br>updated successfully{" "}
        </Paragraphs>
        <RoyalPurpleText onClick={() => setShouldshow(false)}>Ok</RoyalPurpleText>
      </FlexColumns>
    </WhiteFlexColumnRoot>

    
            </ModalBody>
        </ModalBackground>
      )}


        <Sidebar />
        <div className="grid grid-cols-5 py-4 mb-16 mx-4 resultcolor ">
       <div className=" col-span-4"> 
       <FlexColumnRoot>
      <Paragraph> Course Unit</Paragraph> 
     </FlexColumnRoot>
        
       </div>
       <div className="">   
       <ImageRoot src={`https://file.rendit.io/n/wVI3dalkzkeH0OtjwN3H.svg`} /> 
       </div>  
     
    </div> 
         

        <section className=" mb-4 mx-auto body-font overflow-hidden bg-white"> 
        <div className="container ">
          <div className="flex flex-wrap ">       
              <div className="flex mx-auto items-center flex-wrap w-full ">
              <RootRoot>
             
            <div>
             
            <FlexColumn>  
            <Element1>
              <FlexColumnaw>
                <Text1z>Less than 15 unit</Text1z>
               
              </FlexColumnaw>
              <Line src={`https://file.rendit.io/n/6cBDw74bzdqLtcJNebMN.svg`} />
              <FlexColumnaw>
                <Text1>More than 24 unit</Text1>
                <RoyalPurpleRectangle />
              </FlexColumnaw>
             
            </Element1> 

                <FlexColumn1>
             
                 <FlexColumn2 margin={`0px 0px 10px 0px`}> 
                 

                       
                 <Text4 htmlFor="Enter Student Id"> Enter Student Id</Text4>   
                 <div className='pr-11'>     
                 <input  style={{height: "44px"}} ref={focusDiv} className='form' placeholder='Stat/11/2009'  type="text" id="StudentId"/>  
              </div>  

                 </FlexColumn2>  
                 <div className='newbtn mr-11 lg:mr-11 md:mr-0  '>
                    <button className='purplebtn' onClick={() => setShouldshow(true)} >Submit</button> 
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
const FlexColumns = styled.div`
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
const Text1s = styled.div`
  font-size: 18px;
  font-family: Product Sans Medium;
  line-height: 17.46px;
  color: #219653;
  margin: 0px 0px 13px 0px;
`;
const Paragraphs = styled.div`
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



const FlexColumnRoot = styled.div`
display:flex;
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
padding-top:30px; 


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

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  padding-right:60px; 
  padding-left:60px; 


  @media ${devices.tablet} {
    margin-left: 90px;

    padding-left:27px;  
    padding-right:40px; 
    margin-left:10px
  }    


  @media ${devices.mobileL} { 
    
    margin-left: 20px;
    
    padding-left:0px;  
    padding-right:0px; 
   
  }  

`;
const FlexColumn1 = styled.div`
  padding-top: 10px; 
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
  width: 122px;
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



export default CourseUnit; 


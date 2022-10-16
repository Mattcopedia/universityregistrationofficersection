

import React, { useRef} from 'react'
import styled from "styled-components";  
import "../br.css" 
import Sidebar from 'components/Sidebar';
 
 
const BulkSms = () => {
 
    const focusDiv = useRef();

    
    if(focusDiv.current) {
      focusDiv.current.focus(); 
    }

    return  ( 
        <>



        <Sidebar />
     
    
        <div className="grid grid-cols-5 py-4 mb-16 mx-4 resultcolor ">
       <div className=" col-span-4"> 
       <FlexColumnRoot>
      <Paragraph> Bulk SMS<br className="responsivemodal"></br> Broadcast</Paragraph> 
     </FlexColumnRoot>
        
       </div>
       <ImageRoot>  
       </ImageRoot> 
     
    </div> 

        <section className=" mb-4 mx-auto body-font overflow-hidden bg-white"> 
        <div className="container ">
          <div className="flex flex-wrap ">       
              <div className="flex mx-auto items-center flex-wrap w-full ">
  
              <RootRoot>
             
            <div>
            <FlexColumn>
              
                           
                <FlexColumn1>
                

                     
             
                 <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                 <Text4 htmlFor="OldPassword"> Choose level </Text4>        
                 <div className="amendment  pr-16 md:pr-0 lg:pr-0 ">
                <select>
                    <option selected>All students </option> 
                    <option>All students </option>
                    <option>All students </option>
                    <option>All students </option>
                    <option>All students </option> 
                </select> 

                </div> 
  
                 </FlexColumn2> 

                 <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                 <Text4 htmlFor="">Message</Text4>        
                
                 <Input ref={focusDiv} rows="4" cols="46"   />
                 </FlexColumn2>


                    <div className='newbtn mr-14 md:mr-0 lg:mr-0 '>
                    <button className='purplebtn' >Next</button> 
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


  const Input = styled.textarea`
  width:360px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: #bdbdbd;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
  border-style: solid;
  border-color: #787878;
  background-color: #ffffff;
  border-radius: 6px;

 
  border-width: 0.5px;
  ::placeholder {
    color: #bdbdbd;
    font-size: 14px;
    font-family: Roboto;
    line-height: 21px;
    white-space: nowrap;
    padding-left: 8px; 
  }
  :focus {
    padding-left:10px;
  }

  @media ${devices.tablet} { 
  
    margin-right: 60px;
  }

  @media ${devices.mobileL} { 
    width: 280px;
    
  }
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



export default BulkSms; 


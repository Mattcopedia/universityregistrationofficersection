

import React, { useRef} from 'react'
import styled from "styled-components";  
import "../br.css" 
import Sidebar from 'components/Sidebar';
 
 
const UploadIn = () => {
 
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
      <Paragraph> Upload <br className="responsivemodal"></br> Document</Paragraph> 
     </FlexColumnRoot>
        
       </div>
       <div className="">   
       <ImageRoot src={`https://file.rendit.io/n/UGJCCWV2qwgsmPOkgoWP.png`}  /> 
       </div>  
     
    </div> 


        <section className=" mb-4 mx-auto body-font overflow-hidden bg-white"> 
        <div className="container ">
          <div className="flex flex-wrap ">   

              <div className="flex flex-row mx-auto  flex-wrap gap-7 ">
  
              <RootRoot>
             
            <div>
            <FlexColumn>
                  <Element1>
              <FlexColumnaw>
                <Text1z>General Document</Text1z>
               
              </FlexColumnaw>
              <Line src={`https://file.rendit.io/n/6cBDw74bzdqLtcJNebMN.svg`} />
              <FlexColumnaw>
                <Text1>Individual Document</Text1>
                <RoyalPurpleRectangle />
              </FlexColumnaw>
             
            </Element1> 
                           
                <FlexColumn1>
                
                <Text4 htmlFor=""> Select Course</Text4>    

                     <div className='flex mr-  flex-col md:flex-row lg:flex-row gap-1'>
                     <FlexColumn2 margin={`0px 0px 10px 0px`}> 
                            <div className="amendment  pr-16 md:pr-0 lg:pr-0 ">
                            <select style={{width:"180px"}}>
                            <option selected>CSC 201 </option> 
                            <option>CSC 201 </option>
                            <option>CSC 201 </option>
                            <option>CSC 201 </option>
                            <option>CSC 201 </option> 
                            </select> 

                            </div> 

                            </FlexColumn2>  


                     <FlexColumn2 margin={`0px 0px 10px 0px`}> 
                    
                             
                        <div className="amendment  pr-16 md:pr-0 lg:pr-0 ">
                        <select style={{width:"180px"}} >
                        <option selected>Select student </option> 
                        <option>James</option>
                        <option>John </option>
                        <option>Andrew </option>
                        <option>Philip </option> 
                        </select> 

                        </div> 

                        </FlexColumn2>  



                   
                     </div>
             
                




                     <FlexColumn2 margin={`0px 0px 10px 0px`}> 
                 <Text4 htmlFor="OldPassword"> Upload Document</Text4> 
                 <div className='flex border rounded border-solid border-current  mr-16 lg:mr-0 flex-row gap-0'>
                 <Filetext>File22/assignment</Filetext>
                 <Text5 htmlFor="uploadCSV">
                   Browse 
                 <input className='file' id="uploadCSV" type="file"/>
                 </Text5> 
                 </div>       
                 

                 </FlexColumn2>  
               

                    <div className='newbtn mr-14 md:mr-0 lg:mr-0 '>
                    <button className='purplebtn' >Send</button> 
                    </div>
              
                 
               
                </FlexColumn1> 
                <div>
           
             </div>
            </FlexColumn>

            </div>  
            
           </RootRoot>  
             
           <Margincheckox >
             <Text1a>Student ID</Text1a>

             <div style={{overflowY: "auto"}} className='flex flex-row gap-3'>
             <input type="checkbox"  />
             <label class="labelcontainer">STAT/11/7009 </label>
             </div>
             <div className='flex flex-row gap-3'>
             <input type="checkbox"  />
             <label class="labelcontainer">STAT/11/7009 </label>
             </div>
             <div className='flex flex-row gap-3'>
             <input type="checkbox"  />
             <label class="labelcontainer">STAT/11/7009 </label>
             </div>
             <div className='flex flex-row gap-3'>
             <input type="checkbox"  />
             <label class="labelcontainer">STAT/11/7009 </label>
             </div>
             <div className='flex flex-row gap-3'>
             <input type="checkbox"  />
             <label class="labelcontainer">STAT/11/7009 </label>
             </div>
             <div className='flex flex-row gap-3'>
             <input type="checkbox"  />
             <label class="labelcontainer">STAT/11/7009 </label>
             </div>
             <div className='flex flex-row gap-3'>
             <input type="checkbox"  />
             <label class="labelcontainer">STAT/11/7009 </label>
             </div>
             <div className='flex flex-row gap-3'>
             <input type="checkbox"  />
             <label class="labelcontainer">STAT/11/7009 </label>
             </div>
             <div className='flex flex-row gap-3'>
             <input type="checkbox"  />
             <label class="labelcontainer">STAT/11/7009 </label>
             </div>
             <div className='flex flex-row gap-3'>
             <input type="checkbox"  />
             <label class="labelcontainer">STAT/11/7009 </label>
             </div>
            <RoyalPurpleText>OK</RoyalPurpleText>
             </Margincheckox> 
             
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
const Margincheckox = styled.div`
background-color: #FAFAFA;
padding:20px;
@media ${devices.tablet} { 
 margin:auto;
 
} 

@media ${devices.mobileL} { 
  margin-left:100px;
  margin-right:60px;
 } 
`
  const Text1a = styled.div`
  align-self: flex-start;
  color: #787878;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap; 
  margin: 0px 0px 16px 0px;
`;



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

  @media ${devices.tablet} { 
    align-self: center;
    padding-right: 60px;
  } 

  @media ${devices.mobileL} { 
  
    padding-left: 10px;
  }

`;

const Text5 = styled.label`
width: 78px;
height: 40px;

color: #ffffff;
font-size: 14px;
font-family: Roboto;
line-height: 21px;
white-space: nowrap;
border-radius: 6px;
background-color: #2d0353; 
padding-top: 10px;
text-align:center;
cursor:pointer;

`;
const Filetext = styled.div`
width:287px;
height:40px;
padding: 3.5px 2.5px
background-color: #ffffff;
color: #bdbdbd;
font-size: 14px;
font-family: Roboto;
line-height: 21px;
white-space: nowrap;
padding-left:10px;

@media ${devices.mobileL} { 
  width:187px;
 height:40px;
 margin-left: 10px;
 }  


`

const RootRoot = styled.div`


  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: auto;
  background-color: #FAFAFA;
  

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

const RoyalPurpleText = styled.div`
  width: 137px;
  height: 41px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #ffffff;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
  background-color: #2d0353;
  border-radius: 6px;
  padding: 12px 0px;
  margin-top: 20px;
`;

export default UploadIn; 



import Sidebar from 'components/Sidebar'
import React, {useState}  from 'react'
import styled from "styled-components";  


const Hours = [{no1:"1"},{no1:"2"},{no1:"3"},{no1:"4"},{no1:"5"},{no1:"6"},{no1:"7"},{no1:"8"},{no1:"9"},{no1:"10"},{no1:"11"},{no1:"12"}]

const Minutes = [{no1:"1"},{no1:"2"},{no1:"3"},{no1:"4"},{no1:"5"},{no1:"6"},{no1:"7"},{no1:"8"},{no1:"9"},{no1:"10"},{no1:"11"},{no1:"12"},{no1:"13"},{no1:"14"},{no1:"15"},{no1:"16"},{no1:"17"},{no1:"18"},{no1:"19"},{no1:"20"},{no1:"21"},{no1:"22"},{no1:"23"},{no1:"24"},{no1:"25"},{no1:"26"},{no1:"27"},{no1:"28"},{no1:"29"},{no1:"30"},{no1:"31"},{no1:"32"},{no1:"33"},{no1:"34"},{no1:"35"},{no1:"36"},{no1:"37"},{no1:"38"},{no1:"39"},{no1:"40"},{no1:"41"},{no1:"42"},{no1:"43"},{no1:"44"},{no1:"45"},{no1:"46"},{no1:"47"},{no1:"48"},{no1:"49"},{no1:"50"},{no1:"51"},{no1:"52"},{no1:"53"},{no1:"54"},{no1:"55"},{no1:"56"},{no1:"57"},{no1:"58"},{no1:"59"},{no1:"60"}]


const SetCountDown = () => {
    const [shouldshow, setShouldshow] = useState(false);
    const [hour, setHour] = useState("12");
    const [minute, setMinute] = useState("45");
    const [date, setDate] = useState(new Date().toISOString().slice(0,10));

    const handleChangeMinute = (event) => {
        setMinute(event.target.value);
      };

      const handleChangeHour = (event) => {
        setHour(event.target.value);
      };

      const handleChangeDate = (event) => {
        setDate(event.target.value);
      };

  return (
    <>
    { shouldshow && (
        <ModalBackground onClick={() => setShouldshow(false)}>
            <ModalBody onClick={(e) => e.stopPropagation()}>
                
            <WhiteFlexColumnRoot> 
      <FlexColumn>
        <Image2 src={`https://file.rendit.io/n/sTOHrcyJpvB1xdSHuhfh.svg`} />
        <Text1>Information</Text1>
        <Paragraphz>
          Are you sure you want to <br className="responsivemodal"></br>Start a countdown <br className="responsivemodal"></br>for student registration{" "}
        </Paragraphz>
        <div className='flex flex-row gap-2'>
        <RoyalPurpleText onClick={() => setShouldshow(false)}>No</RoyalPurpleText>
        <RoyalPurpleTextw>Yes</RoyalPurpleTextw>
        </div>
      </FlexColumn>
    </WhiteFlexColumnRoot>

    
            </ModalBody>
        </ModalBackground>
      )}
   
    <div>
       <Sidebar />
       <div className="grid grid-cols-5 py-4 mb-16 mx-4 resultcolor ">
       <div className=" col-span-4"> 
       <FlexColumnRoot>
      <Paragraph> Set Registration<br className="responsivemodal"></br> Countdown</Paragraph> 
     </FlexColumnRoot>
        
       </div>
       <div className="">   
       <ImageRoot src={`https://file.rendit.io/n/xGx7lcOQlPHAdCu7jP9H.png`} /> 
       </div>  
     
    </div>

    <div >
    <form className=' lg:pl-16 pl-3 mx-2 lg:mr-96 bg-gray-100 pt-7 pb-7 flex flex-row flex-wrap gap-3 ' >
     
        <div className='flex flex-col'>
        <label for="countdown">Calendar</label>
        <WhiteFlexRow style={{height:"40px"}} onChange={handleChangeDate} value={date} type="date" id="Countdown" name="coundown" />
        
        </div>
       
     
       
        <div className='flex flex-col'>
        <label htmlFor='hour'>Hour</label>
        <WhiteFlexRow1>
        <select value={hour} onChange={handleChangeHour}>
            {Hours.map((hour) => (     
         <option value={hour.no1}>{hour.no1}</option>
            ))}
      </select>
      </WhiteFlexRow1>
      </div>
       
      <div className='flex flex-col'>
      <label htmlFor='minute'>Minute</label>
      <WhiteFlexRow1>
      
      <select value={minute} onChange={handleChangeMinute}>
            {Minutes.map((minuteupdate) => (     
         <option value={minuteupdate.no1}>{minuteupdate.no1}</option>
            ))}
      </select> 

      </WhiteFlexRow1>
      </div>

      <RoyalPurpleFlexRow>
        <Text5>Initiate</Text5>
      </RoyalPurpleFlexRow>
    
      
        </form>
    </div>


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

const ImageRoot = styled.img`
width: 89px;
height: 89px;
`;



const WhiteFlexRow = styled.input`
  
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center;
  border-style: solid;
  border-color: #787878;
  background-color: #ffffff;
  border-radius: 6px;
  padding: 9.5px 15.5px 8.5px 16.5px;
  border-width: 0.5px;

`;



const WhiteFlexRow1 = styled.div`
  gap: 29px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center;
  border-style: solid;
  border-color: #787878;
  background-color: #ffffff;
  border-radius: 6px;
  padding: 9.5px 11.5px 8.5px 16.5px;
  border-width: 0.5px;
  width:80px; 
`;

const RoyalPurpleFlexRow = styled.div`
  width: 100px;
  height:43px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self:center;
  align-items: center;
  border-style: solid;
  border-color: #787878;
  background-color: #2d0353;
  border-radius: 6px;
  padding: 8.5px 0px 9.17px 0px;
  border-width: 0.5px;
  margin-top:21px;
`;
const Text5 = styled.div`
  width: 49px;
  height: 21.33px;
  color: #ffffff;
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
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
const FlexColumn = styled.div`
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
const Text1 = styled.div`
  font-size: 18px;
  font-family: Product Sans Medium;
  line-height: 17.46px;
  color: #219653;
  margin: 0px 0px 13px 0px;
`;
const Paragraphz = styled.div`
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



const RoyalPurpleTextw = styled.div`
  display: flex;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: black;
  width: 170px;
  height: 45px;
  background-color: #f0f0f0;
  flex-direction: row;
  justify-content: center; 
  border-radius: 6px;
  padding: 13px 0px 11px 0px;
  cursor: pointer;
`;


export default SetCountDown
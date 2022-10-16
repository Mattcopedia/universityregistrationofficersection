import React, {useState} from 'react'
import "../br.css" 
import FilterYear2 from './FilterYear2'
import styled from "styled-components"; 

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


const FilterResult2 = () => {

    const [shouldshow, setShouldshow] = useState(false);

  return (
    <>
    { shouldshow && (
        <ModalBackground onClick={() => setShouldshow(false)}>
            <ModalBody onClick={(e) => e.stopPropagation()}>
                
            <WhiteFlexColumnRoottv> 
      <FlexColumntv>
        <Image2tv src={`https://file.rendit.io/n/Wa3a2l1V3BjHmDhxeHDY.svg`} />
        <Text1tv> No Records Found for this<br className="responsivemodal"></br> semester{" "}</Text1tv>
       
        <RoyalPurpleTexttv onClick={() => setShouldshow(false)}>Ok</RoyalPurpleTexttv>
      </FlexColumntv>
    </WhiteFlexColumnRoottv>

            </ModalBody>
        </ModalBackground>
      )}

    <div className='bg-white'>
        <FilterYear2 />
        <br />
        <div className='ml-4'>
       
        </div> 
        

        <div style={{overflowX: "auto"}} className='bg-white mx-3 '> 
       
       <table className='Yourcoursereg mx-auto my-6' style={{width:"100%"}} >    
   <tr style={{height:"40px", backgroundColor: "#e5e5e5"}}>
       <th style={{width:"28.3%", paddingLeft: "25px"}}>Student Id</th>
       <th style={{width:"28.3%"}}>Course code</th>
       <th style={{width:"23.3%"}} onClick={() => setShouldshow(true)} >Score</th>
   </tr>     

      </table>
    

</div>
        
    </div>
    </>
  )
}
const WhiteFlexColumnRoottv = styled.div`
  height: 390px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 0px 40px 0px 43px;
`;
const FlexColumntv = styled.div`
  height: 273px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

 ]

`;
const Image2tv = styled.img`
  width: 112px;
  height: 112px;
  margin: 0px 0px 12px 0px;
`;
const Text1tv = styled.div`
  font-size: 18px;
  font-family: Product Sans Medium;
  line-height: 17.46px;
  color: #bc0808;
  margin: 0px 0px 13px 0px;
`;
const RoyalPurpleTexttv = styled.div`
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






export default FilterResult2
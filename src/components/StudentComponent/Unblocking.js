import styled from "styled-components"; 
import axios from "axios";  
import React, {useRef, useState, useEffect} from 'react'
import Sidebar from 'components/Sidebar';
import {Link} from "react-router-dom" 

const Unblocking = () => {
    const [shouldshow, setShouldshow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");

    const focusDiv = useRef();

    
    if(focusDiv.current) {
      focusDiv.current.focus();   
    }

  
    useEffect(() => {
      const loadPosts = async () => {
        setLoading(true); 
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
        setLoading(false);
      };
  
      loadPosts();
    }, []);

  return (
      <>
    { shouldshow && (
        <ModalBackground onClick={() => setShouldshow(false)}>
            <ModalBody onClick={(e) => e.stopPropagation()}>
                
            <WhiteFlexColumnRoot> 
      <FlexColumn>
        <Image2 src={`https://file.rendit.io/n/7I3yZRjpHsAGEb48rZcx.svg`} />
        <Text1>Successful</Text1>
        <Paragraphtw>
          Student profile has<br className="responsivemodal"></br> been unblocked
          successfully{" "}
        </Paragraphtw>
        <RoyalPurpleTexttw onClick={() => setShouldshow(false)}>Ok</RoyalPurpleTexttw>
      </FlexColumn>
    </WhiteFlexColumnRoot>

    
            </ModalBody>
        </ModalBackground>
      )}

    <div>  
        <Sidebar />

        <div className="grid grid-cols-5 py-4 mx-4 resultcolor ">
       <div className=" col-span-4"> 
       <FlexColumnRoot>
      <Paragraph> Unblocking</Paragraph> 
     </FlexColumnRoot>
        
       </div>
       <div className="">   
       <ImageRoot src={`https://file.rendit.io/n/7yVVWBhm2IOcpGQXQBE1.svg`}  /> 
       </div>  
     
    </div>

    <SelectAcademicYearRoot>Enter Student ID </SelectAcademicYearRoot>


    <div className=' ml-7 flex flex-row flex-wrap mb-3  '> 
    <div  className='pt-2 lg:bg-gray-100 lg:pl-3 '>
      <input  style={{height: "44px"}} ref={focusDiv} className='enterId' placeholder='Stat/11/7009'  type="text" id="StudentId"/>  
      </div>  


      <div className=' '>
        <form className='searchbtn' >
        <div className='lg:pl-2  lg:bg-gray-100 py-3 '>
      <RoyalPurpleText>Call up Record</RoyalPurpleText>
          
      </div> 
        
        <input
        className='hidden'
        type="text"
        placeholder="Filter"
        onChange={(e) => setSearchTitle(e.target.value)} 
      />

      {loading ? (
        <h4>Loading ...</h4>
      ) : (
        posts
         // eslint-disable-next-line
          .filter((value) => {
            if (searchTitle === "") {
              return null;
            } else if (
              value.title.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          }) 
          .map((item) => <h5 key={item.id}>{item.title}</h5>)
      )}

        </form>
      
      </div>
      

    </div>

    
    <div class="flex flex-wrap">
                <div class="w-full sm:w-1/1 md:w-1/1 lg:w-1/2 xl:w-1/3 mb-4   mx-  mt-4">
                <WhiteFlexColumnRootyw>
                    <Ellipseyw src={`https://file.rendit.io/n/tsYpb8jtUOnBDZAMizwM.png`} />
                    <FlexColumnyw>
                      <Text1yw>Department</Text1yw>
                      <Text2yw>Statistics</Text2yw>
                    </FlexColumnyw>
                    <FlexColumn1yw> 
                      <Text3yw>Student ID:</Text3yw>
                      <Text4yw>STA/19/7009</Text4yw>
        
      </FlexColumn1yw>
      
      <Link to="/unblock"> 
      <div className="bg-green-700 flex flex-row "> 
      <button className="editunblock"> <Imageub src={`https://file.rendit.io/n/Xv2xStIrVRGBcYT445dD.svg`} /> Unblock</button> 
      </div> 
      </Link>
      
      
      
    </WhiteFlexColumnRootyw>
    
    </div>

  <div class="w-full sm:w-1/1 md:w-1/1 lg:w-1/2 xl:w-1/3 mb-4 ">
  <WhiteFlexRowRootzw>
      <FlexColumnzw>
        <div className="flex flex-row gap-6">
        <FlexColumn1zw margin={`0px 0px 0px 1px`}>
          <Text1zw margin={`0`}>First name</Text1zw>
          <Text2zw alignSelf={`inherit`}>Ayomide </Text2zw>
        </FlexColumn1zw>

        <FlexColumn1zw margin={`0px 0px 0px 1px`}>
          <Text1zw margin={`0`}>Middle name</Text1zw>
          <Text2zw alignSelf={`flex-start`}> Joy</Text2zw> 
        </FlexColumn1zw>

        </div>

        <FlexColumn1zw margin={`0`}>
          <Text1zw margin={`0px 0px 0px 1px`}>Last name</Text1zw>
          <Text2zw alignSelf={`inherit`}>Akinyemi</Text2zw>
        </FlexColumn1zw>
        <FlexColumn1zw margin={`0px 0px 0px 1px`}>
          <Text1zw margin={`0`}>Email</Text1zw>
          <Text2zw alignSelf={`inherit`}>Akinzzz@universitystudent.com</Text2zw>
        </FlexColumn1zw>
        <FlexColumn1zw margin={`0px 0px 0px 1px`}>
          <Text1zw margin={`0`}>UTME Number</Text1zw>
          <Text2zw alignSelf={`inherit`}>4723064540969</Text2zw>
        </FlexColumn1zw>
        <FlexColumn1zw margin={`0px 0px 0px 1px`}>
          <Text9zw>State of Origin</Text9zw>
          <Text2zw alignSelf={`flex-start`}>Ekiti </Text2zw>
        </FlexColumn1zw>

        <FlexColumn1zw margin={`0px 0px 0px 1px`}>
          <Text9zw>Register for this semester</Text9zw>
          <Text2zw alignSelf={`flex-start`}>No </Text2zw>
        </FlexColumn1zw>

        <FlexColumn1zw margin={`0px 0px 0px 1px`}>
          <Text9zw>Course form submitted</Text9zw>
          <Text2zw alignSelf={`flex-start`}>No </Text2zw>
        </FlexColumn1zw>
      </FlexColumnzw>
    </WhiteFlexRowRootzw> 
    
    </div>
  <div class="w-full sm:w-1/1 md:w-1/1 lg:w-1/2 xl:w-1/3 mb-4  "> 
  
    </div>
  
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
const Paragraphtw = styled.div`
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
const RoyalPurpleTexttw = styled.div`
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

const RoyalPurpleText = styled.div`
mix-blend-mode: normal;
display: flex;
font-size: 14px;
font-family: Roboto;
line-height: 21px;
color: #ffffff;
width: 135px;
height: 40px;
background-color: #2d0353;
flex-direction: row;
justify-content: center;
padding: 11px 0px 13px 0px;
margin-right: 10px;
`;

const SelectAcademicYearRoot = styled.div`
  font-size: 16px;
  font-family: Product Sans Medium;
  line-height: 15.52px;
  color: #2d0353;
  padding-bottom: 40px; 
  padding-left: 18px;
  padding-top: 40px;
`; 





const WhiteFlexColumnRootyw = styled.div`
  max-height: 500px;
  background-color: #FAFAFA;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  padding: 41px 43px 30px 44px;
  margin-left: 10px; 
  margin-bottom: 10px; 
  margin-top: 1px;
  padding-bottom: 100px;
`;
const Ellipseyw = styled.img`
  max-width: 141px;
  height: 141px;
  margin: 0px 0px 25px 0px;
`;
const FlexColumnyw = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 15px 0px;
`;
const Text1yw = styled.div`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #2d0353;
`;
const Text2yw = styled.div`
  font-size: 18px;
  font-family: Product Sans Medium;
  line-height: 17.46px;
  color: #2d0353;
  align-self: flex-start;
  margin: 0px 0px 0px 2px;
  font-weight: bold;
`;
const FlexColumn1yw = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0px 0px 15px 0px;
`;
const Text3yw = styled.div`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #2d0353;
  align-self: flex-end;
  margin: 0px 14px 0px 0px;
`;
const Text4yw = styled.div`
  font-size: 18px;
  font-family: Product Sans Medium;
  line-height: 17.46px;
  color: #2d0353;
  font-weight: bold;
`;








const FlexColumn1zw = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const Text1zw = styled.div`
  font-size: 12px;
  font-family: Roboto;
  line-height: 18px;
  color: #b3b1b1;
  align-self: flex-start; 
  margin: ${(props) => props.margin};
`;
const Text2zw = styled.div`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #505050;
  align-self: ${(props) => props.alignSelf};
`;


const WhiteFlexRowRootzw = styled.div`
  max-width: 409px;
  background-color: #fafafa;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  padding: 45px 58px;
  margin-left: 20px;
  margin-right:5px; 
  margin-top: 15px; 
`;



const FlexColumnzw = styled.div`
  width: 348px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: space-between;
  align-items: flex-start;
`;
const Text9zw = styled.div`
  font-size: 12px;
  font-family: Roboto;
  line-height: 18px;
  color: #b3b1b1;
`;
const Imageub = styled.img`
  width: 14px;
  height: 20.03px;
`;








export default Unblocking
import Sidebar from 'components/Sidebar'
import React, { useState, useEffect, useRef } from 'react'
import axios from "axios"; 
import styled from "styled-components";  
import "../br.css" 


const AmendmentApproval = () => {
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
    <div>
        <Sidebar />
        <div className="grid grid-cols-5 py-4 mb-16 mx-4 resultcolor ">
       <div className=" col-span-4"> 
       <FlexColumnRoot>
      <Paragraph> Amendment<br className="responsivemodal"></br> Approval</Paragraph> 
     </FlexColumnRoot>
        
       </div>
       <div className="">   
       <ImageRoot  src={`https://file.rendit.io/n/NjPNR3Oo93NxF1tCiOW7.png`} /> 
       </div>  
     
    </div> 
       
    <SelectAcademicYearRoot>Select Course Code </SelectAcademicYearRoot>

    <div className=' ml-7 flex flex-row mb-3  '> 
    <div className="box bg-gray-100 pl-2 py-2">
   <select>
    <option selected>CSC201 (Computer Analysis) </option> 
    <option>CSC201 (Computer Analysis)</option>
    <option>CSC201 (Computer Analysis)</option>
    <option>CSC201 (Computer Analysis)</option>
    <option>CSC201 (Computer Analysis)</option>
  </select> 

</div>
      <div className='pl-3  bg-gray-100 py-2 '>
        <form className='searchbtn' >
        <input
        className='hidden'
        type="text"
        placeholder="View"
        onChange={(e) => setSearchTitle(e.target.value)} 
      />
      <div className='  bg-gray-100 pt-1 pr-2 '>
      <RoyalPurpleText>View</RoyalPurpleText>
          
      </div>


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

  const SelectAcademicYearRoot = styled.div`
  font-size: 16px;
  font-family: Product Sans Medium;
  line-height: 15.52px;
  color: #2d0353;
  padding-bottom: 40px; 
  padding-left: 18px;
  padding-top: 40px;
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
    width: 120px;
    height: 40px;
    background-color: #2d0353;
    flex-direction: row;
    justify-content: center;
    padding: 11px 0px 13px 0px;
   
  `;

export default AmendmentApproval
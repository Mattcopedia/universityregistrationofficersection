import React, { useState, useEffect, useRef } from 'react'
import axios from "axios"; 
import "../br.css" 
import styled from "styled-components"; 

const FilterFeature = () => {

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
    <div className=' ml-7 flex flex-row flex-wrap mb-3  '> 
    <div  className='pt-2 lg:bg-gray-100 lg:pl-3 '>
      <input  style={{height: "44px"}} ref={focusDiv} className='enterId' placeholder='Sta/11/2009'  type="text" id="StudentId"/>  
      </div> 

        <div className="filter lg:bg-gray-100 pl-2 py-2">
   <select>
    <option selected>1st Semester 2020-2021(200 level)    </option> 
    <option>1st Semester 2020-2021(200 level)</option>
    <option>1st Semester 2020-2021(200 level)</option>
    <option>1st Semester 2020-2021(200 level)</option> 
    <option>1st Semester 2020-2021(200 level)</option>
  </select> 

</div>
      <div className=' '>
        <form className='searchbtn' >
        <div className='lg:pl-2  lg:bg-gray-100 py-3 '>
      <RoyalPurpleText>Filter</RoyalPurpleText>
          
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
    <br />
    </>
  )
}

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

export default FilterFeature
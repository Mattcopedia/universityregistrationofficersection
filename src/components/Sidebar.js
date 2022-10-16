

import { useState } from 'react';
import styled from "styled-components";  
import AdminNavbar from './AdminNavbar';
import { Link, NavLink } from "react-router-dom";  
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';  
import "./br.css"
import unigig from "../assets/img/unigig.jpg"

 
 
export default function Sidebar() {

    const [showSidebar, setShowSidebar] = useState('-left-64');
    return (
        <>
            <AdminNavbar
                showSidebar={showSidebar} 
                setShowSidebar={setShowSidebar}  
            />
            <div
                className={` fixed   top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden  transition-all duration-300 bg-white`} >  

                         


                <Element7>
                

                <Line src={`https://file.rendit.io/n/HyUCUJJkXhfGGVECnrB6.svg`} />
                <PlumFlexColumn>

                  <div className='md:hidden ml-20 pl-20'>
                       <Button
                           
                            buttonType="link" 
                            size="lg"
                            iconOnly  
                            rounded
                            ripple="light"
                            onClick={() => setShowSidebar('-left-64')}
                        >
                            <Icon name="close" size="2xl" color="black" />
                        </Button> 
                  </div>
                
                  <NavLink to="/" exact  >
                  <ImageRoot src={unigig}  /> 
                  </NavLink>

                     <div className='focus:blue'>
                     <NavLink to="/" exact  >
                  <FlexRow2 margin={`0px 0px 33px 0px`} onClick={() => setShowSidebar('-left-64')}>
                    <NeonCarrotRectangle margin={`0px 21px 0px 0px`} />
                  
                    <Image1 src={`https://file.rendit.io/n/wf2zhCB3LkjFgVLkb6SX.svg`} />
                    <Text2  margin={`0px 88px 0px 0px`}  >
                      Dashboard</Text2> 
             
                  </FlexRow2> 
                  </NavLink>   
             
                     </div>

                     {/* className='text-xs leading-4 flex flex-row pr-11 mr-9 text-white focus:text-red-500 hover:text-red-500' */}
               

            
                  <FlexRow2 margin={`0px 0px 33px 0px`} >
                  <NeonCarrotRectangle margin={`0px 0px 0px 0px`} />                          
                      <div className='text-xs leading-4 flex flex-row pr-11 mr-1 text-white focus:text-red-500 hover:text-red-500'>
                 
                  <div className="dropdown ">
                    <button className="dropbtn flex flex-row">
                    <Image2 src={`https://file.rendit.io/n/pYy0gIuZDeYoFckaWV51.svg`}   /> 
                      <Text2>Student Result</Text2> 
                    </button>
                    <div className="dropdown-content" onClick={() => setShowSidebar('-left-64')} >
                      <Link to="/upload-doc">Upload Student Result</Link>
                      <Link to="/search-year">Result Uploaded</Link>
                      <Link to="/result-amendment">Result Amendment</Link>
                      <Link to="/result-history">Result History</Link>
                      <Link to="/filter-year">Filter Out Result</Link>
                      
                    </div>
                  </div> 

                      </div> 
                    <Image4 src={`https://file.rendit.io/n/1udbBvAlXi9KxoIN8Mpq.svg`} />
                  </FlexRow2>
 
                  <FlexRow2 margin={`0px 0px 33px 0px`} >
                  <NeonCarrotRectangle margin={`0px 0px 0px 0px`} />                          
                      <div className='text-xs leading-4 flex flex-row pr-11 mr-4 text-white focus:text-red-500 hover:text-red-500'>
                      <div className="dropdown ">
                    <button className="dropbtn flex flex-row">
                    <Image2 src={`https://file.rendit.io/n/44FOE78XfxUB5DaNSsT4.svg`} /> 
                    <Text2>Registration</Text2> 
                    </button>
                    <div className="dropdown-content" onClick={() => setShowSidebar('-left-64')}>
                    <Link to="/register-student">Late Registration</Link>
                      <Link to="/unblocking">Unblock</Link>
                      <Link to="/course-reg-stats">Course Statistics</Link>
                      <Link to="/course-unit">Course Unit</Link>
                      <Link to="/upload-student-doc">Retrospective Registration</Link>
                      <Link to="/update-student-status">Update Student Status</Link>
                      <Link to="/update-student-status">Biodata Correction</Link>
                      <Link to="/biodata-correction">Biodata Correction</Link>
                      <Link to="/add-delete">Add or Delete Course</Link>
                    </div>
                  </div> 
                      </div> 
                    <Image4 src={`https://file.rendit.io/n/1udbBvAlXi9KxoIN8Mpq.svg`} />
                  </FlexRow2>


                  <FlexRow2 margin={`0px 0px 33px 0px`} >
                  <NeonCarrotRectangle margin={`0px 0px 0px 0px`} />                          
                      <div className='text-xs leading-4 flex flex-row pr-12 mr-0.5 text-white focus:text-red-500 hover:text-red-500'>
                      <div className="dropdown " >
                    <button className="dropbtn flex flex-row">
                    <Image2 src={`https://file.rendit.io/n/q3UmzzNSXmCJfIgJLUPl.svg`} /> 
                    <Text2>Course Admin</Text2> 
                    </button> 
                    <div className="dropdown-content" onClick={() => setShowSidebar('-left-64')}>
                      <Link to="/view-courses">View Courses</Link>
                      <Link to="/course-status">Course Status</Link>
                      <Link to="/create-new-course">Create New Course</Link>
                      <Link to="/course-allocation">Course Allocation</Link>
                    </div>
                  </div>  
                      </div> 
                    <Image4 src={`https://file.rendit.io/n/1udbBvAlXi9KxoIN8Mpq.svg`} />
                  </FlexRow2>
          

               
                  <FlexRow2 margin={`0px 0px 33px 0px`} >
                  <NeonCarrotRectangle margin={`0px 0px 0px 0px`} />                          
                      <div className='text-xs leading-4 flex flex-row pr-12 mr-0.5 text-white focus:text-red-500 hover:text-red-500'>
                      <div className="dropdown " >
                    <button className="dropbtn flex flex-row">
                    <Image2 src={`https://file.rendit.io/n/TjbIpolco2NXf4vdOE1s.svg`} /> 
                    <Text2>Master Sheet</Text2> 
                    </button> 
                    <div className="dropdown-content" onClick={() => setShowSidebar('-left-64')}>
                      <Link to="/master-sheet">Master Sheet</Link>
                      <Link to="/master-sheetmode">Master Sheet Mode</Link>
                      <Link to="/hide-student-list">Hide Student List</Link>
                      <Link to="/retrospective-reg">Master Restrospective Reg</Link>
                      <Link to="/master-update-status">Update Student Status</Link>
                      <Link to="/master-course-status">Course Status</Link>
                      <Link to="/master-view-courses">View Courses</Link>
                      <Link to="/master-biodata-correction">Biodata Correction</Link>
                    </div>
                  </div>  
                      </div>  
                    <Image4 src={`https://file.rendit.io/n/1udbBvAlXi9KxoIN8Mpq.svg`} />
                  </FlexRow2>


                  <FlexRow2 margin={`0px 0px 33px 0px`} >
                  <NeonCarrotRectangle margin={`0px 0px 0px 0px`} />                          
                      <div className='text-xs leading-4 flex flex-row pr-11 mr-14 text-white focus:text-red-500 hover:text-red-500'>
                      <div className="dropdown " >
                    <button className="dropbtn flex flex-row">
                    <Image2 src={`https://file.rendit.io/n/re11bRHHozy9oP8lzFAg.svg`}/> 
                    <Text2>List</Text2> 
                    </button> 
                    <div className="dropdown-content" onClick={() => setShowSidebar('-left-64')}>
                      <Link to="/list-register-student">Register Student</Link>
                      <Link to="/exam-list">Exam List</Link>
                      <Link to="/submitted-result">Submitted Result</Link>
                   
                    </div>
                  </div>  
                      </div> 
                    <Image4 src={`https://file.rendit.io/n/1udbBvAlXi9KxoIN8Mpq.svg`} />
                  </FlexRow2>


                  <FlexRow2 margin={`0px 0px 33px 0px`} >
                  <NeonCarrotRectangle margin={`0px 0px 0px 0px`} />                          
                      <div className='text-xs leading-4 flex flex-row pr-12 mr-4 text-white focus:text-red-500 hover:text-red-500'>
                      <div className="dropdown " >
                    <button className="dropbtn flex flex-row">
                    <Image2 src={`https://file.rendit.io/n/TjbIpolco2NXf4vdOE1s.svg`} /> 
                    <Text2>Document</Text2> 
                    </button> 
                    <div className="dropdown-content" onClick={() => setShowSidebar('-left-64')}>
                      <Link to="/upload-ind-doc">Upload Document</Link>
                      <Link to="/view-doc">View Document</Link>
              
                    </div>
                  </div>  
                      </div> 
                    <Image4 src={`https://file.rendit.io/n/1udbBvAlXi9KxoIN8Mpq.svg`} />
                  </FlexRow2>
             

                  <div className='focus:blue'>
                     <NavLink to="/profile" exact  >
                  <FlexRow2 margin={`0px 0px 33px 0px`} onClick={() => setShowSidebar('-left-64')}>
                    <NeonCarrotRectangle margin={`0px -5px 0px 0px`} />
                  
                    <Image1 src={`https://file.rendit.io/n/N1mkyojAuiAvaDU7SG1I.svg`} />
                    <Text2  margin={`0px 88px 0px 0px`}  >
                      Profile</Text2> 
             
                  </FlexRow2> 
                  </NavLink>   
             
                     </div>


              




                  
                </PlumFlexColumn> 
                
              </Element7>
        


            </div>
        </>
    );
}

const ImageRoot = styled.img`
width: 120px;
height: px50;
padding-bottom:20px;

`;

const NeonCarrotRectangle = styled.div`
  width: 2px;
  height: 22px;
  background-color: #df8909;
  opacity: 0;
  margin: ${(props) => props.margin};
`;
const Text2 = styled.a`
  font-size: 12px;
  font-family: Roboto;
  line-height: 18px;
  color: #ffffff;
  margin: ${(props) => props.margin};
  
  &:hover {
    color: #df8909; 
  }

  &:focus {
    color: #df8909; 
  }

`;
const Image2 = styled.img`
  width: 17px;
  height: 17px;
  align-self: flex-end;
  margin: 0px 18px 2px 0px;
`;
const FlexRow2 = styled.div`
  width: 214px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};

  &:hover {
    color: #df8909; 
  }

  &:focus {
    color: #df8909; 
  }


`;

const Image4 = styled.img`
  width: 6px;
  height: 9px;
  align-self: flex-end;
 
  margin: 0px 0px 6px 0px;
  &:hover {
    color: #df8909; 
  }

  &:focus {
    color: #df8909; 
  }
`;


const Element7 = styled.div`
  width: 237px;
  height: 900px;
  position: relative;
  flex-grow: 1; 
`;
const Line = styled.img`
  width: 38px;
  height: 4px;
  position: absolute;
  top: 699px;
  left: 106px;
`;
const PlumFlexColumn = styled.div`
  height: 818px;
  background-color: #250444;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 41px 23px 41px 0px;
`;

const Image1 = styled.img`
  width: 16px;
  height: 16px;
  margin: 0px 18px 0px 0px;
  &:hover {
    color: #df8909; 
  }

  &:focus {
    color: #df8909; 
  }
`;

























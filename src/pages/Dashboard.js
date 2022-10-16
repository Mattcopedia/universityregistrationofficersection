
       import React from "react"; 
       import { NavLink } from 'react-router-dom';
       import styled from "styled-components";
       import Sidebar from "components/Sidebar";
    
      import "../components/br.css"

   

       

export default function Dashboard() {  
       
   

    return (   
        <>
        <Sidebar />  

        <div className="bg-white py-5">  

        <div class="max-w-7xl ml-7 heropattern py-11 px-3 mr-7  grid grid-cols-12 ">
              <div class="col-span-12 mt-0.4   md:col-span-12 object-fill lg:col-span-6">

              {/* <img width={700} src={welcomeone} alt="welcome" /> */}
                
              <FlexColumn>
                <FlexRow>
                  <Text10>Welcome Back</Text10>
                  <Text20>🚀</Text20>
                </FlexRow>
                <Text30>Dr.Ayomide <br className="responsivemodal"></br> Akinyemi</Text30>
              </FlexColumn>  


              </div>

              <div class="col-span-12 pb-0.5   md:col-span-12 object-fill lg:col-span-6 "> 
       

              <Paragraph>
            Develop a passion for learning. If you do, you will never cease to grow.
            – <Text40>Anthony J. D’Angelo</Text40>  
          </Paragraph>

              </div>
              </div>

              
              {/* here */}
              <div className="mx-7 my-4 ">
                   
                   <div className="container mx-auto mb-4 bg-gray-100 "> 
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                           <div className="flex justify-center text-6xl border-2 -300 bg-gray-100  p-6 ">
                            
                           <NeonCarrotFlexRowa>
                    <FlexColumna width={`148px`}>
                        <Text1a>Assigned Course</Text1a>
                        <Text2a>3</Text2a>
                        </FlexColumna>
                        <Image1a src={`https://file.rendit.io/n/9Vr3KV0eOirqoe47C5Ev.svg`} />
                    </NeonCarrotFlexRowa>
                           
                           </div>
                            
                                 
                                
                           <div className="flex justify-center text-6xl border-2  bg-gray-100 p-6 ">
                              
                           <NeonCarrotFlexRowb>
                    <FlexColumna width={`148px`}>
                        <Text1a>Total Course Unit</Text1a>
                        <Text2a>9</Text2a>
                        </FlexColumna>
                        <Image1a src={`https://file.rendit.io/n/9Vr3KV0eOirqoe47C5Ev.svg`} />
                    </NeonCarrotFlexRowb>

                         

                           </div>
                         



                           <div className="flex flex-row justify-center text-6xl border-2 bg-gray-100   p-6 ">

                           <NeonCarrotFlexRowb>
                    <FlexColumna width={`148px`}>
                        <Text1a>Total created course</Text1a>
                        <Text2a>22</Text2a>
                        </FlexColumna>
                        <Image1 src={`https://file.rendit.io/n/kYmx87PyQZ8Krv45vTCp.svg`} />
                    </NeonCarrotFlexRowb>

                               </div>
       
       
                           <div className="flex justify-center text-6xl border-2 bg-gray-100 p-6 "> 

                           <NeonCarrotFlexRowc>
                    <FlexColumna width={`148px`}>
                        <Text1a>Registered Student</Text1a>
                        <Text2a>180</Text2a>
                        </FlexColumna>
                        <Image1a src={`https://file.rendit.io/n/Umk8KHosAVmGPOks0tU4.svg`} />
                    </NeonCarrotFlexRowc>  
 
                           </div>
                            
                       </div>
                         </div>
                         </div> 

          

           
           <h1 className="text-left mx-7 text-indigo-900 font-black text-lg">Quick Access</h1>     

           <div className="mx-7 my-4 ">
            <div className="container  mx-auto mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="flex justify-center text-6xl border-2   p-6 bg-gray-100   ">  

                    <NavLink to="/upload-doc"> 
                    <WhiteFlexColumnRoot1>
                    <Image1 src={`https://file.rendit.io/n/BjVLEy962o3xcYkbfqhg.svg`} />
                      <Text2>Upload Result</Text2>  
                    </WhiteFlexColumnRoot1> 
                    </NavLink>    
                  
                    </div> 



                    <div className="flex justify-center text-6xl border-2 bg-gray-100  p-6 ">
                    <NavLink to="/unblocking"> 
                    <WhiteFlexColumnRoot1>
                      <Image2 src={`https://file.rendit.io/n/93ScqVXTqy4f0s1CRTgx.svg`} />
                      <Text2>Unblock</Text2>  
                    </WhiteFlexColumnRoot1>
                    </NavLink>  
                      
                    </div> 

                    <div className="flex  justify-center text-6xl border-2 bg-gray-100 p-6 ">
                        
                        
                        <WhiteFlexColumnRoot1> 
                       <Image2 src={`https://file.rendit.io/n/UaXdWtGcvthb8ci5PXSs.svg`} />
                        <Text2>Time Table</Text2>
                        </WhiteFlexColumnRoot1>      
                        
       
                        </div>
                            

                    <div className="flex justify-center text-6xl border-2 bg-gray-100   p-6 ">

                    <NavLink to="/biodata-correction"> 
                    <WhiteFlexColumnRoot1>
                        <Image2 src={`https://file.rendit.io/n/CLXLLSswDqByI6PqRucp.svg`}  />
                        <Text2>Student Biodata</Text2>
                        </WhiteFlexColumnRoot1>   
                        </NavLink> 

                    </div> 

                </div>
                  </div> 
                   
                   <div className="container mx-auto mb-4"> 
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                           <div className="flex justify-center text-6xl border-2 -300 bg-gray-100  p-6 ">
                           <NavLink to="/add-delete"> 
                           <WhiteFlexColumnRoot1>
                      <Image2 src={`https://file.rendit.io/n/Ly9NbUEgO33wkdcaWTZj.svg`}/>
                      <Text2>Add/Delete</Text2> 
                        </WhiteFlexColumnRoot1>
                        </NavLink>  
                           
                           </div>
                            
                                 
                                
                           <div className="flex justify-center text-6xl border-2  bg-gray-100 p-6 ">
                           <NavLink to="/create-new-course"> 
                           <WhiteFlexColumnRoot1>
                            <Image2 src={`https://file.rendit.io/n/YorbMvdf3JDqSq0IHYOp.svg`}  />
                            <Text2>Create course</Text2>
                            </WhiteFlexColumnRoot1>   
                            </NavLink>
                           </div>
                         



                           <div className="flex justify-center text-6xl border-2  bg-gray-100 p-6 ">
                          
                           <NavLink to="/upload-ind-doc"> 
                           <WhiteFlexColumnRoot1>
                            <Image2 src={`https://file.rendit.io/n/aYiUXfnRzNcBs9LXGwsz.svg`} />
                            <Text2>Download/Upload Document</Text2>
                            </WhiteFlexColumnRoot1>   
                            </NavLink>
                         
                               </div>
       
       
                           <div className="flex justify-center text-6xl border-2  bg-gray-100 p-6 "> 
                           <NavLink to="/master-sheetmode"> 
                           <WhiteFlexColumnRoot1>
                            <Image2  src={`https://file.rendit.io/n/P1zs5K3QI17SeF2adaXQ.svg`} />
                            <Text2>Master Sheet</Text2>
                            </WhiteFlexColumnRoot1>   
                            </NavLink>
                           </div>
                            
                       </div>
                         </div>
                         </div>  

                         <div>

                         </div>
                         </div> 
                  
        </>
    );
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


const Image1 = styled.img`
 
width: 64.52px;
height: 46.95px;
`;


const WhiteFlexColumnRoot1 = styled.div`

  border-style: solid;
  height: 170px;
  color: #fafafa; 
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 26.78px;
  align-items: center;
  border-radius: 6px;
  padding: 34px 96.78px 34px 97px;

  margin-left: 10px;  
  margin-right: 10px;  
`;
const Image2 = styled.img`

width: 55.22px;
height: 55.22px;
`;
const Text2 = styled.div`
white-space: nowrap;
display: inline-block;
text-align: left;
font-size: 18px;
font-family: Roboto;
line-height: 27.09px;
color: #2d0353; 
`;




const FlexColumn = styled.div`
  align-self: stretch;
  width: 318px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  justify-content: center;
  align-items: center;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 6px;
  min-width: 318px;
  align-items: center;
`;
const Text10 = styled.div`
  mix-blend-mode: normal;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #ffffff;
`;
const Text20 = styled.div`
  mix-blend-mode: normal;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
`;
const Text30 = styled.div`
  mix-blend-mode: normal;
  font-size: 32px;
  font-family: Product Sans Black;
  line-height: 34.92px;
  color: #ffffff;

  @media ${devices.mobileL} { 
    margin-right: 100px; 
  } 
`;
const Paragraph = styled.div`
  mix-blend-mode: normal;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #ffffff;
  margin: 3px 0px 0px 0px;
  white-space: pre-wrap;
  
`;
const Text40 = styled.div`
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #f2994a;
  display: contents;
`;






const FlexColumna = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 13px;
  flex-grow: 1;
  align-items: center;
  width: ${(props) => props.width};
`;
const Text1a = styled.div`
  font-size: 18px;
  font-family: Roboto;
  line-height: 27.09px;
  color: #505050;
`;
const Text2a = styled.div`
  font-size: 36px;
  font-family: Roboto;
  line-height: 54.18px;
  color: #505050;
  align-self: flex-start;
`;

const NeonCarrotFlexRowa = styled.div`
  width: 239px;
  background-color: rgba(242, 153, 74, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 31px;
  align-items: flex-start;
  border-radius: 10px;
  padding: 18px 15px 17px 15px;
`;
const NeonCarrotFlexRowb = styled.div`
  width: 239px;
  background-color: #e9f4ee;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 31px;
  align-items: flex-start;
  border-radius: 10px;
  padding: 18px 15px 17px 15px;
`;
const NeonCarrotFlexRowc = styled.div`
  width: 239px;
  background-color: rgba(108, 99, 255, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 31px;
  align-items: flex-start;
  border-radius: 10px;
  padding: 18px 15px 17px 15px;
`;


const Image1a = styled.img`
  width: 50px;
  height: 50px;
`;







































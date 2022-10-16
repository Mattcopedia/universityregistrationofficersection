import Sidebar from 'components/Sidebar';
import React,{useState, Fragment} from 'react'
import styled from "styled-components"; 
import data from "./Mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";



const ViewCourses = () => {
    

    const [shouldshow, setShouldshow] = useState(false);
    const [submit, setSubmit] = useState(false);


    const [contacts, setContacts] = useState(data);

    const [editFormData, setEditFormData] = useState({
      course: "",
      modules: "",
      code: "",
      unit: "",
      status: "",
      level: "",
      year: "",
    });

    const [editContactId, setEditContactId] = useState(null);

    const handleEditFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...editFormData };
      newFormData[fieldName] = fieldValue;
  
      setEditFormData(newFormData);
    };



    const handleEditFormSubmit = (event) => {
      event.preventDefault();
  
      const editedContact = {
        id: editContactId,
        course: editFormData.course,
        modules: editFormData.modules,
        code: editFormData.code,
        unit: editFormData.unit,
        status: editFormData.status,
        level: editFormData.level,
        year: editFormData.year,
      };
  
      const newContacts = [...contacts];
  
      const index = contacts.findIndex((contact) => contact.id === editContactId);
  
      newContacts[index] = editedContact;
  
      setContacts(newContacts);
      setEditContactId(null);
    };






    const handleEditClick = (event, contact) => {
      event.preventDefault();
      setEditContactId(contact.id);
  
      const formValues = {
        course: contact.course,
        modules: contact.modules,
        code: contact.code,
        unit: contact.unit,
        status: contact.status,
        level: contact.level,
        year: contact.year,
      };
  
      setEditFormData(formValues);
    };
  
    const handleCancelClick = () => {
      setEditContactId(null);
    };
  






  return (
    <>
      { shouldshow && (
        <ModalBackground onClick={() => setShouldshow(false)}>
            <ModalBody onClick={(e) => e.stopPropagation()}>
                
            <WhiteFlexColumnRoot> 
      <FlexColumn>
        <Image2 src={`https://file.rendit.io/n/sTOHrcyJpvB1xdSHuhfh.svg`} />
        <Text1li>Information</Text1li>
        <Paragraphli>
          Are you sure you want to <br className="responsivemodal"></br>delete this lecturer{" "}
        </Paragraphli>
        <div className='flex flex-row gap-2'>
        <RoyalPurpleText onClick={() => setShouldshow(false)}>No</RoyalPurpleText>
        <RoyalPurpleTextw>Yes</RoyalPurpleTextw>
        </div>
      </FlexColumn>
    </WhiteFlexColumnRoot>

    
            </ModalBody>
        </ModalBackground>
      )}
    
    { submit && (
        <ModalBackground onClick={() => setSubmit(false)}>
            <ModalBody onClick={(e) => e.stopPropagation()}>
                
            <WhiteFlexColumnRoot> 
      <FlexColumn>
        <Image2 src={`https://file.rendit.io/n/7I3yZRjpHsAGEb48rZcx.svg`} />
        <Text1li>Successful</Text1li>
        <Paragraphli>
        Lecturer account <br className="responsivemodal"></br>has been deleted
          successfully{" "}
        </Paragraphli>
        <RoyalPurpleText onClick={() => setSubmit(false)}>Ok</RoyalPurpleText>
      </FlexColumn>
    </WhiteFlexColumnRoot>
    
            </ModalBody>
        </ModalBackground>
      )}
    <div>
        <Sidebar />


        
        <div className="grid grid-cols-5 py-4 mx-4 mb-7 resultcolor ">
       <div className=" col-span-4"> 
       <FlexColumnRoot>
      <Paragraph>View<br className="responsivemodal"></br> Courses</Paragraph> 
     </FlexColumnRoot>
        
       </div>
       <div className="">   
       <ImageRoot src={`https://file.rendit.io/n/cYPuX0ORJEoEIGzURhn1.png`} /> 
       </div>  
     
    </div>



  
     

    <div style={{overflowX: "auto"}} className='bg-white mx-3 '> 
    <form onSubmit={handleEditFormSubmit}>
       <table className='Yourcoursereg mx-auto my-6' style={{width:"100%"}} >    
   <tr style={{height:"40px", backgroundColor: "#e5e5e5"}}>
      
       <th style={{width:"5%",paddingLeft:"10px"}}>S/N</th> 
       <th style={{paddingLeft:"10px",width:"15%"}}>Courses</th> 
       <th style={{paddingLeft:"10px",width:"26%"}}>Modules</th> 
       <th style={{paddingLeft:"10px",width:"10%"}}>Code</th> 
       <th style={{paddingLeft:"10px",width:"7%"}}>Unit</th> 
       <th style={{paddingLeft:"10px",width:"7%"}}>Status</th> 
       <th style={{paddingLeft:"10px",width:"10%"}}>Level</th> 
       <th style={{paddingLeft:"10px",width:"10%"}}>Year</th> 
       <th style={{paddingLeft:"10px"}}></th> 
       <th style={{paddingLeft:"10px"}}></th> 
      
   </tr>  

     <tbody>

     
              <Fragment>
               
                  <ReadOnlyRow
                    // contact={contact} 
                    contact={contacts} 
                    handleEditClick={handleEditClick}
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                    editContactId={editContactId}
                  />
                
              </Fragment>
          
         

      
          </tbody>  

      </table>

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
const Text1li = styled.div`
  font-size: 18px;
  font-family: Product Sans Medium;
  line-height: 17.46px;
  color: #219653;
  margin: 0px 0px 13px 0px;
`;
const Paragraphli = styled.div`
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



export default ViewCourses













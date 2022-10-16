import React,{ Fragment} from 'react'
import styled from "styled-components"; 


const MasterReadOnlyRow = ({ contact,editContactId, handleEditClick,editFormData,handleEditFormChange,handleCancelClick }) => {
  return (

    contact.map((contacting) => (
      <Fragment>
       { editContactId === contacting.id ? (
       <tr style={{height:"70px"}}>
       <td></td>
     <td style={{paddingLeft:"10px"}}>
       <input
        style={{width:"150px", backgroundColor: "#e5e5e5", borderRadius:"4px", border:"1px solid #e5e5e5"}}
         type="text" 
         required="required"
         placeholder="Enter course"
         name="course"
         value={editFormData.course}
         onChange={handleEditFormChange}
       ></input>
     </td>
     <td style={{paddingLeft:"10px"}}>
       <input
        style={{width:"250px", backgroundColor: "#e5e5e5" , borderRadius:"4px", border:"1px solid #e5e5e5"}}
         type="text"
         required="required"
         placeholder="Enter modules"
         name="modules"
         value={editFormData.modules}
         onChange={handleEditFormChange}
       ></input>
     </td>
     <td style={{paddingLeft:"10px"}}>
       <input
        style={{width:"70px", backgroundColor: "#e5e5e5" , borderRadius:"4px", border:"1px solid #e5e5e5"}}
         type="text"
         required="required"
         placeholder="Enter code"
         name="code"
         value={editFormData.code}
         onChange={handleEditFormChange}
       ></input>
     </td>
 
     <td style={{paddingLeft:"10px"}}>
       <input
         style={{width:"15px", backgroundColor: "#e5e5e5" , borderRadius:"4px", border:"1px solid #e5e5e5"}}
         type="text"
         required="required"
         placeholder="Enter unit"
         name="unit"
         value={editFormData.unit}
         onChange={handleEditFormChange}
       ></input>
     </td>
     <td style={{paddingLeft:"10px"}}>
       <input
        style={{width:"15px", backgroundColor: "#e5e5e5" , borderRadius:"4px", border:"1px solid #e5e5e5"}}
         type="text"
         required="required"
         placeholder="Enter status"
         name="status"
         value={editFormData.status}
         onChange={handleEditFormChange}
       ></input>
     </td>
 
     <td style={{paddingLeft:"10px"}}>
       <input
        style={{width:"40px", backgroundColor: "#e5e5e5" , borderRadius:"4px", border:"1px solid #e5e5e5"}}
         type="text"
         required="required"
         placeholder="Enter level"
         name="level"
         value={editFormData.level}
         onChange={handleEditFormChange}
       ></input>
     </td>
 
     <td>
       <input
        style={{width:"80px", backgroundColor: "#e5e5e5" , borderRadius:"4px", border:"1px solid #e5e5e5"}}
         type="text"
         required="required"
         placeholder="Enter year"
         name="year"
         value={editFormData.year}
         onChange={handleEditFormChange}
       ></input>
     </td>
 
    
     <td><button type="submit"><Text4>Save</Text4></button></td>
    <td><button type="button" onClick={handleCancelClick}><Text5>Cancel</Text5></button> </td>
 
     </tr>
     ) : (
        <tr key={contacting.id} style={{height:"70px"}}> 

        <td style={{paddingLeft:"10px"}}><label> <Text3>{contacting.id}</Text3></label></td>
          <td style={{paddingLeft:"10px"}} ><label><Text3>{contacting.course}</Text3></label></td>
          <td style={{paddingLeft:"10px"}}><label><Text3>{contacting.modules}</Text3></label></td>
          <td style={{paddingLeft:"10px"}}><label><Text3>{contacting.code}</Text3></label></td>
          <td style={{paddingLeft:"10px"}} ><label><Text3>{contacting.unit}</Text3></label></td> 
          <td style={{paddingLeft:"10px"}}><label><Text3>{contacting.status}</Text3></label></td>
          <td style={{paddingLeft:"10px"}}><label><Text3>{contacting.level}</Text3></label></td>
          <td style={{paddingLeft:"10px"}}><label><Text3>{contacting.year}</Text3></label></td>

          <td style={{paddingLeft:"10px"}}  className="mr-3" onClick={(event) => handleEditClick(event, contacting)}>
          <div className="flex cursor-pointer flex-row gap-1 ">
          <Image1w src={`https://file.rendit.io/n/aIETGJBavFzwQQbRItRl.svg`} /> <Text3>Edit</Text3>
              </div> 
          </td>
       

        </tr>
       ) }
     </Fragment>
    ))


  );
};

const Image1w = styled.img`
  width: 9px;
  height: 12px;
  align-self: flex-start;
  margin: 3px 0px 0px 0px;
`;


const Text3 = styled.div`
  mix-blend-mode: normal;
  font-size: 17px;
  font-family: Roboto;
  line-height: 21px;
  color: #787878;
  text-align: left;
 
`;


const Text4 = styled.div`
  display: flex;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #ffffff;
  width: 80px;
  height: 30px;
  background-color: #2d0353;
  flex-direction: row;
  justify-content: center;
  border-radius: 4px;
  padding: 6px 0px 6px 0px;
  cursor: pointer;
`;

const Text5 = styled.div`
display: flex;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: black;
  width: 80px;
  height: 30px;
  background-color: #f0f0f0;
  flex-direction: row;
  justify-content: center;
  border-radius: 4px;
  padding: 6px 0px 6px 0px;
  cursor: pointer;

`;


export default MasterReadOnlyRow;


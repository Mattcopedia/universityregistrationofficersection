import React,{ Fragment} from 'react'
import styled from "styled-components"; 


const ReadOnlyRow = ({ contact,editContactId, handleEditClick, handleDeleteClick,editFormData,handleEditFormChange,handleCancelClick }) => {
  return (

    contact.map((contacting) => (
      <Fragment>
       { editContactId === contacting.id ? (
       <tr style={{height:"70px"}}>
       <td></td>
     <td>
       <input
        style={{width:"150px", backgroundColor: "#e5e5e5", borderRadius:"4px", border:"1px solid #e5e5e5"}}
         type="text" 
         required="required"
         placeholder="Enter your name"
         name="fullName"
         value={editFormData.fullName}
         onChange={handleEditFormChange}
       ></input>
     </td>
     <td>
       <input
        style={{width:"80px", backgroundColor: "#e5e5e5" , borderRadius:"4px", border:"1px solid #e5e5e5"}}
         type="text"
         required="required"
         placeholder="Enter Id"
         name="userId"
         value={editFormData.userId}
         onChange={handleEditFormChange}
       ></input>
     </td>
     <td>
       <input
        style={{width:"150px", backgroundColor: "#e5e5e5" , borderRadius:"4px", border:"1px solid #e5e5e5"}}
         type="text"
         required="required"
         placeholder="Enter department"
         name="department"
         value={editFormData.department}
         onChange={handleEditFormChange}
       ></input>
     </td>
 
     <td>
       <input
         style={{width:"150px", backgroundColor: "#e5e5e5" , borderRadius:"4px", border:"1px solid #e5e5e5"}}
         type="email"
         required="required"
         placeholder="Enter email"
         name="email"
         value={editFormData.email}
         onChange={handleEditFormChange}
       ></input>
     </td>
     <td>
       <input
        style={{width:"110px", backgroundColor: "#e5e5e5" , borderRadius:"4px", border:"1px solid #e5e5e5"}}
         type="text"
         required="required"
         placeholder="Enter phone number"
         name="phoneNumber"
         value={editFormData.phoneNumber}
         onChange={handleEditFormChange}
       ></input>
     </td>
 
     <td>
       <input
        style={{width:"80px", backgroundColor: "#e5e5e5" , borderRadius:"4px", border:"1px solid #e5e5e5"}}
         type="text"
         required="required"
         placeholder="Enter role"
         name="role"
         value={editFormData.role}
         onChange={handleEditFormChange}
       ></input>
     </td>
 
    
     <td><button type="submit"><Text4>Save</Text4></button></td>
    <td><button type="button" onClick={handleCancelClick}><Text5>Cancel</Text5></button> </td>
 
     </tr>
     ) : (
        <tr key={contacting.id} style={{height:"70px"}}> 

        <td style={{paddingLeft:"10px",width:"5%"}}><label> <Text3>{contacting.id}</Text3></label></td>
          <td style={{paddingLeft:"10px",width:"15%"}} ><label><Text3>{contacting.fullName}</Text3></label></td>
          <td style={{paddingLeft:"10px",width:"7%"}}><label><Text3>{contacting.userId}</Text3></label></td>
          <td style={{paddingLeft:"10px",width:"15%"}}><label><Text3>{contacting.department}</Text3></label></td>
          <td style={{paddingLeft:"10px",width:"15.5%"}} ><label><Text3>{contacting.email}</Text3></label></td> 
          <td style={{paddingLeft:"10px",width:"15.5%"}}><label><Text3>{contacting.phoneNumber}</Text3></label></td>
          <td style={{paddingLeft:"10px",width:"7%"}}><label><Text3>{contacting.role}</Text3></label></td>

          <td style={{paddingLeft:"10px",width:"7%"}}  className="mr-3" onClick={(event) => handleEditClick(event, contacting)}>
          <div className="flex cursor-pointer flex-row gap-1 ">
          <Image1w src={`https://file.rendit.io/n/aIETGJBavFzwQQbRItRl.svg`} /> <Text3>Edit</Text3>
              </div> 
          </td>
          <td style={{paddingLeft:"15px",width:"7%"}} onClick={() => handleDeleteClick(contacting.id)}>
          <div className="flex cursor-pointer flex-row gap-1">
          <Image2w src={`https://file.rendit.io/n/QUmyxyKP3Y1qGXDYg88R.svg`} /> <Text3>Delete</Text3>
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
const Image2w = styled.img`
  width: 10px;
  height: 13px;
`;

const Text3 = styled.div`
  mix-blend-mode: normal;
  font-size: 17px;
  font-family: Roboto;
  line-height: 21px;
  color: #787878;
  text-align: left;
 
`;
export default ReadOnlyRow;

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





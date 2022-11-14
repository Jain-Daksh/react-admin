import React from 'react'

const Readable = ({value,handleEditClick ,handleDeleteClick}) => {
  return (
   
      <tr>
        <td>
          {value.first_name}
        </td>
        <td>
          {value.last_name}
        </td>
        <td>
          {value.email}
        </td>
        <td>
          {value.gender}
        </td>
        <td>
          <button type='button' onClick={(e) => handleEditClick(e , value)} >Edit</button>
        </td>
        
        <td>
          <button type='button' onClick={(e) => handleDeleteClick(e , value)} >delete</button>
        </td>
      </tr>
    
  )
}

export default Readable

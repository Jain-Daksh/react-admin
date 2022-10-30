import React from 'react'

const Read = ({value,handleEditClick ,handleDeleteClick}) => {
  return (
      <tr>
        <td>
          {value.name}
        </td>
        <td>
          {value.stockPrice}
        </td>
        <td>
          {value.ticker}
        </td>
        <td>
          {value.timeElapsed}
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

export default Read
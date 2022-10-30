import React from 'react'

const Read = ({value,handleEditClick}) => {
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
      </tr>
  )
}

export default Read
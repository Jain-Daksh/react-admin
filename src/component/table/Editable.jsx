import React from 'react'
import { useState } from 'react'

const Editable = ({editFormData ,handleEditFormChange} ) => {
  return (
    
      <tr>
        <td>
        <input type='text' name=' name' required='required' placeholder='Name' value={editFormData.name} onChange={ handleEditFormChange}/ >
        </td>
        <td>
        <input type='number' name='stockPrice' required='required' placeholder='Name' value={editFormData.stockPrice}onChange={ handleEditFormChange}/ >
        </td>
        <td>
        <input type='text' name='ticker' required='required' placeholder='Name' value={editFormData.ticker} onChange={ handleEditFormChange}/ >
        </td>
        <td>
        <input type='number' name='timeElapsed' required='required' placeholder='Name' value={editFormData.timeElapsed}onChange={ handleEditFormChange}/ >
        </td>
        <td><button type='submit'>save</button></td>
      </tr>
  )
}

export default Editable
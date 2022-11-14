// import React from 'react'
// import { useState } from 'react'

// const Editable = ({editFormData ,handleEditFormChange, handleCancelClick} ) => {
//   return (
    
//       <tr>
//         <td>
//         <input type='text' name=' name' required='required' placeholder='Name' value={editFormData.name} onChange={ handleEditFormChange}/ >
//         </td>
//         <td>
//         <input type='number' name='stockPrice' required='required' placeholder='Name' value={editFormData.stockPrice}onChange={ handleEditFormChange}/ >
//         </td>
//         <td>
//         <input type='text' name='ticker' required='required' placeholder='Name' value={editFormData.ticker} onChange={ handleEditFormChange}/ >
//         </td>
//         <td>
//         <input type='number' name='timeElapsed' required='required' placeholder='Name' value={editFormData.timeElapsed}onChange={ handleEditFormChange}/ >
//         </td>
//         <td>
//           <button type='submit'>save</button>
//           <button type='submit' onClick={handleCancelClick}>cancel</button>
//           </td>
//       </tr>
//   )
// }

// export default Editable


import React from 'react'

const Edit = ({editFormData ,handleEditFormChange, handleCancelClick}) => {
  return (
    <div>
       <tr>
        <td>
        <input type='text' name=' first_name' required='required' placeholder='first_name' value={editFormData.first_name} onChange={ handleEditFormChange}/ >
        </td>
        <td>
        <input type='text' name='last_name' required='required' placeholder='last_name' value={editFormData.last_name}onChange={ handleEditFormChange}/ >
        </td>
        <td>
        <input type='email' name='email' required='required' placeholder='email' value={editFormData.email} onChange={ handleEditFormChange}/ >
        </td>
        <td>
        <input type='text' name='gender' required='required' placeholder='gender' value={editFormData.gender}onChange={ handleEditFormChange}/ >
        </td>
        <td>
          <button type='submit'>save</button>
          <button type='submit' onClick={handleCancelClick}>cancel</button>
          </td>
      </tr>
    </div>
  )
}

export default Edit


     

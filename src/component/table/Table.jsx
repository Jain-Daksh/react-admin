// import React from 'react'
// import './table.css'
// import { stockData } from "./table";
// import useState from 'react';

// function Table() {


//   const [contacts, setContacts] = useState(useState)

//   return (
//     <div className='table'>
//       <table>
//         <thead>
//           <tr>
//             <th className='tableCell'>Name</th>
//             <th className='tableCell'>Address</th>
//             <th className='tableCell'>Phone Number</th>
//             <th className='tableCell'>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* {stockData.map((value) => (
//             <tr>
//               <td>
//                 {value.company}</td>
//             </tr>
//           ))} */}
//           {
//             contacts.map((value) => (
//               <tr>
//                 <td>
//                   {value.company}
//                 </td>
//               </tr>
//             ))
//           }
//         </tbody>
//       </table>

//     </div>
//   )
// }

// export default Table

// import React from 'react'
// import './table.css'
// import { stockData } from "./table";
// import useState from 'react';
// const Table = () => {
//   const [contacts, setContacts] = useState(useState)
//   return (
//     <div>
//         <table>
//         <thead>
//           <tr>
//             <th className='tableCell'>Name</th>
//             <th className='tableCell'>Address</th>
//             <th className='tableCell'>Phone Number</th>
//             <th className='tableCell'>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* {stockData.map((value) => (
//             <tr>
//               <td>
//                 {value.company}</td>
//             </tr>
//           ))} */}
//           {/* {
//             contacts.map((value) => (
//               <tr>
//                 <td>
//                   {value.company}
//                 </td>
//               </tr>
//             ))
//           } */}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default Table

// import { nanoid } from 'nanoid';
// import React from 'react'
// import { useState } from 'react'
// import stockData from "./table";
// import './table.css'
// const Table = () => {
//   const [stock, setStock] = useState(stockData)

//   const [addFormData, setAddFormData]= useState({
//     company: '',
//     stockPrice:'',
//     ticker:'',
//     timeElapsed:''
//   })

//   const handleaddform = (e) => {
//     e.preventDefault();

//     const fieldname = e.target.getAttribute('name')
//     const fieldvalue = e.target.value

//     const newformdata = {...addFormData};
//     newformdata[fieldname] = fieldvalue
//     setAddFormData(newformdata)
//   }

//   const handleformsubmit = (e) =>{
//     e.preventDefault()

//     const newstock = {
//       id: nanoid(),
//       name: addFormData.company,
//       stockPrice: addFormData.stockPrice,
//       ticker: addFormData.ticker,
//       timeElapsed: addFormData.timeElapsed
//     }

//     const newstocks = [...stock , newstock]
//     setStock(newstocks)
//   }
//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th className='tableCell'>Name</th>
//             <th className='tableCell'>Price</th>
//             <th className='tableCell'>ticker</th>
//             <th className='tableCell'>timeElapsed</th>
//           </tr>
//         </thead>
//         <tbody>
//           {stock.map((value) => (
//             <tr>
//               <td>
//                 {value.company}
//               </td>
//               <td>
//                 {value.stockPrice}
//               </td>
//               <td>
//                 {value.ticker}
//               </td>
//               <td>
//                 {value.timeElapsed}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h2>Add</h2>
//       <form onSubmit={handleformsubmit}>
//         <input type='text' name='company' required='required' placeholder='Name' onChange={handleaddform}/>
//         <input type='number' name='stockPrice' required='required' placeholder='stockPrice' onChange={handleaddform} />
//         <input type='text' name='ticker' required='required' placeholder='ticker' onChange={handleaddform} />
//         <input type='number' name='timeElapsed' required='required' placeholder='timeElapsed' onChange={handleaddform} />
//         <button >Add</button>
//       </form>
//     </div>
//   )
// }

// export default Table




import { nanoid } from 'nanoid';
import React, { Fragment } from 'react'
import { useState } from 'react'
import Editable from './Editable';
import Read from './Read';
import stockData from "./table";
import './table.css'
const Table = () => {
  const [stock, setStock] = useState(stockData)

  const [addFormData, setAddFormData] = useState({
    name: '',
    stockPrice: '',
    ticker: '',
    timeElapsed: ''
  })

  const handleaddform = (e) => {
    e.preventDefault();

    const fieldname = e.target.getAttribute('name')
    const fieldvalue = e.target.value

    const newformdata = { ...addFormData };
    newformdata[fieldname] = fieldvalue
    setAddFormData(newformdata)
  }

  const handleformsubmit = (e) => {
    e.preventDefault()

    const newstock = {
      id: nanoid(),
      name: addFormData.name,
      stockPrice: addFormData.stockPrice,
      ticker: addFormData.ticker,
      timeElapsed: addFormData.timeElapsed
    }

    const newstocks = [...stock, newstock]
    setStock(newstocks)
  }


  const [editFormData, setEditFormData] = useState({
    name: '',
    stockPrice: '',
    ticker: '',
    timeElapsed: ''
  })

  const handleEditFormChange = (e) => {
    e.preventDefault()
    const fieldname = e.target.getAttribute('name')
    const fieldvalue = e.target.value
    const newformdata = { ...editFormData };
    newformdata[fieldname] = fieldvalue
    setEditFormData(newformdata)
  }

  const [editStockId, setEditStockID] = useState(null)

  const handleEditClick = (e, value) => {
    e.preventDefault();
    setEditStockID(value.id)

    const formvalue = {
      name: value.name,
      stockPrice: value.stockPrice,
      ticker: value.ticker,
      timeElapsed: value.timeElapsed
    }
    setEditFormData(formvalue)
  }

  const handleEditFormSubmit = (e) => {
    e.preventDefault()
    const editedStock = {
      id: editStockId,
      name: editFormData.name,
      stockPrice: editFormData.stockPrice,
      ticker: editFormData.ticker,
      timeElapsed: editFormData.timeElapsed
    }
    //const newstocks = [...stock, editedStock]
    //const index = stock.findIndex(())
   // setEditFormData(newstocks)
    //setEditStockID(null)
    const newContacts = [...stock];

    const index = stock.findIndex((value) => value.id === editStockId);

    newContacts[index] = editedStock;
    setStock(newContacts)
    setEditStockID(newContacts)
  }
  return (
    <div>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th className='tableCell'>Name</th>
              <th className='tableCell'>Price</th>
              <th className='tableCell'>ticker</th>
              <th className='tableCell'>timeElapsed</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {stock.map((value) => (
              // <tr>
              //   <td>
              //     {value.company}
              //   </td>
              //   <td>
              //     {value.stockPrice}
              //   </td>
              //   <td>
              //     {value.ticker}
              //   </td>
              //   <td>
              //     {value.timeElapsed}
              //   </td>
              // </tr>
              <Fragment>
                {editStockId === value.id ? (<Editable editFormData={editFormData} handleEditFormChange={handleEditFormChange}/>) : (<Read value={value} handleEditClick={handleEditClick} />)}
              </Fragment>

            ))}
          </tbody>
        </table>
      </form>


      <h2>Add</h2>
      <form onSubmit={handleformsubmit}>
        <input type='text' name='name' required='required' placeholder='Name' onChange={handleaddform} />
        <input type='number' name='stockPrice' required='required' placeholder='stockPrice' onChange={handleaddform} />
        <input type='text' name='ticker' required='required' placeholder='ticker' onChange={handleaddform} />
        <input type='number' name='timeElapsed' required='required' placeholder='timeElapsed' onChange={handleaddform} />
        <button >Add</button>
      </form>
    </div>
  )
}

export default Table
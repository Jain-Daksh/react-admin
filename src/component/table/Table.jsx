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




// import { nanoid } from 'nanoid';
// import React, { Fragment } from 'react'
// import { useState } from 'react'
// import Editable from './Editable';
// import Read from './Read';
// import stockData from "./table";
// import ReactPaginate from 'react-paginate'

// import './pagination.css'

// import './table.css'
// const Table = () => {
//   const [stock, setStock] = useState(stockData.slice(0,6))
//   const [addFormData, setAddFormData] = useState({
//     name: '',
//     stockPrice: '',
//     ticker: '',
//     timeElapsed: ''
//   })

//   const handleaddform = (e) => {
//     e.preventDefault();

//     const fieldname = e.target.getAttribute('name')
//     const fieldvalue = e.target.value

//     const newformdata = { ...addFormData };
//     newformdata[fieldname] = fieldvalue
//     setAddFormData(newformdata)
//   }

//   const handleformsubmit = (e) => {
//     e.preventDefault()

//     const newstock = {
//       id: nanoid(),
//       name: addFormData.name,
//       stockPrice: addFormData.stockPrice,
//       ticker: addFormData.ticker,
//       timeElapsed: addFormData.timeElapsed
//     }

//     const newstocks = [...stock, newstock]
//     setStock(newstocks)
//   }


//   const [editFormData, setEditFormData] = useState({
//     name: '',
//     stockPrice: '',
//     ticker: '',
//     timeElapsed: ''
//   })

//   const handleEditFormChange = (e) => {
//     e.preventDefault()
//     const fieldname = e.target.getAttribute('name')
//     const fieldvalue = e.target.value
//     const newformdata = { ...editFormData };
//     newformdata[fieldname] = fieldvalue
//     setEditFormData(newformdata)
//   }

//   const [editStockId, setEditStockID] = useState(null)

//   const handleEditClick = (e, value) => {
//     e.preventDefault();
//     setEditStockID(value.id)

//     const formvalue = {
//       name: value.name,
//       stockPrice: value.stockPrice,
//       ticker: value.ticker,
//       timeElapsed: value.timeElapsed
//     }
//     setEditFormData(formvalue)
//   }

//   const handleEditFormSubmit = (e) => {
//     e.preventDefault()
//     const editedStock = {
//       id: editStockId,
//       name: editFormData.name,
//       stockPrice: editFormData.stockPrice,
//       ticker: editFormData.ticker,
//       timeElapsed: editFormData.timeElapsed
//     }
//     const newContacts = [...stock];
//     const index = stock.findIndex((value) => value.id === editStockId);
//     newContacts[index] = editedStock;
//     setStock(newContacts)
//     setEditStockID(newContacts)
//   }
//   const handleCancelClick = () => {
//     setEditStockID(null);
//   }; 

//   const handleDeleteClick = (stockID) => {
//     const newContacts = [...stock];
//     const index = stock.findIndex((stock) => stock.id === stockID);
//     newContacts.splice(index, 1);
//     setStock(newContacts);
//   };


//   /**pagination */
//   const [page, setPage] = useState(0)

//   const userperpage = 3
//   const pageVisited = page * userperpage

//   const pageCount = Math.ceil(stock.length / userperpage)
//   const changePage = ({selected}) => {
//     setPage(selected)
//   }
//   return (
//     <div>
//       <form onSubmit={handleEditFormSubmit}>
//         <table>
//           <thead>
//             <tr>
//               <th className='tableCell'>Name</th>
//               <th className='tableCell'>Price</th>
//               <th className='tableCell'>ticker</th>
//               <th className='tableCell'>timeElapsed</th>
//               <th className='tableCell'>Edit</th>
//               <th className='tableCell'>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {stock.map((value) => (
//               <Fragment>
//                 {editStockId === value.id ? (<Editable editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/>) : 
//                 (<Read value={value} handleEditClick={handleEditClick}   handleDeleteClick={handleDeleteClick} />)}
//               </Fragment>
//             ))}
//           </tbody>
//         </table>
//       </form>
//       <h2>Add</h2>
//       <form onSubmit={handleformsubmit}>
//         <input type='text' name='name' required='required' placeholder='Name' onChange={handleaddform} />
//         <input type='number' name='stockPrice' required='required' placeholder='stockPrice' onChange={handleaddform} />
//         <input type='text' name='ticker' required='required' placeholder='ticker' onChange={handleaddform} />
//         <input type='number' name='timeElapsed' required='required' placeholder='timeElapsed' onChange={handleaddform} />
//         <button >Add</button>
//       </form>
//     </div>
//   )
// }

// export default Table



import React from 'react'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import JsonData from '../MOCK_DATA.json'
import Edit from './Editable'
import Readable from './Read'
import { nanoid } from 'nanoid';
import './pagination.css'
import './table.css'
const Test = () => {

  const [users, setUsers] = useState(JsonData.slice(0, 21))

/*pagination */
  const [page, setPage] = useState(0)
  const userperpage = 5
  const pageVisited = page * userperpage
  const pageCount = Math.ceil(users.length / userperpage)
  const changePage = ({ selected }) => {
    setPage(selected)
  }


  /*form */
  const [addFormData, setAddFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    gender: ''
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

    const newUser = {
      id: nanoid(),
      first_name: addFormData.first_name,
      last_name: addFormData.last_name,
      email: addFormData.email,
      gender: addFormData.gender
    }
    const newUsers = [...users, newUser]
    setUsers(newUsers)
  }
/*edit */
  const [editFormData, setEditFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    gender: ''
  })
  const handleEditFormChange = (e) => {
    e.preventDefault()
    const fieldname = e.target.getAttribute('name')
    const fieldvalue = e.target.value
    const newformdata = { ...editFormData };
    newformdata[fieldname] = fieldvalue
    setEditFormData(newformdata)
  }
  const [editUserkId, setEditUserID] = useState(null)
  const handleEditClick = (e, value) => {
    e.preventDefault();
    setEditUserID(value.id)

    const formvalue = {
      first_name: value.first_name,
      last_name: value.last_name,
      email: value.email,
      gender: value.gender
    }
    setEditFormData(formvalue)
  }
  const handleEditFormSubmit = (e) => {
    e.preventDefault()
    const editedUser = {
      id: editUserkId,
      first_name: editFormData.first_name,
      last_name: editFormData.last_name,
      email: editFormData.email,
      gender: editFormData.gender
    }
    const newContacts = [...users];
    const index = users.findIndex((value) => value.id === editUserkId);
    newContacts[index] = editedUser;
    setUsers(newContacts)
    setEditUserID(newContacts)
  }
  const handleCancelClick = () => {
    setEditUserID(null);
  }; 
  /*delete */
  const handleDeleteClick = (stockID) => {
    const newContacts = [...users];
    const index = users.findIndex((users) => users.id === stockID);
    newContacts.splice(index, 1);
    setUsers(newContacts);
  };
  return (
    <div>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th className='tableCell'>first name</th>
              <th className='tableCell'>last name</th>
              <th className='tableCell'>email</th>
              <th className='tableCell'>gender</th>
              <th className='tableCell'>Edit</th>
              <th className='tableCell'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.slice(pageVisited, pageVisited + userperpage).map((value) => (
              <>
                {editUserkId === value.id ? (<Edit editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/>) : 
                (<Readable value={value} handleEditClick={handleEditClick}   handleDeleteClick={handleDeleteClick} />)}
              </>

            ))}
            <ReactPaginate
              previousLabel={"Previos"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName='paginationButton'
              previousLinkClassName='previousButton'
              nextLinkClassName='nextButton'
              activeClassName='activeButton'
            ></ReactPaginate>
          </tbody>
        </table>
      </form>
      <h1>Add data</h1>
      <form onSubmit={handleformsubmit}>
        <input type='text' name='first_name' required='required' placeholder='first_name' onChange={handleaddform} />
        <input type='text' name='last_name' required='required' placeholder='last_name' onChange={handleaddform} />
        <input type='email' name='email' required='required' placeholder='email' onChange={handleaddform} />
        <input type='text' name='gender' required='required' placeholder='gender' onChange={handleaddform} />
        <button >Add</button>
      </form>
    </div>
  )
}

export default Test
import React from 'react'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import JsonData from '../MOCK_DATA.json'
import Editable from '../table/Editable'
import Read from '../table/Read'
import Edit from './Edit'
import Readable from './Read'
import { nanoid } from 'nanoid';

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
                {/* {editStockId === value.id ? (<Edit/>) : 
                (<Readable value={value} />)} */}
                {/* <Readable value={value} /> */}
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
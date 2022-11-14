import React from 'react'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import JsonData from '../MOCK_DATA.json'
import './pagination.css'
const Pagination = () => {

  const [users, setUsers] = useState(JsonData.slice(0, 75))
  const [page, setPage] = useState(0)

  const userperpage = 5
  const pageVisited = page * userperpage

  const pageCount = Math.ceil(users.length / userperpage)
  const changePage = ({selected}) => {
    setPage(selected)
  }

  const DisplayUser = users.slice(pageVisited, pageVisited + userperpage).map(user => {
    return (
      <div>
        <h3>{user.first_name}</h3>

      </div>
    )
  })
  console.log(DisplayUser)
  return (
    <div>
      {DisplayUser}
      <ReactPaginate 
      previousLabel={"Previos"}
      nextLabel={"Next"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName='paginationButton'
      previousLinkClassName='previousButton'
      nextLinkClassName='nextButton'
      activeClassName='activeButton'
      >

      </ReactPaginate>
    </div>
  )
}

export default Pagination
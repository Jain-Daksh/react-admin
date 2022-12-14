import React from 'react'
import Nav from '../Navbar/Nav'
import Pagination from '../Pagination/Pagination'
import Sidebar from '../sidebar/sidebar'
import Table from '../table/Table'
import Test from '../test/Test'
import Widget from '../Widget/Widget'
import './home.css'
function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Nav />
        <div className="widgets">
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </div>
        <div className="listContainer">
          <div className="listTitle">All Users</div>
          <Table />
        </div>
        {/* <Pagination />
        <Test /> */}
      </div>

    </div>
  )
}

export default Home
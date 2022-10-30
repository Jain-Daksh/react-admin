// import React from 'react'
// // import { useAuth0 } from '@auth0/auth0-react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { Link } from "react-router-dom";
// import Signup from '../Signup/Signup';
// import { useEffect } from 'react';

// function Login() {
//   const handleSubmit = e => {
//     e.preventDefault();
//     Route.path(`/`)
//   }
//   // const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated, getAccessTokenSilently } = useAuth0()
//   return (
//     <div>
//        <form>
//         <label>
//           <p>Username</p>
//           <input type="text" />
//         </label>
//         <label>
//           <p>Password</p>
//           <input type="password" />
//         </label>
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//         <div>
//         <button onClick={loginWithPopup}>
//           login with popup 
//         </button>
//         </div>
//         <div>

//         <button onClick={logout} >Logout</button>
//         </div>
//       </form> 



//         <h3>user is {isAuthenticated ? "logged in" : "not logged in"}</h3>
//       {isAuthenticated && (
//         <pre className='text-start'>
//           {JSON.stringify(user, null, 2)}
//         </pre>
//       )}
//     </div>
//     // <div>
//     //   <div className="container">
//     //     <form onSubmit={handleSubmit}>
//     //       <div className='row'>
//     //         <h1>Login</h1>
//     //       </div>
//     //       <div className=''>
//     //         <div class="form-outline mb-4">
//     //           <input type="email" id="loginName" class="form-control" />
//     //           <label class="form-label" for="loginName">Email</label>
//     //         </div>
//     //         <br />
//     //         <div class="form-outline mb-4">
//     //           <input type="password" id="loginName" class="form-control" />
//     //           <label class="form-label" for="loginName">Password</label>
//     //         </div>
//     //       </div>
//     //       <button >Submit</button>
//     //     </form>
//     //   </div>
//     // </div>
//   )
// }

// export default Login



// // import React from 'react'
// // import styles from './login.css'; 

// // function Login() {
// //   return (
// //     <div>
// //       <div className={styles.loginpage}>
// //         <div className="form">
// //           <form className="register-form">
// //             <input type="text" placeholder="name" />
// //             <input type="password" placeholder="password" />
// //             <input type="text" placeholder="email address" />
// //             <button>create</button>
// //             <p className="message">Already registered? <a href="#">Sign In</a></p>
// //           </form>
// //           <form className="login-form">
// //             <input type="text" placeholder="username" />
// //             <input type="password" placeholder="password" />
// //             <button href='/'>login</button>
// //             <p className="message">Not registered? <a href="#">Create an account</a></p>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Login


import React from 'react'

function Login() {
  return (
    <div>Login</div>
  )
}

export default Login
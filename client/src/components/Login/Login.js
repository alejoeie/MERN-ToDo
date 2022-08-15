import React from 'react'
import './login.css'
function Login(props) {
    console.log(props)

    const logUser = (e) => {
        // e.preventDefault();
        // set(false);
        // console.log(notlogged);
        props.set(false);
        console.log(props.notlogged)

    }
  return (
    <div className="login-box">
  <h2>To Do Task Login</h2>
  <form>
    <div className="user-box">
      <input type="text" name="" required="" />
      <label>Usuario</label>
    </div>
    <div className="user-box">
      <input type="password" name="" required="" />
      <label>Contrasena</label>
    </div>
    <a href="#" onClick={logUser}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Ingresar
    </a>
  </form>
</div>
  )
}

export default Login

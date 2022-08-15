import React from 'react'

function Signup() {
  return (
    <div className="login-box">
  <h2>To Do Task Register</h2>
  <form>
    <div className="user-box">
      <input type="text" name="" required="" />
      <label>Ingrese su username.</label>
    </div>
    <div className="user-box">
      <input type="text" name="" required="" />
      <label>Ingrese su correo.</label>
    </div>
    <div className="user-box">
      <input type="password" name="" required="" />
      <label>Ingrese su contrasena.</label>
    </div>
    <div className="user-box">
      <input type="password" name="" required="" />
      <label>Confirme su contrasena.</label>
    </div>
    <a href="#">
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

export default Signup
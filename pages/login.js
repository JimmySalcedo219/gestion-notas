import React from "react"
import { useRouter } from "next/router"
import AuthService from '../servicios/auth'

export default function Login(props) {
    const router=useRouter()
    const onSubmit = async (event) => {
        try {
          event.preventDefault()
         
    
          const formData = new FormData(event.currentTarget)
          const data = Object.fromEntries(formData)    
          const usuario = data["usuario"]
          const pass = data["contraseña"] 

          const respuesta = await AuthService.login(usuario, pass)
          if (respuesta?.error) {
            alert(respuesta.error)
          }

          alert(JSON.stringify(respuesta))




          /*if (usuario === 'admin' && pass === 'admin') {
            alert('Bienvenido Admin!')
            router.replace('/admin')
          } else if (usuario === 'docente' && pass === 'docente') {
            alert('Bienvenido Docente!')
            router.replace('/docente')
          } else if (usuario === 'estudiante' && pass === 'estudiante') {
            alert('Bienvenido Estudiante!')
            router.replace('/estudiante')
          } else {
            alert('Usuario o contraseña invalida')
          }*/
    
          
        } catch (error) {
          alert(error)
        }
      }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={onSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Inicie Sesión</h3>
          <div className="form-group mt-3">
            <label>Usuario</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Digite su Usuario"
              name="usuario"
            />
          </div>
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Digite su Contraseña"
              name="contraseña"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" >
              Ingresar
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
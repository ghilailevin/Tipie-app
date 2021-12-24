import React, { useState} from "react";
import '../css/Login.css';

function post (input) {
    fetch('http://localhost:3001/login', {
        method: 'POST',
        body: JSON.stringify(input),
        headers:{
          'Content-Type': 'application/json',
        }
    })
}

const Login = () => {

    const [state, setState] = useState({
        userName: "",
        password: ""
    });

    //* SETEA LOS VALORES DEL INPUT EN UN ESTADO
    function handleChange(e){
        setState({...state, [e.target.name]: e.target.value})
    }

    function iniciarSesion(e){

        e.preventDefault()
        post(state)
    }

    return ( 
        <div className="containerPrincipal">
            <form onSubmit={iniciarSesion}>
                <div className="containerSecundario">
                <div className="form-group">
                    <label>Usuario: </label>
                    <br />
                    <input 
                    type="email"
                    className="form-control"
                    value={state.userName}
                    name='userName'
                    onChange={handleChange}
                    placeholder='Ingrese un correo ej. demo@tipieapp.com'
                    required/>
                    <br/>
                    <label>Contraseña: </label>
                    <br />
                    <input
                    type="password"
                    className="form-control"
                    value={state.password}
                    name='password'
                    onChange={handleChange}
                    required/>
                    <br />
                <button className="btn btn-primary">Iniciar Sesion</button>
                </div>
                </div>
            </form>
        </div>
    );
}

export default Login;
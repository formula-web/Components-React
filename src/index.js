import React, {Component, useState} from "react";
import { render} from 'react-dom';
import "./style.css";
import { FormularioR} from './FormularioR'
import { classnames } from './classnames'
import Table from './Tabla'

let nombre = "Paco";


class App extends Component {
    constructor (  ) {
      super(  );

    }
    render() {
      
      return (
        <div>
        {/*
        < Formulario  />
        < FormularioR />
        < Button  text="Botón" estilo='primary'></Button>
        < Counter />
        */}
        < Table />

        </div>
      );
    }
}

class Formulario extends Component {
  constructor ( props ) {
    super( props );
    this.state = { email:'', password:''};
  }
  actualizaCampo=(e, campo )=>{ 
    let estado = this.state;
    estado[campo]= e.target.value; 
    this.setState(estado); 
    console.log(campo,':',e.target.value) 
  }
  enviaFormulario =(e)=>{e.preventDefault(); console.log (this.state)}
  render() {
    return (
    <form>
       <input type='email'    placeholder='Email'    value={this.state.email} onChange={(e)=>this.actualizaCampo(e,'email')}  />
       <input type='password' placeholder='Password' value={this.state.password} onChange={(e)=>this.actualizaCampo(e,'password')} />
       <div>
       <button type='submit'  onClick={ (e)=>this.enviaFormulario(e)}> Iniciar Sesion</button>
       </div>
    </form>
    );
  }
}

function Button({ text, estilo }) {
  return (
    <button style={classnames['button'][estilo]} onClick={(e)=>enviaFormulario(e)}>
      {text}
    </button>
  )
}

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
    </div>
  )
}

render (<App/>, document.getElementById('root'));
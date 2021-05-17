import logo from './logo.svg';
import './App.css';
import MensajeArchivo from './MensajeArchivo.js';

const Mensaje =()=>{
return <h2>Esta es una app del curso</h2>

}

const App = () => {
  const mensaje = "Hola mundo desde variable"
  return (
    <div className="App">
     <h1>App 001 - arrancamos</h1>
     <br />
     <strong>Estamos trabajando en react</strong>
    <div>
    <Mensaje />
    <Mensaje />
    <Mensaje />
    <MensajeArchivo />
    <MensajeArchivo message='estamos trabajando en un curso' color='skyblue' /> 
    <MensajeArchivo message='de react' color='green'/> 
    </div>
    
    </div>
  );
}

export default App;

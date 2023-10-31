import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import logo from './images/Logo2_svg.svg';

function App() {
  return (
    <div className='app'>
      <div className='logo-contenedor'>
        <img src={logo} className='logo' alt='logotipo de la empresa' />
      </div>
      <div className='tareas-lista-principal'>
        <h1> Mis tareas </h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
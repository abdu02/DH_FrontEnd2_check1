import './App.css';
import { useState } from "react";
import planning from './planning.avif';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <h2>bem vindo a task manager!</h2>
        <h5>rola página para descobrir como funciona</h5>
        <div class="arrow-container animated fadeInDown">
        <div class="arrow-2">
        <i class="fa fa-angle-down"></i>
        </div><div class="arrow-1 animated hinge infinite zoomIn"></div>
        </div>
      </header>

      <body className="App-body">

        <div className="row">

        <div className="column">
          <div class="list-wrap">
            <p>A Task Manager é uma simples ferramenta <br/> para facilitar a visualização de tarefas</p>
            <div class="list">
              <div>Dê um nome a tarefa</div>
              <div>Dê uma breve descrição</div>
              <div>Dê uma data limite para finalizar</div>
              <div>Clica em submit e pronto!</div>
            </div>
          </div>
        </div>

        <div className="column1">
          <img src={planning} alt="planning" height={300} widht={300} />
        </div>

        </div>
    
      </body>
    
    </div>
  );
}

export default App;

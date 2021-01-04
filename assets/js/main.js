const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');


function criarli(){
  const li =  document.createElement('li');
  return li;
}

inputTarefa.addEventListener('keypress', (e)=>{
  if(e.keyCode === 13){
   if (!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
  }
});

function limpaInput(){
  inputTarefa.value ='';
  inputTarefa.focus();
}

function criarBotaoApagar(li){
  li.innerText += ' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar';
  // botaoApagar.classList.add('Apagar');
  botaoApagar.setAttribute('class', 'apagar');
  botaoApagar.setAttribute('title', 'Apagar esta tarefa');
  li.appendChild(botaoApagar);
}

function criarTarefa(textoInput){
  const li = criarli();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criarBotaoApagar(li);
  salvarTarefas();
}

btnTarefa.addEventListener('click',(e)=>{
  if(!inputTarefa.value) return;
  criarTarefa(inputTarefa.value); //valor digitado
});


document.addEventListener('click',(e)=>{
  const el = e.target;
  // console.log(el);
  if(el.classList.contains('apagar')){
    el.parentElement.remove();
    salvarTarefas();
    // console.log(el.parentElement);

  }
});

function salvarTarefas(){
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for (let tarefa of liTarefas ){
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
}

function adiconaTarefasSalvas(){
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);

  for(let tarefa of listaDeTarefas){
    criarTarefa(tarefa);
  }
}

adiconaTarefasSalvas();


// const inputTarefa = document.querySelector('.input-tarefa');
// const btnTarefa = document.querySelector('.btn-tarefa');
// const tarefas = document.querySelector('.tarefas');

// function criaLi() {
//   const li = document.createElement('li');
//   return li;
// }

// inputTarefa.addEventListener('keypress', function(e) {
//   if (e.keyCode === 13) {
//     if (!inputTarefa.value) return;
//     criaTarefa(inputTarefa.value);
//   }
// });

// function limpaInput() {
//   inputTarefa.value = '';
//   inputTarefa.focus();
// }

// function criaBotaoApagar(li) {
//   li.innerText += ' ';
//   const botaoApagar = document.createElement('button');
//   botaoApagar.innerText = 'Apagar';
//   // botaoApagar.classList.add('apagar');
//   botaoApagar.setAttribute('class', 'apagar');
//   botaoApagar.setAttribute('title', 'Apagar esta tarefa');
//   li.appendChild(botaoApagar);
// }

// function criaTarefa(textoInput) {
//   const li = criaLi();
//   li.innerText = textoInput;
//   tarefas.appendChild(li);
//   limpaInput();
//   criaBotaoApagar(li);
//   salvarTarefas();
// }

// btnTarefa.addEventListener('click', function() {
//   if (!inputTarefa.value) return;
//   criaTarefa(inputTarefa.value);
// });

// document.addEventListener('click', function(e) {
//   const el = e.target;

//   if (el.classList.contains('apagar')) {
//     el.parentElement.remove();
//     salvarTarefas();
//   }
// });

// function salvarTarefas() {
//   const liTarefas = tarefas.querySelectorAll('li');
//   const listaDeTarefas = [];

//   for (let tarefa of liTarefas) {
//     let tarefaTexto = tarefa.innerText;
//     tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
//     listaDeTarefas.push(tarefaTexto);
//   }

//   const tarefasJSON = JSON.stringify(listaDeTarefas);
//   localStorage.setItem('tarefas', tarefasJSON);
// }

// function adicionaTarefasSalvas() {
//   const tarefas = localStorage.getItem('tarefas');
//   const listaDeTarefas = JSON.parse(tarefas);

//   for(let tarefa of listaDeTarefas) {
//     criaTarefa(tarefa);
//   }
// }
// adicionaTarefasSalvas();

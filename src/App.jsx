import { useState } from 'react';
//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import './App.css';
import { auth } from './config/firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function App() {
  const [email, SetEmail] = useState('')
  const [senha, SetSenha] = useState('')
  
  const AutenticarComFirebase = async (evento) =>  {
   evento.preventDefault();
   try{
  await signInWithEmailAndPassword(auth, email, senha);
  alert('Autenticado com Sucesso!')
   }catch(err){
   alert('Algo deu errado!', err)
   }
  }
  
  return <>
  <main>
 <form onSubmit={AutenticarComFirebase()}>

<div className='main-div'>

  <h1 className='titulo'>Login Firebase</h1>

  <div className='containers'>
 <label className='options' htmlFor="e-mail">Email:</label>
<input
id="email"
name="e-mail"
type = "email"
value={email}
onChange={(event) => SetEmail(event.target.value)}
/>
</div>

<div className='containers'>
<label className='options' htmlFor="password">Senha:</label>
<input
id="password"
name="password"
type = "password"
value={senha}
onChange={(event) => SetSenha(event.target.value)}
/>
</div>

<div className='containe-button'>
<button className='button' onClick={AutenticarComFirebase}>Autenticar Usuário</button>
</div>

</div>
 </form>
  </main>
  
  </>;
}


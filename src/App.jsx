
import { useState } from 'react';
//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import './App.css';
import { auth } from './config/firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { SignJWT } from 'jose';


export default function App() {
  const navigation = useNavigate()
  const [email, SetEmail] = useState('')
  const [senha, SetSenha] = useState('')

  const AutenticarComFirebase = async (evento) => {

    evento.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, senha);

      const secretKey = new TextEncoder().encode('minhaChaveSecreta');

      const token = await new SignJWT({ user: 'admin' })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(secretKey);

      localStorage.setItem('token', token);


      alert('Autenticado com Sucesso!')
      navigation('/')
    } catch (err) {
      alert('Algo deu errado!', err)
    }
  }

  return <>
    <main>
      <form onSubmit={AutenticarComFirebase}>

        <div className='main-div'>

          <h1 className='titulo'>Login Firebase</h1>

          <div className='containers'>
            <label className='options' htmlFor="e-mail">Email:</label>
            <input
              id="email"
              name="e-mail"
              type="email"
              value={email}
              onChange={(event) => SetEmail(event.target.value)}
            />
          </div>

          <div className='containers'>
            <label className='options' htmlFor="password">Senha:</label>
            <input
              id="password"
              name="password"
              type="password"
              value={senha}
              onChange={(event) => SetSenha(event.target.value)}
            />
          </div>

          <div className='containe-button'>
            <button className='button'>Autenticar Usuário</button>
          </div>

        </div>
      </form>
      <Link to="/registrar">
        <p className="button-registrar">Não tenho conta!</p>
      </Link>
    </main>

  </>;
}


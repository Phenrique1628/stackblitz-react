import { auth } from './config/firebaseConfig'
import { createUserWithEmailAndPassword} from 'firebase/auth';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';




export default function Registra(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    const navigation = useNavigate()
    
    const handleRegister = async (e) => {
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth, email, senha);
            navigation('/login');
        }catch (erro) {
            alert('Erro ao cadastrar')
        }
    } 

    return(
    <main className='main-div-registra'>
        <h2 className='registra'>Registrar</h2>
        <form onSubmit={handleRegister}>
            <div className='containers'>
            <input 
            type="email" 
            placeholder="E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            </div>
            
            <div className='containers'>
            <input 
            type="password" 
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            />
            </div>
            <button className='button' type="submit">Registrar</button>
        </form>
    </main>
    );

}
import { useState } from 'react';
import wave from '../assets/bg-wave.png';

export default function PageCadastro(){
    const [senha, setSenha] = useState("");
    const [senhaConf, setSenhaConf] = useState("");
    const [error, setError] = useState("");

    const handleSignup = () =>{
        if (senha != senhaConf){
            setError("As senhas não são iguais!");
            return;
        }

        // mensagem para retornar erro quando uma conta já existir
        if(1 == 2){
            alert("Conta já existente!");
        }
             
    }
    return(

        <main className="min-h-[92vh]">
            <section className="pt-16  pb-[230px] relative"> 
                <img className=' h-[250px] w-full bottom-0 absolute bg-wave bg-cover bg-no-repeat'
                src={wave} />

                <div className="container mx-auto sm:px-28 px-8">
                    
                    <form action="#"
                    className="flex flex-col max-w-4xl bg-gray-100 py-5  lg:px-20 md:px-8 px-4  mx-auto  shadow-xl">
                        
                        <h1 className="text-center text-2xl pb-8 text-abem-900 font-semibold" >Cadastre-se</h1>

                        <div className="flex flex-row flex-wrap sm:justify-between justify-center">

                            {/* Inputs da esquerda do Form */}
                            <div className="flex flex-col md:w-[40%] sm:w-[100%] w-[80%]">

                                <input className="text-md text-abem-900 placeholder:text-abem-100 p-2 mb-6  bg-transparent border-solid border-b-2 outline-none border-abem-400 rounded-sm"
                                id="" type="text" placeholder="Nome Completo*" required />
                                
                                <input className="text-md text-abem-900 placeholder:text-abem-100 p-2 mb-6  bg-transparent border-solid border-b-2 outline-none border-abem-400 rounded-sm"
                                id="" type="text" placeholder="Nome da Mãe*" required />
                                
                                <input className="text-md text-abem-900 placeholder:text-abem-100 p-2 mb-6  bg-transparent border-solid border-b-2 outline-none border-abem-400 rounded-sm"
                                id="" type="text" placeholder="Endereço*" required />
                                
                                <input className="text-md text-abem-900 placeholder:text-abem-100 p-2 mb-6  bg-transparent border-solid border-b-2 outline-none border-abem-400 rounded-sm"
                                id="" type="email" placeholder="E-mail*" required />

                                <div className="flex flex-col mb-6">
                                    <input value={senha} onChange={(e) => [setSenha(e.target.value), setError("")]} className="text-md text-abem-900 placeholder:text-abem-100 p-2 mb-1  bg-transparent border-solid border-b-2 outline-none border-abem-400 rounded-sm"
                                    id="" type="password" placeholder="Crie sua senha*" required />
                                    <span className='text-sm text-red-400'>{error}</span>
                                </div>

                                <select className="text-md text-abem-400 p-2.5 mb-6  bg-transparent border-solid border-b-2 outline-none border-abem-400" required >
                                    <option disabled selected >Gênero*</option>
                                    <option>Homem Cis</option>
                                    <option>Mulher Cis</option>
                                    <option>Homem Trans</option>
                                    <option>Mulher Trans</option>
                                    <option>Não Binário</option>
                                    <option>Prefiro não dizer</option>
                                </select>
                                
                            </div>

                            {/* Inputs da direita do Form */}
                            <div className="flex flex-col md:w-[40%] w-[80%]">
                                <input className="text-md text-abem-900 placeholder:text-abem-100 p-2 mb-6  bg-transparent border-solid border-b-2 outline-none border-abem-400 rounded-sm"
                                id="" type="text" placeholder="Nome Social" />
                                
                                <input className="text-md text-abem-900 placeholder:text-abem-100 p-2 mb-6  bg-transparent border-solid border-b-2 outline-none border-abem-400 rounded-sm"
                                id="" type="text" placeholder="Data de Nascimento*" required />
                                
                                <input className="text-md text-abem-900 placeholder:text-abem-100 p-2 mb-6  bg-transparent border-solid border-b-2 outline-none border-abem-400 rounded-sm"
                                id="" type="text" placeholder="Cidade, estado*" required />

                                <input className="text-md text-abem-900 placeholder:text-abem-100 p-2 mb-6  bg-transparent border-solid border-b-2 outline-none border-abem-400 rounded-sm"
                                id="" type="text" placeholder="Celular*" required />
                                
                                <div className="flex flex-col mb-6">
                                    <input value={senhaConf} onChange={(e) => [setSenhaConf(e.target.value), setError("")]} className="text-md text-abem-900 placeholder:text-abem-100 p-2 mb-1  bg-transparent border-solid border-b-2 outline-none border-abem-400 rounded-sm"
                                    id="" type="password" placeholder="Confirme sua Senha*" required />
                                    <span className='text-sm text-red-400'> {error}</span>
                                </div>

                                <input className="text-md text-abem-900 placeholder:text-abem-100 p-2 mb-6  bg-transparent border-solid border-b-2 outline-none border-abem-400 rounded-sm"
                                id="" type="text" placeholder="CPF*" required />
                                
                            </div>
                        </div>

                    

                    <button onClick={handleSignup} className="text-md text-abem-900 font-semibold border-2 border-abem-900 w-28 my-6 mx-auto py-1 rounded-3xl hover:bg-abem-900 hover:text-gray-100 transition-all"
                    type="submit">Cadastrar</button>
                    </form>
                </div>               
                
                
                {/* <div className='h-[279px] w-full bottom-0 relative bg-wave bg-cover bg-no-repeat '></div> */}
            </section>
              
        </main>
    )
}
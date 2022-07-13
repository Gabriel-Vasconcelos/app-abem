// import Footer from "../components/Footer";
// import FormLogin from "../components/FormLogin";
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline'
import { Component } from 'react';

import { Link } from "react-router-dom";


export default class Login extends Component{
    
    // mostrar e esconder senha
    constructor(){
        super()
        this.state={
            showPassword: false,
        }
    }

    render (){
        return(
            <main className="min-h-[92vh] bg-loginImage bg-cover bg-no-repeat ">
                <div className="container mx-auto sm:px-28 px-4" >
                    <section className="pt-16">
                    
                        <form action="#" className="flex flex-col max-w-md bg-gray-100 lg:ml-auto lg:mr-0 mx-auto  py-10 sm:px-20 px-10 shadow-lg rounded-md">
                            <h1 className="text-center text-3xl pb-8 text-abem-900 font-semibold" >Login</h1>
                            
                            <label className="text-md text-abem-400 mb-1"
                            htmlFor="email">E-mail</label>
                            <input className="text-sm text-abem-900 placeholder:text-abem-100 p-2 mb-6  bg-transparent border-solid border-b-2 outline-none border-gray-400 rounded-sm"
                            id="email" type="email" placeholder="email@gmail.com" required />
                            
                            <label className="text-md text-abem-400 mb-1"
                            htmlFor="password">Senha</label>
                            <div className='flex justify-between pr-4 mb-6 border-solid border-b-2 border-gray-400 rounded-sm'>
                                <input className="w-fulltext-sm text-abem-900 placeholder:text-abem-100 p-2  bg-transparent outline-none" 
                                d="password" type={this.state.showPassword ? "text" : "password"} placeholder="*******" required />

                                <button type='button'
                                    onClick={() => this.setState({showPassword: !this.state.showPassword})}
                                >
                                    {this.state.showPassword 
                                        ? <EyeOffIcon strokeWidth="2" className='h-6 text-abem-400'/>
                                        : <EyeIcon strokeWidth="2" className='h-6 text-abem-400'/>
                                    }
                                    
                                    
                                </button>
                            </div>
                            
                            
                            
                            <button className="text-lg text-abem-900 font-semibold border-2 border-abem-900 w-28 my-6 mx-auto py-1 rounded-3xl hover:bg-abem-900 hover:text-gray-100 transition-all"
                            type="submit">Entrar</button>
                            
                            <div className="mx-auto text-center">
                                <p className="text-sm text-abem-900 font-semibold">Não possui conta?</p>
                                <Link to="/cadastro" className="underline text-sm text-abem-900 hover:text-abem-400 transition-colors font-semibold uppercase ">cadastre-se</Link>
                            </div>
                        </form>
                    </section>
                </div>
                
            </main>
        )
    }
}
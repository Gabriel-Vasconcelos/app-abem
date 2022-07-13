import { Link } from "react-router-dom";

export default function FormLogin(){
    return(
        <section className="pt-16">
            
            <form action="#" className="flex flex-col max-w-md bg-gray-100 lg:ml-auto lg:mr-0 mx-auto  py-10 sm:px-20 px-10 shadow-xl">
                <h1 className="text-center text-3xl pb-8 text-abem-900 font-semibold" >Login</h1>
                
                <label className="text-md text-abem-400 mb-1"
                htmlFor="email">E-mail</label>
                <input className="text-sm text-abem-900 placeholder:text-abem-100 p-2 mb-6  bg-transparent border-solid border-b-2 outline-none border-gray-400 rounded-sm"
                id="email" type="email" placeholder="yannotaku@gmail.com" required />
                
                <label className="text-md text-abem-400 mb-1"
                htmlFor="password">Senha</label>
                <input className="text-sm text-abem-900 placeholder:text-abem-100 p-2 mb-6  bg-transparent border-solid border-b-2 outline-none border-gray-400 rounded-sm"
                id="password" type="password" placeholder="*******" required />
                
                <button className="text-lg text-abem-900 font-semibold border-2 border-abem-900 w-28 my-6 mx-auto py-1 rounded-3xl hover:bg-abem-900 hover:text-gray-100 transition-all"
                type="submit">Entrar</button>
                
                <div className="mx-auto text-center">
                    <p className="text-sm text-abem-900 font-semibold">Não possui conta?</p>
                    <Link to="/cadastro" className="underline text-sm text-abem-900 hover:text-abem-400 transition-colors font-semibold uppercase ">cadastre-se</Link>
                </div>
            </form>
        </section>
    )
}
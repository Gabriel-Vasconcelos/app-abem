import Requests from "../components/Requests";
import wave from '../assets/bg-wave.png';

import RequestsProgress from "../components/RequestsProgress";

export default function PageAtendente(){
    return(
        <main className="pt-12">
            <div className="container mx-auto lg:px-28 px-16  grid grid-cols-12 gap-8">
                {/* SOLICITAÇÕES */}
                <div className="lg:col-span-8 col-span-12">

                    {/* BARRA DE PESQUISA */}
                    <section className="flex items-center justify-between w-full h-[50px] shadow-lg bg-gray-100 rounded-lg mb-8">
                        <input className="p-4 text-sm text-abem-900 placeholder:text-abem-100  w-[90%]  bg-transparent outline-none"
                        type="search" name="" id=""  placeholder="Procurar"/>
                        
                        <button className=" py-3 px-3 bg-abem-100 bg-opacity-50 hover:bg-opacity-100 transitions-all group relative rounded-r-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                className=" text-abem-900 h-7 relative m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </section>
        
                    {/* CAMPO DE SOLICITAÇÕES */}
                    <section className="">
                        <h2 className="mb-3 text-3xl text-abem-900 font-semibold" >
                            Solicitações
                        </h2>
                        <div className="space-y-8 overflow-auto lg:h-[400px] h-[600px] text-center min-w-2xl max-w-3xl bg-gray-100 py-5 px-10 shadow-lg rounded-md "> 
                            <Requests id="1" typeService="Saúde" name="Gabriel Vieira"
                            date="14/05/2022" hours="8:30" desc="A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção "/>
                            
                            
                            
                        
                        </div>
                </section>

                    
                </div>

                {/* SOLICITAÇÕES EM ANDAMENTO */}
                <div className="lg:col-span-4 col-span-12">
                    <section className="space-y-6 h-[540px] overflow-auto min-w-md max-w-xl bg-gray-100 py-5 px-8 shadow-lg rounded-md">
                        <h2 className="mb-8 text-3xl text-abem-900 font-semibold text-center" >
                            Solicitações <br/> em andamento
                        </h2>
                        
                        {/* Items do Solicitação em Andamento components > RequestsProgress */}
                        <div className="space-y-10">
                            <RequestsProgress name="Joana Raabe" date="18/05/2022" hours="15:30"/>
                         

                        </div>
                    </section>
                </div>

            </div>

            <img className=' h-[240px] w-full bottom-0 relative bg-wave bg-cover bg-no-repeat'
                src={wave} />    
        </main>
    )
}
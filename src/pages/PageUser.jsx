import Modal from 'react-modal';
import {useState} from 'react';

import { Link } from "react-router-dom";

import wave from '../assets/bg-wave.png';
import ServicesUsers from "../components/ServicesUsers";


Modal.setAppElement('#root');

export default function PageUser(){
    const [modalIsOpen, setIsOpen] = useState(false);
    const [exitlIsOpen, setExitOpen] = useState(false);

    function handleOpenModal(){
        setIsOpen(true);
    }

    function handleCloseModal(){
        setIsOpen(false);
    }

    // Botão Sair
    function handleOpenExit(){
        setExitOpen(true);
    }

    function handleCloseExit(){
        setExitOpen(false);
    }

    return(
        <main className="pt-12">
            <div className="container mx-auto sm:px-28 px-4   grid grid-cols-12 ">
                
                {/* PERFIL */}
                <div className="lg:col-span-4 col-span-12">
                    <section className="text-center">
                        <h2 className="text-3xl text-abem-900 font-semibold" >
                            Meu Perfil
                        </h2>
                        
                        <Link to="/editar-cadastro" className="underline text-xs text-center text-abem-400 hover:text-abem-100 transition-colors font-normal ">
                            Editar Cadastro
                        </Link>

                        <h3 className="mt-3 text-sm text-abem-900 font-semibold">Seja bem-vinda(o), <br/> Maria Tereza!</h3>

                        <button onClick={handleOpenExit}
                        className="text-lg text-abem-900 font-semibold border-2 border-abem-900 w-28 mt-6 mx-auto py-1 rounded-3xl hover:bg-abem-900 hover:text-gray-100 transition-all"
                        type="button">Sair</button>
                    </section>

                </div>
                {/* /PERFIL */}

                {/* SERVIÇOS SOLICITAÇÕES && AGENDAMENTOS*/}
                <div className="lg:col-span-8 col-span-12">
                    <section className="lg:mt-0 mt-8">
                        <h2 className="mb-2 text-3xl text-abem-900 font-semibold" >
                            Serviços
                        </h2>

                        <div className="text-center min-w-sm max-w-md bg-gray-100 py-5 px-10 shadow-lg rounded-md">
                            <h3 className="text-2xl text-abem-900 font-semibold" >
                                Faça sua Solicitação
                            </h3>
                            
                            <button onClick={handleOpenModal} 
                                className="text-lg text-abem-900 font-semibold border-2 border-abem-900 w-32 my-6 mx-auto py-1 rounded-3xl hover:bg-abem-900 hover:text-gray-100 transition-all"
                                type="button">Solicitar</button>
                        </div>
                    </section>

                    <section className="mt-8">
                        <h2 className="mb-3 text-3xl text-abem-900 font-semibold" >
                            Solicitações Enviadas
                        </h2>
                        <div className="space-y-6 min-h-[400px] text-center min-w-2xl max-w-3xl bg-gray-100 py-5 px-10 shadow-lg rounded-md "> 
                            <ServicesUsers typeService="Saúde" service="Raio-X da Coluna"
                            date="14/05/2022" hours="8:30"/>
                            <ServicesUsers typeService="Saúde" service="Raio-X da Coluna"
                            date="14/05/2022" hours="8:30"/>
                        
                        </div>
                    </section>

                </div>
                {/* /SERVIÇOS SOLICITAÇÕES && AGENDAMENTOS*/}



                {/* SERVIÇOS AGENDADOS*/}
                {/* <section className="col-span-12 mt-8">
                    <h2 className="mb-3 text-3xl text-abem-900 font-semibold" >
                        Serviços Agendados
                    </h2>
                    <div className="space-y-6 text-center min-w-2xl max-w-3xl bg-gray-100 py-5 px-10 shadow-lg rounded-md "> 
                        <Services typeService="Saúde" service="Raio-X da Coluna"
                        date="14/05/2022" hours="8:30"/>
                    </div>
                </section> */}
                {/* /SERVIÇOS SOLICITAÇÕES*/}

            </div>

            <img className=' h-[240px] w-full bottom-0 relative bg-wave bg-cover bg-no-repeat'
                src={wave} />







            {/* MODAL DO BOTÃO 'SOLICITAR' */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}

                shouldCloseOnEsc={true}

                className="flex justify-center items-center h-screen overflow-auto"
                >
                <section className="bg-abem-900 flex flex-col max-w-[450px] w-[70%] min-h-[400px] px-8 pt-4 pb-2 rounded space-y-4" >
                    
                    <h2 className="text-center text-3xl text-gray-100 font-semibold" >
                        Solicitação
                    </h2>

                    <div className="space-y-2">
                        <h2 className="text-xl text-gray-100 font-semibold" >
                            Instruções
                        </h2>
                        <p className='leading-tight text-gray-100 font-medium'>Escolha sua área de serviço e descreva brevemente seu problema nos campos abaixos e em 
                            seguida sua mensagem será encaminhada para uma de nossas atendentes
                        </p>
                    </div>

                    <div className='space-y-2'>
                        
                        <h3 className="text-xl text-gray-100 font-semibold">
                            Área de Serviço:
                        </h3>
                        
                        <div className='space-x-2 flex items-center'>
                            <input id='juridico' className='w-5 h-5' type="radio" name="service"/>
                            <label for="juridico" className='text-gray-100 font-medium'>Jurídico</label>
                            
                            <input id="saude" className='w-5 h-5' type="radio" name="service" />
                            <label for="saude" className='text-gray-100 font-medium'>Saúde</label>
                        </div>
                    </div>
                    
                    <div className='space-y-2'>
                        <label>
                        <h3 className="text-xl text-gray-100 font-semibold">
                            Motivo da Solicitação:
                        </h3>
                        </label>
                        <textarea className="text-sm text-abem-900 placeholder:text-abem-400 outline-none w-full bg-gray-100 p-4 rounded-lg resize-none" name="area" id="" rows="1" placeholder='Exemplo: Pensão Alimentícia, Ultrassom' required></textarea>
                    </div>

                    <div className='space-y-2'>
                        <label>
                        <h3 className="text-xl text-gray-100 font-semibold">
                            Detalhe sua Solicitação:
                        </h3>
                        </label>
                        <textarea className="text-sm text-abem-900 placeholder:text-abem-400 outline-none w-full bg-gray-100 p-4 rounded-lg resize-none" name="area" id="" rows="3" placeholder='Exemplo: Estou com dificuldade de conseguir a pensão alimentícia, gostaria de saber como proceder...' required></textarea>
                    </div>

                    
                    
                    
                    <div className='flex space-x-8 justify-center'>
                        <button className="text-lg text-gray-100 font-semibold border-2 border-gray-100 w-32 my-4 py-1 rounded-3xl hover:bg-gray-100 hover:text-abem-900 transition-all"
                            type="button">Enviar</button>

                    
                        <button onClick={handleCloseModal} className="text-lg text-gray-100 font-semibold border-2 border-gray-100 w-32 my-4 py-1 rounded-3xl hover:bg-gray-100 hover:text-abem-900 transition-all"
                            type="button">Voltar</button> 
                    </div>                           
                </section>
            </Modal>


            {/* MODAL DO BOTÃO 'SAIR' */}

            <Modal
                isOpen={exitlIsOpen}
                onRequestClose={handleCloseExit}

                shouldCloseOnEsc={true}

                className="flex justify-center items-center h-screen overflow-hidden"
                >
                <section className="bg-abem-900 flex flex-col max-w-[450px] w-[70%] px-8 py-6 rounded space-y-4" >
                    
                    <h2 className="text-center text-xl text-gray-100 font-semibold" >
                        Você realmente quer sair?
                    </h2>
              
                    
                    <div className='flex space-x-8 justify-center'>
                        <button className="text-lg text-gray-100 font-semibold border-2 border-gray-100 w-24 my-4 py-1 rounded-3xl hover:bg-gray-100 hover:text-abem-900 transition-all"
                            type="button">Sim</button>

                    
                        <button onClick={handleCloseExit} className="text-lg text-gray-100 font-semibold border-2 border-gray-100 w-24 my-4 py-1 rounded-3xl hover:bg-gray-100 hover:text-abem-900 transition-all"
                            type="button">Não</button> 
                    </div>                           
                </section>
            </Modal>
        </main>
    )
}
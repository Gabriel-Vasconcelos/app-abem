import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import wave from '../assets/bg-wave.png';
import { useState} from 'react';

export default function PageDuvidas(){
    // ARRAY COM O FAQ
    const data =[
        {
            title: "Documentos necessários para realizar um exame:",
            content: "RG, CPF, Comprovante de endereço, Cartão SUS, Pedido Médico."
        },

        {
            title: "Realizam pagamentos de contas pessoais (água, luz, gás, material de construção, etc)? ",
            content: "Não realizamos, nosso foco é a saúde."
        },

        {
            title: "O que precisa para atualizar uma certidão de nascimento, casamento ou óbito?",
            content: "Precisa-se dos documentos pessoais(Rg, CPF, comprovante de endereço e telefone) e da certidão antiga."
        },

        {
            title: "O que fazemos do lado jurídico?",
            content: "Área familiar (Divórcio, aposentadoria, pensão alimentícia, INSS…), Área criminal (trata diretamente com o advogado)."
        },

        {
            title: "Quais os dias de atendimento:",
            content: "De segunda à sexta, de 8h às 12, de 13h às 17h."
        },

        {
            title: "Documentos necessários para realizar um exame:",
            content: "R: RG, CPF, Comprovante de endereço, Cartão SUS, Pedido Médico."
        },
    ]


    // FUNÇÃO PARA MOSTRAR OU OCULTAR O ACCORDION
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if(selected == i){
            return setSelected(null);
        }

        setSelected(i);
    }

    return(
        <main className="pt-12">
            <div className="container mx-auto sm:px-28 px-4  ">
                <h2 className="text-3xl text-abem-900 font-semibold text-center" >
                    Dúvidas Frequentes
                </h2>
            

                <section className="w-full h-full ">
                    <div className='space-y-12 lg:space-y-0 flex justify-around items-center flex-wrap  mb-16 xl:mt-0 mt-12 '>
                     
                        {data.map((item, i) =>(
                            <div className=" lg:pt-12 min-w[60%] w-[300px] border-solid border-b-2 px-2 pb-4  border-abem-400 ">
                                <div className='flex space-x-2'>
                                    <span className = "bg-abem-900 w-10 h-10 p-4 flex justify-center items-center text-gray-100 text-lg rounded-3xl"> {i+1} </span>
                                    <h2 className="text-abem-900 font-semibold">{item.title}</h2>
                                    
                                </div>
                                <p 
                                    className={selected == i ? 'text-abem-900 pl-6 mt-4 text-md' : 'text-abem-900 pl-6 mt-4 text-md hidden'}
                                >
                                    {item.content}
                                </p>

                                <span onClick={() => toggle(i)} className="mt-4 flex justify-end items-end cursor-pointer">
                                    {selected == i 
                                        ? <ChevronUpIcon className='h-5 text-abem-900'/>
                                        : <ChevronDownIcon className='h-5 text-abem-900 '/>
                                    }
                                </span>
                            </div>
                        ))}  

                        

                        


                    </div>


                </section>

                <form action="#" className="flex flex-col flex-wrap min-w-[60%] max-w-3xl bg-gray-100 mx-auto mt-8 pb-10 pt-4 px-10 shadow-lg rounded-lg">
                    <h1 className="text-center text-3xl mb-8 text-abem-900 font-semibold" >Outras dúvidas</h1>
                    
                    <div className="flex flex-wrap justify-between">
                        <input className="text-md text-abem-900 placeholder:text-abem-400 p-2 mb-6  bg-transparent border-solid border-b-2 outline-none border-gray-400 rounded-sm"
                        id="nome" type="text" placeholder="Nome Completo" required />

                        <input className="text-md text-abem-900 placeholder:text-abem-400 p-2 mb-6  bg-transparent border-solid border-b-2 outline-none border-gray-400 rounded-sm"
                        id="email" type="email" placeholder="Digite seu E-mail" required />
                    </div>

                    <input className="text-md text-abem-900 placeholder:text-abem-400 p-2 my-8  bg-transparent border-solid border-b-2 outline-none border-gray-400 rounded-sm"
                    id="email" type="email" placeholder="Mande sua Dúvida" required />
                    
                    
                    
                    
                    <button className="text-lg text-abem-900 font-semibold border-2 border-abem-900 w-28 mx-auto py-1 rounded-3xl hover:bg-abem-900 hover:text-gray-100 transition-all"
                    type="submit">Enviar</button>
                    
                    
                </form>
            </div>
            
            <img className=' h-[240px] w-full bottom-0 relative bg-wave bg-cover bg-no-repeat'
            src={wave} />

        </main>
    )
}
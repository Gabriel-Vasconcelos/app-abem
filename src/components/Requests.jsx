export default function Requests(props){
    const id = props.id;

    return (
        <div className="pb-8 flex flex-col space-y-6 text-md text-abem-900 p-3 border-solid border-abem-100 border-b-2">
        <div className="flex lg:flex-row lg:justify-between  flex-col  lg:space-y-0 space-y-4">
            <div className="flex flex-col  lg:flex-row lg:space-x-6 ">
                    <span className="hover:bg-gray-200 p-2 rounded-lg">{props.typeService}</span>
                    <span className="hover:bg-gray-200 p-2 rounded-lg">{props.name}</span>
                </div>

                <div className="flex flex-col lg:flex-row lg:space-x-6 ">
                    <span className="hover:bg-gray-200 p-2 rounded-lg">{props.date}</span>
                    <span className="hover:bg-gray-200 p-2 rounded-lg">{props.hours}</span>

                    {/* <label htmlFor={props.key} className="hover:bg-gray-200 p-2 rounded-3xl cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                        <input id={props.key} type="checkbox" className="absolute opacity peer" />
                    </label> */}
                    
                </div>
           </div>

            <div className="flex lg:justify-between lg:flex-row flex-col lg:space-y-0 space-y-4">
                <span className="hover:bg-gray-200 p-2 rounded-lg w-full lg:w-[60%] text-justify">{props.desc}</span>
                
                <div className="flex flex-col  space-y-4" >
                    <span className="font-semibold">Remover a solicitação</span>
                    
                    <div className="flex justify-center space-x-8">
                        <button className="text-sm text-abem-900 font-semibold border-2 border-abem-900 w-16 py-2 rounded-3xl hover:bg-abem-900 hover:text-gray-100 transition-all"
                        type="" >Sim</button>
                        <button className="text-sm text-abem-900 font-semibold border-2 border-abem-900 w-16 py-2 rounded-3xl hover:bg-abem-900 hover:text-gray-100 transition-all"
                        type="">Não</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
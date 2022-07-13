export default function Requests(props){
    return (
        <>
            <div className="lg:flex lg:justify-between lg:gap-y-0 grid grid-cols-12  gap-y-10 text-md text-abem-400 p-3 border-solid border-abem-100 border-b-2  transition-all">
                <div className="lg:col-span-5 lg:gap-y-0  col-span-12 grid grid-cols-12 gap-y-2 ">
                    <span className="lg:col-span-6  col-span-12">{props.typeService}</span>
                    <span className="lg:col-span-6  col-span-12">{props.name}</span>
                </div>
                <div className="lg:col-span-5 lg:gap-y-0 col-span-12 grid grid-cols-12 gap-y-2">
                    <span className="lg:col-span-6  col-span-12 ">{props.date}</span>
                    <span className="lg:col-span-6  col-span-12 ">{props.hours}</span>
                </div>

                
                <label className="lg:col-span-2 col-span-12 lg:mx-0 mx-auto hover:bg-gray-200 p-2 rounded-3xl cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>

                    <input type="checkbox" className="absolute opacity-0 peer" />
                </label>
                
                <div className="col-span-12 grid grid-cols-12 max-h-0 peer-checked:mx-h-screen">
                    <div className="lg:col-span-6 lg:gap-y-0  col-span-12 grid grid-cols-12 gap-y-2 ">
                        <span className="col-span-12">{props.desc}</span>
                    </div>
                </div>

            </div>
        </>
        
    )
}
export default function ServicesUsers(props){
    return (
        <>
        <div className="md:flex md:justify-between md:gap-y-0 grid grid-cols-12  gap-y-10 text-md text-abem-400 p-3 border-solid border-abem-100 border-b-2 hover:bg-gray-200 transition-all">
            <div className="md:col-span-6 md:gap-y-0  col-span-12 grid grid-cols-12 gap-y-2 ">
                <span className="md:col-span-6  col-span-12">{props.typeService}</span>
                <span className="md:col-span-6  col-span-12">{props.service}</span>
            </div>
            <div className="md:col-span-6 md:gap-y-0 col-span-12 grid grid-cols-12 gap-y-2">
                <span className="md:col-span-6  col-span-12 ">{props.date}</span>
                <span className="md:col-span-6  col-span-12 ">{props.hours}</span>
            </div>
        </div>
        </>
        
    )
}
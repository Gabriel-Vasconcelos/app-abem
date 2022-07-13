export default function RequestsProgress(props){
    return(
        <div className="hover:bg-gray-200 p-4 rounded-lg flex flex-col w-[85%] relative mx-auto space-y-1.5  text-md text-abem-400">
            <span>{props.name}</span>
            <div className="flex justify-between">
                <span>{props.date}</span>
                <span>{props.hours}</span>
            </div>
        </div>
    )
}
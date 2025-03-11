const SalesValueCard = ({icon, title, description}) => {
    return (
        <div className="flex items-center justify-center gap-6 border-b-2 border-black md:border-none pb-6 w-[22rem]">
                            <div className="p-4 border-2 border-black grid place-items-center rounded-full ">
                                {icon}
                            </div>
                            <div className="flex flex-col gap-1">
                                <h1 className="font-bold tracking-wider text-xl">
                                    {title}
                                </h1>
                                <p>
                                   {description}
                                </p>
                            </div>
                    </div>
    )
}
export default SalesValueCard;
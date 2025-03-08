import Image from "next/image";
const LandingProductCard = ({imgSrc, isNew = false, colorChoice, tiitle, price}) => {
    return (
        <>
        <div className="col-span-1 flex flex-col gap-4">
            <div className="h-[28rem] relative hover:-translate-y-6 transition">
                <Image src={imgSrc} className="h-[28rem] object-cover object-center object-top rounded-md shadow" width={1000} height={1000} alt="models1"/>
                <div className="w-full h-full absolute inset-0 grid items-end p-4">
                    {
                            isNew && (
                            <span className="bg-white w-fit px-2 py-0.5 text-sm">
                            NEW
                            </span>
                            )
                    }
                </div> 
            </div>
            <p className="text-center tracking-wider text-sm font-light ">{tiitle}</p>
            {
                colorChoice
            }
            <p className="text-center tracking-widest text-sm font-light ">{price}</p>
        </div>
        </>
    )
}
export default LandingProductCard;
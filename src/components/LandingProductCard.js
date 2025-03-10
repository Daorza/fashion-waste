import Image from "next/image";

const LandingProductCard = ({ imgSrc, isNew = false, colors = [], title, price }) => {
    // Daftar warna yang bisa dipilih
    const availableColors = ["Hitam", "Putih", "Biru"];

    return (
        <div className="col-span-1 flex flex-col gap-4">
            <div className="h-[28rem] relative hover:-translate-y-6 transition">
                <Image 
                    src={imgSrc} 
                    className="h-[28rem] object-cover object-top rounded-md shadow" 
                    width={1000} height={1000} 
                    alt={title} 
                />
                <div className="w-full h-full absolute inset-0 grid items-end p-4">
                    {isNew && <span className="bg-white w-fit px-2 py-0.5 text-sm">NEW</span>}
                </div>
            </div>
            <p className="text-center tracking-wider text-sm font-light">{title}</p>

            {/* Pilihan Warna */}
            <div className="flex justify-center gap-2">
                {availableColors.map((color) => (
                    <span
                        key={color}
                        className={`h-4 w-4 rounded-full ${
                            color === "Hitam" ? "bg-black" : 
                            color === "Putih" ? "bg-white border border-gray-300" : 
                            "bg-blue-500"
                        } ${colors.includes(color) ? "cursor-pointer" : "opacity-50 cursor-not-allowed"}`}
                    ></span>
                ))}
            </div>

            <p className="text-center tracking-widest text-sm font-light">{price}</p>
        </div>
    );
};

export default LandingProductCard;

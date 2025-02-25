import Image from "next/image";

export default function Home() {
    return (
       <div>
            <div className="w-full h-[28rem] relative">
                    <Image src={"/images/background-content.jpg"} alt="gambar fashion" width={1000} height={1000} priority className="w-full h-[28rem] object-cover object-top"></Image>
                    <div className="w-full h-[28rem] inset-0 absolute grid place-items-center black-transparent-background">
                        <h1 className="font-bold text-5xl font-sans tracking-widest text-white">
                            WELCOME
                        </h1>
                    </div>
            </div>
       </div>
    )
}
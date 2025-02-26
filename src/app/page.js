import Image from "next/image";

export default function Home() {
    return (
       <div>
            <div className="w-full  h-dvh relative">
                    <Image src={"/images/background-content.jpg"} alt="gambar fashion" width={1000} height={1000} priority className="w-full h-dvh object-cover object-top"></Image>
                    <div className="w-full h-dvh inset-0 absolute grid  items-center justify-end black-transparent-background">
                        <div className="flex flex-col gap-4 me-32">
                            <h1 className="font-bold text-4xl font-sans tracking-widest text-white uppercase text-right">
                                impactfull fashion
                            </h1>
                            <h2 className="text-white text-md uppercase tracking-widest font-medium text-right">
                                Sustainable | Reduceable | Reuseable 
                            </h2>
                        <a href="/" className=" px-8 py-2 bg-graphite text-white text-md rounded-md shadow font-semibold uppercase tracking-widest w-fit ">See all products</a>
                        </div>
                    </div>
            </div>
       </div>
    )
}
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import SalesValueCard from "../components/SalesValueCard";
import LandingProductCard from "../components/LandingProductCard";
const Home = () => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        // Trigger animasi setelah komponen dimuat
        setIsAnimated(true);
    }, []);

    return (
            <div className="flex flex-col items-center justify-center">
                {/* Section 1: Hero Background */}
                <div className="w-full h-dvh relative overflow-hidden">
                    <Image
                        src={"/images/background-2.jpg"}
                        alt="gambar fashion"
                        width={1000}
                        height={1000}
                        priority
                        className="w-full h-dvh object-cover object-top"
                    />
                    <div className="w-full h-dvh inset-0 absolute grid items-center justify-end black-transparent-background">
                        {/* Content with Animation */}
                        <div
                            className={`flex flex-col gap-4 md:me-28 items-end md:items-end transition-transform duration-1000 ease-in ${
                                isAnimated ? "translate-x-0" : "translate-x-full"
                            } px-2 md:p-0`}
                            id="landing-content"
                        >
                            <h1 className="font-bold text-4xl md:text-6xl font-sans tracking-widest text-white uppercase md:text-right text-right">
                                Impactful Fashion
                            </h1>
                            <h2 className="text-white text-md md:text-lg uppercase tracking-widest font-medium md:text-right text-center text-sm">
                                Sustainable | Reduceable | Reuseable
                            </h2>
                            <Link
                                href="/"
                                className="px-8 py-2 bg-graphite text-white text-md rounded-md shadow font-semibold uppercase tracking-widest w-fit animate-fade-up"
                            >
                                See All Products
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Section 2: White Section */}
                <div className="w-full max-w-[92rem]  py-20 flex-col md:flex-row md:gap-36 gap-12 flex-auto bg-white flex justify-center items-center">
                    <SalesValueCard icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-16">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                        </svg>
                    }
                    title={"Stay Fresh All Day"}
                    description={" Our product implement technology that can make this cloth fresh all day"}
                    />
                    <SalesValueCard icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-16">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                        </svg>
                    }
                    title={"Stay Fresh All Day"}
                    description={" Our product implement technology that can make this cloth fresh all day"}
                    />
                    <SalesValueCard icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-16">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                        </svg>
                    }
                    title={"Stay Fresh All Day"}
                    description={" Our product implement technology that can make this cloth fresh all day"}
                    />
                </div>
                {/* section 3 */}
                <div className="w-full px-6 flex flex-col gap-12 justify-center items-center mt-16">
                    <h1 className="tracking-widest text-2xl font-bold mb-8">
                        FRESH FROM THE FACTORY
                    </h1>
                    <div className="grid md:grid-cols-4 grid-cols-1 gap-4 max-w-[92rem]">
                        {/* grid items */}
                        <LandingProductCard
                            imgSrc={"/models/models6.jpg"}
                            colorChoice={
                                <div className="flex justify-center gap-2">
                                    <span className="h-4 w-4 bg-blue-950 rounded-full"></span>
                                    <span className="h-4 w-4 bg-blue-950 rounded-full"></span>
                                    <span className="h-4 w-4 bg-blue-950 rounded-full"></span>
                                </div>
                            }
                            isNew = {true}
                            price={"RP. 199.999"}
                            tiitle={"KOREAN KNIT NON-IRON STYLE"}
                        />
                        <LandingProductCard
                            imgSrc={"/models/models2.jpg"}
                            colorChoice={
                                <div className="flex justify-center gap-2">
                                    <span className="h-4 w-4 bg-blue-950 rounded-full"></span>
                                    <span className="h-4 w-4 bg-blue-950 rounded-full"></span>
                                    <span className="h-4 w-4 bg-blue-950 rounded-full"></span>
                                </div>
                            }
                            isNew = {true}
                            price={"RP. 199.999"}
                            tiitle={"CASUAL NEW STYLE"}
                        />
                        <LandingProductCard
                            imgSrc={"/models/models1.jpg"}
                            colorChoice={
                                <div className="flex justify-center gap-2">
                                    <span className="h-4 w-4 bg-blue-950 rounded-full"></span>
                                    <span className="h-4 w-4 bg-blue-950 rounded-full"></span>
                                    <span className="h-4 w-4 bg-blue-950 rounded-full"></span>
                                </div>
                            }
                            isNew = {true}
                            price={"RP. 199.999"}
                            tiitle={"LALALA MODEL STYLE"}
                        />
                        <LandingProductCard
                            imgSrc={"/models/models4.jpg"}
                            colorChoice={
                                <div className="flex justify-center gap-2">
                                    <span className="h-4 w-4 bg-blue-950 rounded-full"></span>
                                    <span className="h-4 w-4 bg-blue-950 rounded-full"></span>
                                    <span className="h-4 w-4 bg-blue-950 rounded-full"></span>
                                </div>
                            }
                            isNew = {true}
                            price={"RP. 199.999"}
                            tiitle={"LINGGANGU GIRL STYLE"}
                        />
                    </div>    
                    <div className="my-24">
                        <Link href={"#"} className="md:py-4 md:px-8 border-2 py-2 px-4 border-primary  rounded-xl text-white font-bold tracking-widest bg-primary hover:text-primary hover:bg-transparent transition-all duration-200 ">
                            VIEW ALL PRODUCT
                        </Link>  
                    </div>
                </div>
            </div>
    );
};

export default Home;
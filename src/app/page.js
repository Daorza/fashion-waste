"use client";
import Image from "next/image";
import LandingLayout from "@/components/layout/LandingLayout";
import { useEffect, useState } from "react";

const Home = () => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        // Trigger animasi setelah komponen dimuat
        setIsAnimated(true);
    }, []);

    return (
        <LandingLayout>
            <div>
                {/* Section 1: Hero Background */}
                <div className="w-full h-dvh relative">
                    <Image
                        src={"/images/background-fashion-2.jpg"}
                        alt="gambar fashion"
                        width={1000}
                        height={1000}
                        priority
                        className="w-full h-dvh object-cover object-top"
                    />
                    <div className="w-full h-dvh inset-0 absolute grid items-center justify-end black-transparent-background">
                        {/* Content with Animation */}
                        <div
                            className={`flex flex-col gap-4 md:me-32 items-center md:items-end transition-transform duration-1000 ease-in ${
                                isAnimated ? "translate-x-0" : "translate-x-full"
                            }`}
                            id="landing-content"
                        >
                            <h1 className="font-bold text-4xl md:text-6xl font-sans tracking-widest text-white uppercase md:text-right text-center">
                                Impactful Fashion
                            </h1>
                            <h2 className="text-white text-md md:text-lg uppercase tracking-widest font-medium md:text-right text-center">
                                Sustainable | Reduceable | Reuseable
                            </h2>
                            <a
                                href="/"
                                className="px-8 py-2 bg-graphite text-white text-md rounded-md shadow font-semibold uppercase tracking-widest w-fit"
                            >
                                See All Products
                            </a>
                        </div>
                    </div>
                </div>

                {/* Section 2: White Section */}
                <div className="w-full h-[22rem] bg-white"></div>
            </div>
        </LandingLayout>
    );
};

export default Home;
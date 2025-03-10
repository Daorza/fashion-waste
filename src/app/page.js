"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import SalesValueCard from "../components/SalesValueCard";
import LandingProductCard from "../components/LandingProductCard";
import RatingCard from "@/components/RatingCard";
import axios from "axios";
const Home = () => {
    
    const [isAnimated, setIsAnimated] = useState(false);
    const [product, setProducts] = useState([]);
    useEffect(() => {
        setIsAnimated(true);
        fetchData();
    }, []);
    const fetchData = async () =>{
        const res = await axios.get('/data/product.json');
        setProducts(res.data);
    }
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
                                Sustainable | Reduceable | Durable
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
                <div className="w-full  py-20 flex-col md:flex-row md:gap-36 gap-12 flex-auto bg-white flex justify-center items-center">
                    <SalesValueCard icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-16">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                            </svg>
                        
                        }
                        title={"Sustainable"}
                        description={"Making the fashion items life cycle longer. Taking a little step to save the environtment."}
                    />
                    <SalesValueCard icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-16">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                            </svg>                      
                        }
                        title={"Reduceable"}
                        description={"Don't need to buy new clothes every month. Try exploring the second-hand clothes. Its worth to try!"}
                    />
                    <SalesValueCard icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-16">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                            </svg>                                       
                        }
                        title={"Durable"}
                        description={"Why do mass buying and increase the fashion waste if you can just trade your old clothes to another?"}
                    />
                </div>
                {/* section 3 */}
                <div className="w-full px-6 flex flex-col gap-12 justify-center items-center bg-white">
                    <h1 className="tracking-widest text-2xl font-bold mb-8 uppercase">
                        always good and fresh in every condition
                    </h1>

                    <div className="grid md:grid-cols-4 grid-cols-1 gap-4 max-w-[92rem]">
                        {product.map((dat, index) => (
                            <Link key={index} href={`/marketplace/${dat.id}`}>
                                <LandingProductCard
                                    imgSrc={dat.image}
                                    colors={dat.color}
                                    isNew={true}
                                    price={dat.price}
                                    title={dat.name}
                                />
                            </Link>
                        ))}
                    </div>

                    <div className="mt-12">
                        <Link href={"/shop"} className="py-4 px-12 border-2 border-graphite rounded-lg text-white font-bold tracking-widest bg-graphite hover:text-graphite hover:bg-transparent transition-all duration-200 ">
                            VIEW ALL PRODUCT
                        </Link>  
                    </div>
                    <div className="mx-20 w-full px-8 py-4 ">
                        <hr className="h-px my-2 mx-2" />
                        <h1 className="tracking-widest text-2xl font-bold mt-12 mb-8 text-center uppercase">What people say?</h1>
                        <div className="flex gap-4 mx-12 overflow-auto py-4 w-68 md:w-fit md:mx-28">
                            <RatingCard 
                                rating = {"5"}
                                title = {"Excellent"}
                                description = {"The best for all time. The most exiting part is i can trade my clothes that doesn't fit me anymore with another clothes."}
                                name = {"Carl Monteau"}
                            />
                            <RatingCard 
                                rating = {"4"}
                                title = {"So good"}
                                description = {"I get my dream dress here and just trade it with my prom dress from last year's prom. The condition still good, just having some tiny stains."}
                                name = {"Nina Star"}
                            />
                            <RatingCard 
                                rating = {"3"}
                                title = {"My Bad"}
                                description = {"I trade the wrong pants. I thought it was not used and it turns out to be my father's. I feel bad for him so i buy him anew one. "}
                                name = {"Alexandre Horran"}
                            />
                            <RatingCard 
                                rating = {"5"}
                                title = {"Awesome!"}
                                description = {"Such a great experience to donating all of my childhood clothes. My storage is just empty now after donating."}
                                name = {"Norman Hillston"}
                            />
                        </div>
                    </div>
                    <div className="mx-20 w-full px-8 py-4 mb-8">
                    <hr className="h-px my-2 mx-2" />
                        <h1 className="tracking-widest text-2xl font-bold my-12 text-center uppercase">See the highlight</h1>
                        <div className="w-full bg-slate-50 rounded-md shadow-md px-4 sm:px-8 py-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="flex justify-center">
                                    <Image 
                                        src={"/models/runway1.jpg"} 
                                        width={1000} 
                                        height={1000} 
                                        alt="runway1" 
                                        className="w-full sm:w-80 object-center rounded-md shadow"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <h1 className="text-2xl sm:text-3xl font-semibold capitalize tracking-wide text-center hidden md:block">
                                        Stunning looks from the 2025 PFW
                                    </h1>
                                    <hr className="h-px my-2 mx-4" />
                                    <div className="flex justify-between pt-2 text-xs italic text-gray-500 mx-4">
                                        <p>March 3<sup>rd</sup> 2025</p>
                                        <p>Ivan Montana</p>
                                    </div>
                                    <p className="text-sm mt-6 mx-4 px-2 line-clamp-6 sm:line-clamp-none sm:px-4 text-justify">
                                        The 2025 Paris Fashion Week delivered a breathtaking array of designs, solidifying its place as the pinnacle of global fashion. This season, top designers showcased a mix of avant-garde creativity, timeless elegance, and bold reinventions of classic styles.
                                        Among the standout collections, Chanel captivated audiences with modernized tweed ensembles, intricate embellishments, and an ethereal pastel palette. Balenciaga pushed the boundaries of futuristic fashion with oversized silhouettes, exaggerated proportions, and sleek, dystopian aesthetics. Meanwhile, Dior embraced romanticism, featuring delicate lace, flowing gowns, and an emphasis on refined femininity.
                                        On the edgier side, Rick Owens made a statement with sculptural, almost otherworldly designs, while Saint Laurent brought back its signature dark glamour with sharply tailored suits and luxurious leather pieces. Louis Vuitton seamlessly blended heritage and innovation, presenting structured outerwear and intricate embroidery that paid homage to the brand's rich history.
                                        From striking haute couture to daring streetwear influences, the 2025 PFW set the tone for the year's biggest trends, proving once again why Paris remains the heartbeat of high fashion.
                                    </p>
                                    <div className="mt-6 flex justify-center sm:mt-12">
                                        <Link 
                                            href={"/blog/1"} 
                                            className="px-6 sm:px-8 py-2 text-white text-sm bg-graphite font-semibold text-center w-fit rounded-md shadow-md uppercase tracking-widest 
                                            hover:bg-transparent hover:font-light hover:text-graphite hover:border hover:border-graphite transition-all duration-200"
                                        > 
                                                Read More →

                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                   
                </div>
            </div>
    );
};

export default Home;
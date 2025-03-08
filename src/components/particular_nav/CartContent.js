"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
const CartContent = ({closeCart}) => {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        fetchCart();
    }, [])
    const fetchCart = async () => {
        const response = await axios.get('/data/carts.json');
        setCartItems(response.data);
    }
    return (
        <>
        <div className="flex flex-col h-screen justify-between items-center w-full ">  
            <div  className="flex flex-col gap-6 p-2 flex-1 overflow-y-scroll">
                <div className="p-4 flex justify-between items-center border-b-2 border-primary">
                <h2 className="text-lg font-semibold tracking-widest">YOUR CART</h2>
                <button onClick={closeCart} className="text-gray-600 hover:text-black">✕</button>
                </div>
                <div className="flex flex-col gap-4">
                {
                    cartItems.map((carts, index)=> {
                        return  <div key={index} className="border flex rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                                    <Image
                                        src={carts.image}
                                        alt={'lalala'}
                                        width={300}
                                        height={400}
                                        className="md:w-32 w-28 md:h-32 h-28 object-top object-cover rounded-md"
                                    />
                                    <div className="p-4">
                                        <h3 className="font-semibold tracking-wider h-8 overflow-clip">{carts.name}</h3>
                                        <p className="text-gray-600 h-8  text-sm overflow-clip">{carts.price}</p>
                                        <div className="flex items-center border rounded-md w-fit px-1">
                                            <button
                                                className=" text-lg font-semibold text-gray-700 hover:bg-gray-200 rounded-l-md"
                                            
                                            >
                                                −
                                            </button>
                                            <span className="px-4 text-lg font-medium">{2}</span>
                                            <button
                                                className=" text-lg font-semibold text-gray-700 hover:bg-gray-200 rounded-r-md"
                                            
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                    })
                }
                </div>
            </div>
            <div className="h-28 border-t  border-primary  shadow-md w-full flex flex-col gap-2 py-2 px-8">
                <p>
                    Check out With 10% Discount 
                </p>
                <button className="w-full p-4 bg-primary text-center font-bold text-white tracking-widest">
                    CHECKOUT &bull; RP 350.000
                </button>
            </div>
        </div>
        </>
    )
}
export default CartContent;
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get("/data/blog.json");
      setPosts(res.data);
    };
    fetchBlogs();
  }, []);

    return (
        <main className="bg-gray-100 min-h-screen py-12 px-6 sm:px-12">
            <div className="max-w-4xl mx-auto text-center mb-8">
                <h1 className="text-3xl font-bold text-black mb-2">Latest Blog Posts</h1>
                <p className="text-gray-600">Stay updated with the latest trends and insights.</p>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {posts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.id}`} className="bg-white shadow-lg rounded-lg overflow-hidden transition hover:shadow-xl">
                        <Image src={post.imageMain} width={1000} height={1000} alt={post.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-black mb-2 capitalize">{post.title}</h2>
                            <div className="flex justify-between">
                                <p className="text-gray-500 text-sm">{post.month} <sup>{post.day}</sup> {post.year}</p>
                                <p className="text-gray-500 text-sm">{post.writer}</p>
                            </div>
                            <button className="mt-4 text-black font-semibold hover:underline">Read More →</button>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}

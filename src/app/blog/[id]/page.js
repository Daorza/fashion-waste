"use client";
import { useParams, notFound } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

export default function BlogDetail() {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/data/blog.json");
      const foundPost = res.data.find((p) => p.id === params.id);
      setPost(foundPost || null);
      setLoading(false);
    };
    fetchPost();
  }, [params]);

  if (loading) return <p>Loading...</p>;
  if (!post) return notFound();

  return (
    <div className="my-4 w-fit flex justify-center mx-auto">
      <div className="bg-white rounded-md shadow-md px-6 py-3 max-w-3xl text-justify">
        <Image src={post.imageMain} alt={post.title} width={800} height={800} className="w-full object-cover rounded-md shadow-md" />
        <h1 className="text-3xl font-bold mt-4">{post.title}</h1>
        <div className="flex justify-between mt-2">
            <p className="text-gray-500 text-sm">{post.month} <sup>{post.day}</sup> {post.year}</p>
            <p className="text-gray-500 text-sm">{post.writer}</p>
        </div>
        <hr className="my-4" />
        <p className="text-gray-600 text-sm px-2">{post.description}</p>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import useSWR from "swr";

// import { getData } from "@/services/products";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function DetailProductPage(props: any) {
    const { params } = props;
    // const product = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/product/?id=${params.id}`);
    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/product/?id=${params.id}`, fetcher);

    const product = {
        data: data?.data,
    };

    return (
        <div className="container mx-auto my-18 ">
            {/* <div className="w-1/2 mx-auto border border-s-slate-700">
                <Image
                    src={product.data?.image}
                    alt=""
                    width={500}
                    height={500}
                    className="w-full object-cover aspect-square col-span-2"
                />
                <div className="p-4 bg-white px-6 ">
                    <h3>{product.data?.name}</h3>
                    <p>{product.data?.price}</p>
                </div>
            </div> */}
        </div>
    );
}

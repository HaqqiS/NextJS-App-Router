"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import useSWR from "swr";

const Modal = dynamic(() => import("@/components/core/Modal"));
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function DetailProductPage(props: any) {
    const { params } = props;
    // const product = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/product/?id=${params.id}`);
    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_API_URL}/api/product/?id=${params.id}`,
        fetcher
    );

    const product = {
        data: data?.data,
    };

    return (
        <Modal>
            <Image
                src={product.data?.image}
                alt="product"
                className="w-full object-cover aspect-square col-span-2"
                width={500}
                height={500}
            />
            <div className="p-4 bg-white px-6 ">
                <h3>{product.data?.name}</h3>
                <p>{product.data?.price}</p>
            </div>
        </Modal>
    );
}

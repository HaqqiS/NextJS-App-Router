import { retrieveData, retrieveDataById } from "@/libs/firebase/service";
import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id: 1,
        title: "shoes",
        price: 100000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/yzytjyjnar2wzjiriibk/NIKE+AIR+MAX+97.png",
    },
    {
        id: 2,
        title: "Tas",
        price: 100000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/yzytjyjnar2wzjiriibk/NIKE+AIR+MAX+97.png",
    },
    {
        id: 3,
        title: "Topi",
        price: 100000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/yzytjyjnar2wzjiriibk/NIKE+AIR+MAX+97.png",
    },
    {
        id: 4,
        title: "Baju",
        price: 100000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/yzytjyjnar2wzjiriibk/NIKE+AIR+MAX+97.png",
    },
];
export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
        const detailProduct = await retrieveDataById("products", id);
        if (detailProduct) {
            return NextResponse.json({ status: 200, message: "Success", data: detailProduct });
        }
        return NextResponse.json({ status: 404, message: "Data Not Found", data: {} });
    }

    const products = await retrieveData("products");

    return NextResponse.json({ status: 200, message: "Success", data: products });
}

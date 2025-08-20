import { conceptItemImgData } from "@/allData/conceptItemImgData";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        conceptItemImgData
    })
}
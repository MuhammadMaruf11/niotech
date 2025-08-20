
import { ourProductsData } from "@/allData/ourProductsData";
import { NextResponse } from "next/server"; 

export async function GET() {
      return NextResponse.json({
        ourProductsData,
      });
}
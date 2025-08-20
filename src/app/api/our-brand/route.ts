import { ourBrandsData } from "@/allData/ourBrandsData";
import { NextResponse } from "next/server"; 

export async function GET() {
      return NextResponse.json({
        ourBrandsData,
      });
}
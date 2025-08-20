
import { whyNiotechData } from "@/allData/whyNiotechData";
import { NextResponse } from "next/server"; 

export async function GET() {
      return NextResponse.json({
        whyNiotechData,
      });
}
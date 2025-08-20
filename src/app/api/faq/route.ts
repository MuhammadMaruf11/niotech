import { faqData } from "@/allData/faqData";
import { NextResponse } from "next/server"; 

export async function GET() {
      return NextResponse.json({
        faqData,
      });
}
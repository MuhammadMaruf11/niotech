import { serviceDesignData } from "@/allData/serviceDesignData";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    serviceDesignData,
  });
}

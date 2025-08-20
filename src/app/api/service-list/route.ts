import { serviceTabData } from "@/allData/serviceTabData";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    serviceTabData,
  });
}

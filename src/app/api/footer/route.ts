import { footerContactsData, footerServicesData, footerSocialsData } from "@/allData/footerWidgetData";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    footerContactsData,
    footerServicesData,
    footerSocialsData,
  });
}

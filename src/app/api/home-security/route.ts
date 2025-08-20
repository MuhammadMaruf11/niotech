import { camerasNavData, camerasTabData, doorLocksNavData, doorLocksTabData, environmentalSensorsNavData, environmentalSensorsTabData, homeSecurityBodyFirst, homeSecurityBodySecond, homeSecurityBodyThird, homeSecurityData, securitySensorsNavData, securitySensorsTabData } from "@/allData/homeSecurityData";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
      camerasNavData,
      camerasTabData,
      doorLocksNavData,
      doorLocksTabData,
      environmentalSensorsNavData,
      environmentalSensorsTabData,
      homeSecurityBodyFirst,
      homeSecurityBodySecond,
      homeSecurityBodyThird,
      homeSecurityData,
      securitySensorsNavData,
      securitySensorsTabData,
    });
}
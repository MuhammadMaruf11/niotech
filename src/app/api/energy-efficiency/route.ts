import { energyEfficiencyBodyFifth, energyEfficiencyBodyFourth, energyEfficiencyBodyThird, energyEfficiencyData } from "@/allData/energyEfficiencyData";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        energyEfficiencyBodyFifth, energyEfficiencyBodyFourth, energyEfficiencyBodyThird, energyEfficiencyData
    })
}
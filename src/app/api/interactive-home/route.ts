import { interactiveBodyFifth, interactiveBodyFourth, interactiveBodyThird, interactiveData } from '@/allData/interactiveData';

import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
      interactiveBodyFifth,
      interactiveBodyFourth,
      interactiveBodyThird,
      interactiveData,
    });
}
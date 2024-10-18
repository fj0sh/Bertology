import instance from "@/lib/util/axios-instance";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const recepient = await req.json();

  console.log(recepient);

  try {
    const res = await instance.post("/mail/sendMail", recepient);
    console.log(res.data);
    return NextResponse.json(res.data);
  } catch (error) {
    return NextResponse.json({ Error: "An error occured" });
  }
}

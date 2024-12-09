import instance from "@/lib/util/axios-instance";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { title, recepient, message, username, attachment } = await req.json();

  try {
    const res = await instance.post("/mail/sendMail", {
      title,
      recepient,
      message,
      username,
      attachment,
    });
    console.log(res.data);
    return NextResponse.json(res.data);
  } catch (error) {
    return NextResponse.json({ Error: "An error occured" });
  }
}

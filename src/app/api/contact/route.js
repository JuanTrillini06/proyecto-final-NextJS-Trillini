import { NextResponse } from "next/server";

export async function POST(request) {
  const formData = await request.json();
  console.log(formData);

  return NextResponse.json({
    message: "Hemos recibido tu mensaje!!",
  });
}
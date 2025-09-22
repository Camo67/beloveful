import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET() {
  try {
    const imagesDirectory = path.join(process.cwd(), "public/images/hero");
    const files = fs.readdirSync(imagesDirectory);

    // Only include image files (jpg, png, jpeg, webp)
    const imageFiles = files.filter(file =>
      /\.(jpg|jpeg|png|webp)$/i.test(file)
    );

    // Return full paths relative to /public
    const heroImages = imageFiles.map(file => `/images/hero/${file}`);

    return NextResponse.json(heroImages);
  } catch (error) {
    console.error("Error reading hero images:", error);
    return NextResponse.json([], { status: 500 });
  }
}

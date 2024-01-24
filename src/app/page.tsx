import Image from "next/image";

import louisePic from "@/assets/images/louise.png"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="font-bold">Website under construction</h2>
      <p>Have a look at this young good looking lady while you wait</p>
      <br/>
      <Image 
        alt="Louise"
        src={louisePic}
        height={200}
        width={200}
      />
    </main>
  );
}

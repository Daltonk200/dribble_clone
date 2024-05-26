import Image from "next/image";
import Hero from "@/components/Hero/page";
import Courosel from "@/components/Courosel/page";
import Explore from "@/components/Explore/Explore";


export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24 bg-red-500 ">
      <Hero/>
      <Courosel/>
      <Explore/>
    </section>
  );
}
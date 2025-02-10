import Image from "next/image";
import about from './components/about';
import Telegram from './components/Telegram'
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <Image src='/home.jpg' alt="home"

        quality={100}
        width={1300}
        height={100}

        className="relative bg-cover"
      />
      <div className="absolute text-white md:top-60 md:left-24 z-10 top-14 left-5">
        <h1 className="md:text-4xl text-2xl font-bold"> Expert Researchers</h1>
        <h2 className="mt-4">Your success is our success!
        </h2>
        <h2 className="text-4xl font-thin mt-4"> Welcome</h2>
        <div className="mt-5 flex items-center gap-2">
          <Button variant={"outline"} className="">Create an Account</Button>
          <Link href={'/dashboard'}>
          <Button variant={"outline"} className="">Sign In </Button>
          </Link>
        </div>

      </div>
      <Telegram />
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import Linkedin from "/public/discord.svg";
import Twitter from "/public/twitter.svg";
const LinkedinLink = process.env.NEXT_PUBLIC_LINKEDIN || "https://discord.gg/Ws2AhwJ8Kz/";
const TwitterLink = process.env.NEXT_PUBLIC_TWITTER || "https://x.com/Whiziio";

const CardFooter = () => {
  return (
    <div>
      <p className="text-[#B1ACA4] text-[12px] text-center mt-2">
        {" "}
        <Link
          href="/privacdddy-policy"
          className="underline transition-all duration-200 hover:text-black/70"
        >
          
        </Link>
      </p>
      {/* Social Media */}
      <div className="flex justify-center items-center gap-2 mt-6">
        <Link href={LinkedinLink} className="relative w-[22px] h-[22px]">
          <Image src={Linkedin} alt="Linkedin" fill />
        </Link>
        <Link href={TwitterLink} className="relative w-[22px] h-[22px]">
          <Image src={Twitter} alt="Twitter" fill />
        </Link>
      </div>
    </div>
  );
};

export default CardFooter;

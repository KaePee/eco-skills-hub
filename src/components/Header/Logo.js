import Link from "next/link"
import ProfileLogo from "/public/eko_skills_logo.svg"
import Image from "next/image"


const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
        <div className="w-36 rounded-full overflow-hidden border border-solid border-light mr-2 ">
            <Image src={ProfileLogo} alt="Eko Skills Logo" className="w-full h-auto rounded-full" />
        </div>
    </Link>
  )
}

export default Logo 
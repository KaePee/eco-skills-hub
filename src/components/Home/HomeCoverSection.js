import Image from "next/image";
import HappyWomen from "/public/assets/happy_women.jpg";

const HomeCoverSection = () => {
    const blurURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMsKGiqBwAEnQHjFpQ2owAAAABJRU5ErkJggg==";

    return (
        <div className="w-full inline-block relative">
            <article className="flex flex-col items-start justify-end mx-4 md:mx-10 relative h-[70vh] md:h-[85vh]">
                <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent to-dark/90 rounded-3xl z-0" />
                <Image
                    src={HappyWomen}
                    alt="Home cover section"
                    placeholder='blur'
                    blurDataURL={blurURL}
                    fill
                    className="w-full h-full object-center object-cover rounded-3xl -z-10"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-center p-4 md:p-8 lg:p-16 z-10 text-light leading-relaxed sm:text-sm">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#EE9921] font-semibold">
                        Be Part of <br />
                        <span className="text-white text-3xl md:text-5xl lg:text-6xl">Our NGO</span>
                    </h1>
                    <p className="py-2 md:py-4 text-base md:text-lg">
                        What we do:
                    </p>
                    <p className="text-base md:text-lg">
                        <span className="font-semibold">EKO SKILLS GHANA</span> is a skill hub that nurtures young individuals to acquire skills that enable them to be empowered and ready for the job market.
                    </p>
                    <h2 className="text-xl md:text-2xl lg:text-3xl text-[#EE9921] font-semibold mt-4">
                        Vision
                    </h2>
                    <p className="text-base md:text-lg">
                        Equipping the young to be self-reliant, resilient, and help build their inherent skills.
                    </p>
                    <h2 className="text-xl md:text-2xl lg:text-3xl text-[#EE9921] font-semibold mt-4">
                        Mission
                    </h2>
                    <ul className="list-disc list-inside text-base md:text-lg">
                        <li>To ensure the youth become productive citizens who find innovative solutions to the daily challenges that come their way.</li>
                        <li>To provide an avenue and opportunity where the youth can exchange ideas and help sharpen the skills of others.</li>
                        <li>To bridge the gap between education and employment.</li>
                    </ul>
                </div>
                <div>
                </div>
            </article>
        </div>
    );
}

export default HomeCoverSection;

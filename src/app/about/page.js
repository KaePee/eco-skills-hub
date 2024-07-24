import AboutImg from "/public/assets/eko_skills_team.png";
import Image from "next/image";

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center p-6 md:p-8 lg:p-12 bg-gray-50 min-h-screen">
      <section className="py-12 lg:py-16 bg-gray-100 w-full max-w-6xl">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
                About Eko Skills Ghana
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-center md:text-left">
                Eko Skills Ghana is a skill hub that nurtures young individuals to
                acquire skills that enable them to be empowered and ready for
                the job market. Our mission is to ensure the youth become
                productive citizens who find innovative solutions to the daily
                challenges that come their way.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-center md:text-left">
                We provide an avenue and opportunity where the youth can
                exchange ideas and help sharpen the skills of others, while
                also bridging the gap between education and employment.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
                Our Core Values
              </h2>
              <ul className="space-y-4 text-gray-700 text-center md:text-left">
                <li>Equipping the young to be self-reliant and resilient</li>
                <li>Helping individuals discover and develop their inherent skills</li>
                <li>Fostering a culture of innovation and problem-solving</li>
                <li>Bridging the gap between education and employment</li>
                <li>Providing a platform for youth to exchange ideas and learn from each other</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full max-w-4xl mt-12">
        <Image
          src={AboutImg}
          alt="Eko Skills Team"
          className="w-full rounded-lg shadow-lg"
          layout="responsive"
        />
      </div>
    </main>
  );
}
import Image from "next/image";
import { Globe, Map, ShieldCheck } from "lucide-react";
import chose from "../../../public/assest/destanis/choose-us-img.png"
import map from "../../../public/assest/destanis/map-line.png"

export default function WhyTravelersChooseUs() {
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT */}
        <div>
          <span className="  text-sky-600 bg-[#E5F1F4] text-lg font-semibold px-4 py-3 rounded-full">
            Why travelers choose us
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-semibold leading-tight">
            <span className="italic font-semibold">Tailored journeys with</span> 
            <br />
            <span className="italic font-semibold">real value and support.</span>
          </h2>

          {/* Image Cards */}
          <div className="bg-cover bg-center w-full" style={{ backgroundImage: `url(${map.src})` }}>
          <div className="relative mt-12 w-[500px] h-[300px]   " >
            
            {/* Back Image */}
             
              <Image
                src={chose}
                alt="travel"
                width={500}
                height={300}
                className="object-cover w-full"
              />
             

            {/* Front Image */}
             

          </div>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <p className="text-gray-600 max-w-xl mb-10">
            Enjoy curated itineraries, transparent pricing, and 24/7 assistance
            from local experts who truly care. Because your travel should be
            effortless, enriching, and entirely yours.
          </p>

          <div className="space-y-5">

            <FeatureCard
             
              icon={<Globe size={22} />}
              title="Curated Global Packages"
             desc="Romantic Parisian getaways to African safaris – all trips are handpicked for quality, comfort, and value."
              
            />

            <FeatureCard
              icon={<Map size={22} />}
              title="Flexibility & Customization"
              desc="Adjust itineraries, travel dates, and experiences to match your pace and preferences."
            />

            <FeatureCard
              icon={<ShieldCheck size={22} />}
              title="Secure Booking & Support"
              desc="Book confidently with encrypted payments and 24/7 multilingual customer support."
            />

          </div>
        </div>

      </div>
    </section>
  );
}

type CardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

function FeatureCard({ icon, title, desc }: CardProps) {
  return (
    <div className="flex items-start gap-4 p-5 bg-[#F2F2F2] rounded-xl shadow-sm border">
      <div className="p-3 bg-gray-100 rounded-lg text-gray-700">{icon}</div>

      <div>
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-gray-500 text-sm mt-1">{desc}</p>
      </div>
    </div>
  );
}
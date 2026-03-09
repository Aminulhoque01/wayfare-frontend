import Image from "next/image";
import image1 from "../../../public/assest/features/featured-articles1.jpg"
import image2 from "../../../public/assest/features/featured-articles2.jpg"
import image3 from "../../../public/assest/features/featured-articles3.jpg"

const articles = [
  {
    id: 1,
    title: "The Art of Letting Go: Ganga Aarti in Varanasi",
    tag: "Cultural Experiences",
    date: "April 10, 2025",
    read: "5 min",
    img: image1,
  },
  {
    id: 2,
    title: "A Day in a Japanese Machiya House",
    tag: "Cultural Experiences",
    date: "April 10, 2025",
    read: "5 min",
    img: image2,
  },
  {
    id: 3,
    title: "Detox & Digital Silence: My 5-Day Retreat in Chiang Mai",
    tag: "Wellness Journeys",
    date: "April 10, 2025",
    read: "5 min",
    img: image3,
  },
];

export default function FeaturedArticles() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold">
            Featured articles{" "}
            <span className="italic font-normal text-gray-600">
              this week
            </span>
          </h2>

          <button className="bg-teal-600 text-white px-5 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-teal-700 transition">
            View more →
          </button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="flex gap-4">

              {/* Image */}
              <div className="relative w-40 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                <Image
                  src={article.img}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <span className="text-xs bg-red-100 text-red-500 px-3 py-1 rounded-full">
                  {article.tag}
                </span>

                <h3 className="text-sm font-semibold mt-2 leading-snug">
                  {article.title}
                </h3>

                <div className="flex items-center text-xs text-gray-500 mt-2 gap-3">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.read}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
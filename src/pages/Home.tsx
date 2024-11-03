import { Link } from "react-router-dom";
import ContactCTA from "../components/ContactCTA";

export default function Home() {
  const galleryImages = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row">
        <div className="flex-1">
          <img
            src="/placeholder.svg?height=800&width=800"
            alt="Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex items-center justify-center p-8 md:p-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-light mb-4">NAME</h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-light">Lorem, ipsum dolor.</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              culpa ullam quos quaerat molestiae eius vel tempora soluta est
              doloremque. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Odio voluptate reiciendis aperiam iure accusamus officia
              exercitationem amet modi enim animi!
            </p>
            <Link
              to="/about"
              className="inline-block border border-black px-6 py-2 text-sm hover:bg-black hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </div>
          <div>
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Image"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-center mb-12 dark:text-white transition-colors duration-300">
            Featured Creations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((src, index) => (
              <div key={index} className="group relative overflow-hidden">
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-block border border-black dark:border-white px-6 py-2 text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 dark:text-white"
            >
              View All Works
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
}

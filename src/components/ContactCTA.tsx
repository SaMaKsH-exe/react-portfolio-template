import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="py-24 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-light mb-6 dark:text-white transition-colors duration-300">
          Want to get in touch?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
          Whether you're interested in a reservation, collaboration, or just
          want to say hello, I'd love to hear from you.
        </p>
        <Link
          to="/contact"
          className="inline-block border border-black dark:border-white px-8 py-3 text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 dark:text-white"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}

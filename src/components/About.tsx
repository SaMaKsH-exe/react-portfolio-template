export default function About() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Image */}
      <div className="md:w-1/2 h-[50vh] md:h-screen relative">
        <img
          src="/placeholder.svg?height=1200&width=800"
          alt="Portrait"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side - Content */}
      <div className="md:w-1/2 flex flex-col">
        <div className="flex-grow p-8 md:p-16 space-y-12">
          <section>
            <h2 className="text-2xl font-light mb-4">2024</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              sapiente ut labore incidunt esse eveniet quasi quae distinctio
              nobis veniam?
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">2020-2023</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ut,
              soluta ipsa assumenda perferendis illum, hic iste, totam enim
              ratione error? Omnis sit beatae nam quasi quaerat deserunt impedit
              expedita!
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">Skills</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
              magnam enim velit. Neque maiores a laboriosam eos ipsum illum qui
              dolorem voluptatem velit quas rerum ratione architecto quibusdam
              fugiat ex possimus libero sapiente, porro asperiores, modi
              incidunt? Quidem, distinctio minima.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">Education</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              laborum sit amet cupiditate praesentium fugit possimus cum
              explicabo aperiam laboriosam.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

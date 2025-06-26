
import { Istok_Web } from "next/font/google";

const istokWeb = Istok_Web({
  variable: "--font-istok-web",
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main className="bg-white min-h-screen text-white font-sans relative">
      
      <section
        className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center group overflow-hidden"
        style={{ backgroundImage: "url('/imgs/MannyNator.png')" }}
      >
        {/* Hover Backdrop over Entire Hero Image */}
        <div className="absolute inset-0 bg-black opacity-50 md:opacity-0 md:group-hover:opacity-50 transition-opacity duration-500 z-10"></div>


        {/* Overlay Right Side - Responsive Version */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-20 flex items-center px-4 md:px-16 lg:px-26">
          {/* Gradient overlay - responsive adjustment */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm md:backdrop-blur-xl bg-gradient-to-l from-[#041562]/90 via-[#041562]/70 to-transparent bg-no-repeat z-10"></div>

          {/* TEXT CONTENT - Responsive */}
          <div className="relative z-20 text-left text-white space-y-4 md:space-y-6 max-w-xs sm:max-w-md md:max-w-lg w-full mx-4 md:group-hover:translate-x-0 md:translate-x-10 transition-all duration-500 ease-out">
            {/* Title with animated vertical line */}
            <div className="flex gap-4 md:gap-6 items-start">
              {/* Animated Vertical Line - Hidden on mobile */}
              <div className="relative hidden md:block">
                <div className="absolute -left-1 top-0 w-3 h-3 bg-[#ED3500] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
              </div>

              {/* Heading Text */}
              <div className="space-y-1 md:space-y-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                  <span className="text-white block opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">Expert Genset</span>
                  <span className="text-[#ED3500] block opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">Consultation</span>
                  <span className="text-white opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">and </span>
                  <span className="text-[#ED3500] opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-250">Services</span>
                </h2>
              </div>
            </div>

            {/* Subtext */}
            <p className="text-xs sm:text-sm mt-4 md:mt-10 text-[#F1F1F1] italic opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 leading-relaxed">
              Providing <span className="font-semibold text-white">reliable consultation</span>, <span className="font-semibold text-white">accurate quotations</span>,<br />
              and <span className="font-semibold text-white">hands-on support</span> for generator installation and maintenance.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 mt-6 md:mt-10 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400">
              <a
                href="#services"
                className="relative bg-[#ED3500] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md text-xs sm:text-sm font-medium hover:bg-[#c52c00] transition-all duration-300 hover:shadow-lg hover:shadow-[#ED3500]/30 overflow-hidden group/button"
              >
                <span className="relative z-10">Our Services</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover/button:opacity-10 transition-opacity duration-300"></span>
              </a>
              <a
                href="#gensets"
                className="relative border border-white px-4 py-2 sm:px-6 sm:py-3 rounded-md text-xs sm:text-sm font-medium hover:bg-white hover:text-[#041562] transition-all duration-300 hover:shadow-lg hover:shadow-white/20 overflow-hidden group/button2"
              >
                <span className="relative z-10">Explore Gensets</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover/button2:opacity-10 transition-opacity duration-300"></span>
              </a>
            </div>

            {/* Contact Info - Stacked on mobile */}
            <div className="relative z-20 flex flex-col sm:flex-row sm:gap-6 items-start sm:items-center text-xs sm:text-sm mt-6 md:mt-10 text-white/90 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-500">
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="text-[#ED3500]">✉</span>
                <span>mannyhilairon@litonmotor.com.ph</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="text-[#ED3500]">📞</span>
                <span>+63 968 315 1166</span>
              </div>
            </div>
          </div>
        </div>

        {/* NAVBAR - Responsive */}
        <header className="absolute top-0 left-0 right-0 px-4 sm:px-8 py-3 sm:py-5 z-35">

          <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight bg-[#041562]/70 px-3 py-1 sm:px-4 sm:py-2 rounded-lg backdrop-blur-sm">
              MannyNator <span className="text-[#ED3500]">Solutions</span>
            </h1>
            <nav className="hidden sm:flex space-x-4 md:space-x-8 text-xs sm:text-sm font-medium">
              <a href="#services" className="hover:text-[#ED3500] transition-colors duration-200">
                Services
              </a>
              <a href="#contact" className="hover:text-[#ED3500] transition-colors duration-200">
                Contact
              </a>
              <a href="#about" className="hover:text-[#ED3500] transition-colors duration-200">
                About
              </a>
            </nav>
            {/* Mobile menu button (optional) */}
            <button className="sm:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </header>
      </section>

      {/* Second Section */}
      <section className="-mt-20 bg-white relative z-20">
        <div className="pt-10">
          {/* SERVICE CARDS */}
          <div className="grid -mt-20 grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto px-4">
            {[
              "Generator Consultation",
              "Quotation Assistance",
              "Installation Advice",
              "Maintenance Inquiries",
            ].map((service, index) => (
            <div
                key={index}
                className="bg-[#EEEEEE] text-black bg-opacity-95 px-6 py-8 shadow-md text-center border-t-4 border-[#ED3500] rounded-t-[5px] rounded-b-none"
              >
                <h2 className="text-2xl font-bold mb-4">{service}</h2>
                <p className="text-lg text-gray-700">
                  Expert support to help you choose the right power solution for your needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* FOOTER */}
      <footer
        id="contact"
        className="bg-[#041562] text-white text-sm py-6 text-center mt-10"
      >
        <p>
          For inquiries, email:{" "}
          <strong>mannygensupport@gmail.com</strong>
        </p>
        <p className="mt-1">
          © {new Date().getFullYear()} MannyNator Solutions
        </p>
      </footer>
    </main>
  );
}

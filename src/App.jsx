import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import lawyerImage from "./assets/lawyer.jpg";

import {
  Scale,
  ShieldCheck,
  Building2,
  Landmark,
  Menu,
  X,
} from "lucide-react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);

  return () =>
    window.removeEventListener("scroll", handleScroll);
}, []);
useEffect(() => {
  const accepted = localStorage.getItem("disclaimerAccepted");

  if (!accepted) {
    setShowDisclaimer(true);
  }
}, []);

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Query sent successfully!");

          setFormData({
            from_name: "",
            from_email: "",
            message: "",
          });
        },
        (error) => {
          setStatus(
            "Failed: " +
              (error?.text || error?.message || JSON.stringify(error))
          );
        }
      );
  };

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-all duration-500 ${
        darkMode
          ? "bg-slate-950 text-white"
          : "bg-slate-50 text-slate-800"
      }`}
    >
      {/* NAVBAR */}
      {/* NAVBAR */}
<nav
  className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 lg:px-20 transition-all duration-500 ${
    scrolled
      ? darkMode
        ? "py-5 bg-black/40 backdrop-blur-xl border-b border-white/10 text-white shadow-2xl"
        : "py-5 bg-white/70 backdrop-blur-xl border-b border-slate-200 text-slate-900 shadow-lg"
      : "py-8 bg-transparent text-white"
  }`}
>
  {/* LOGO */}
  <div>
  <h1 className="text-2xl font-bold">
    Adv. Medhavi Mahesh Dalvi
  </h1>

  <p className="text-xs tracking-[0.25em] uppercase opacity-70">
    Advocate & Legal Consultant
  </p>
</div>

  {/* LINKS */}
  {/* DESKTOP LINKS */}
<div className="hidden lg:flex space-x-10 font-medium">
  <a href="#" className="hover:text-amber-400 transition">
    Home
  </a>

  <a
    href="#about"
    className="hover:text-amber-400 transition"
  >
    About
  </a>

  <a
    href="#achievements"
    className="hover:text-amber-400 transition"
  >
    Achievements
  </a>

  <a
    href="#services"
    className="hover:text-amber-400 transition"
  >
    Practice Areas
  </a>

  <a
    href="#contact"
    className="hover:text-amber-400 transition"
  >
    Contact
  </a>
</div>

{/* MOBILE MENU BUTTON */}
<button
  onClick={() => setMobileMenu(!mobileMenu)}
  className="lg:hidden"
>
  {mobileMenu ? <X size={30} /> : <Menu size={30} />}
</button>

  {/* THEME BUTTON */}
  <button
    onClick={() => setDarkMode(!darkMode)}
    className={`px-4 py-3 rounded-2xl transition-all duration-500 ${
      scrolled
        ? darkMode
          ? "bg-white/10 border border-white/10"
          : "bg-slate-100 border border-slate-200"
        : "bg-white/10 backdrop-blur-md border border-white/20"
    }`}
  >
    {darkMode ? "☀️" : "🌙"}
  </button>
</nav>

{/* MOBILE MENU */}
{mobileMenu && (
  <div
    className={`fixed top-26 animate-fadeIn left-0 w-full z-40 flex flex-col items-center gap-8 py-10 backdrop-blur-2xl md:hidden ${
      darkMode
        ? "bg-black/30 backdrop-blur-2xl text-white border-b border-white/10"
        : "bg-white/30 backdrop-blur-2xl text-slate-900 border-b border-slate-200"
    }`}
  >
    <a
      href="#"
      onClick={() => setMobileMenu(false)}
      className="text-xl hover:text-amber-400"
    >
      Home
    </a>

    <a
      href="#about"
      onClick={() => setMobileMenu(false)}
      className="text-xl hover:text-amber-400"
    >
      About
    </a>

    <a
      href="#achievements"
      onClick={() => setMobileMenu(false)}
      className="text-xl hover:text-amber-400"
    >
      Achievements
    </a>

    <a
      href="#services"
      onClick={() => setMobileMenu(false)}
      className="text-xl hover:text-amber-400"
    >
      Practice Areas
    </a>

    <a
      href="#contact"
      onClick={() => setMobileMenu(false)}
      className="text-xl hover:text-amber-400"
    >
      Contact
    </a>
  </div>
)}

      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] md:min-h-[85vh] lg:h-screen overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1600&auto=format&fit=crop"
          alt="Lady Justice"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* CONTENT */}
        <div className="relative z-10 h-full flex flex-col justify-between px-8 md:px-20 py-10">
          {/* MAIN CONTENT */}
          <div className="max-w-3xl mt-28">
            <p className="uppercase tracking-[0.3em] text-amber-400 font-semibold mb-6">
              Trusted Legal Guidance
            </p>

            <h1 className="text-5xl md:text-5xl font-bold leading-tight text-white">
              Justice. Integrity. Commitment
            </h1>

            <p className="mt-8 text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl">
              Delivering dependable legal services with a strong focus on protecting client rights, resolving disputes efficiently, and achieving the best possible legal outcomes through strategic advocacy and professional excellence.
            </p>
          </div>        </div>
      </section>
      
      {/* ABOUT */}
      <section
        id="about"
        className={`py-24 px-8 md:px-20 ${
          darkMode
            ? "bg-slate-950 text-white"
            : "bg-white text-slate-800"
        }`}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <img
            src={lawyerImage}
            alt="Lawyer"
            className="rounded-3xl shadow-2xl w-[70%] mx-auto"
          />

          <div>
            <p className="uppercase tracking-[0.3em] text-amber-500 font-semibold mb-4">
              About Advocate
            </p>

            <h2 className="text-5xl font-bold leading-tight mb-8">
              Dedicated To Protecting Your Rights
            </h2>

            <p
              className={`text-lg leading-relaxed ${
                darkMode
                  ? "text-slate-300"
                  : "text-slate-600"
              }`}
            >
              Providing strategic legal counsel and personalized
              representation across a wide range of legal
              matters. Every case is handled with integrity,
              professionalism, and a commitment to achieving
              the best possible outcome for clients.
            </p>

            <a href="#contact">
              <button className="cursor-pointer mt-10 bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-xl font-semibold transition">
                Schedule Consultation
                </button>
              </a>
          </div>
        </div>
      </section>
      {/* ACHIEVEMENTS SECTION */}
<section id="achievements"
  className={`py-20 px-4 sm:px-6 lg:px-20 transition-all duration-500 ${
    darkMode
      ? "bg-slate-950 text-white"
      : "bg-white text-slate-900"
  }`}
>
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">
      <p className="uppercase tracking-[0.3em] text-amber-500 font-semibold mb-4">
        Professional Excellence
      </p>

      <h2 className="text-4xl md:text-5xl font-bold">
        Trusted Legal Representation
      </h2>
    </div>

    <div className="flex flex-wrap justify-center gap-8">
      {[
        ["94%", "Happy Clients"],
        ["2+", "Years Experience"],
        ["24×7", "Legal Support"],
      ].map(([num, label]) => (
        <div
          key={label}
          className={`w-full sm:w-[300px] rounded-3xl p-6 md:p-10 text-center shadow-xl transition duration-300 hover:-translate-y-2 ${
  darkMode
    ? "bg-slate-900"
    : "bg-slate-50"
}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-amber-500">
            {num}
          </h2>

          <p
            className={`mt-4 text-lg ${
              darkMode
                ? "text-slate-300"
                : "text-slate-600"
            }`}
          >
            {label}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* PRACTICE AREAS */}
      <section
        id="services"
        className={`py-24 px-8 md:px-20 transition ${
          darkMode
            ? "bg-slate-950 text-white"
            : "bg-white text-slate-900"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-amber-500 font-semibold mb-4">
              Practice Areas
            </p>

            <h2 className="text-5xl font-bold">
              Legal Services Offered
            </h2>

            <p
              className={`mt-6 max-w-3xl mx-auto text-lg ${
                darkMode
                  ? "text-slate-100"
                  : "text-slate-600"
              }`}
            >
              Dedicated legal assistance tailored to
              individuals, families, and businesses with a
              client-focused and result-oriented approach.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Family Law",
                desc: "Guidance and representation for divorce, custody, maintenance, and family disputes.",
                icon: (
                  <Scale className="w-14 h-14 text-amber-500" />
                ),
              },

              {
                title: "Property Law",
                desc: "Legal support for property disputes, documentation, and ownership matters.",
                icon: (
                  <Landmark className="w-14 h-14 text-amber-500" />
                ),
              },

              {
                title: "Corporate Law",
                desc: "Professional legal advice for contracts, compliance, and business matters.",
                icon: (
                  <Building2 className="w-14 h-14 text-amber-500" />
                ),
              },

              {
                title: "Criminal Defense",
                desc: "Strong legal representation focused on protecting your rights and interests.",
                icon: (
                  <ShieldCheck className="w-14 h-14 text-amber-500" />
                ),
              },
              {
  title: "Legal Drafting",
  desc: "Preparation and review of legal notices, agreements, affidavits, contracts, and other legal documents.",
  icon: (
    <Scale className="w-14 h-14 text-amber-500" />
  ),
},

{
  title: "Litigation Support",
  desc: "Professional assistance in handling court proceedings, case preparation, filings, and legal representation.",
  icon: (
    <Landmark className="w-14 h-14 text-amber-500" />
  ),
},
            ].map((service) => (
              <div
                key={service.title}
                className={`rounded-3xl p-8 hover:-translate-y-2 transition duration-300 shadow-xl ${
                  darkMode
                    ? "bg-slate-900"
                    : "bg-white"
                }`}
              >
                <div className="mb-6 flex justify-center">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-center">
                  {service.title}
                </h3>

                <p
                  className={`text-center leading-relaxed ${
                    darkMode
                      ? "text-slate-100"
                      : "text-slate-600"
                  }`}
                >
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className={`py-24 px-4 sm:px-6 lg:px-20 ${
          darkMode
            ? "bg-slate-950 text-white"
            : "bg-slate-50 text-slate-800"
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-amber-500 font-semibold mb-4">
              Contact
            </p>

            <h2 className="text-5xl font-bold">
              Request Legal Consultation
            </h2>
          </div>

          <form
            onSubmit={sendEmail}
            className={`shadow-2xl rounded-3xl p-10 space-y-6 ${
              darkMode
                ? "bg-slate-900"
                : "bg-white"
            }`}
          >
            <input
              className={`w-full border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                darkMode
                  ? "bg-slate-800 border-slate-700 text-white"
                  : "border-slate-200"
              }`}
              type="text"
              name="from_name"
              placeholder="Your Name"
              value={formData.from_name}
              onChange={handleChange}
              required
            />

            <input
              className={`w-full border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                darkMode
                  ? "bg-slate-800 border-slate-700 text-white"
                  : "border-slate-200"
              }`}
              type="email"
              name="from_email"
              placeholder="Your Email"
              value={formData.from_email}
              onChange={handleChange}
              required
            />

            <textarea
              className={`w-full border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                darkMode
                  ? "bg-slate-800 border-slate-700 text-white"
                  : "border-slate-200"
              }`}
              rows="6"
              name="message"
              placeholder="Describe your legal inquiry..."
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button
              className="cursor-pointer w-full bg-amber-500 hover:bg-amber-400 text-black py-4 rounded-xl font-semibold text-lg transition"
              type="submit"
            >
              Send Inquiry
            </button>

            {status && (
              <p className="text-center mt-4">
                {status}
              </p>
            )}
          </form>

        </div>
      </section>

      {/* DISCLAIMER MODAL */}
      {showDisclaimer && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div
            className={`max-w-2xl rounded-3xl p-8 shadow-2xl ${
              darkMode
                ? "bg-slate-900 text-white"
                : "bg-white text-slate-900"
            }`}
          >
            <h2 className="text-3xl font-bold mb-6 text-center">
              Disclaimer
            </h2>

            <p
              className={`leading-relaxed text-sm md:text-base ${
                darkMode
                  ? "text-slate-300"
                  : "text-slate-600"
              }`}
            >
              <p className="mb-4">
    The Bar Council of India does not permit solicitation of work and advertising by legal practitioners and advocates. By accessing the Medhavi Mahesh Dalvi website (my website), the user acknowledges that:
  </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
    <li>
      The user wishes to gain more information about me for his/her information and use. He/She also acknowledges that there has been no attempt by me to advertise or solicit work.
    </li>
    <li>
      Any information obtained or downloaded by the user from my website does not lead to the creation of the client - attorney relationship between the me and the user.
    </li>
    <li>
      None of the information contained in my website amounts to any form of legal opinion or legal advice.
    </li>
    <li>
      All information contained in this website is the intellectual property of Medhavi Mahesh Dalvi.
    </li>
    <li>
      By using the site you are agree to the terms and policies.
    </li>
  </ul>     
  </p>            

            <div className="flex justify-center mt-8">
              <button
                onClick={() => {
                  localStorage.setItem(
                    "disclaimerAccepted",
                    "true"
                  );

                  setShowDisclaimer(false);
                }}
                className="bg-amber-500 hover:bg-amber-400 text-black px-8 py-3 rounded-xl font-semibold transition cursor-pointer"
              >
                I Agree
              </button>
            </div>
          </div>
        </div>
      )}
      {/* FOOTER */}
      <footer
        className={`py-10 text-center ${
          darkMode
            ? "bg-black text-slate-500"
            : "bg-slate-50 text-slate-800"
        }`}
      >
        <p>© 2026 Adv. Medhavi Mahesh Dalvi All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PageHeroBanner from "@/components/PageHeroBanner";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  const sections = [
    { number: 1, title: "Collection of Personal Information" },
    { number: 2, title: "Usage of Information" },
    { number: 3, title: "Billing and Financial Information" },
    { number: 4, title: "Technical Logs and Cookies" },
    { number: 5, title: "Sharing and Documenting Clinical Records" },
    { number: 6, title: "Updates to the Privacy Policy" },
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Vijaya Eye Clinic</title>
        <meta name="description" content="Privacy Policy for Vijaya Eye Clinic. We are committed to protecting your personal information and maintaining your privacy." />
        <link rel="canonical" href="https://vijayaeyeclinic.com/privacy-policy" />
        <meta property="og:title" content="Privacy Policy | Vijaya Eye Clinic" />
        <meta property="og:description" content="Privacy Policy for Vijaya Eye Clinic. We are committed to protecting your personal information." />
        <meta property="og:url" content="https://vijayaeyeclinic.com/privacy-policy" />
        <meta name="twitter:title" content="Privacy Policy | Vijaya Eye Clinic" />
        <meta name="twitter:description" content="Privacy Policy for Vijaya Eye Clinic. We are committed to protecting your personal information." />
      </Helmet>
      <Header />
      <main>
        <PageHeroBanner
          title="Privacy Policy"
          breadcrumbs={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]}
        />

        {/* Table of Contents */}
        <section className="section-padding bg-primary/5">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                Quick Navigation
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {sections.map((s) => (
                  <a
                    key={s.number}
                    href={`#section-${s.number}`}
                    className="p-3 rounded-lg bg-card border border-border/50 hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    <span className="text-primary font-semibold">Section {s.number}</span>
                    <p className="text-sm text-foreground">{s.title}</p>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Privacy Policy – Vijaya Eye Clinic</h2>

              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded mb-8">
                <p className="text-foreground font-medium mb-4">
                  Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information in compliance with Indian laws.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Compliance:</strong> Section 43A of IT Act 2000, SPI Rules 2011, and IT (Intermediaries Guidelines) Rules 2011.
                </p>
              </div>

              <div className="space-y-8">
                {/* Section 1 */}
                <motion.div
                  id="section-1"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="flex items-center gap-3 mb-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">1</span>
                    <span>Collection of Personal Information</span>
                  </h3>
                  <div className="pl-11 space-y-4 text-foreground/80">
                    <p>
                      The nature of services provided by <strong>Vijaya Eye Clinic</strong> requires us to know who you are so that we can best meet your needs.
                    </p>
                    <div className="bg-card p-4 rounded-lg border border-border/50">
                      <p className="font-semibold text-foreground mb-3">Information we collect includes:</p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex gap-2"><span className="text-primary">•</span> <span><strong>Contact data:</strong> Mobile number, email, phone</span></li>
                        <li className="flex gap-2"><span className="text-primary">•</span> <span><strong>Demographic data:</strong> Gender, nationality, date of birth, address</span></li>
                        <li className="flex gap-2"><span className="text-primary">•</span> <span><strong>Usage data:</strong> Service history and transaction records</span></li>
                        <li className="flex gap-2"><span className="text-primary">•</span> <span><strong>Health data:</strong> Medical history, prescriptions, clinical records</span></li>
                        <li className="flex gap-2"><span className="text-primary">•</span> <span><strong>Voluntary information:</strong> Any data you choose to share via emails or direct communication</span></li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Section 2 */}
                <motion.div
                  id="section-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h3 className="flex items-center gap-3 mb-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">2</span>
                    <span>Usage of Information</span>
                  </h3>
                  <div className="pl-11 space-y-4 text-foreground/80">
                    <p>
                      We use your information to provide clinical services, improve our systems, and communicate with you about your care.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-card p-4 rounded-lg border border-border/50">
                        <p className="font-semibold text-foreground mb-3">Primary Uses:</p>
                        <ul className="space-y-2 text-sm">
                          <li>• Clinical healthcare services</li>
                          <li>• Statistical analysis</li>
                          <li>• Healthcare intelligence</li>
                          <li>• Care optimization</li>
                        </ul>
                      </div>
                      <div className="bg-card p-4 rounded-lg border border-border/50">
                        <p className="font-semibold text-foreground mb-3">Secondary Uses:</p>
                        <ul className="space-y-2 text-sm">
                          <li>• Appointment reminders</li>
                          <li>• Feedback & surveys</li>
                          <li>• System improvements</li>
                          <li>• Service communication</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Section 3 */}
                <motion.div
                  id="section-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="flex items-center gap-3 mb-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">3</span>
                    <span>Billing and Financial Information</span>
                  </h3>
                  <div className="pl-11 space-y-4 text-foreground/80">
                    <p>
                      For services requiring payment, we collect financial information through secure, encrypted payment gateways.
                    </p>
                    <div className="bg-card p-4 rounded-lg border border-border/50">
                      <p className="text-sm"><strong>Security Note:</strong> All financial details are transacted on secure, digitally encrypted payment gateway sites, providing the highest standard of care per industry technology standards.</p>
                    </div>
                  </div>
                </motion.div>

                {/* Section 4 */}
                <motion.div
                  id="section-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="flex items-center gap-3 mb-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">4</span>
                    <span>Technical Logs and Cookies</span>
                  </h3>
                  <div className="pl-11 space-y-4 text-foreground/80">
                    <p>
                      We automatically collect technical information to analyze trends and improve our digital services.
                    </p>
                    <div className="bg-card p-4 rounded-lg border border-border/50">
                      <p className="text-sm"><strong>Data Collected:</strong> IP address, operating system, browser type, ISP name, and usage patterns. This information helps us enhance service delivery while maintaining your privacy.</p>
                    </div>
                  </div>
                </motion.div>

                {/* Section 5 */}
                <motion.div
                  id="section-5"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3 className="flex items-center gap-3 mb-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">5</span>
                    <span>Sharing and Documenting Clinical Records</span>
                  </h3>
                  <div className="pl-11 space-y-4 text-foreground/80">
                    <p>
                      Your information is shared with our medical professionals to provide you with the best possible care and treatment guidance.
                    </p>
                  </div>
                </motion.div>

                {/* Section 6 */}
                <motion.div
                  id="section-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h3 className="flex items-center gap-3 mb-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">6</span>
                    <span>Updates to the Privacy Policy</span>
                  </h3>
                  <div className="pl-11 space-y-4 text-foreground/80">
                    <p>
                      <strong>Vijaya Eye Clinic</strong> may update this Privacy Policy at any time. Significant changes will be displayed on our website or communicated via email.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default PrivacyPolicy;

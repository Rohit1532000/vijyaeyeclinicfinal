import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PageHeroBanner from "@/components/PageHeroBanner";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Helmet } from "react-helmet-async";

const TermsAndConditions = () => {
  const sections = [
    { letter: "A", title: "General Use of the Website & Portals" },
    { letter: "B", title: "Appointment Bookings and Medical Services" },
    { letter: "C", title: "Online Payment Gateway & Security" },
    { letter: "D", title: "Transaction Charges and Fees" },
    { letter: "E", title: "Limitation of Liability" },
    { letter: "F", title: "Severability and Jurisdiction" },
  ];

  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Vijaya Eye Clinic</title>
        <meta name="description" content="Terms and Conditions for Vijaya Eye Clinic website and services. Please read carefully before using our services." />
        <link rel="canonical" href="https://vijayaeyeclinic.com/terms-and-conditions" />
        <meta property="og:title" content="Terms & Conditions | Vijaya Eye Clinic" />
        <meta property="og:description" content="Terms and Conditions for Vijaya Eye Clinic website and services. Please read carefully." />
        <meta property="og:url" content="https://vijayaeyeclinic.com/terms-and-conditions" />
        <meta name="twitter:title" content="Terms & Conditions | Vijaya Eye Clinic" />
        <meta name="twitter:description" content="Terms and Conditions for Vijaya Eye Clinic website and services." />
      </Helmet>

      <main>
        <PageHeroBanner
          title="Terms and Conditions"
          breadcrumbs={[
            { label: "Home", to: "/" },
            { label: "Terms and Conditions" },
          ]}
        />

        {/* Quick Navigation */}
        <section className="section-padding bg-primary/5">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-primary" />
                Quick Navigation
              </h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {sections.map((s) => (
                  <a
                    key={s.letter}
                    href={`#section-${s.letter}`}
                    className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                  >
                    <span className="text-primary font-semibold">
                      Section {s.letter}
                    </span>

                    <p className="text-sm text-foreground mt-1">
                      {s.title}
                    </p>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-10">
                <h2 className="text-3xl font-heading font-bold text-foreground mb-3">
                  Terms and Conditions
                </h2>

                <p className="text-muted-foreground">
                  For Vijaya Eye Clinic, Bangalore
                </p>
              </div>

              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-xl mb-10">
                <p className="text-foreground font-medium mb-3">
                  Welcome to Vijaya Eye Clinic. These Terms and Conditions
                  govern your use of our website, online portals, appointment
                  booking systems, and online payment services.
                </p>

                <p className="text-sm text-muted-foreground">
                  By accessing our website or using our services, you agree to
                  be bound by these terms.
                </p>
              </div>

              <div className="space-y-10">
                {/* Section A */}
                <motion.div
                  id="section-A"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="flex items-center gap-3 text-xl font-semibold mb-5">
                    <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      A
                    </span>

                    <span>General Use of the Website & Portals</span>
                  </h3>

                  <div className="pl-12 space-y-4">
                    <div className="bg-card border border-border/50 rounded-xl p-5">
                      <p className="font-semibold mb-2">
                        1. Acceptance of Terms
                      </p>

                      <p className="text-sm text-muted-foreground">
                        You affirm that you are at least 18 years of age and
                        legally competent to enter into this agreement.
                      </p>
                    </div>

                    <div className="bg-card border border-border/50 rounded-xl p-5">
                      <p className="font-semibold mb-2">
                        2. Sole Discretion
                      </p>

                      <p className="text-sm text-muted-foreground">
                        Disclosure of details relating to your website use is at
                        the sole discretion of Vijaya Eye Clinic.
                      </p>
                    </div>

                    <div className="bg-card border border-border/50 rounded-xl p-5">
                      <p className="font-semibold mb-2">
                        3. Intellectual Property
                      </p>

                      <p className="text-sm text-muted-foreground">
                        All content, logos, and graphics are the intellectual
                        property of Vijaya Eye Clinic and cannot be reproduced
                        without written consent.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Section B */}
                <motion.div
                  id="section-B"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="flex items-center gap-3 text-xl font-semibold mb-5">
                    <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      B
                    </span>

                    <span>Appointment Bookings and Medical Services</span>
                  </h3>

                  <div className="pl-12 space-y-4">
                    <div className="bg-card border border-border/50 rounded-xl p-5">
                      <p className="font-semibold mb-2">
                        1. Information Accuracy
                      </p>

                      <p className="text-sm text-muted-foreground">
                        Provide true, accurate, and current information when
                        booking appointments or registering.
                      </p>
                    </div>

                    <div className="bg-card border border-border/50 rounded-xl p-5">
                      <p className="font-semibold mb-2">
                        2. Consultation Limitations
                      </p>

                      <p className="text-sm text-muted-foreground">
                        Online scheduling does not substitute for in-person
                        ophthalmic evaluation.
                      </p>
                    </div>

                    <div className="bg-card border border-border/50 rounded-xl p-5">
                      <p className="font-semibold mb-2">
                        3. Emergency Care
                      </p>

                      <p className="text-sm text-muted-foreground">
                        For emergencies, visit our physical emergency room or
                        nearest emergency provider immediately.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Section C */}
                <motion.div
                  id="section-C"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="flex items-center gap-3 text-xl font-semibold mb-5">
                    <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      C
                    </span>

                    <span>Online Payment Gateway & Security</span>
                  </h3>

                  <div className="pl-12 space-y-4">
                    <div className="bg-card border border-border/50 rounded-xl p-5">
                      <p className="font-semibold mb-2">
                        1. User Authorization
                      </p>

                      <p className="text-sm text-muted-foreground">
                        Card details must be correct and lawfully owned by you.
                      </p>
                    </div>

                    <div className="bg-card border border-border/50 rounded-xl p-5">
                      <p className="font-semibold mb-2">
                        2. Payment Confirmation
                      </p>

                      <p className="text-sm text-muted-foreground">
                        You confirm you are authorized to use the payment method
                        and have sufficient funds.
                      </p>
                    </div>

                    <div className="bg-card border border-border/50 rounded-xl p-5">
                      <p className="font-semibold mb-2">
                        3. Data Security
                      </p>

                      <p className="text-sm text-muted-foreground">
                        Internet transmission carries inherent risks despite our
                        security measures.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Section D */}
                <motion.div
                  id="section-D"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="flex items-center gap-3 text-xl font-semibold mb-5">
                    <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      D
                    </span>

                    <span>Transaction Charges and Fees</span>
                  </h3>

                  <div className="pl-12 space-y-4">
                    <div className="bg-card border border-border/50 rounded-xl p-5">
                      <p className="font-semibold mb-2">1. Clinic Fees</p>

                      <p className="text-sm text-muted-foreground">
                        We do not levy internal processing fees for online
                        payments.
                      </p>
                    </div>

                    <div className="bg-card border border-border/50 rounded-xl p-5">
                      <p className="font-semibold mb-2">
                        2. Third-Party Charges
                      </p>

                      <p className="text-sm text-muted-foreground">
                        Payment gateway charges and taxes are borne by the user.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Section E */}
                <motion.div
                  id="section-E"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="flex items-center gap-3 text-xl font-semibold mb-5">
                    <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      E
                    </span>

                    <span>Limitation of Liability</span>
                  </h3>

                  <div className="pl-12 space-y-4">
                    <div className="bg-card border border-border/50 rounded-xl p-5">
                      <p className="font-semibold mb-2">
                        1. Convenience Only
                      </p>

                      <p className="text-sm text-muted-foreground">
                        This service is provided as a convenience to users.
                      </p>
                    </div>

                    <div className="bg-card border border-border/50 rounded-xl p-5">
                      <p className="font-semibold mb-2">
                        2. Service Termination
                      </p>

                      <p className="text-sm text-muted-foreground">
                        Vijaya Eye Clinic reserves the right to suspend online
                        services anytime.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Section F */}
                <motion.div
                  id="section-F"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="flex items-center gap-3 text-xl font-semibold mb-5">
                    <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      F
                    </span>

                    <span>Severability and Jurisdiction</span>
                  </h3>

                  <div className="pl-12 space-y-4">
                    <div className="bg-card border border-border/50 rounded-xl p-5">
                      <p className="font-semibold mb-2">Governing Law</p>

                      <p className="text-sm text-muted-foreground">
                        These terms are governed by Indian laws and subject to
                        Bangalore jurisdiction.
                      </p>
                    </div>
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

export default TermsAndConditions;
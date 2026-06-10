import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PageHeroBanner from "@/components/PageHeroBanner";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, RefreshCw } from "lucide-react";
import { Helmet } from "react-helmet-async";

const RefundAndReturns = () => {
  const sections = [
    { number: 1, title: "Refund for Chargeback Transactions" },
    { number: 2, title: "Refund for Fraudulent or Duplicate Transactions" },
    { number: 3, title: "Server Issues / Session Timeout" },
    { number: 4, title: "Cancellations" },
    { number: 5, title: "Refund Processing Time" },
    { number: 6, title: "Contact Us" },
  ];

  return (
    <>
      <Helmet>
        <title>Refund & Returns Policy | Vijaya Eye Clinic</title>
        <meta name="description" content="Refund and Returns Policy for Vijaya Eye Clinic. Information about our refund procedures and terms." />
        <link rel="canonical" href="https://vijayaeyeclinic.com/refund-and-returns" />
        <meta property="og:title" content="Refund & Returns Policy | Vijaya Eye Clinic" />
        <meta property="og:description" content="Refund and Returns Policy for Vijaya Eye Clinic. Information about our refund procedures." />
        <meta property="og:url" content="https://vijayaeyeclinic.com/refund-and-returns" />
        <meta name="twitter:title" content="Refund & Returns Policy | Vijaya Eye Clinic" />
        <meta name="twitter:description" content="Refund and Returns Policy for Vijaya Eye Clinic. Information about our refund procedures." />
      </Helmet>
      <Header />
      <main>
        <PageHeroBanner
          title="Refund and Returns Policy"
          breadcrumbs={[{ label: "Home", to: "/" }, { label: "Refund and Returns Policy" }]}
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
                <RefreshCw className="w-6 h-6 text-primary" />
                Quick Navigation
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {sections.map((s) => (
                  <a
                    key={s.number}
                    href={`#section-${s.number}`}
                    className="p-3 rounded-lg bg-card border border-border/50 hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    <span className="text-primary font-semibold">Section {s.number}</span>
                    <p className="text-xs text-foreground line-clamp-2">{s.title}</p>
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
              <h2 className="text-2xl font-heading font-bold text-foreground mb-2">Refund and Returns Policy</h2>
              <p className="text-muted-foreground mb-8">
                Vijaya Eye Clinic, Bangalore
              </p>

              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded mb-8">
                <p className="text-foreground font-medium mb-2">
                  Our refund policy ensures that all transactions are handled fairly and transparently.
                </p>
                <p className="text-sm text-muted-foreground">
                  We handle refunds, chargebacks, and transaction issues promptly and professionally.
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
                    <span>Refund for Chargeback Transactions</span>
                  </h3>
                  <div className="pl-11 space-y-3 text-foreground/80">
                    <p>If a chargeback occurs for any reason regarding your payment or billing, please contact Vijaya Eye Clinic directly.</p>
                    <div className="bg-card p-4 rounded-lg border border-border/50 space-y-2">
                      <div>
                        <p className="font-semibold text-foreground mb-1">Process</p>
                        <p className="text-sm">Refunds, if approved after verification, will be processed through the payment gateway, demand draft, or another method determined by our management.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Claims</p>
                        <p className="text-sm">Do not make claims directly to the payment provider or bank. Such claims will not be entertained without prior resolution with the clinic.</p>
                      </div>
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
                    <span>Refund for Fraudulent or Duplicate Transactions</span>
                  </h3>
                  <div className="pl-11 space-y-3 text-foreground/80">
                    <p>For fraudulent or duplicate transactions, contact us directly for immediate assistance.</p>
                    <div className="bg-card p-4 rounded-lg border border-border/50">
                      <p className="text-sm">Our billing and finance team will review and resolve these issues promptly according to our policies.</p>
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
                    <span>Server Issues / Session Timeout</span>
                  </h3>
                  <div className="pl-11 space-y-3 text-foreground/80">
                    <p>If our website or payment gateway experiences technical issues, follow these steps:</p>
                    <div className="bg-card p-4 rounded-lg border border-border/50 space-y-2">
                      <div>
                        <p className="font-semibold text-foreground mb-1 text-sm">✓ If Your Account Was Debited</p>
                        <p className="text-sm">Do not attempt another payment. Contact us immediately via email or phone to confirm the transaction status.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1 text-sm">✓ If Your Account Was NOT Debited</p>
                        <p className="text-sm">You may safely initiate a new transaction.</p>
                      </div>
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
                    <span>Cancellations</span>
                  </h3>
                  <div className="pl-11 space-y-3 text-foreground/80">
                    <p>Payments cannot be automatically canceled after completion. However, if you cannot fulfill an appointment or service, contact our administrative team to request a refund.</p>
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
                    <span>Refund Processing Time</span>
                  </h3>
                  <div className="pl-11 space-y-3 text-foreground/80">
                    <div className="bg-card p-4 rounded-lg border border-border/50">
                      <p className="font-semibold text-foreground mb-2">Timeline</p>
                      <p className="text-sm">Once a refund request is evaluated and approved by our management, the amount will be credited back to the original payment method within <strong>7-10 working days</strong>.</p>
                    </div>
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
                    <span>Contact Us</span>
                  </h3>
                  <div className="pl-11 space-y-4">
                    <p className="text-foreground/80 text-sm">For any grievances, clarifications, or support regarding payments, refunds, and cancellations:</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-primary/5 p-4 rounded-lg border border-border/50">
                        <div className="flex items-start gap-3 mb-2">
                          <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-foreground text-sm">Location</p>
                            <p className="text-xs text-muted-foreground">Vijaya Nagar, Bangalore, Karnataka, India</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-primary/5 p-4 rounded-lg border border-border/50">
                        <div className="flex items-start gap-3 mb-2">
                          <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-foreground text-sm">Email</p>
                            <p className="text-xs text-muted-foreground">care@vijayaeyeclinic.com</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-primary/5 p-4 rounded-lg border border-border/50">
                        <div className="flex items-start gap-3">
                          <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-foreground text-sm">Phone</p>
                            <p className="text-xs text-muted-foreground">9739302523</p>
                          </div>
                        </div>
                      </div>
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

export default RefundAndReturns;

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeroBanner from "@/components/PageHeroBanner";
import FloatingButtons from "@/components/FloatingButtons";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";

const branches = [
  {
    name: "Vijayanagar Branch (Main)",
    address: "Pv Plaza, #2, 5th Main Road MC Layout, Opp. to Sarvajna Bus Stop, Near Govindharajanagra Signal, Vijayanagar, Bengaluru, Karnataka 560040",
    phone: "097393 02523",
    phone2: "",
    email: "info@vijayaeyeclinic.com",
    hours: "Mon - Sat: 9:00 AM - 9:30 PM",
  },
  {
    name: "Nagadevanahalli Branch",
    address: "12/2/B, Outer Ring Rd, Bhuvaneshwari Nagar, Nagadevanahalli, Bengaluru, Karnataka 560060",
    phone: "070900 01581",
    phone2: "",
    email: "hello@vijayaeyeclinic.com",
    hours: "Mon - Sat: 9:00 AM - 9:30 PM",
  },
];

const ContactUs = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      toast({ title: "Error", description: "Please fill all required fields", variant: "destructive" });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "55c13658-6cc1-49bd-b8b5-b5a7e8f9d2c1",
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject || "New Contact Form Submission",
          message: form.message,
          from_name: form.name,
          from_email: form.email,
          to_email: "rohitsingh1532002@gmail.com",
          redirect: window.location.href,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast({ title: "Success", description: "Your inquiry has been sent successfully!" });
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        toast({ title: "Error", description: data.message || "Failed to send inquiry", variant: "destructive" });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Vijaya Eye Clinic Bangalore</title>
        <meta
          name="description"
          content="Get in touch with Vijaya Eye Clinic. Find our contact information, branch locations, and inquiry form for all eye care needs in Bangalore."
        />
        <meta
          name="keywords"
          content="contact vijaya eye clinic, eye clinic bangalore contact, ophthalmologist contact, medical inquiry, eye hospital address"
        />
        <link rel="canonical" href="https://vijayaeyeclinic.com/contact-us" />
        <meta property="og:title" content="Contact Us | Vijaya Eye Clinic Bangalore" />
        <meta
          property="og:description"
          content="Get in touch with Vijaya Eye Clinic. Find our contact information, branch locations, and inquiry form for all eye care needs in Bangalore."
        />
        <meta property="og:url" content="https://vijayaeyeclinic.com/contact-us" />
        <meta name="twitter:title" content="Contact Us | Vijaya Eye Clinic Bangalore" />
        <meta
          name="twitter:description"
          content="Get in touch with Vijaya Eye Clinic. Find our contact information, branch locations, and inquiry form for all eye care needs."
        />
      </Helmet>
      <Header />
      <PageHeroBanner
        title="Contact Us"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact Us" }]}
      />

      {/* Contact Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            {branches.map((b, i) => (
              <motion.div
                key={b.name}
                className="bg-card rounded-xl p-8 shadow-md border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-xl font-heading font-bold text-foreground mb-6">{b.name}</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">{b.address}</span>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 flex-shrink-0 text-primary" />
                    <div className="text-muted-foreground">
                      <a href={`tel:${b.phone.replace(/\s/g, "")}`} className="hover:text-primary">{b.phone}</a>
                      {b.phone2 && <><br /><a href={`tel:${b.phone2}`} className="hover:text-primary">{b.phone2}</a></>}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Mail className="w-5 h-5 flex-shrink-0 text-primary" />
                    <a href={`mailto:${b.email}`} className="text-muted-foreground hover:text-primary">{b.email}</a>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="w-5 h-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">{b.hours}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-4">
            Send Us A Message
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            Have questions about our services? We'd love to hear from you. Fill out the form below and our team will get back to you shortly.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 bg-card rounded-xl p-8 shadow-md border">
            <div className="grid md:grid-cols-2 gap-4">
              <Input 
                placeholder="Full Name *" 
                className="rounded-lg" 
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <Input 
                placeholder="Email Address *" 
                type="email" 
                className="rounded-lg" 
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Input 
                placeholder="Phone Number *" 
                type="tel" 
                className="rounded-lg" 
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
              />
              <Input 
                placeholder="Subject" 
                className="rounded-lg" 
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
            </div>
            <Textarea 
              placeholder="Your Message..." 
              rows={5} 
              className="rounded-lg" 
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <Button 
              type="submit" 
              className="w-full rounded-full gradient-primary"
              disabled={isLoading}
            >
              <Send className="w-4 h-4 mr-2" /> {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </section>

    {/* Map */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-8">
          Find Us On Map
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-heading font-bold text-foreground mb-3">Vijayanagar Branch</h3>
            <div className="rounded-xl overflow-hidden shadow-md aspect-video bg-muted/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.941370343998!2d77.53621907507649!3d12.975601787340164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3de622d18e2b%3A0x55e2986bd062a241!2sVijaya%20Eye%20Clinic%20Super%20Speciality%20Eye%20Hospital%20%7C%20Lasik%2C%20Glaucoma%2C%20Retina%2C%20Cornea%20Specialist%20In%20Vijayanagar%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1779777873140!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Vijayanagar Branch Map"
              />
            </div>
          </div>
          <div>
            <h3 className="font-heading font-bold text-foreground mb-3">Nagadevanahalli Branch</h3>
            <div className="rounded-xl overflow-hidden shadow-md aspect-video bg-muted/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4830328339985!2d77.49056467507592!3d12.940913487371642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f7c1c622251%3A0xf5e58590897a105d!2sVijaya%20Eye%20Clinic%20Super%20Speciality%20Eye%20Hospital%20%7C%20Best%20Eye%20Specialist%20In%20Nagdevanahalli%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1779777725569!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Nagadevanahalli Branch Map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

      <Footer />
      <FloatingButtons />
    </>
  );
};

export default ContactUs;

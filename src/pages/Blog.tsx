import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeroBanner from "@/components/PageHeroBanner";
import FloatingButtons from "@/components/FloatingButtons";
import { motion } from "framer-motion";
import { User, Calendar, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const blogPosts = [
  {
    category: "Comprehensive Eye Examination",
    title: "Free Comprehensive Eye Check-Up In Nagdevanahalli – Limited Time Offer!",
    author: "ADMIN",
    date: "May 29, 2025",
    excerpt: "Add Your Heading Text Here Add Your Heading Text Here. Get a free comprehensive eye examination at our new Nagdevanahalli branch.",
    comments: 0,
  },
  {
    category: "Eye Care",
    title: "Digital Eye Strain – A Growing Concern In Bangalore's Digital Lifestyle",
    author: "ADMIN",
    date: "May 18, 2025",
    excerpt: "Digital Eye Strain – A Growing Concern in Bangalore's Digital Lifestyle. Suffering from digital eye strain? Visit Vijaya Eye Clinic...",
    comments: 0,
  },
  {
    category: "Eye Care",
    title: "Experience The Future Of Eye Care In Bangalore: 20-Minute OPD Checkout & Free Eye Tests For Senior Citizens!",
    author: "ADMIN",
    date: "February 19, 2025",
    excerpt: "Experience the Future of Eye Care in Bangalore: 20-Minute OPD Checkout & Free Eye Tests for Seniors! In the bustling...",
    comments: 0,
  },
  {
    category: "Eye Care",
    title: "Looking Towards 2025: The Power Of Insightful Eye Care Trends",
    author: "",
    date: "January 9, 2025",
    excerpt: "Looking Towards 2025: The Power of Insightful Eye Care Trends. Discover the key eye care trends of 2025 at Vijaya...",
    comments: 0,
  },
  {
    category: "Cornea",
    title: "Revolutionary C3R Treatment For Keratoconus In Bangalore: Say Goodbye To Vision Challenges",
    author: "",
    date: "December 8, 2024",
    excerpt: "Revolutionary C3R Treatment for Keratoconus in Bangalore. Say Goodbye to Vision Challenges. What is C3R (Corneal Collagen Cross-linking with Riboflavin)?...",
    comments: 0,
  },
];

const Blog = () => (
  <>
    <Helmet>
      <title>Eye Care Blog | Health Tips & Articles - Vijaya Eye Clinic</title>
      <meta name="description" content="Read our eye care blog for health tips, medical articles, and insights about maintaining healthy eyes and vision." />
      <meta name="keywords" content="eye care blog, health tips, medical articles, vision health, eye wellness" />
      <link rel="canonical" href="https://vijayaeyeclinic.com/blog" />
      <meta property="og:title" content="Eye Care Blog | Health Tips & Articles - Vijaya Eye Clinic" />
      <meta property="og:description" content="Read our eye care blog for health tips, medical articles, and insights about maintaining healthy eyes." />
      <meta property="og:url" content="https://vijayaeyeclinic.com/blog" />
      <meta name="twitter:title" content="Eye Care Blog | Health Tips & Articles - Vijaya Eye Clinic" />
      <meta name="twitter:description" content="Read our eye care blog for health tips, medical articles, and insights about maintaining healthy eyes." />
    </Helmet>
    <Header />
    <PageHeroBanner
      title="Vijaya Eye Clinic Blog"
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Blog" }]}
    />

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-2">TOP POSTS</h2>
        <h3 className="text-xl font-heading font-bold text-foreground mb-10">ALL POSTS</h3>

        <div className="space-y-10">
          {blogPosts.map((post, i) => (
            <motion.article
              key={i}
              className="grid md:grid-cols-2 gap-8 items-start pb-10 border-b border-border/50 last:border-b-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="bg-muted/30 rounded-xl aspect-video flex items-center justify-center">
                <span className="text-4xl font-heading font-bold text-primary/20">Blog Image</span>
              </div>
              <div>
                <span className="text-sm font-semibold text-primary">{post.category}</span>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mt-2 mb-3">
                  {post.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  {post.author && (
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" /> by {post.author}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <Button size="sm" className="rounded-full gradient-primary">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MessageCircle className="w-3 h-3" /> {post.comments}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-10">
          <Button variant="outline" size="sm" className="rounded-full" disabled>Previous</Button>
          <Button variant="outline" size="sm" className="rounded-full">Next</Button>
        </div>
      </div>
    </section>

    <Footer />
    <FloatingButtons />
  </>
);

export default Blog;

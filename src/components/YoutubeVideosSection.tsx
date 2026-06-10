import { motion } from "framer-motion";

const videos = [
  { id: "d8IkQ-IZ0Q4", title: "Patient Experience at Vijaya Eye Clinic" },
  { id: "SUl6JNh1MgQ", title: "Advanced Eye Care Procedures" },
  { id: "TpjT9ZIW30Y", title: "Our State-of-the-Art Facility" },
];

const YoutubeVideosSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
       
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
          Our Happy Patients
        </h2>
        
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {videos.map((video, i) => (
          <motion.div
            key={video.id}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-border/50 aspect-[9/16]">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <p className="mt-4 text-sm font-semibold text-foreground text-center">{video.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default YoutubeVideosSection;

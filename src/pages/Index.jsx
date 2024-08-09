import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, ArrowDown, Code, Brain, Rocket, Star } from 'lucide-react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'hero', title: 'Building AGI in Europe' },
    { id: 'about', title: 'About Me' },
    { id: 'projects', title: 'Projects' },
    { id: 'tweets', title: 'Latest Tweets' },
    { id: 'contact', title: 'Get in Touch' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Anton Osika</h1>
          <div className="space-x-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="text-center z-10">
          <motion.h1
            className="text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Building AGI in Europe
          </motion.h1>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Prev. CERN, Sana Labs, YC (2x top company)
          </motion.p>
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <a href="https://github.com/AntonOsika" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <Github size={24} />
            </a>
            <a href="https://twitter.com/antonosika" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <Twitter size={24} />
            </a>
            <a href="https://www.linkedin.com/in/antonosika/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <Linkedin size={24} />
            </a>
          </motion.div>
        </div>
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            background: `radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,0.1) 100%)`,
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ArrowDown size={32} className="text-gray-600" />
        </motion.div>
      </section>

      <section id="about" className="py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
            <motion.img
              src="https://avatars.githubusercontent.com/u/1655288?v=4"
              alt="Anton Osika"
              className="w-64 h-64 rounded-full shadow-lg"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="max-w-lg text-center md:text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-xl mb-4">
                I'm Anton Osika, an AI researcher and entrepreneur passionate about building AGI in Europe. With a background in physics from CERN and experience at Sana Labs and YC companies, I'm dedicated to pushing the boundaries of artificial intelligence.
              </p>
              <p className="text-xl">
                My current focus is on developing innovative AI tools and platforms that empower developers and reduce barriers to building advanced software systems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="GPT Engineer"
              description="An open-source project that generates entire codebases from a single prompt, revolutionizing the way developers approach software creation."
              icon={<Code size={48} />}
              link="https://github.com/AntonOsika/gpt-engineer"
            />
            <ProjectCard
              title="GPT Engineer App"
              description="A web application that allows anyone to build and deploy web apps using plain English, reducing barriers to software development."
              icon={<Brain size={48} />}
              link="https://gptengineer.app/"
            />
            <ProjectCard
              title="Lovable"
              description="An AI startup building software that builds software, aiming to transform the landscape of software development."
              icon={<Rocket size={48} />}
              link="https://www.lovable.ai/"
            />
          </div>
        </div>
      </section>

      <section id="tweets" className="py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Latest Tweets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TweetCard
              content="Introducing gpt-engineer App👶 since gpt-engineer became the world's most popular codegen project I have been tinkering with the next step: how to make it practical, ie allow anyone to build and deploy web–apps with plain english Mission: Reduce barriers to build"
              link="https://twitter.com/antonosika/status/1673332898056101888"
            />
            <TweetCard
              content="👶🤖 Introducing `gpt-engineer` ▸ One prompt generates a codebase ▸ Asks clarifying questions ▸ Generates technical spec ▸ Writes all necessary code ▸ Easy to add your own reasoning steps, modify, and experiment ▸ open source"
              link="https://twitter.com/antonosika/status/1670793470133960704"
            />
            <TweetCard
              content="Happy Valentine's Day everyone! And happy birthday Dad ❤️(my dad is awesome) Launching a new AI startup out of Europe today. Lovable. Needless to say, we're very excited about Lovable. We think it will be huge: We're building software that builds software."
              link="https://twitter.com/antonosika/status/1757687681233277242"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl mb-8">
            Interested in collaborating or learning more about my work? Feel free to reach out!
          </p>
          <a
            href="mailto:anton.osika@gmail.com"
            className="inline-block bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Anton Osika. All rights reserved.</p>
        </div>
      </footer>

      <motion.div
        className="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowDown size={24} className="transform rotate-180" />
      </motion.div>
    </div>
  );
};

const ProjectCard = ({ title, description, icon, link }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-2xl font-semibold ml-4">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800 font-semibold"
    >
      Learn More →
    </a>
  </motion.div>
);

const TweetCard = ({ content, link }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <p className="text-gray-800 mb-4">{content}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800 font-semibold"
    >
      View Tweet →
    </a>
  </motion.div>
);

export default Index;

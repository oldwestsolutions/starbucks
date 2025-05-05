import { motion } from 'framer-motion';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Head Barista',
      image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16',
      bio: 'With over 10 years of experience in specialty coffee, Sarah brings passion and expertise to every cup.',
    },
    {
      name: 'Michael Chen',
      role: 'Coffee Roaster',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      bio: 'Michael ensures that every bean is perfectly roasted to bring out its unique flavors and characteristics.',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Pastry Chef',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
      bio: 'Emma creates delicious pastries that perfectly complement our coffee selection.',
    },
  ];

  return (
    <div className="min-h-screen bg-coffee-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-coffee-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554118811-1e0d58224f24')] bg-cover bg-center opacity-50" />
        <div className="container relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl"
          >
            Crafting the perfect cup since 2015
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">The Brew Haven Journey</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2015, Brew Haven began as a small coffee cart with a big dream. Our founder,
                Sarah Johnson, wanted to create a space where people could experience exceptional coffee
                in a warm, welcoming environment.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we've grown into a beloved community hub where coffee enthusiasts and newcomers
                alike can discover the art of specialty coffee. We source our beans directly from
                sustainable farms around the world, ensuring both quality and ethical practices.
              </p>
              <p className="text-gray-600">
                Our commitment to excellence extends beyond the cup. We believe in creating memorable
                experiences, fostering community connections, and sharing our passion for coffee with
                everyone who walks through our doors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-coffee-600 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality',
                description: 'We never compromise on the quality of our coffee, from bean to cup.',
              },
              {
                title: 'Sustainability',
                description: "We're committed to sustainable practices and supporting ethical coffee farming.",
              },
              {
                title: 'Community',
                description: 'We believe in creating a welcoming space where everyone feels at home.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 
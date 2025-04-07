const Tracks = () => {
  const tracks = [
    {
      title: "Web3",
      description: "Dive into the decentralized future by building applications that leverage blockchain technology and smart contracts.",
      icon: "🌐"
    },
    {
      title: "Education",
      description: "Transform the learning experience by creating tools to bridge educational gaps and enhance accessibility.",
      icon: "📚"
    },
    {
      title: "Green Tech",
      description: "Pave the way for sustainable living by developing eco-friendly and energy-efficient solutions.",
      icon: "🌱"
    },
    {
      title: "Health",
      description: "Revolutionize healthcare with innovative technologies aimed at improving diagnosis, treatment, and well-being.",
      icon: "🏥"
    },
    {
      title: "Women Safety",
      description: "Contribute to a safer world by creating applications and systems that prioritize security and empowerment.",
      icon: "🛡️"
    },
    {
      title: "Cyber Security",
      description: "Tackle modern security challenges with robust solutions to protect data and privacy.",
      icon: "🔒"
    },
    {
      title: "Open Innovation",
      description: "Unleash your creativity and build anything that inspires you outside the predefined tracks.",
      icon: "💡"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Event Tracks</h2>
        <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Choose your path to innovation and make an impact in these exciting domains
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors group"
            >
              <div className="text-4xl mb-4">{track.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                {track.title}
              </h3>
              <p className="text-gray-400">{track.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks; 
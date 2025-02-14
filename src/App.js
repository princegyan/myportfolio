import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const projects = [
    {
      title: "Real-Time Video Conferencing App",
      description: "A web-based application that supports concurrent meetings, screen sharing, recording, and chat functionalities similar to Zoom. Features include user authentication, meeting creation and joining, real-time video and audio communication.",
      technologies: ["ReactJS", "Clerk Authentication", "Stream API"],
      link: "https://zoomm.netlify.app/",
      github: "https://github.com/princegyan/zoomClone",
      image: "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2020/03/Zoom-logo-on-a-smartphone-with-a-video-call-in-the-background.jpeg"
    },
    {
      title: "Team Meeting Scheduler",
      description: "Full-stack web application for team and project management meeting scheduling. Developed comprehensive scheduling platform with real-time collaboration features, user authentication, and meeting management functionalities.",
      technologies: ["ReactJS", "NodeJS", "Express.js", "MongoDB"],
      link: "https://freeschedule.netlify.app/",
      github: "https://github.com/princegyan/MeetingScheduler",
      image: "https://cdn.prod.website-files.com/63f5de8e8260819e3bbf4432/656ec6ff33f6fb2c8e2e2c3e_meeting_scheduler_apps.png"
    },
    {
      title: "LinkedIn Clone",
      description: "Developed a web platform mimicking LinkedIn using ReactJS for front-end and Firebase for backend. Implemented responsive design, resulting in 74% JavaScript, 21% CSS, and 5% HTML code.",
      technologies: ["ReactJS", "Firebase", "CSS"],
      github: "https://github.com/princegyan/linkedin-clone",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3THGYbYTn2BtxZfhSt_CGtVJ_Jl4y35OFIg&s"
    },
    {
      title: "Land Check",
      description: "Created a responsive web app enabling users to search and verify lands. Contributed to frontend development for a seamless user experience.",
      technologies: ["ReactJS", "Tailwind CSS"],
      github: "https://github.com/princegyan/LandCheckWeb",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjHf1nLnzZbTGpt1zyzrCl40a_6kpZUSGafw&s"
    },
    {
      title: "Ride-Hailing Landing Page",
      description: "Created a web app enabling new drivers to sign up using modern web technologies.",
      technologies: ["ReactJS", "Bootstrap CSS", "TypeScript"],
      link: "https://my-bolt.vercel.app/",
      github: "https://github.com/princegyan/myBolt",
      image: "https://static.blog.bolt.eu/LIVE/wp-content/uploads/2025/01/25154817/Blog-artwork-bolt-1200-x-628-100.jpg"
    },
    {
      title: "Precision Farmer",
      description: "Led IoT-embedded system project analyzing farm conditions with programmable sensors. Designed frameworks for data analysis and future predictions, including programmable voice alerts.",
      technologies: ["IoT", "Embedded Systems", "Sensor Programming"],
      github: "https://github.com/princegyan/Precision-Farming",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkyYv3qity13AS3iQ2_TOGkOUO5LAc0ejjsA&s"
    },
  ];
  const softSkills = [
    "Communication",
    "Critical Thinking",
    "Teamwork",
    "Mindfulness",
    "Public Speaking",
    "Leadership",
    "Professional Networking"
  ];
  const skills = [
    "ReactJS", "React Native", "PHP", "NodeJS", "TypeScript",
    "HTML5", "CSS3", "Git", "Firebase", "UI/UX Design",
    "Photoshop", "Figma", "Agile/Scrum", "MySQL", "MongoDB", "Twilio",
    "Clerk Authentication", "Stream API", "Tailwind CSS", "Bootstrap CSS",
    "Python", "Flask", "RESTful APIs", "Embedded Systems", "Arduino",
    "Problem-Solving", "Teamwork", "Leadership", "Communication", "Critical Thinking",
    "Teamwork", "Mindfulness", "Public Speaking", "Leadership", "Professional Networking"
    
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Previous sections remain the same until Projects Section */}
      {/* Header/Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto py-16 px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
            {/* Profile Image */}
            <div className="w-48 h-48 overflow-hidden rounded-full shadow-lg flex-shrink-0">
              <img
                src="https://tanq.dev/wp-content/uploads/2020/12/Alfred-e1736459847650-1024x1024.png"
                alt="Alfred Prince Gyan"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Alfred Prince Gyan</h1>
              <h2 className="text-xl text-gray-600 mb-6">Full Stack Developer</h2>
              <p className="text-gray-600 max-w-2xl mb-8">
                Results-driven Software Engineer with expertise in Full Stack development, particularly in
                ReactJS, ReactNative, PHP and NodeJS. Proficient in overseeing diverse software projects,
                including websites, and mobile apps. Possesses native-level English proficiency and
                exceptional communication skills.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/princegyan" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/prince-alfred-gyan-2b8b5362/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:princealfredgyan@gmail.com" className="text-gray-600 hover:text-gray-900">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Download CV Button */}
          <div className="mt-8 flex justify-center">
            <a
              href="/path-to-your-cv.pdf"
              download="Alfred_Prince_Gyan_CV.pdf"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold">Software Engineering</h3>
              <p className="text-gray-600">Freelance | Remote | 2021 – Present</p>
              <p className="mt-2 text-gray-700">
                Led end-to-end development of web projects, collaborated with cross-functional teams, and implemented frontend solutions using React, TypeScript, HTML5, and CSS3.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold">TrustKiosk Manager</h3>
              <p className="text-gray-600">Ghana Dot Com | Cape Coast | 2021 – March 2024</p>
              <p className="mt-2 text-gray-700">
                Managed automated Momo Vendor Machine operations, contributed to codebase development, and led team coordination for product deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Updated Projects Section with Images */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 relative">
            Featured Projects
            <div className="absolute bottom-0 left-0 w-24 h-1 bg-blue-600 transform origin-left hover:scale-x-150 transition-transform duration-300" />
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-5">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm transform hover:scale-105 transition-transform duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
       {/* Animated Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:princealfredgyan@gmail.com"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Mail className="w-5 h-5 group-hover:animate-bounce" />
              <span>Email Me</span>
            </a>
            <a
              href="tel:+233557954540"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-4 rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <span>Call Me</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
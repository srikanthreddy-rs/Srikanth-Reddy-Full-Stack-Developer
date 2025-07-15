
import AnimatedHeader from '@/components/portfolio/AnimatedHeader';
import InteractiveSkills from '@/components/portfolio/InteractiveSkills';
import ProjectShowcase from '@/components/portfolio/ProjectShowcase';
import AnimatedTimeline from '@/components/portfolio/AnimatedTimeline';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Index = () => {
  const certifications = [
    { name: "HTML & CSS", provider: "CCBP", url: "https://certificates.ccbp.in/intensive/static-website?id=KBBDWFTFLF" },
    { name: "SQL Database", provider: "CCBP", url: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=ZCCZLXBPFE" },
    { name: "Python", provider: "CCBP", url: "https://certificates.ccbp.in/intensive/programming-foundations?id=QGDJQFCKPW" },
    { name: "Git & CI/CD", provider: "CCBP", url: "https://certificates.ccbp.in/intensive/developer-foundations?id=RBTYNERUEI" },
    { name: "JavaScript", provider: "CCBP", url: "https://certificates.ccbp.in/intensive/javascript-essentials?id=TFMUZNHNEF" },
    { name: "Node.js", provider: "CCBP", url: "https://certificates.ccbp.in/intensive/node-js?id=LQWSJJSBXH" },
    { name: "React.js", provider: "CCBP", url: "https://certificates.ccbp.in/intensive/react-js?id=ZQFJXKJYQH" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <AnimatedHeader />

      <div className="container mx-auto px-6 py-20 space-y-32">
        {/* Professional Summary */}
        <section className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Summary</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group">
            <CardContent className="p-8 text-center">
              <p className="text-lg text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                Dedicated Computer Science student with hands-on experience in full-stack development 
                and machine learning. Proven track record of building scalable web applications and 
                implementing innovative AI solutions. Passionate about leveraging technology to solve 
                real-world problems and committed to continuous learning in emerging technologies.
              </p>
            </CardContent>
          </Card>
        </section>

        <AnimatedTimeline />

        <ProjectShowcase />

        {/* Traditional Interactive Skills */}
        <InteractiveSkills />

        {/* Professional Certifications */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Certifications</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="flex items-start justify-between relative z-10">
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {cert.name}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4">Certified by {cert.provider}</p>
                      <Badge variant="outline" className="flex items-center gap-1 w-fit group-hover:bg-green-50 group-hover:text-green-700 group-hover:border-green-200 transition-all duration-300">
                        <Award className="w-3 h-3" />
                        Verified
                      </Badge>
                    </div>
                    <a 
                      href={cert.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-125 hover:rotate-12"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Enhanced Contact Information */}
        <section className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4">Ready to collaborate on exciting projects</p>
          </div>
          
          <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 via-white to-purple-50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: "Email", value: "sr2936521@gmail.com", color: "blue" },
                    { icon: Phone, label: "Phone", value: "+91 8074670478", color: "green" }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-center gap-4 group cursor-pointer">
                      <div className={`w-12 h-12 bg-${contact.color}-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <contact.icon className={`w-6 h-6 text-${contact.color}-600`} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">{contact.label}</p>
                        <p className="text-slate-600">{contact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Location</p>
                      <p className="text-slate-600">Hyderabad, India</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    {[
                      { icon: Linkedin, url: "https://linkedin.com/in/tallapureddy-srikanth-reddy-841561213", color: "blue" },
                      { icon: Github, url: "https://github.com/srikanthreddy-sr", color: "gray" }
                    ].map((social, index) => (
                      <a 
                        key={index}
                        href={social.url}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                          social.color === 'blue' 
                            ? 'bg-blue-600 hover:bg-blue-700' 
                            : 'bg-gray-800 hover:bg-gray-900'
                        }`}
                      >
                        <social.icon className="w-6 h-6 text-white" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Enhanced Footer */}
      <footer className="bg-slate-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <p className="text-slate-300 text-lg">© 2025 Tallapureddy Srikanth Reddy</p>
              <p className="text-slate-400 text-sm">Full Stack Developer & ML Enthusiast</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-slate-400 text-sm">Available for opportunities</span>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

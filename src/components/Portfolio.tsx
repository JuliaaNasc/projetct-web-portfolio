import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Download,
  Code,
  Smartphone,
  FileText,
  Calendar,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  const skills = {
    mobile: ['Flutter', 'Dart'],
    web: ['React.js', 'Node.js', 'HTML', 'CSS', 'Docusaurus'],
    documentation: ['Documentação Técnica', 'Manuais de Usuário', 'Análise de Requisitos', 'Processos'],
    tools: ['Git', 'GitHub', 'GitLab', 'VS Code', 'Android Studio', 'Figma', 'ClickUp', 'Excel']
  };

  const experiences = [
    {
      period: 'Atual',
      role: 'Analista de Governança de TI',
      company: 'G4Flex',
      description: 'Na G4Flex, atuei na área de Governança de TI, realizando o acompanhamento de projetos e a elaboração de documentações técnicas, contribuindo para a organização, padronização e eficiência dos processos da área de tecnologia.',
      highlights: ['Governança de TI', 'Processos', 'Compliance']
    },
    {
      period: '4 meses',
      role: 'Analista Comercial',
      company: 'G4Flex',
      description: 'Tive a oportunidade de integrar o time comercial da G4FLEX por alguns meses, após receber um convite do CEO da empresa. Durante esse período, atuei na atualização de leads na base de dados, contribuindo para uma prospecção mais eficiente e estratégica.',
      highlights: ['Vendas', 'Marketing', 'Eventos']
    },
    {
      period: 'Período',
      role: 'Desenvolvimento Web',
      company: 'G4Flex',
      description: 'Foi desenvolvido para proporcionar uma experiência abrangente e eficiente na utilização do sistema de comunicação unificada. O FlexUC é uma solução robusta que integra diversas funcionalidades essenciais para a gestão de atendimento ao cliente, monitoramento de atividades e análise de desempenho, tudo em uma plataforma intuitiva e fácil de usar. Com Node.js, React.js, HTML, CSS, JavaScript e Docusaurus.',
      highlights: ['React.js', 'Node.js', 'JavaScript']
    },
    {
      period: 'Atual',
      role: 'Estagiária em Desenvolvimento Mobile',
      company: 'G4Flex',
      description: 'Início da trajetória na empresa focando em desenvolvimento mobile com Flutter e Dart.',
      highlights: ['Flutter', 'Dart', 'Desenvolvimento Mobile']
    }
  ];

  const projects = [
    {
      title: 'Manual de Uso da Plataforma G4Flex',
      category: 'Liderança & Documentação',
      description: 'Liderança completa do projeto de criação do manual de uso da plataforma da empresa, incluindo análise de requisitos, estruturação e desenvolvimento.',
      tech: ['Documentação Técnica', 'Análise de Requisitos', 'Liderança'],
      type: 'documentation'
    },
    {
      title: 'Aplicativo Mobile G4Flex',
      category: 'Desenvolvimento Mobile',
      description: 'Desenvolvimento e manutenção do aplicativo mobile da empresa utilizando React Native e tecnologias modernas.',
      tech: ['React Native', 'TypeScript', 'Expo'],
      type: 'mobile'
    },
    {
      title: 'Plataforma Web G4Flex',
      category: 'Desenvolvimento Web',
      description: 'Contribuição no desenvolvimento da plataforma web da empresa com foco em interface de usuário e experiência.',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      type: 'web'
    },
    {
      title: 'Documentações Técnicas Internas',
      category: 'Documentação',
      description: 'Produção de diversas documentações técnicas para projetos internos, garantindo qualidade e padronização.',
      tech: ['Documentação', 'Processos', 'Análise'],
      type: 'documentation'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-portfolio-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-portfolio-gray-200">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl gradient-text">Portfólio</div>
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Sobre', 'Skills', 'Experiência', 'Projetos', 'Contato'].map((item, index) => {
                const sectionId = ['home', 'about', 'skills', 'experience', 'projects', 'contact'][index];
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sectionId)}
                    className={`text-sm font-medium transition-colors hover:text-portfolio-blue ${
                      activeSection === sectionId ? 'text-portfolio-blue' : 'text-portfolio-gray-600'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section-padding pt-32 bg-hero-gradient text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Desenvolvedora
                <span className="block text-portfolio-gray-200">& Analista de TI</span>
              </h1>
              <p className="text-xl text-portfolio-gray-200 mb-8 leading-relaxed">
                Acredito que tecnologia é uma ponte — entre ideias e soluções, entre pessoas e possibilidades. Meu propósito como pessoa é usar essa ponte para criar experiências que façam sentido, que melhorem a vida das pessoas e que tragam impacto real, mesmo que em pequenos detalhes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('projects')} 
                  size="lg" 
                  className="bg-white text-portfolio-slate hover:bg-portfolio-gray-100"
                >
                  Ver Projetos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-portfolio-slate"
                >
                  Entrar em Contato
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="relative">
                <img
                  src="/lovable-uploads/4da09985-4034-4be4-b2c8-73b49fdc7705.png"
                  alt="Foto Profissional"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl animate-float"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-portfolio-blue/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-16">
          <ChevronDown 
            className="h-8 w-8 mx-auto animate-bounce cursor-pointer" 
            onClick={() => scrollToSection('about')}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Sobre Mim</h2>
            <p className="text-lg text-portfolio-gray-600 max-w-2xl mx-auto">
              Estudante de Redes de Computadores com experiência prática em desenvolvimento e governança de TI
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src="/lovable-uploads/e63109c0-e7ed-4930-810e-f5cee8531194.png"
                alt="Foto Profissional 2"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6 animate-slide-in-left">
              <p className="text-lg text-portfolio-gray-700 leading-relaxed">
                Sou estudante de <strong>Redes de Computadores</strong> e iniciei minha trajetória na <strong>G4Flex</strong> em agosto de 2023, 
                atuando inicialmente como estagiária em desenvolvimento mobile.
              </p>
              <p className="text-lg text-portfolio-gray-700 leading-relaxed">
                Com o tempo, expandi minhas habilidades também para o <strong>desenvolvimento web</strong>, liderando um projeto 
                voltado para a criação do manual de uso da plataforma da empresa.
              </p>
              <p className="text-lg text-portfolio-gray-700 leading-relaxed">
                Participei de diversos projetos internos, nos quais também fui responsável pela produção de 
                <strong> documentações técnicas</strong>. Atuei por quatro meses no time comercial e colaborei em ações 
                junto às áreas de marketing, design e eventos internos.
              </p>
              <p className="text-lg text-portfolio-gray-700 leading-relaxed">
                Atualmente, integro o <strong>time de Governança de TI</strong> da G4Flex, onde aplico meus conhecimentos 
                em processos, compliance e gestão de tecnologia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-portfolio-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Habilidades Técnicas</h2>
            <p className="text-lg text-portfolio-gray-600">
              Tecnologias e ferramentas que domino no meu dia a dia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Smartphone className="h-8 w-8 text-portfolio-blue mr-3" />
                  <h3 className="text-xl font-semibold">Mobile</h3>
                </div>
                <div className="space-y-2">
                  {skills.mobile.map((skill) => (
                    <Badge key={skill} variant="secondary" className="mr-2 mb-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Code className="h-8 w-8 text-portfolio-blue mr-3" />
                  <h3 className="text-xl font-semibold">Web</h3>
                </div>
                <div className="space-y-2">
                  {skills.web.map((skill) => (
                    <Badge key={skill} variant="secondary" className="mr-2 mb-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <FileText className="h-8 w-8 text-portfolio-blue mr-3" />
                  <h3 className="text-xl font-semibold">Documentação</h3>
                </div>
                <div className="space-y-2">
                  {skills.documentation.map((skill) => (
                    <Badge key={skill} variant="secondary" className="mr-2 mb-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Calendar className="h-8 w-8 text-portfolio-blue mr-3" />
                  <h3 className="text-xl font-semibold">Ferramentas</h3>
                </div>
                <div className="space-y-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary" className="mr-2 mb-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Experiência Profissional</h2>
            <p className="text-lg text-portfolio-gray-600">
              Minha trajetória de crescimento na G4Flex
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-portfolio-blue"></div>
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start mb-12 animate-fade-in">
                  <div className="flex-shrink-0 w-16 h-16 bg-portfolio-blue rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                    {index + 1}
                  </div>
                  <Card className="ml-8 flex-1 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-portfolio-gray-900">{exp.role}</h3>
                          <p className="text-portfolio-blue font-medium">{exp.company}</p>
                        </div>
                        <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-portfolio-gray-700 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((highlight) => (
                          <Badge key={highlight} variant="secondary">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-portfolio-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Projetos em Destaque</h2>
            <p className="text-lg text-portfolio-gray-600">
              Principais projetos desenvolvidos e liderados na G4Flex
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      {project.type === 'mobile' && <Smartphone className="h-6 w-6 text-portfolio-blue mr-3" />}
                      {project.type === 'web' && <Code className="h-6 w-6 text-portfolio-blue mr-3" />}
                      {project.type === 'documentation' && <FileText className="h-6 w-6 text-portfolio-blue mr-3" />}
                      <Badge variant="outline">{project.category}</Badge>
                    </div>
                    <ExternalLink className="h-5 w-5 text-portfolio-gray-400 group-hover:text-portfolio-blue transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-portfolio-gray-900">{project.title}</h3>
                  <p className="text-portfolio-gray-700 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-portfolio-slate text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vamos Conversar?</h2>
            <p className="text-lg text-portfolio-gray-300 max-w-2xl mx-auto">
              Estou sempre aberta a novas oportunidades e projetos interessantes. Entre em contato!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="animate-slide-in-left">
                <img
                  src="/lovable-uploads/b2eabfeb-e673-4ae6-b1ea-e0fb80ee3951.png"
                  alt="Foto de Contato"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
                />
              </div>
              
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-portfolio-blue mr-4" />
                      <span>seu.email@exemplo.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-portfolio-blue mr-4" />
                      <span>(11) 99999-9999</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-portfolio-blue mr-4" />
                      <span>São Paulo, SP</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Conecte-se Comigo</h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" className="border-white text-white hover:bg-white hover:text-portfolio-slate">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="border-white text-white hover:bg-white hover:text-portfolio-slate">
                      <Github className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="border-white text-white hover:bg-white hover:text-portfolio-slate">
                      <Mail className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="bg-portfolio-blue hover:bg-portfolio-blue-dark text-white"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Baixar Currículo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-portfolio-gray-900 text-white text-center">
        <div className="container-custom">
          <p className="text-portfolio-gray-400">
            © 2024 - Desenvolvido com ❤️ usando React e Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

}

import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Target, 
  Award, 
  Users, 
  Clock, 
  CheckCircle, 
  Star,
  Play,
  Gift,
  Shield,
  Smartphone,
  Globe,
  ChevronDown,
  ChevronUp,
  Heart,
  Activity,
  TrendingUp,
  Sparkles,
  BookOpen,
  GraduationCap
} from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToPrice = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium">
            📚 <strong>CURSO EDUCATIVO:</strong> Aprenda técnicas profissionais de estética
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Curso Profissional de Estética Corporal: 
              <span className="text-blue-600 block mt-2">
                Aprenda técnicas de lipoláser, cavitação, radiofrequência e drenagem
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Capacitação profissional em técnicas de estética corporal com metodologia estruturada. 
              Aprenda protocolos seguros e procedimentos adequados para profissionais da área.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={scrollToPrice}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Acessar curso por $97 USD
              </button>
              <div className="flex items-center gap-2 text-gray-600">
                <Shield className="w-5 h-5" />
                <span>Política de reembolso de 7 dias</span>
              </div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto border-2 border-blue-200">
            <p className="text-center text-gray-800 font-semibold mb-4">⏰ Promoção válida por:</p>
            <div className="flex justify-center gap-4">
              <div className="text-center">
                <div className="bg-blue-600 text-white text-2xl font-bold rounded-lg w-12 h-12 flex items-center justify-center">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <p className="text-xs text-gray-600 mt-1">Horas</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white text-2xl font-bold rounded-lg w-12 h-12 flex items-center justify-center">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <p className="text-xs text-gray-600 mt-1">Min</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white text-2xl font-bold rounded-lg w-12 h-12 flex items-center justify-center">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <p className="text-xs text-gray-600 mt-1">Seg</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é o curso */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Este curso é <span className="text-blue-600">indicado para</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
              <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Profissionais da Estética</h3>
              <p className="text-gray-700">Esteticistas, fisioterapeutas e profissionais que desejam aprimorar conhecimentos.</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl border-2 border-green-200">
              <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Estudantes da Área</h3>
              <p className="text-gray-700">Estudantes que buscam especialização em técnicas de estética corporal.</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl border-2 border-purple-200">
              <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Empreendedores</h3>
              <p className="text-gray-700">Profissionais que desejam expandir seus serviços com novas técnicas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo do curso */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Conteúdo <span className="text-blue-600">programático</span>
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Fundamentos Teóricos</h3>
                <p className="text-gray-700">Estude os princípios científicos por trás de cada tecnologia e suas aplicações adequadas.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Protocolos de Segurança</h3>
                <p className="text-gray-700">Aprenda protocolos de segurança e boas práticas para aplicação responsável das técnicas.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Técnicas Manuais</h3>
                <p className="text-gray-700">Domine técnicas manuais complementares para potencializar os tratamentos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios educacionais */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            <span className="text-blue-600">Benefícios</span> educacionais
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 group hover:bg-blue-50 rounded-xl transition-all duration-300">
              <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Conhecimento Técnico</h3>
              <p className="text-gray-700">Adquira conhecimento técnico fundamentado em evidências científicas.</p>
            </div>
            <div className="text-center p-6 group hover:bg-green-50 rounded-xl transition-all duration-300">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Práticas Seguras</h3>
              <p className="text-gray-700">Aprenda protocolos de segurança e contraindicações importantes.</p>
            </div>
            <div className="text-center p-6 group hover:bg-purple-50 rounded-xl transition-all duration-300">
              <GraduationCap className="w-12 h-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Certificação</h3>
              <p className="text-gray-700">Receba certificado de participação ao concluir o curso.</p>
            </div>
            <div className="text-center p-6 group hover:bg-orange-50 rounded-xl transition-all duration-300">
              <Users className="w-12 h-12 text-orange-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Networking</h3>
              <p className="text-gray-700">Conecte-se com outros profissionais da área através do grupo de estudos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Técnicas abordadas */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Técnicas <span className="text-blue-600">abordadas no curso</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Cavitação</h3>
              <p className="text-gray-700 mb-4">Estudo da tecnologia ultrassônica e seus princípios de aplicação.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Fundamentos científicos</li>
                <li>• Protocolos de aplicação</li>
                <li>• Contraindicações</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Activity className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Radiofrequência</h3>
              <p className="text-gray-700 mb-4">Compreenda os princípios da radiofrequência bipolar e multipolar.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Tipos de radiofrequência</li>
                <li>• Parâmetros de aplicação</li>
                <li>• Cuidados necessários</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Lipoláser</h3>
              <p className="text-gray-700 mb-4">Aprenda sobre a tecnologia laser de baixa intensidade.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Princípios do laser</li>
                <li>• Técnicas de aplicação</li>
                <li>• Segurança em laser</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Drenagem Manual</h3>
              <p className="text-gray-700 mb-4">Técnicas manuais de drenagem linfática e modelagem corporal.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Anatomia do sistema linfático</li>
                <li>• Técnicas manuais</li>
                <li>• Protocolos específicos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais do curso */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Diferenciais do <span className="text-blue-600">curso</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <Clock className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">15+ Horas de Conteúdo</h3>
                <p className="text-gray-700">Mais de 15 horas de conteúdo educativo estruturado e organizado por módulos.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Globe className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Acesso Vitalício</h3>
                <p className="text-gray-700">Acesso permanente ao conteúdo com atualizações incluídas.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Play className="w-8 h-8 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Aulas Gravadas</h3>
                <p className="text-gray-700">Todas as aulas gravadas para que você possa estudar no seu ritmo.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users className="w-8 h-8 text-orange-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Grupo de Estudos</h3>
                <p className="text-gray-700">Acesso ao grupo de estudos, materiais complementares e certificado.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materiais inclusos */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">Materiais</span> inclusos
            </h2>
            <p className="text-lg text-gray-700">Conteúdo complementar para seu aprendizado</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-6">
              <Gift className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Materiais Inclusos</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Módulo especializado em protocolos faciais</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Conteúdo sobre tratamentos para estrias</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Protocolos para cuidados pós-procedimentos</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Acesso ao grupo de estudos</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Materiais de apoio para download</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Atualizações de conteúdo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Investimento no seu <span className="text-blue-400">desenvolvimento</span>
            </h2>
            <p className="text-xl text-gray-300">Promoção por tempo limitado</p>
          </div>
          
          <div className="bg-white text-gray-900 rounded-xl shadow-2xl p-8 max-w-lg mx-auto border-4 border-blue-400">
            <div className="text-center">
              <div className="mb-6">
                <p className="text-gray-600 text-lg mb-2">Valor regular:</p>
                <p className="text-3xl text-gray-500 line-through">$300 USD</p>
              </div>
              
              <div className="bg-blue-100 rounded-lg p-6 mb-6">
                <p className="text-blue-800 font-semibold text-lg mb-2">📚 Promoção educativa</p>
                <p className="text-5xl font-bold text-blue-600 mb-2">$97</p>
                <p className="text-blue-700">USD - Pagamento único</p>
              </div>
              
              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>15+ horas de conteúdo educativo</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Acesso vitalício à plataforma</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Todos os materiais complementares</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Certificado de participação</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-blue-500" />
                  <span>Política de reembolso de 7 dias</span>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg mb-4">
                Acessar curso por $97 USD
              </button>
              
              <p className="text-sm text-gray-600">
                🔒 Pagamento seguro • Acesso imediato
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a instrutora */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Sobre a <span className="text-blue-600">instrutora</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto flex items-center justify-center">
                <div className="w-56 h-56 bg-white rounded-full flex items-center justify-center">
                  <GraduationCap className="w-24 h-24 text-blue-600" />
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Abril López</h3>
              <p className="text-lg text-gray-700 mb-6">
                Fisioterapeuta com especialização em estética corporal e múltiplas certificações na área. 
                Fundadora da FisioParaLlevar, tem experiência em educação profissional e desenvolvimento 
                de conteúdo educativo para profissionais da estética.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-blue-600">15K+</p>
                  <p className="text-sm text-gray-600">Alunos formados</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">23</p>
                  <p className="text-sm text-gray-600">Países</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-600">5+</p>
                  <p className="text-sm text-gray-600">Especializações</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Depoimentos de <span className="text-blue-600">alunos</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "O conteúdo é muito bem estruturado e didático. A metodologia de ensino é clara 
                e me ajudou a compreender melhor as técnicas."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">MC</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">María Carmen</p>
                  <p className="text-sm text-gray-600">Esteticista - México</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Excelente curso, muito completo. A instrutora explica de forma clara e 
                o material de apoio é muito útil para os estudos."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold">LR</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Laura Rodríguez</p>
                  <p className="text-sm text-gray-600">Fisioterapeuta - Colômbia</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "O investimento vale muito a pena. O conteúdo é atualizado e 
                o suporte do grupo de estudos é muito valioso."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">AS</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Ana Silva</p>
                  <p className="text-sm text-gray-600">Cosmiatra - Argentina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Perguntas <span className="text-blue-600">frequentes</span>
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "Como acesso o curso após o pagamento?",
                answer: "O acesso é imediato. Você receberá um email com suas credenciais e poderá começar a estudar imediatamente de qualquer dispositivo."
              },
              {
                question: "Como funciona a política de reembolso?",
                answer: "Você tem 7 dias completos para avaliar todo o conteúdo. Se não estiver satisfeito, devolvemos 100% do valor pago."
              },
              {
                question: "Preciso ter equipamentos específicos?",
                answer: "O curso aborda princípios que podem ser aplicados com diferentes tipos de equipamentos estéticos. Ensinamos os fundamentos teóricos."
              },
              {
                question: "Por quanto tempo tenho acesso?",
                answer: "O acesso é vitalício. Uma vez adquirido, você sempre terá acesso ao conteúdo e às atualizações futuras."
              },
              {
                question: "O certificado tem validade?",
                answer: "Sim, você recebe um certificado de participação ao concluir o curso que comprova sua capacitação na área."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-lg text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para aprimorar seus conhecimentos?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Junte-se a milhares de profissionais que já se capacitaram conosco
          </p>
          <button 
            onClick={scrollToPrice}
            className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-4 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Começar agora por $97 USD
          </button>
          <p className="mt-4 text-blue-200">
            ⚡ Acesso imediato • 🛡️ Política de reembolso de 7 dias • 🎓 Certificado incluído
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">FisioParaLlevar</h3>
              <p className="text-gray-400">
                Educação profissional em estética corporal com metodologia estruturada e conteúdo atualizado.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos e Condições</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li>WhatsApp: +1 (555) 123-4567</li>
                <li>Email: suporte@fisioparallevar.com</li>
                <li>Horário: Seg-Sex 9h-18h</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 FisioParaLlevar. Todos os direitos reservados.</p>
            <p className="text-sm mt-2">
              Este site não é afiliado ao Facebook ou outras redes sociais. Consulte nossos termos e condições.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
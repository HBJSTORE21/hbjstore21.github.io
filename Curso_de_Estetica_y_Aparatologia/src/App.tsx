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
  Sparkles
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
            🔥 <strong>OFERTA ESPECIAL:</strong> 50% de descuento - Solo por tiempo limitado
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              La fórmula definitiva para eliminar grasa y reducir medidas: 
              <span className="text-blue-600 block mt-2">
                lipoláser, cavitación, radiofrecuencia y drenaje brasileño
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Descubre una metodología profesional combinada que te permite ofrecer resultados visibles desde la primera sesión, sin dolor y sin aparatología invasiva.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={scrollToPrice}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Quiero acceder ahora por $97 USD
              </button>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-5 h-5" />
                <span>Garantía de 7 días</span>
              </div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto border-2 border-orange-200">
            <p className="text-center text-gray-800 font-semibold mb-4">⏰ Oferta termina en:</p>
            <div className="flex justify-center gap-4">
              <div className="text-center">
                <div className="bg-orange-500 text-white text-2xl font-bold rounded-lg w-12 h-12 flex items-center justify-center">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <p className="text-xs text-gray-600 mt-1">Horas</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-500 text-white text-2xl font-bold rounded-lg w-12 h-12 flex items-center justify-center">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <p className="text-xs text-gray-600 mt-1">Min</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-500 text-white text-2xl font-bold rounded-lg w-12 h-12 flex items-center justify-center">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <p className="text-xs text-gray-600 mt-1">Seg</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para ti si... */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Este curso es <span className="text-green-600">para ti si...</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-xl border-2 border-green-200">
              <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Tienes Aparatología</h3>
              <p className="text-gray-700">Ya tienes aparatología pero no ves los resultados que esperabas obtener.</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
              <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Aumentar Ingresos</h3>
              <p className="text-gray-700">Buscas ampliar servicios y generar más ingresos en tu práctica profesional.</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl border-2 border-purple-200">
              <Star className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Diferenciarte</h3>
              <p className="text-gray-700">Quieres diferenciarte como profesional y llenar tu agenda de pacientes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Qué aprenderás */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Lo que <span className="text-blue-600">aprenderás</span>
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Dosificación Precisa</h3>
                <p className="text-gray-700">Aprende a dosificar cada tecnología de forma adecuada y segura para obtener resultados óptimos.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Fórmula Brasileña</h3>
                <p className="text-gray-700">Domina la preparación de espacios y aplicación eficaz de la metodología brasileña probada.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Técnicas Complementarias</h3>
                <p className="text-gray-700">Combina aparatología con técnicas manuales especializadas para resultados superiores.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios destacados */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            <span className="text-green-600">Beneficios</span> comprobados
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 group hover:bg-green-50 rounded-xl transition-all duration-300">
              <Zap className="w-12 h-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Elimina Grasa</h3>
              <p className="text-gray-700">Elimina grasa localizada y celulitis de forma efectiva y no invasiva.</p>
            </div>
            <div className="text-center p-6 group hover:bg-blue-50 rounded-xl transition-all duration-300">
              <Activity className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Tonifica Piel</h3>
              <p className="text-gray-700">Tonifica y mejora la firmeza de la piel con resultados visibles.</p>
            </div>
            <div className="text-center p-6 group hover:bg-purple-50 rounded-xl transition-all duration-300">
              <Target className="w-12 h-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Realza Contorno</h3>
              <p className="text-gray-700">Realza el contorno corporal y reduce tallas de manera natural.</p>
            </div>
            <div className="text-center p-6 group hover:bg-orange-50 rounded-xl transition-all duration-300">
              <Heart className="w-12 h-12 text-orange-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Mejora Circulación</h3>
              <p className="text-gray-700">Mejora la circulación sin dolor ni procedimientos invasivos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Técnicas detalladas */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Técnicas <span className="text-blue-600">especializadas</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Cavitación</h3>
              <p className="text-gray-700 mb-4">Ultrasonido 40K/80K para eliminar grasa localizada de forma efectiva y segura.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Tecnología ultrasónica avanzada</li>
                <li>• Resultados desde primera sesión</li>
                <li>• Procedimiento no invasivo</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Activity className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Radiofrecuencia</h3>
              <p className="text-gray-700 mb-4">Estimula la producción de colágeno con tecnología bipolar y multipolar.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Bipolar y multipolar</li>
                <li>• Estimula colágeno natural</li>
                <li>• Efecto lifting inmediato</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Lipoláser</h3>
              <p className="text-gray-700 mb-4">Combina efecto drenante y lipolítico para resultados integrales.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Efecto drenante potente</li>
                <li>• Acción lipolítica dirigida</li>
                <li>• Complemento ideal</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Drenaje Brasileño</h3>
              <p className="text-gray-700 mb-4">Técnica manual que logra modelado instantáneo post-aparatología.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Modelado instantáneo</li>
                <li>• Técnica manual especializada</li>
                <li>• Potencia resultados</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            ¿Por qué <span className="text-blue-600">elegirnos?</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <Clock className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">15+ Horas de Formación</h3>
                <p className="text-gray-700">Más de 15 horas de formación continua con contenido actualizado y práctico.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Globe className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Acceso de Por Vida</h3>
                <p className="text-gray-700">Acceso permanente a la plataforma brasileña con actualizaciones incluidas.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Play className="w-8 h-8 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Clases Grabadas</h3>
                <p className="text-gray-700">Todas las clases grabadas para que puedas repasar cuando necesites.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users className="w-8 h-8 text-orange-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Grupo VIP + Certificado</h3>
                <p className="text-gray-700">Acceso al grupo VIP, manuales especializados y certificado válido.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonos exclusivos */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-orange-600">Bonos exclusivos</span> por tiempo limitado
            </h2>
            <p className="text-lg text-gray-700">Solo por las próximas 48 horas</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-orange-200">
            <div className="flex items-center gap-3 mb-6">
              <Gift className="w-8 h-8 text-orange-600" />
              <h3 className="text-2xl font-bold text-gray-900">Bonos Incluidos</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Protocolos faciales especializados (papada/rostro)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Tratamiento avanzado para estrías</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Protocolos post-operatorios especializados</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Acceso al grupo VIP exclusivo</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Materiales adicionales descargables</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Actualizaciones permanentes</span>
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
              Inversión <span className="text-green-400">especial</span>
            </h2>
            <p className="text-xl text-gray-300">Oferta por tiempo muy limitado</p>
          </div>
          
          <div className="bg-white text-gray-900 rounded-xl shadow-2xl p-8 max-w-lg mx-auto border-4 border-green-400">
            <div className="text-center">
              <div className="mb-6">
                <p className="text-gray-600 text-lg mb-2">Precio original:</p>
                <p className="text-3xl text-gray-500 line-through">$300 USD</p>
              </div>
              
              <div className="bg-green-100 rounded-lg p-6 mb-6">
                <p className="text-green-800 font-semibold text-lg mb-2">🎉 50% de descuento</p>
                <p className="text-5xl font-bold text-green-600 mb-2">$97</p>
                <p className="text-green-700">USD - Pago único</p>
              </div>
              
              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>15+ horas de formación completa</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Acceso de por vida a la plataforma</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Todos los bonos exclusivos incluidos</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Certificado válido al completar</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-blue-500" />
                  <span>Garantía de devolución 7 días</span>
                </div>
              </div>
              
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg mb-4">
                Quiero acceder ahora por $97 USD
              </button>
              
              <p className="text-sm text-gray-600">
                🔒 Pago 100% seguro • Acceso inmediato
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre la instructora */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Sobre tu <span className="text-blue-600">instructora</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto flex items-center justify-center">
                <div className="w-56 h-56 bg-white rounded-full flex items-center justify-center">
                  <Users className="w-24 h-24 text-blue-600" />
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Abril López</h3>
              <p className="text-lg text-gray-700 mb-6">
                Fisioterapeuta especializada con más de 5 másters en reducción de medidas y estética corporal. 
                Fundadora de FisioParaLlevar, ha formado a más de 15,000 alumnos en 23 países con metodologías 
                probadas y resultados garantizados.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-blue-600">15K+</p>
                  <p className="text-sm text-gray-600">Alumnos formados</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">23</p>
                  <p className="text-sm text-gray-600">Países</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-600">5+</p>
                  <p className="text-sm text-gray-600">Másters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Lo que dicen nuestros <span className="text-green-600">alumnos</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Los resultados con mis pacientes han sido increíbles. La metodología es clara y fácil de aplicar. 
                He triplicado mis ingresos en 3 meses."
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
                "Excelente curso, muy completo. Abril explica todo de manera muy clara. 
                Mis pacientes están súper felices con los resultados."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold">LR</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Laura Rodríguez</p>
                  <p className="text-sm text-gray-600">Fisioterapeuta - Colombia</p>
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
                "La inversión se recupera rápidamente. Los protocolos son muy efectivos y 
                el soporte del grupo VIP es invaluable."
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
            Preguntas <span className="text-blue-600">frecuentes</span>
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "¿Cómo accedo al curso después del pago?",
                answer: "El acceso es inmediato. Recibirás un email con tus credenciales y podrás comenzar de inmediato desde cualquier dispositivo."
              },
              {
                question: "¿La garantía realmente funciona?",
                answer: "Sí, tienes 7 días completos para revisar todo el contenido. Si no estás satisfecho, te devolvemos el 100% de tu dinero sin preguntas."
              },
              {
                question: "¿Necesito aparatología específica?",
                answer: "El curso está diseñado para adaptarse a diferentes equipos. Te enseñamos los principios que puedes aplicar con la mayoría de aparatología estética."
              },
              {
                question: "¿Por cuánto tiempo tengo acceso?",
                answer: "El acceso es de por vida. Una vez que compras, siempre tendrás acceso al contenido y a todas las actualizaciones futuras."
              },
              {
                question: "¿El certificado tiene validez oficial?",
                answer: "Sí, recibes un certificado válido al completar el curso que puedes usar para acreditar tu formación profesional."
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
            ¿Listo para transformar tu práctica profesional?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Únete a miles de profesionales que ya están obteniendo resultados excepcionales
          </p>
          <button 
            onClick={scrollToPrice}
            className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Comenzar ahora por $97 USD
          </button>
          <p className="mt-4 text-blue-200">
            ⚡ Acceso inmediato • 🛡️ Garantía de 7 días • 🎓 Certificado incluido
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
                Formación profesional en estética y aparatología con metodologías brasileñas probadas.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li>WhatsApp: +1 (555) 123-4567</li>
                <li>Email: soporte@fisioparallevar.com</li>
                <li>Horario: Lun-Vie 9AM-6PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 FisioParaLlevar. Todos los derechos reservados.</p>
            <p className="text-sm mt-2">
              Este sitio no está afiliado con Facebook ni Hotmart. Consulta nuestros términos y condiciones.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
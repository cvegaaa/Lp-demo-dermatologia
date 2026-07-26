import { useEffect, useState } from 'react';
import {
  ShieldCheck,
  Sparkles,
  Calendar,
  MapPin,
  Phone,
  Clock,
  Mail,
  Instagram,
  Menu,
  X,
  Stethoscope,
  HeartPulse,
  Smile,
  Flower2,
  ArrowRight,
  CheckCircle2,
  Star,
} from 'lucide-react';

const heroImages = [
  'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/6621337/pexels-photo-6621337.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1600',
];

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
];

const services = [
  {
    icon: Sparkles,
    title: 'Dermatología Estética',
    desc: 'Tratamientos faciales para rejuvenecer, hidratar y devolver luminosidad a tu piel.',
    points: ['Limpieza facial profunda', 'Peelings químicos', 'Bioestimulación con hilos'],
  },
  {
    icon: Stethoscope,
    title: 'Dermatología Clínica',
    desc: 'Diagnóstico y tratamiento de afecciones de la piel, cabello y uñas.',
    points: ['Acné y rosácea', 'Dermatitis y psoriasis', 'Lesiones y lunares'],
  },
  {
    icon: HeartPulse,
    title: 'Medicina Estética',
    desc: 'Procedimientos mínimamente invasivos con tecnología de última generación.',
    points: ['Botox y rellenos', 'Radiofacción facial', 'Hialurónico en puntos'],
  },
  {
    icon: Smile,
    title: 'Piel Sensible',
    desc: 'Protocolos especializados para pieles reactivas, intolerantes o post-oncológicas.',
    points: ['Test de parche', 'Rutinas personalizadas', 'Acompañamiento médico'],
  },
];

const treatments = [
  {
    name: 'Láser CO2 Fraccionado',
    detail: 'Renovación profunda de textura, manchas y cicatrices de acné.',
    img: 'https://images.pexels.com/photos/6621337/pexels-photo-6621337.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    name: 'Microdermoabrasión',
    detail: 'Exfoliación controlada para una piel más suave y uniforme.',
    img: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    name: 'Relleno de Ácido Hialurónico',
    detail: 'Volumen natural e hidratación profunda con resultados inmediatos.',
    img: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    name: 'Terapia Fotodinámica',
    detail: 'Tratamiento del acné activo y lesiones premalignas con luz médica.',
    img: 'https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    name: 'Mesoterapia Facial',
    detail: 'Cocktail de vitaminas inyectadas para revitalizar la piel apagada.',
    img: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    name: 'Crioterapia',
    detail: 'Eliminación de lesiones benignas con frío extremo, sin cirugía.',
    img: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];

const steps = [
  { n: '01', title: 'Primera consulta', desc: 'Evaluamos tu piel con dermatoscopia digital y escuchamos tus objetivos.' },
  { n: '02', title: 'Plan personalizado', desc: 'Diseñamos un protocolo a tu medida con tiempos y costos claros.' },
  { n: '03', title: 'Tratamiento', desc: 'Sesiones con tecnología médica de vanguardia y seguimiento continuo.' },
  { n: '04', title: 'Mantenimiento', desc: 'Acompañamiento y controles para que los resultados duren.' },
];

const testimonials = [
  {
    name: 'Marcela Restrepo',
    role: 'Paciente desde 2023',
    text: 'Llegué con un acné persistente que ningún producto había logrado controlar. En tres meses mi piel cambió por completo. El acompañamiento fue impecable.',
  },
  {
    name: 'Andrés Gómez',
    role: 'Tratamiento de manchas',
    text: 'Profesionales de verdad. Me explicaron cada paso del láser, los tiempos de recuperación y el costo antes de empezar. Resultado natural, sin exageros.',
  },
  {
    name: 'Laura Jiménez',
    role: 'Rejuvenecimiento facial',
    text: 'Tenía miedo de verme "artificial". El resultado es sutil pero todos notan algo distinto. La clínica es impecable y el trato cercano.',
  },
];

const faqs = [
  {
    q: '¿Necesito remisión médica para agendar?',
    a: 'No. Puedes agendar directamente tu primera consulta. Si vienes por una condición específica, trae exámenes previos si los tienes.',
  },
  {
    q: '¿Los tratamientos duelen?',
    a: 'La mayoría son tolerables. Para procedimientos más intensos usamos anestesia tópica para tu comodidad.',
  },
  {
    q: '¿Aceptan seguros médicos?',
    a: 'Trabajamos con las principales aseguradoras para procedimientos clínicos. Los tratamientos estéticos se cancelan de forma particular.',
  },
  {
    q: '¿Cuánto dura una sesión?',
    a: 'Entre 30 y 60 minutos según el tratamiento. La primera consulta diagnóstica dura aproximadamente 45 minutos.',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans antialiased">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-stone-50/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
          <a href="#inicio" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center">
              <Flower2 className="w-5 h-5 text-stone-50" strokeWidth={1.5} />
            </div>
            <span className={`font-serif text-xl tracking-tight transition-colors duration-300 ${scrolled ? 'text-emerald-900' : 'text-stone-50'}`}>
              Derma<span className="font-light">Sana</span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`text-sm transition-colors duration-300 ${scrolled ? 'text-stone-600 hover:text-emerald-800' : 'text-stone-100 hover:text-white'}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contacto"
            className="hidden lg:inline-flex items-center gap-2 bg-emerald-700 text-stone-50 px-5 py-2.5 rounded-full text-sm hover:bg-emerald-800 transition-colors"
          >
            <Calendar className="w-4 h-4" /> Agendar cita
          </a>

          <button
            className={`lg:hidden transition-colors duration-300 ${scrolled ? 'text-emerald-900' : 'text-stone-50'}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menú"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="lg:hidden bg-stone-50 border-t border-stone-200">
            <ul className="px-6 py-4 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 text-stone-700"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contacto"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-2 bg-emerald-700 text-stone-50 px-5 py-2.5 rounded-full text-sm"
                >
                  <Calendar className="w-4 h-4" /> Agendar cita
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="inicio" className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        {/* Fondo con carrusel de imágenes y crossfade */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((src, i) => (
            <div
              key={src}
              className="absolute inset-0 transition-opacity duration-[1800ms] ease-in-out"
              style={{ opacity: i === heroIndex ? 1 : 0 }}
            >
              <img
                src={src}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/80 via-emerald-900/60 to-stone-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-50/40 via-transparent to-transparent" />
        </div>

        {/* Indicadores del carrusel */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroIndex(i)}
              aria-label={`Imagen ${i + 1}`}
              className={
                'h-1.5 rounded-full transition-all duration-500 ' +
                (i === heroIndex ? 'w-8 bg-emerald-300' : 'w-2 bg-stone-100/60 hover:bg-stone-100')
              }
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-emerald-200 bg-emerald-900/40 backdrop-blur-sm border border-emerald-400/30 px-4 py-2 rounded-full">
              <Sparkles className="w-3.5 h-3.5" /> Dermatología clínica y estética
            </span>
            <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-stone-50 drop-shadow-lg">
              La piel sana empieza con un diagnóstico certero.
            </h1>
            <p className="mt-6 text-lg text-stone-200 max-w-xl leading-relaxed drop-shadow">
              En DermaSana combinamos dermatología clínica, estética y tecnología de
              vanguardia para que tu piel recupere su equilibrio — con resultados
              naturales y duraderos.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 bg-emerald-600 text-stone-50 px-7 py-3.5 rounded-full hover:bg-emerald-500 transition-colors shadow-lg"
              >
                Agenda tu valoración <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 border border-stone-100/40 text-stone-50 px-7 py-3.5 rounded-full hover:bg-stone-50/10 backdrop-blur-sm transition-colors"
              >
                Ver servicios
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="font-serif text-3xl text-stone-50">12+</p>
                <p className="text-sm text-stone-300">años de experiencia</p>
              </div>
              <div className="w-px h-12 bg-stone-100/30" />
              <div>
                <p className="font-serif text-3xl text-stone-50">8.000+</p>
                <p className="text-sm text-stone-300">pacientes atendidos</p>
              </div>
              <div className="w-px h-12 bg-stone-100/30" />
              <div>
                <p className="font-serif text-3xl text-stone-50">98%</p>
                <p className="text-sm text-stone-300">satisfacción</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-emerald-900 text-stone-100 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-sm">
          <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Dermatólogos certificados</span>
          <span className="flex items-center gap-2"><Stethoscope className="w-4 h-4" /> Tecnología de última generación</span>
          <span className="flex items-center gap-2"><HeartPulse className="w-4 h-4" /> Protocolos personalizados</span>
          <span className="flex items-center gap-2"><Sparkles className="w-4 h-4" /> Resultados naturales</span>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="text-sm uppercase tracking-[0.2em] text-emerald-700">Servicios</span>
            <h2 className="mt-3 font-serif text-3xl lg:text-4xl text-emerald-950">
              Soluciones dermatológicas para cada necesidad
            </h2>
            <p className="mt-4 text-stone-600">
              Atendemos la piel desde lo clínico y lo estético, con un enfoque médico,
              honesto y personalizado.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group bg-white rounded-2xl p-8 border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                    <s.icon className="w-7 h-7 text-emerald-700" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-emerald-950">{s.title}</h3>
                    <p className="mt-2 text-stone-600 text-sm leading-relaxed">{s.desc}</p>
                    <ul className="mt-4 space-y-2">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-sm text-stone-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" /> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section id="tratamientos" className="py-24 lg:py-32 bg-stone-100/70">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-sm uppercase tracking-[0.2em] text-emerald-700">Tratamientos</span>
              <h2 className="mt-3 font-serif text-3xl lg:text-4xl text-emerald-950">
                Tecnología de vanguardia, manos expertas
              </h2>
            </div>
            <a href="#contacto" className="text-sm text-emerald-800 hover:underline inline-flex items-center gap-1">
              Consultar disponibilidad <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((t) => (
              <article
                key={t.name}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 font-serif text-lg text-white">{t.name}</h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-stone-600 leading-relaxed">{t.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-sm uppercase tracking-[0.2em] text-emerald-700">Cómo trabajamos</span>
            <h2 className="mt-3 font-serif text-3xl lg:text-4xl text-emerald-950">
              Un proceso claro, de principio a fin
            </h2>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.n} className="relative">
                <span className="font-serif text-5xl text-emerald-200">{s.n}</span>
                <h3 className="mt-4 font-serif text-xl text-emerald-950">{s.title}</h3>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="nosotros" className="py-24 lg:py-32 bg-emerald-950 text-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1000"
              alt="Dra. Valentina Ríos"
              className="rounded-[2rem] w-full h-[30rem] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-stone-50 text-emerald-950 rounded-2xl p-6 shadow-xl max-w-[16rem]">
              <p className="font-serif text-lg">Dra. Valentina Ríos</p>
              <p className="text-sm text-stone-500">Dermatóloga · MD, Universidad CES</p>
            </div>
          </div>
          <div>
            <span className="text-sm uppercase tracking-[0.2em] text-emerald-300">Nosotros</span>
            <h2 className="mt-3 font-serif text-3xl lg:text-4xl">
              Más de una década cuidando la piel con criterio médico
            </h2>
            <p className="mt-6 text-stone-300 leading-relaxed">
              DermaSana nació con una convicción simple: la piel se cuida desde la
              ciencia, no desde la moda. Cada paciente recibe un diagnóstico
              preciso y un plan honesto — sin prometer milagros, sin vender de más.
            </p>
            <p className="mt-4 text-stone-300 leading-relaxed">
              Nuestro equipo combina dermatólogos, médicos estetas y tecnólogos
              certificados que trabajan en conjunto para que tu tratamiento sea
              seguro, cómodo y efectivo.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-300 mt-1 shrink-0" />
                <p className="text-sm text-stone-200">Protocolos basados en evidencia clínica</p>
              </div>
              <div className="flex items-start gap-3">
                <HeartPulse className="w-5 h-5 text-emerald-300 mt-1 shrink-0" />
                <p className="text-sm text-stone-200">Equipos con respaldo INVIMA</p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-emerald-300 mt-1 shrink-0" />
                <p className="text-sm text-stone-200">Resultados naturales, nunca exagerados</p>
              </div>
              <div className="flex items-start gap-3">
                <Stethoscope className="w-5 h-5 text-emerald-300 mt-1 shrink-0" />
                <p className="text-sm text-stone-200">Seguimiento post-tratamiento incluido</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonios" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="text-sm uppercase tracking-[0.2em] text-emerald-700">Testimonios</span>
            <h2 className="mt-3 font-serif text-3xl lg:text-4xl text-emerald-950">
              Lo que dicen nuestros pacientes
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.name} className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm">
                <div className="flex gap-1 text-amber-400 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="text-stone-700 leading-relaxed">"{t.text}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-emerald-100 flex items-center justify-center font-serif text-emerald-800">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-emerald-950">{t.name}</p>
                    <p className="text-xs text-stone-500">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-stone-100/70">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-center">
            <span className="text-sm uppercase tracking-[0.2em] text-emerald-700">Preguntas frecuentes</span>
            <h2 className="mt-3 font-serif text-3xl lg:text-4xl text-emerald-950">
              Resolvemos tus dudas
            </h2>
          </div>
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className="bg-white rounded-xl border border-stone-100">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-emerald-950">{f.q}</span>
                  <span className="text-emerald-700 text-xl">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <p className="px-5 pb-5 text-sm text-stone-600 leading-relaxed">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contacto" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-sm uppercase tracking-[0.2em] text-emerald-700">Contacto</span>
            <h2 className="mt-3 font-serif text-3xl lg:text-4xl text-emerald-950">
              Agenda tu valoración dermatológica
            </h2>
            <p className="mt-4 text-stone-600 max-w-md">
              Cuéntanos qué necesitas y te contactaremos en menos de 24 horas para
              confirmar tu cita.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <p className="text-sm font-medium text-emerald-950">Dirección</p>
                  <p className="text-sm text-stone-600">Calle 34 # 15-27, Piso 4 · Centro Médico Las Lomas</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <p className="text-sm font-medium text-emerald-950">Teléfono</p>
                  <p className="text-sm text-stone-600">+57 604 123 4567 · WhatsApp +57 310 555 7788</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <p className="text-sm font-medium text-emerald-950">Horario</p>
                  <p className="text-sm text-stone-600">Lun a Vie 8:00 – 18:00 · Sáb 8:00 – 13:00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <p className="text-sm font-medium text-emerald-950">Correo</p>
                  <p className="text-sm text-stone-600">citas@dermasana.co</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <p className="text-sm font-medium text-emerald-950">Instagram</p>
                  <p className="text-sm text-stone-600">@dermasana.clinica</p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('¡Gracias! Te contactaremos en menos de 24 horas para confirmar tu cita.');
            }}
            className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-stone-100"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Nombre" name="nombre" placeholder="Tu nombre" />
              <Field label="Apellido" name="apellido" placeholder="Tu apellido" />
              <Field label="Teléfono" name="telefono" placeholder="+57 ..." />
              <Field label="Correo" name="correo" type="email" placeholder="tu@correo.com" />
            </div>
            <div className="mt-5">
              <label className="text-sm font-medium text-emerald-950">Motivo de consulta</label>
              <select className="mt-2 w-full rounded-xl border border-stone-200 px-4 py-3 text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>Valoración general</option>
                <option>Acné y cicatrices</option>
                <option>Manchas y pigmentación</option>
                <option>Rejuvenecimiento facial</option>
                <option>Lesiones / lunares</option>
                <option>Otro</option>
              </select>
            </div>
            <div className="mt-5">
              <label className="text-sm font-medium text-emerald-950">Mensaje (opcional)</label>
              <textarea
                rows={4}
                placeholder="Cuéntanos brevemente qué te trae"
                className="mt-2 w-full rounded-xl border border-stone-200 px-4 py-3 text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <button
              type="submit"
              className="mt-7 w-full inline-flex items-center justify-center gap-2 bg-emerald-700 text-stone-50 px-7 py-3.5 rounded-full hover:bg-emerald-800 transition-colors"
            >
              Solicitar cita <ArrowRight className="w-4 h-4" />
            </button>
            <p className="mt-4 text-xs text-stone-400 text-center">
              Al enviar aceptas nuestra política de tratamiento de datos.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-emerald-950 text-stone-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center">
                <Flower2 className="w-5 h-5 text-stone-50" strokeWidth={1.5} />
              </div>
              <span className="font-serif text-xl text-stone-50">
                Derma<span className="font-light">Sana</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-stone-400 max-w-sm leading-relaxed">
              Consultorio de dermatología clínica y estética. Cuidamos tu piel con
              criterio médico, tecnología certificada y resultados naturales.
            </p>
          </div>
          <div>
            <p className="font-serif text-stone-100 mb-4">Navegación</p>
            <ul className="space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-emerald-300 transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-serif text-stone-100 mb-4">Contacto</p>
            <ul className="space-y-2 text-sm">
              <li>Calle 34 # 15-27, Piso 4</li>
              <li>+57 604 123 4567</li>
              <li>citas@dermasana.co</li>
              <li className="flex items-center gap-2 pt-2">
                <Instagram className="w-4 h-4" /> @dermasana.clinica
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-emerald-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-500">
            <p>© {new Date().getFullYear()} DermaSana. Todos los derechos reservados.</p>
            <p>Diseño y desarrollo: Vegora — transformación tecnológica para negocios.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-emerald-950">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-stone-200 px-4 py-3 text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
    </div>
  );
}

export default App;

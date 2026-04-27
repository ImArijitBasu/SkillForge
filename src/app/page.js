import Link from "next/link";
import { courses, testimonials } from "@/lib/data";
import CourseCard from "@/components/CourseCard";
import {
  HiOutlineLightningBolt,
  HiOutlineGlobe,
  HiOutlineUserGroup,
  HiOutlineShieldCheck,
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineStar,
  HiOutlineClock,
} from "react-icons/hi";

export default function HomePage() {
  const featuredCourses = courses.slice(0, 4);

  const features = [
    {
      icon: HiOutlineLightningBolt,
      title: "Learn at Your Pace",
      description: "Access courses anytime, anywhere. Learn on your schedule with lifetime access to all materials.",
      color: "from-violet-500 to-violet-600",
    },
    {
      icon: HiOutlineGlobe,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience at top companies.",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: HiOutlineUserGroup,
      title: "Active Community",
      description: "Join thousands of learners. Collaborate, share knowledge, and grow together.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: HiOutlineShieldCheck,
      title: "Certified Learning",
      description: "Earn recognized certificates upon completion. Showcase your skills to employers.",
      color: "from-emerald-500 to-green-600",
    },
  ];

  const stats = [
    { value: "50K+", label: "Active Students", icon: HiOutlineUserGroup },
    { value: "200+", label: "Expert Courses", icon: HiOutlineBookOpen },
    { value: "4.8", label: "Average Rating", icon: HiOutlineStar },
    { value: "500+", label: "Hours of Content", icon: HiOutlineClock },
  ];

  return (
    <div className="overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[128px] animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Text Content - Left */}
        <div className="relative flex-1 text-center lg:text-left animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-8">
            <HiOutlineAcademicCap className="w-4 h-4" />
            <span>Trusted by 50,000+ learners worldwide</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
            Master New Skills,<br />
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Shape Your Future
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            Unlock your potential with expert-led courses in development, data
            science, design, and more. Build real-world skills that employers
            actually want.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link
              href="/items"
              className="px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-600 rounded-xl hover:from-violet-500 hover:to-cyan-500 transition-all duration-300 shadow-xl shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5 w-full sm:w-auto text-center"
            >
              Explore Courses
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 text-base font-semibold text-slate-300 bg-white/[0.04] border border-white/[0.08] rounded-xl hover:bg-white/[0.08] hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Visual Content - Right */}
        <div className="flex-1 relative w-full max-w-lg lg:max-w-none mx-auto hidden md:block">
          <div className="relative w-full aspect-square animate-float">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-cyan-500/20 rounded-[2rem] transform rotate-3 scale-105 blur-xl"></div>
            <div className="absolute inset-0 bg-[#0a0a0f] border border-white/[0.08] rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=800&fit=crop" 
                alt="Students learning" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent"></div>
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -left-8 top-1/4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center">
                  <span className="text-xl">🚀</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Career Growth</p>
                  <p className="text-xs text-slate-400">+45% Salary</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-8 bottom-1/4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-2xl animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <span className="text-xl">🌟</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Top Rated</p>
                  <p className="text-xs text-slate-400">4.9/5.0 Average</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose <span className="gradient-text">SkillForge</span>?
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              We provide everything you need to go from beginner to professional
              in your chosen field.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/20 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== POPULAR COURSES SECTION ===== */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Popular Courses
              </h2>
              <p className="text-slate-400 text-lg">
                Handpicked courses loved by our learners
              </p>
            </div>
            <Link
              href="/items"
              className="text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-1 group"
            >
              View all courses <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-violet-600/10 via-transparent to-cyan-600/10 border border-white/[0.06] p-8 sm:p-12 md:p-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mx-auto mb-5">
                    <stat.icon className="w-7 h-7 text-violet-400" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base font-medium text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Learners Say
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Real stories from real people who transformed their careers with
              SkillForge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-slate-300 text-base leading-relaxed mb-8 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-white/[0.06] mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white text-base font-bold shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-violet-500/10">
            {/* Gradient BG */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-cyan-600 opacity-90" />
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative text-center py-16 sm:py-24 px-6 md:px-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Start Your<br className="hidden md:block" /> Learning Journey?
              </h2>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
                Join thousands of learners and start building the skills that
                will shape your future today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/register"
                  className="px-8 py-4 text-base font-bold text-violet-600 bg-white rounded-xl hover:bg-slate-100 transition-all duration-300 shadow-xl hover:-translate-y-0.5 w-full sm:w-auto text-center"
                >
                  Get Started Free
                </Link>
                <Link
                  href="/items"
                  className="px-8 py-4 text-base font-bold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-center"
                >
                  Browse Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

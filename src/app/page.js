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
      description:
        "Access courses anytime, anywhere. Learn on your schedule with lifetime access to all materials.",
      color: "from-violet-500 to-violet-600",
    },
    {
      icon: HiOutlineGlobe,
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with years of real-world experience at top companies.",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: HiOutlineUserGroup,
      title: "Active Community",
      description:
        "Join thousands of learners. Collaborate, share knowledge, and grow together.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: HiOutlineShieldCheck,
      title: "Certified Learning",
      description:
        "Earn recognized certificates upon completion. Showcase your skills to employers.",
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
      <section className="relative min-h-[90vh] flex items-center justify-center px-4">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px] animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[100px]" />
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

        <div className="relative max-w-5xl mx-auto text-center animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-8">
            <HiOutlineAcademicCap className="w-4 h-4" />
            <span>Trusted by 50,000+ learners worldwide</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Master New Skills,
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Shape Your Future
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Unlock your potential with expert-led courses in development, data
            science, design, and more. Build real-world skills that employers
            actually want.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/items"
              className="px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-600 rounded-xl hover:from-violet-500 hover:to-cyan-500 transition-all duration-300 shadow-xl shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5"
            >
              Explore Courses
            </Link>
            <Link
              href="/about"
              className="px-8 py-3.5 text-base font-semibold text-slate-300 bg-white/[0.04] border border-white/[0.08] rounded-xl hover:bg-white/[0.08] hover:text-white transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose{" "}
              <span className="gradient-text">SkillForge</span>?
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              We provide everything you need to go from beginner to professional
              in your chosen field.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/20 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
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
      <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
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
              className="text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-1"
            >
              View all courses →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-violet-600/10 via-transparent to-cyan-600/10 border border-white/[0.06] p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-violet-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-slate-400">
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
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
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

            <div className="relative text-center py-16 md:py-20 px-6 md:px-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Learning Journey?
              </h2>
              <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
                Join thousands of learners and start building the skills that
                will shape your future today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/register"
                  className="px-8 py-3.5 text-base font-semibold text-violet-600 bg-white rounded-xl hover:bg-slate-100 transition-all duration-300 shadow-xl hover:-translate-y-0.5"
                >
                  Get Started Free
                </Link>
                <Link
                  href="/items"
                  className="px-8 py-3.5 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all duration-300"
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

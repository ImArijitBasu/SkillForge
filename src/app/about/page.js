import Link from "next/link";
import { HiOutlineLightBulb, HiOutlineHeart, HiOutlineGlobe } from "react-icons/hi";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 md:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5">
            About <span className="gradient-text">SkillForge</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We are on a mission to make high-quality education accessible to everyone, everywhere.
            Our platform connects passionate learners with world-class instructors.
          </p>
        </div>

        {/* Image */}
        <div className="relative rounded-3xl overflow-hidden aspect-[21/9] mb-16">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=500&fit=crop"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/20 to-transparent" />
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: HiOutlineLightBulb,
              title: "Our Mission",
              desc: "To democratize education by providing world-class courses that are accessible, affordable, and actionable for learners at every stage.",
              color: "from-violet-500 to-violet-600",
            },
            {
              icon: HiOutlineHeart,
              title: "Our Values",
              desc: "We believe in quality over quantity, community-driven learning, and continuous improvement. Every course is vetted by industry experts.",
              color: "from-cyan-500 to-cyan-600",
            },
            {
              icon: HiOutlineGlobe,
              title: "Our Vision",
              desc: "A world where anyone can learn any skill, from anywhere, taught by the best minds in the industry. Education without boundaries.",
              color: "from-amber-500 to-orange-500",
            },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/20 transition-all duration-300">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] p-8 md:p-12 mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              SkillForge was born out of a simple frustration: finding quality, up-to-date tech courses
              was harder than it should be. Founded in 2024, we set out to build a platform that
              prioritizes depth over breadth, real-world projects over theory, and community over isolation.
            </p>
            <p>
              Today, we serve over 50,000 learners across 120+ countries, with courses taught by
              professionals from companies like Google, Meta, Amazon, and Netflix. Every course on
              SkillForge goes through a rigorous review process to ensure it meets our quality standards.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to join us?</h2>
          <p className="text-slate-400 mb-6">Start your learning journey today.</p>
          <Link href="/items" className="px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-600 rounded-xl hover:from-violet-500 hover:to-cyan-500 transition-all duration-300 shadow-xl shadow-violet-500/25 inline-block">
            Explore Courses
          </Link>
        </div>
      </div>
    </div>
  );
}

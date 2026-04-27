import Link from "next/link";
import { HiOutlineLightBulb, HiOutlineHeart, HiOutlineGlobe } from "react-icons/hi";
import "./about.css";

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container container-sm" style={{ maxWidth: "64rem" }}>
        {/* Header */}
        <div className="about-hero">
          <h1 className="about-title">
            About <span className="text-gradient">SkillForge</span>
          </h1>
          <p className="about-subtitle">
            We are on a mission to make high-quality education accessible to everyone, everywhere.
            Our platform connects passionate learners with world-class instructors.
          </p>
        </div>

        {/* Image */}
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=500&fit=crop"
            alt="Team collaboration"
          />
          <div className="about-image-overlay" />
        </div>

        {/* Mission Cards */}
        <div className="mission-grid">
          {[
            {
              icon: HiOutlineLightBulb,
              title: "Our Mission",
              desc: "To democratize education by providing world-class courses that are accessible, affordable, and actionable for learners at every stage.",
              colorClass: "violet",
            },
            {
              icon: HiOutlineHeart,
              title: "Our Values",
              desc: "We believe in quality over quantity, community-driven learning, and continuous improvement. Every course is vetted by industry experts.",
              colorClass: "cyan",
            },
            {
              icon: HiOutlineGlobe,
              title: "Our Vision",
              desc: "A world where anyone can learn any skill, from anywhere, taught by the best minds in the industry. Education without boundaries.",
              colorClass: "amber",
            },
          ].map((item, i) => (
            <div key={i} className="mission-card">
              <div className={`mission-icon ${item.colorClass}`}>
                <item.icon size={24} />
              </div>
              <h3 className="mission-title">{item.title}</h3>
              <p className="mission-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="story-section">
          <h2 className="story-title">Our Story</h2>
          <div className="story-content">
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
        <div className="about-cta">
          <h2 className="about-cta-title">Ready to join us?</h2>
          <p className="about-cta-subtitle">Start your learning journey today.</p>
          <Link href="/items" className="btn btn-primary">
            Explore Courses
          </Link>
        </div>
      </div>
    </div>
  );
}

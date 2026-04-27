import Link from "next/link";
import { courses, testimonials } from "@/lib/data";
import CourseCard from "@/components/CourseCard";
import "./page.css";
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
    },
    {
      icon: HiOutlineGlobe,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience at top companies.",
    },
    {
      icon: HiOutlineUserGroup,
      title: "Active Community",
      description: "Join thousands of learners. Collaborate, share knowledge, and grow together.",
    },
    {
      icon: HiOutlineShieldCheck,
      title: "Certified Learning",
      description: "Earn recognized certificates upon completion. Showcase your skills to employers.",
    },
  ];

  const stats = [
    { value: "50K+", label: "Active Students", icon: HiOutlineUserGroup },
    { value: "200+", label: "Expert Courses", icon: HiOutlineBookOpen },
    { value: "4.8", label: "Average Rating", icon: HiOutlineStar },
    { value: "500+", label: "Hours of Content", icon: HiOutlineClock },
  ];

  return (
    <div style={{ overflow: "hidden" }}>
      {/* ===== HERO SECTION ===== */}
      <section className="hero">
        <div className="hero-bg-glow" />
        <div className="hero-bg-glow-2" />
        
        <div className="container">
          <div className="hero-grid">
            {/* Text Content */}
            <div className="hero-content">
              <div className="hero-trust-badge">
                <HiOutlineAcademicCap size={16} />
                <span>Trusted by 50,000+ learners worldwide</span>
              </div>

              <h1 className="hero-title">
                Master New Skills,<br />
                <span className="text-gradient">Shape Your Future</span>
              </h1>

              <p className="hero-subtitle">
                Unlock your potential with expert-led courses in development, data
                science, design, and more. Build real-world skills that employers
                actually want.
              </p>

              <div className="hero-actions">
                <Link href="/items" className="btn btn-primary" style={{ padding: "1rem 2rem", fontSize: "1rem" }}>
                  Explore Courses
                </Link>
                <Link href="/about" className="btn btn-secondary" style={{ padding: "1rem 2rem", fontSize: "1rem" }}>
                  Learn More
                </Link>
              </div>
            </div>

            {/* Visual Content */}
            <div className="hero-visual">
              <div className="hero-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=800&fit=crop" 
                  alt="Students learning" 
                />
              </div>
              
              <div className="hero-badge hero-badge-1">
                <div className="badge-icon badge-violet">🚀</div>
                <div>
                  <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "white" }}>Career Growth</p>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>+45% Salary</p>
                </div>
              </div>

              <div className="hero-badge hero-badge-2">
                <div className="badge-icon badge-cyan">🌟</div>
                <div>
                  <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "white" }}>Top Rated</p>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>4.9/5.0 Average</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Why Choose <span className="text-gradient">SkillForge</span>?
            </h2>
            <p className="section-subtitle">
              We provide everything you need to go from beginner to professional
              in your chosen field.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-box">
                  <feature.icon size={28} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== POPULAR COURSES SECTION ===== */}
      <section className="section courses-section">
        <div className="container">
          <div className="courses-header">
            <div>
              <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>Popular Courses</h2>
              <p className="section-subtitle" style={{ margin: 0 }}>Handpicked courses loved by our learners</p>
            </div>
            <Link href="/items" style={{ color: "var(--color-violet-light)", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.25rem" }}>
              View all courses <span>→</span>
            </Link>
          </div>

          <div className="course-grid">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="section">
        <div className="container container-sm" style={{ maxWidth: "72rem" }}>
          <div className="stats-banner">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-icon-box">
                    <stat.icon size={28} />
                  </div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Learners Say</h2>
            <p className="section-subtitle">
              Real stories from real people who transformed their careers with SkillForge.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="testimonial-text">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{testimonial.avatar}</div>
                  <div>
                    <p className="testimonial-name">{testimonial.name}</p>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="section" style={{ paddingBottom: "6rem" }}>
        <div className="container container-sm">
          <div className="cta-banner">
            <h2 className="cta-title">Ready to Start Your Learning Journey?</h2>
            <p className="cta-desc">
              Join thousands of learners and start building the skills that
              will shape your future today.
            </p>
            <div className="cta-actions">
              <Link href="/register" className="btn btn-white" style={{ padding: "1rem 2rem", fontSize: "1.125rem" }}>
                Get Started Free
              </Link>
              <Link href="/items" className="btn btn-outline-white" style={{ padding: "1rem 2rem", fontSize: "1.125rem" }}>
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

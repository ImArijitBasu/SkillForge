import { courses } from "@/lib/data";
import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import ItemDetailFallback from "./ItemDetailFallback";
import "./item-detail.css";
import { HiOutlineArrowLeft, HiOutlineClock, HiOutlineAcademicCap, HiOutlineUserGroup, HiOutlineStar } from "react-icons/hi";

export default async function ItemDetailPage({ params }) {
  const { id } = await params;

  const course = courses.find((c) => c.id === id);

  if (!course) {
    return <ItemDetailFallback id={id} />;
  }

  const relatedCourses = courses
    .filter((c) => c.category === course.category && c.id !== course.id)
    .slice(0, 3);

  return (
    <div className="section">
      <div className="container">
        <Link href="/items" className="back-link">
          <HiOutlineArrowLeft className="back-icon" size={16} />
          Back to Courses
        </Link>

        <div className="detail-layout">
          <div className="detail-main">
            <div className="detail-image-wrap">
              <img src={course.image} alt={course.title} />
              <div className="detail-image-overlay" />
              <div className="detail-badges">
                <span className="badge-glass badge-glass-violet">
                  {course.category}
                </span>
                <span className="badge-glass badge-glass-dark">
                  {course.level}
                </span>
              </div>
            </div>

            <div>
              <h1 className="detail-title">{course.title}</h1>
              <p className="detail-desc">{course.fullDescription}</p>
            </div>

            <div className="specs-section">
              <h2 className="specs-title">What You&apos;ll Get</h2>
              <div className="specs-grid">
                {course.specifications.map((spec, index) => (
                  <div key={index} className="spec-item">
                    <div className="spec-icon-box">✓</div>
                    <span className="spec-text">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="detail-sidebar-sticky">
              <div className="sidebar-card">
                <div className="sidebar-price text-gradient">${course.price}</div>
                <div className="sidebar-meta-list">
                  <div className="sidebar-meta-item">
                    <HiOutlineClock className="sidebar-meta-icon" size={20} />
                    <span className="sidebar-meta-label">Duration: <span className="sidebar-meta-value">{course.duration}</span></span>
                  </div>
                  <div className="sidebar-meta-item">
                    <HiOutlineAcademicCap className="sidebar-meta-icon" size={20} />
                    <span className="sidebar-meta-label">Level: <span className="sidebar-meta-value">{course.level}</span></span>
                  </div>
                  <div className="sidebar-meta-item">
                    <HiOutlineUserGroup className="sidebar-meta-icon" size={20} />
                    <span className="sidebar-meta-label">Students: <span className="sidebar-meta-value">{course.students?.toLocaleString()}</span></span>
                  </div>
                  <div className="sidebar-meta-item">
                    <HiOutlineStar className="sidebar-meta-icon" style={{ color: "var(--color-amber)" }} size={20} />
                    <span className="sidebar-meta-label">Rating: <span className="sidebar-meta-value">{course.rating} / 5.0</span></span>
                  </div>
                </div>
                <div className="sidebar-instructor">
                  <p className="instructor-label">Instructor</p>
                  <div className="instructor-info">
                    <div className="instructor-avatar">
                      {course.instructor.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <span className="instructor-name">{course.instructor}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {relatedCourses.length > 0 && (
          <div className="related-section">
            <h2 className="related-title">Related Courses</h2>
            <div className="course-grid">
              {relatedCourses.map((c) => (
                <CourseCard key={c.id} course={c} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

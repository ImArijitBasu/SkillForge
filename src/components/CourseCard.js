import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="course-card">
      <div className="card-image-wrap">
        <img src={course.image} alt={course.title} />
        <div className="card-badge">{course.category}</div>
        <div className="card-rating">★ {course.rating}</div>
      </div>

      <div className="card-content">
        <h3 className="card-title">{course.title}</h3>
        <p className="card-desc">{course.shortDescription || course.description}</p>

        <div className="card-meta">
          <span>📚 {course.duration}</span>
          <span>📊 {course.level}</span>
          {course.students && <span>👥 {course.students.toLocaleString()}</span>}
        </div>

        <div className="card-footer">
          <span className="card-price">${course.price}</span>
          <Link href={`/items/${course.id}`} className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

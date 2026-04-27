import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-violet-500/30 hover:bg-white/[0.05] transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/[0.05] hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 text-xs font-medium bg-violet-500/20 text-violet-300 border border-violet-500/20 rounded-full backdrop-blur-sm">
            {course.category}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 text-xs font-medium bg-[#0a0a0f]/70 text-amber-400 rounded-full backdrop-blur-sm flex items-center gap-1">
            ★ {course.rating}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-1 group-hover:text-violet-300 transition-colors">
          {course.title}
        </h3>
        <p className="text-sm text-slate-400 mb-4 line-clamp-2 leading-relaxed">
          {course.shortDescription}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-4 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            📚 {course.duration}
          </span>
          <span className="flex items-center gap-1">
            📊 {course.level}
          </span>
          <span className="flex items-center gap-1">
            👥 {course.students?.toLocaleString()}
          </span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
          <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            ${course.price}
          </span>
          <Link
            href={`/items/${course.id}`}
            className="px-4 py-2 text-sm font-medium text-white bg-white/[0.06] border border-white/[0.08] rounded-lg hover:bg-violet-600 hover:border-violet-500 transition-all duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

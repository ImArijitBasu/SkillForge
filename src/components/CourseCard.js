import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="group relative bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-violet-500/30 hover:bg-white/[0.04] transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/[0.05] hover:-translate-y-1 flex flex-col h-full">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden shrink-0">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-80" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 text-xs font-medium bg-violet-500/20 text-violet-300 border border-violet-500/20 rounded-full backdrop-blur-md">
            {course.category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1.5 text-xs font-bold bg-[#0a0a0f]/80 text-amber-400 rounded-full backdrop-blur-md flex items-center gap-1.5 shadow-lg">
            ★ {course.rating}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-violet-300 transition-colors">
          {course.title}
        </h3>
        
        <p className="text-sm text-slate-400 mb-6 line-clamp-2 leading-relaxed flex-1">
          {course.shortDescription || course.description}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-6 text-xs font-medium text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="text-violet-400">📚</span> {course.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-cyan-400">📊</span> {course.level}
          </span>
          {course.students && (
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400">👥</span> {course.students.toLocaleString()}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-5 border-t border-white/[0.06] mt-auto">
          <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            ${course.price}
          </span>
          <Link
            href={`/items/${course.id}`}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-white/[0.05] border border-white/[0.08] rounded-xl hover:bg-violet-600 hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

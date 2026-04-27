import { courses } from "@/lib/data";
import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import ItemDetailFallback from "./ItemDetailFallback";
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
    <div className="min-h-screen py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/items"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8 group"
        >
          <HiOutlineArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Courses
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1.5 text-xs font-medium bg-violet-500/20 text-violet-300 border border-violet-500/20 rounded-full backdrop-blur-sm">
                  {course.category}
                </span>
                <span className="px-3 py-1.5 text-xs font-medium bg-[#0a0a0f]/60 text-white rounded-full backdrop-blur-sm">
                  {course.level}
                </span>
              </div>
            </div>

            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">{course.title}</h1>
              <p className="text-slate-300 leading-relaxed text-base">{course.fullDescription}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">What You&apos;ll Get</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.specifications.map((spec, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-violet-400 text-sm">✓</span>
                    </div>
                    <span className="text-sm text-slate-300">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-3xl font-bold gradient-text mb-6">${course.price}</div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <HiOutlineClock className="w-5 h-5 text-violet-400" />
                    <span className="text-slate-300">Duration: <span className="text-white">{course.duration}</span></span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <HiOutlineAcademicCap className="w-5 h-5 text-violet-400" />
                    <span className="text-slate-300">Level: <span className="text-white">{course.level}</span></span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <HiOutlineUserGroup className="w-5 h-5 text-violet-400" />
                    <span className="text-slate-300">Students: <span className="text-white">{course.students?.toLocaleString()}</span></span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <HiOutlineStar className="w-5 h-5 text-amber-400" />
                    <span className="text-slate-300">Rating: <span className="text-white">{course.rating} / 5.0</span></span>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/[0.06]">
                  <p className="text-xs text-slate-500 mb-2">Instructor</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">
                      {course.instructor.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <span className="text-sm font-medium text-white">{course.instructor}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {relatedCourses.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8">Related Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

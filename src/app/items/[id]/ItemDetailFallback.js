"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi";

export default function ItemDetailFallback({ id }) {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("skillforge_courses");
    if (stored) {
      const userCourses = JSON.parse(stored);
      const found = userCourses.find((c) => c.id === id);
      setCourse(found || null);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-violet-500/30 border-t-violet-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Course Not Found</h1>
          <p className="text-slate-400 mb-6">The course you are looking for does not exist.</p>
          <Link href="/items" className="px-6 py-2.5 text-sm font-medium text-white bg-violet-600 rounded-lg hover:bg-violet-500 transition-colors">
            Browse Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link href="/items" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8 group">
          <HiOutlineArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Courses
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {course.image && (
              <div className="relative rounded-2xl overflow-hidden aspect-video">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              </div>
            )}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">{course.title}</h1>
              <p className="text-slate-300 leading-relaxed">{course.fullDescription}</p>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <div className="text-3xl font-bold gradient-text mb-6">${course.price}</div>
              <span className="px-2.5 py-1 text-xs bg-violet-500/20 text-violet-300 rounded-full">{course.category}</span>
              <p className="text-sm text-slate-400 mt-3">{course.shortDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

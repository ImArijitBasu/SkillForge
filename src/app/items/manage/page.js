"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";
import toast from "react-hot-toast";
import { HiOutlineEye, HiOutlineTrash, HiOutlinePlusCircle } from "react-icons/hi";

function ManageItemsContent() {
  const [courses, setCourses] = useState([]);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("skillforge_courses");
    if (stored) setCourses(JSON.parse(stored));
  }, []);

  const handleDelete = (id) => {
    const updated = courses.filter((c) => c.id !== id);
    setCourses(updated);
    localStorage.setItem("skillforge_courses", JSON.stringify(updated));
    toast.success("Course deleted");
    setDeleteId(null);
  };

  return (
    <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">Manage Courses</h1>
            <p className="text-slate-400 text-sm">{courses.length} course{courses.length !== 1 ? "s" : ""} added</p>
          </div>
          <Link href="/items/add" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-cyan-600 rounded-xl hover:from-violet-500 hover:to-cyan-500 transition-all shadow-lg shadow-violet-500/25">
            <HiOutlinePlusCircle className="w-4 h-4" /> Add Course
          </Link>
        </div>

        {courses.length === 0 ? (
          <div className="text-center py-20 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mx-auto mb-4">
              <HiOutlinePlusCircle className="w-8 h-8 text-slate-500" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">No courses yet</h3>
            <p className="text-slate-400 text-sm mb-6">Start by adding your first course.</p>
            <Link href="/items/add" className="px-6 py-2.5 text-sm font-medium text-white bg-violet-600 rounded-lg hover:bg-violet-500 transition-colors">
              Add Your First Course
            </Link>
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider px-6 py-4">Course</th>
                    <th className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider px-6 py-4">Category</th>
                    <th className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider px-6 py-4">Price</th>
                    <th className="text-right text-xs font-medium text-slate-400 uppercase tracking-wider px-6 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course) => (
                    <tr key={course.id} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img src={course.image} alt="" className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-white line-clamp-1">{course.title}</p>
                            <p className="text-xs text-slate-500 line-clamp-1">{course.shortDescription}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 text-xs bg-violet-500/10 text-violet-300 rounded-full">{course.category}</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-white">${course.price}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <Link href={`/items/${course.id}`} className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-400 hover:text-white hover:border-white/[0.12] transition-all" title="View">
                            <HiOutlineEye className="w-4 h-4" />
                          </Link>
                          <button onClick={() => setDeleteId(course.id)} className="p-2 rounded-lg bg-red-500/[0.06] border border-red-500/10 text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all cursor-pointer" title="Delete">
                            <HiOutlineTrash className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-3">
              {courses.map((course) => (
                <div key={course.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-start gap-3 mb-3">
                    <img src={course.image} alt="" className="w-14 h-14 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white line-clamp-1">{course.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{course.category}</p>
                      <p className="text-sm font-semibold gradient-text mt-1">${course.price}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/items/${course.id}`} className="flex-1 py-2 text-center text-xs font-medium text-slate-300 bg-white/[0.04] border border-white/[0.06] rounded-lg hover:bg-white/[0.08] transition-colors">
                      View
                    </Link>
                    <button onClick={() => setDeleteId(course.id)} className="flex-1 py-2 text-center text-xs font-medium text-red-400 bg-red-500/[0.06] border border-red-500/10 rounded-lg hover:bg-red-500/10 transition-colors cursor-pointer">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Delete Confirmation Modal */}
        {deleteId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="w-full max-w-sm p-6 rounded-2xl bg-[#141420] border border-white/[0.08]">
              <h3 className="text-lg font-semibold text-white mb-2">Delete Course?</h3>
              <p className="text-sm text-slate-400 mb-6">This action cannot be undone.</p>
              <div className="flex gap-3">
                <button onClick={() => setDeleteId(null)} className="flex-1 py-2.5 text-sm font-medium text-slate-300 bg-white/[0.04] border border-white/[0.06] rounded-xl hover:bg-white/[0.08] transition-colors cursor-pointer">
                  Cancel
                </button>
                <button onClick={() => handleDelete(deleteId)} className="flex-1 py-2.5 text-sm font-medium text-white bg-red-600 rounded-xl hover:bg-red-500 transition-colors cursor-pointer">
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ManageItemsPage() {
  return (
    <ProtectedRoute>
      <ManageItemsContent />
    </ProtectedRoute>
  );
}

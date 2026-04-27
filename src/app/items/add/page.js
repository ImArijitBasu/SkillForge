"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";
import toast from "react-hot-toast";
import { categories } from "@/lib/data";
import { HiOutlinePhotograph } from "react-icons/hi";

function AddItemForm() {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    title: "",
    shortDescription: "",
    fullDescription: "",
    price: "",
    category: "Web Development",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!form.title.trim()) errs.title = "Title is required";
    if (!form.shortDescription.trim()) errs.shortDescription = "Short description is required";
    if (!form.fullDescription.trim()) errs.fullDescription = "Full description is required";
    if (!form.price || isNaN(form.price) || Number(form.price) <= 0) errs.price = "Enter a valid price";
    if (!form.category) errs.category = "Select a category";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      const newCourse = {
        id: "user_" + Date.now(),
        title: form.title,
        shortDescription: form.shortDescription,
        fullDescription: form.fullDescription,
        price: parseFloat(form.price),
        category: form.category,
        image: form.image || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
        instructor: user?.displayName || "Anonymous",
        rating: 0,
        students: 0,
        duration: "TBD",
        level: "Beginner",
        specifications: [],
        addedBy: user?.uid,
      };

      const stored = localStorage.getItem("skillforge_courses");
      const existing = stored ? JSON.parse(stored) : [];
      existing.push(newCourse);
      localStorage.setItem("skillforge_courses", JSON.stringify(existing));

      toast.success("Course added successfully!");
      setForm({ title: "", shortDescription: "", fullDescription: "", price: "", category: "Web Development", image: "" });
    } catch {
      toast.error("Failed to add course");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 bg-white/[0.02] border ${errors[field] ? "border-red-500/50" : "border-white/[0.08]"} rounded-xl text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-violet-500/50 transition-colors`;

  return (
    <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">Add New Course</h1>
        <p className="text-slate-400 mb-8">Fill in the details to create a new course listing.</p>

        <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Course Title *</label>
            <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="e.g., Advanced JavaScript Patterns" className={inputClass("title")} />
            {errors.title && <p className="text-xs text-red-400 mt-1">{errors.title}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Short Description *</label>
            <input type="text" name="shortDescription" value={form.shortDescription} onChange={handleChange} placeholder="A brief overview (1-2 lines)" className={inputClass("shortDescription")} />
            {errors.shortDescription && <p className="text-xs text-red-400 mt-1">{errors.shortDescription}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Full Description *</label>
            <textarea name="fullDescription" value={form.fullDescription} onChange={handleChange} placeholder="Detailed course description..." rows={4} className={inputClass("fullDescription") + " resize-none"} />
            {errors.fullDescription && <p className="text-xs text-red-400 mt-1">{errors.fullDescription}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Price ($) *</label>
              <input type="number" name="price" value={form.price} onChange={handleChange} placeholder="49.99" step="0.01" min="0" className={inputClass("price")} />
              {errors.price && <p className="text-xs text-red-400 mt-1">{errors.price}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Category *</label>
              <select name="category" value={form.category} onChange={handleChange} className={inputClass("category") + " cursor-pointer"}>
                {categories.filter((c) => c !== "All").map((cat) => (
                  <option key={cat} value={cat} className="bg-[#141420]">{cat}</option>
                ))}
              </select>
              {errors.category && <p className="text-xs text-red-400 mt-1">{errors.category}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">
              <HiOutlinePhotograph className="inline w-4 h-4 mr-1" /> Image URL (optional)
            </label>
            <input type="url" name="image" value={form.image} onChange={handleChange} placeholder="https://example.com/image.jpg" className={inputClass("image")} />
          </div>

          <button type="submit" disabled={loading} className="w-full py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-600 rounded-xl hover:from-violet-500 hover:to-cyan-500 transition-all duration-200 shadow-lg shadow-violet-500/25 disabled:opacity-50 cursor-pointer">
            {loading ? "Adding Course..." : "Add Course"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function AddItemPage() {
  return (
    <ProtectedRoute>
      <AddItemForm />
    </ProtectedRoute>
  );
}

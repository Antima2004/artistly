'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// ✅ Form data type
type FormData = {
  name: string;
  bio: string;
  category: string[];
  languages: string[];
  feeRange: string;
  location: string;
};

// ✅ Yup schema with ObjectSchema
const schema: yup.ObjectSchema<FormData> = yup.object({
  name: yup.string().required('Name is required'),
  bio: yup.string().required('Bio is required'),
  category: yup
    .array()
    .of(yup.string().required())
    .min(1, 'Select at least one category')
    .required('Category is required'),
  languages: yup
    .array()
    .of(yup.string().required())
    .min(1, 'Select at least one language')
    .required('Languages are required'),
  feeRange: yup.string().required('Fee range is required'),
  location: yup.string().required('Location is required'),
});

const categories = ['Singer', 'Dancer', 'DJ', 'Speaker'];
const languages = ['English', 'Hindi', 'Marathi', 'Punjabi'];
const feeOptions = ['Below ₹20,000', '₹20,000 - ₹40,000', 'Above ₹40,000'];

export default function OnboardForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    alert('Form submitted successfully!');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-white text-black p-6 rounded shadow-md"
    >
      {/* Name */}
      <div>
        <label className="block font-medium mb-1">Name</label>
        <input {...register('name')} className="w-full border rounded px-3 py-2" />
        <p className="text-red-500 text-sm">{errors.name?.message}</p>
      </div>

      {/* Bio */}
      <div>
        <label className="block font-medium mb-1">Bio</label>
        <textarea
          {...register('bio')}
          className="w-full border rounded px-3 py-2"
          rows={4}
        />
        <p className="text-red-500 text-sm">{errors.bio?.message}</p>
      </div>

      {/* Category */}
      <div>
        <label className="block font-medium mb-1">Category</label>
        {categories.map((cat) => (
          <label key={cat} className="block">
            <input
              type="checkbox"
              value={cat}
              {...register('category')}
              className="mr-2"
            />
            {cat}
          </label>
        ))}
        <p className="text-red-500 text-sm">{errors.category?.message}</p>
      </div>

      {/* Languages */}
      <div>
        <label className="block font-medium mb-1">Languages Spoken</label>
        {languages.map((lang) => (
          <label key={lang} className="block">
            <input
              type="checkbox"
              value={lang}
              {...register('languages')}
              className="mr-2"
            />
            {lang}
          </label>
        ))}
        <p className="text-red-500 text-sm">{errors.languages?.message}</p>
      </div>

      {/* Fee Range */}
      <div>
        <label className="block font-medium mb-1">Fee Range</label>
        <select {...register('feeRange')} className="w-full border rounded px-3 py-2">
          <option value="">Select a range</option>
          {feeOptions.map((fee) => (
            <option key={fee} value={fee}>
              {fee}
            </option>
          ))}
        </select>
        <p className="text-red-500 text-sm">{errors.feeRange?.message}</p>
      </div>

      {/* Location */}
      <div>
        <label className="block font-medium mb-1">Location</label>
        <input {...register('location')} className="w-full border rounded px-3 py-2" />
        <p className="text-red-500 text-sm">{errors.location?.message}</p>
      </div>

      {/* Profile Image (Optional) */}
      <div>
        <label className="block font-medium mb-1">Profile Image (optional)</label>
        <input type="file" accept="image/*" className="w-full" />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-accent text-black px-6 py-2 rounded hover:opacity-90 transition"
      >
        Submit
      </button>
    </form>
  );
}

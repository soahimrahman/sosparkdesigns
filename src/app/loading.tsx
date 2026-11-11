import React from 'react';

export default function Loading() {
  return (
    <div
      role="status"
      aria-busy="true"
      aria-label="Loading page content"
      className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16"
    >
      <div className="w-full max-w-2xl space-y-6 animate-pulse">
        <div className="h-4 bg-slate-200 rounded-full w-24 mx-auto" />
        <div className="h-10 bg-slate-200 rounded-2xl w-3/4 mx-auto" />
        <div className="h-4 bg-slate-100 rounded-full w-1/2 mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          <div className="h-48 bg-slate-100 rounded-2xl" />
          <div className="h-48 bg-slate-100 rounded-2xl" />
          <div className="h-48 bg-slate-100 rounded-2xl" />
        </div>
      </div>
      <span className="sr-only">Loading content, please wait...</span>
    </div>
  );
}

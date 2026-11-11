'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error for diagnostics
    console.error('Unhandled runtime error:', error);
  }, [error]);

  return (
    <div
      role="alert"
      className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 text-center"
    >
      <div className="w-16 h-16 rounded-2xl bg-red-50 border border-red-200 text-red-600 flex items-center justify-center mb-6">
        <AlertTriangle className="w-8 h-8" />
      </div>

      <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
        Something unexpected occurred
      </h1>

      <p className="mt-3 text-slate-600 max-w-md mx-auto text-sm md:text-base">
        An error prevented this view from loading completely. You can attempt to reload the component
        or return to the home page.
      </p>

      {error.digest && (
        <p className="mt-2 text-xs font-mono text-slate-400">
          Diagnostic ID: {error.digest}
        </p>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button
          onClick={() => reset()}
          leftIcon={<RotateCcw className="w-4 h-4" />}
          variant="primary"
        >
          Try Again
        </Button>
        <Link href="/">
          <Button variant="outline" leftIcon={<Home className="w-4 h-4" />}>
            Back to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}

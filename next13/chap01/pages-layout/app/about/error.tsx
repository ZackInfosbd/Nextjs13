'use client';
import { useEffect } from 'react';

// Error components must be Client components

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // log the rror to an error reporting service
    console.log(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong</h2>

      <button
        onClick={() => {
          // attemt to recover by trying to re-render the segment
          reset();
        }}
      >
        try again
      </button>
    </div>
  );
}

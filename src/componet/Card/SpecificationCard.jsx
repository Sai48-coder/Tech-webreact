import React from 'react';

function SpecificationCard({ specification }) {
  if (!specification || Object.keys(specification).length === 0) {
    return (
      <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/50 p-5 text-slate-400">
        No specifications available.
      </div>
    );
  }

  // Helper to format keys like "gpuType" -> "Gpu Type"
  const formatLabel = (key) => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase());
  };

  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
      {Object.entries(specification).map(([key, value]) => (
        <div
          key={key}
          className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 hover:border-slate-700 transition"
        >
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
            {formatLabel(key)}
          </p>
          <p className="mt-1 font-semibold text-white">
            {value || 'N/A'}
          </p>
        </div>
      ))}
    </div>
  );
}

export default SpecificationCard;
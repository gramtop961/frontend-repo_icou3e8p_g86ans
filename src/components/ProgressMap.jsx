import React from 'react';
import { Lock, Unlock, User, Wrench, FlaskConical, Briefcase } from 'lucide-react';

const nodes = [
  { id: 1, label: 'Foundation', icon: User, unlocked: true, hint: 'Complete Week 1' },
  { id: 2, label: 'Mentor AMA', icon: Unlock, unlocked: true, hint: 'Quality > 70' },
  { id: 3, label: 'Tools Access', icon: Wrench, unlocked: false, hint: 'Ship 2 public artifacts' },
  { id: 4, label: 'Research Lab', icon: FlaskConical, unlocked: false, hint: 'Design 1 study' },
  { id: 5, label: 'Industry Challenge', icon: Briefcase, unlocked: false, hint: 'Peer-reviewed submission' },
];

const ProgressMap = () => {
  return (
    <section id="map" className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-semibold text-gray-900">Unlocks Map</h2>
          <p className="mt-2 text-gray-600">
            Progress isn’t points — it’s access. Each milestone opens new mentors, tools, labs, and industry work.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            {nodes.map((n, idx) => (
              <div key={n.id} className="relative flex flex-col items-center text-center">
                <div className={`flex h-16 w-16 items-center justify-center rounded-full border-2 ${
                  n.unlocked ? 'border-emerald-400 bg-emerald-50 text-emerald-600' : 'border-gray-300 bg-gray-50 text-gray-500'
                }`}>
                  {React.createElement(n.icon, { className: 'h-7 w-7' })}
                </div>
                <p className="mt-3 text-sm font-medium text-gray-800">{n.label}</p>
                <p className="mt-1 text-xs text-gray-500">{n.hint}</p>
                {idx < nodes.length - 1 && (
                  <div className="absolute top-8 left-[60%] hidden h-0.5 w-[80%] -translate-y-1/2 bg-gradient-to-r from-gray-200 to-transparent md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressMap;

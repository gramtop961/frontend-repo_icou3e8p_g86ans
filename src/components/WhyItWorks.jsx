import React from 'react';
import { Target, Layers, ShieldCheck } from 'lucide-react';

const items = [
  {
    icon: Target,
    title: 'Personalized Levers',
    desc: 'We focus your energy on the few levers that matter — leadership, initiatives, research, and impact.',
  },
  {
    icon: Layers,
    title: 'Execution Engine',
    desc: 'Weekly missions break into achievable work with clear quality bars and immediate feedback.',
  },
  {
    icon: ShieldCheck,
    title: 'Access Through Work',
    desc: 'Mentors, tools, labs, and industry open up as your quality rises — access is earned, not gated by time.',
  },
];

const WhyItWorks = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 max-w-3xl">
        <h2 className="text-3xl font-semibold text-gray-900">Why This Works</h2>
        <p className="mt-2 text-gray-600">
          Not another course dashboard. This is a career progression engine that rewards depth and consistency.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              {React.createElement(it.icon, { className: 'h-6 w-6' })}
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">{it.title}</h3>
            <p className="mt-2 text-gray-600">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyItWorks;

import React from 'react';
import { CheckCircle2, Sparkles, Clock, Flame } from 'lucide-react';

const tasks = [
  {
    id: 1,
    title: 'Interview a community leader',
    impact: 'Leadership',
    effort: '2h',
    qualityHint: 'Prepare 5 sharp questions and synthesize insights into 3 takeaways.',
  },
  {
    id: 2,
    title: 'Design a mini research plan',
    impact: 'Research',
    effort: '3h',
    qualityHint: 'Define a clear hypothesis and 2 methods of validation.',
  },
  {
    id: 3,
    title: 'Ship a public artifact',
    impact: 'Initiative',
    effort: '1h',
    qualityHint: 'Publish something useful (thread, gist, design) with context + link.',
  },
];

const WeeklyMission = () => {
  return (
    <section id="weekly" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900">This Week's Mission</h2>
          <p className="mt-2 text-gray-600">
            Three concrete steps. High quality work unlocks access faster.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-indigo-700">
          <Flame className="h-4 w-4" />
          <span className="text-sm">Momentum score: 72</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {tasks.map((t) => (
          <div
            key={t.id}
            className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{t.title}</h3>
                <div className="mt-1 flex items-center gap-3 text-sm text-gray-500">
                  <span className="inline-flex items-center gap-1">
                    <Sparkles className="h-4 w-4 text-indigo-500" /> {t.impact}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-4 w-4 text-gray-400" /> {t.effort}
                  </span>
                </div>
              </div>
              <button className="rounded-full border border-gray-200 bg-white p-2 text-gray-600 transition hover:bg-gray-50">
                <CheckCircle2 className="h-5 w-5" />
              </button>
            </div>

            <p className="mt-4 text-sm text-gray-600">
              {t.qualityHint}
            </p>

            <div className="mt-4 flex gap-2">
              <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700">
                Submit Work
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-700 transition hover:bg-gray-50">
                Resources
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeeklyMission;

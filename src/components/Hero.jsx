import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star, Compass } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden rounded-2xl bg-black/80">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Foreground content */}
      <div className="relative z-10 flex h-full w-full items-center">
        <div className="mx-auto max-w-6xl px-6 text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
            <Star className="h-4 w-4 text-yellow-300" />
            <span className="text-sm text-white/90">Applied Learning, Not Just Lessons</span>
          </div>

          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Build Your Career Like a Game
            <span className="block text-white/80">Unlock mentors, labs, and industry—by doing.</span>
          </h1>

          <p className="mt-4 max-w-2xl text-white/80">
            Your weekly mission turns into real opportunities. Execute high-quality work and watch
            access unfold: mentors appear, tools unlock, and challenges open up.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#weekly"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-3 text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-600"
            >
              <Rocket className="h-5 w-5" /> Start This Week's Mission
            </a>
            <a
              href="#map"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-white backdrop-blur transition hover:bg-white/20"
            >
              <Compass className="h-5 w-5" /> View Progress Map
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

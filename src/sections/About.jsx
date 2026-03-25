const stats = [
  { label: 'Location', value: 'Yogyakarta, ID' },
  { label: 'Focus', value: 'Entrepreneurship' },
  { label: 'Status', value: 'Student' },
  { label: 'Interest', value: 'Creative Tech' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-xl p-8 md:p-16 relative overflow-hidden reveal card-hover">
          {/* Background Icon */}
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <span className="material-symbols-outlined text-9xl">person</span>
          </div>

          <div className="max-w-3xl space-y-8">
            <h2 className="font-headline text-4xl font-bold text-primary reveal">
              About Me
            </h2>
            <p className="text-2xl font-medium text-on-surface leading-snug reveal">
              I am a Management student at UPN "Veteran" Yogyakarta with a
              deep-seated focus on entrepreneurship.
            </p>
            <p className="text-lg text-on-surface-variant leading-relaxed reveal">
              I thrive at the intersection of strategic management and creative
              innovation. My journey is fueled by a passion for creating
              impactful business models and leveraging modern tools to solve
              contemporary challenges. Whether it's managing a project or
              volunteering for social causes, I bring a collaborative spirit and
              a results-oriented mindset to the table.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 stagger-container">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1 stagger-item">
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                    {stat.label}
                  </p>
                  <p className="font-bold text-primary">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

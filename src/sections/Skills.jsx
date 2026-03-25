const skills = [
  { name: 'MS Office', icon: 'description', bgColor: 'bg-blue-100', textColor: 'text-blue-600' },
  { name: 'Google Docs', icon: 'cloud_done', bgColor: 'bg-sky-100', textColor: 'text-sky-600' },
  { name: 'Canva', icon: 'palette', bgColor: 'bg-purple-100', textColor: 'text-purple-600' },
  { name: 'CapCut', icon: 'movie_edit', bgColor: 'bg-black', textColor: 'text-white' },
  { name: 'Communication', icon: 'forum', bgColor: 'bg-green-100', textColor: 'text-green-600' },
  { name: 'Teamwork', icon: 'groups', bgColor: 'bg-orange-100', textColor: 'text-orange-600' },
  { name: 'Adaptability', icon: 'psychology', bgColor: 'bg-teal-100', textColor: 'text-teal-600' },
  { name: 'Growth Mindset', icon: 'trending_up', bgColor: 'bg-indigo-100', textColor: 'text-indigo-600' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface-container">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex items-center gap-6 reveal">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/20" />
          <h2 className="font-headline text-4xl font-extrabold px-6">
            Expertise &amp; Skills
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/20" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 stagger-container">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className={`glass-card p-6 rounded-lg text-center space-y-4 hover:bg-white/60 transition-all group card-hover stagger-item ${
                i >= 6 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <div
                className={`w-16 h-16 mx-auto rounded-full ${skill.bgColor} flex items-center justify-center ${skill.textColor} group-hover:scale-110 transition-transform duration-500`}
              >
                <span className="material-symbols-outlined text-3xl">
                  {skill.icon}
                </span>
              </div>
              <p className="font-bold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

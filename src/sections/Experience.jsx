const projects = [
  {
    title: 'Student Entrepreneurship Project',
    tag: 'Business',
    tagColor: 'bg-primary/10 text-primary',
    subtitle: 'Photobooth Service',
    description:
      'Led a student initiative providing professional photobooth services for university events. Managed logistics, customer relations, and digital workflow.',
    skills: ['Operations', 'Client Relations'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAKUBE-AMUtozTMIZT2LRkK8i1Uh3ubyLxvvJk9pCMB7FnmIy6b25kWZlwQjjcdyM2fPvDFwZeVunjCtsqIXWF0cU9IXnbuc7LtQfEA1rYow87BJtU7cbfraKOVP56N8uNpBBIXMhCgNKL7xcMa2ebEpKEuiXhb8-H07A8yaQS15ITKOw-IiC1fr-XKbovjL6srf8zh5iwAEKYi5KB81hJ0cK4fgRKfeawzNDE6hWnCAgEkgjTNk_9UMlaAU-F-NxZT03gDdzKg-RGg',
  },
  {
    title: 'Zakat Recording Volunteer',
    tag: 'Social',
    tagColor: 'bg-tertiary/10 text-tertiary',
    subtitle: 'Community Service',
    description:
      'Assisted in the systematic recording and management of zakat contributions. Ensured data accuracy and transparent documentation for the community.',
    skills: ['Data Management', 'Transparency'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDIsBjDHm9CiVP1EzO7MjYOhipVsxLmQ9Htt_r8nypyhOgIWD5EyVNQUQ3d2Lu-zeSS870bMAwX5EXtdN5vhlOCFpqkqh28S1tuRMGtaQ9ERWAfEz7sL3v8KgfFFuh9W6RD1dzizlY5dFVgNC0LilGKvmwX3QSF9Di14rWdFgUJi8SyzQr-91XMr-qijslUQ20P5vj7OQu8pVveBGyg4KPKZ0Nf0YnkF5c3TEAYGVpN79WyC4Md0oOoS2dDZMPgFSJxumHPQtaoXB61',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 reveal">
          <h2 className="font-headline text-4xl font-extrabold">
            Professional Experience
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Hands-on experience in entrepreneurship and social volunteerism,
            building skills in management and community service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 stagger-container">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-xl glass-card card-hover stagger-item"
            >
              <div className="h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover img-zoom"
                  alt={project.title}
                  src={project.image}
                />
              </div>
              <div className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span
                    className={`${project.tagColor} text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest`}
                  >
                    {project.tag}
                  </span>
                </div>
                <p className="font-semibold text-secondary">
                  {project.subtitle}
                </p>
                <p className="text-on-surface-variant leading-relaxed">
                  {project.description}
                </p>
                <div className="pt-4 flex gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/40 rounded-full text-xs font-bold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

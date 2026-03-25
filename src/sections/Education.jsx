export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-surface-container-low">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 reveal">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight">
            Academic Journey
          </h2>
          <p className="text-tertiary font-bold flex items-center gap-2">
            <span className="material-symbols-outlined">school</span>
            Education Background
          </p>
        </div>

        <div className="grid gap-8">
          <div className="glass-card p-8 rounded-lg flex flex-col md:flex-row items-start md:items-center gap-8 group card-hover reveal">
            <div className="w-20 h-20 rounded-xl bg-primary-container flex items-center justify-center text-on-primary-container group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-4xl">
                account_balance
              </span>
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="text-2xl font-bold">
                UPN "Veteran" Yogyakarta
              </h3>
              <p className="text-lg text-primary font-semibold">
                Major: Management
              </p>
              <p className="text-on-surface-variant">
                Focusing on business strategy, organizational behavior, and
                entrepreneurial frameworks.
              </p>
            </div>
            <div className="px-6 py-2 rounded-full bg-white/50 border border-primary/20 font-bold text-primary">
              2024 - Present
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

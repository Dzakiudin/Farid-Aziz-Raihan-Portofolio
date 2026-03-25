export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[921px] flex items-center justify-center px-6 overflow-hidden"
    >
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="z-10 space-y-6">
          <div className="hero-line inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container/30 text-secondary font-bold text-xs uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Available for Projects
          </div>

          <h1 className="hero-line font-headline text-5xl md:text-7xl font-extrabold text-on-surface leading-tight tracking-tighter">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary-fixed">
              Farid Aziz Raihan
            </span>
          </h1>

          <p className="hero-line text-xl text-on-surface-variant max-w-lg leading-relaxed">
            Management Student &amp; Aspiring Entrepreneur crafting digital-first
            experiences and innovative business solutions.
          </p>

          <div className="hero-line flex flex-wrap gap-4 pt-4">
            <a
              href="#experience"
              className="glossy-button px-8 py-4 rounded-full text-white font-bold flex items-center gap-2"
            >
              View Portfolio
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <a
              href="#about"
              className="glass-card px-8 py-4 rounded-full font-bold text-primary hover:bg-white/60 transition-colors"
            >
              Know More
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative group hero-line">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-fixed to-secondary-fixed opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-700" />
          <div className="relative rounded-xl overflow-hidden glass-card p-4 aspect-square">
            <img
              alt="Farid Aziz Raihan Profile"
              className="w-full h-full object-cover rounded-lg shadow-inner img-zoom"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBarGjVGGZ2As_iVLYaZGg_0YbNO8ha8a-U_04w7_85lnvwtm6JAEjY3NoyPa8yDac5X8PDtdS5_s2TP9iqgxKIuSIBBDaa_wrsb7Xsj9xjNw-wnlIl2D-HZCVNshC3O16_BunaQOqskvh4j-_GL-Qf45JtJUVt0in3N4QYqcFyUhtQYNZ-uYazvtQG7BY5kElS82eywk7Zuo0Gh2og81yAItH-YO8yIeK5_8ZKlG_LzYjHLnBWhU1D9NZ0BOm8IyEjAIczn4T7XcjK"
            />
          </div>
          {/* Floating Glass Bubbles — outside overflow-hidden so they don't clip */}
          <div className="absolute -top-6 -right-6 w-24 h-24 glass-card rounded-full flex items-center justify-center float-idle z-10">
            <span className="material-symbols-outlined text-primary text-3xl">
              rocket_launch
            </span>
          </div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 glass-card rounded-full flex items-center justify-center float-idle-delayed z-10">
            <span className="material-symbols-outlined text-secondary text-2xl">
              lightbulb
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

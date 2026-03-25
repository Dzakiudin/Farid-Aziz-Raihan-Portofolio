export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-12 rounded-xl text-center space-y-10 relative z-10 reveal-scale">
          <div className="space-y-4">
            <h2 className="font-headline text-5xl font-black text-on-surface tracking-tighter reveal">
              Get In Touch
            </h2>
            <p className="text-on-surface-variant text-lg reveal">
              Have an idea or a project? Let's connect and create something
              amazing together.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6 stagger-container">
            <a
              href="mailto:faridraihan660@gmail.com"
              className="glossy-button px-8 py-5 rounded-xl text-white font-bold flex items-center justify-center gap-3 stagger-item"
            >
              <span className="material-symbols-outlined">mail</span>
              Email Me
            </a>
            <a
              href="https://wa.me/6281234567890"
              className="glass-card px-8 py-5 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-white/60 transition-all text-secondary stagger-item"
            >
              <span className="material-symbols-outlined">chat_bubble</span>
              WhatsApp
            </a>
          </div>

          <div className="pt-8 border-t border-white/20">
            <p className="font-bold text-slate-400 mb-4">Official Channels</p>
            <div className="flex justify-center gap-8">
              {['link', 'public', 'share'].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="text-primary hover:scale-125 transition-transform duration-300"
                >
                  <span className="material-symbols-outlined">{icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-fixed/20 blur-[120px] rounded-full -z-10" />
      </div>
    </section>
  )
}

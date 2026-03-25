export default function Footer() {
  return (
    <footer className="bg-slate-50/50 backdrop-blur-md w-full border-t border-sky-100/20">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 md:px-12 py-8 w-full max-w-7xl mx-auto gap-4">
        <div className="text-lg font-bold text-sky-500">
          FARID AZIZ RAIHAN
        </div>
        <p className="font-label text-xs uppercase tracking-widest font-medium text-slate-500 text-center md:text-left">
          © 2024 Farid Aziz Raihan. Built with Liquid Ethereal.
        </p>
        <div className="flex gap-6">
          {['LinkedIn', 'GitHub', 'Dribbble'].map((name) => (
            <a
              key={name}
              href="#"
              className="font-label text-xs uppercase tracking-widest font-medium text-slate-500 hover:text-sky-400 hover:translate-y-[-2px] transition-all duration-300"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

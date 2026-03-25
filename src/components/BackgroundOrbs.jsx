export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="orb orb-parallax absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary-fixed opacity-30" />
      <div className="orb orb-parallax absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-secondary-container opacity-20" />
      <div className="orb orb-parallax absolute top-[40%] right-[10%] w-[300px] h-[300px] rounded-full bg-tertiary-fixed opacity-15" />
    </div>
  )
}

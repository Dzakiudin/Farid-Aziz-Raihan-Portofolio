import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useScrollAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      // ===== Section reveals (fade + translateY) =====
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            end: 'top 40%',
            toggleActions: 'play none none reverse',
          },
        })
      })

      // ===== Reveal from left =====
      gsap.utils.toArray('.reveal-left').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        })
      })

      // ===== Reveal from right =====
      gsap.utils.toArray('.reveal-right').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        })
      })

      // ===== Scale reveal =====
      gsap.utils.toArray('.reveal-scale').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        })
      })

      // ===== Stagger children (cards, skill items) =====
      gsap.utils.toArray('.stagger-container').forEach((container) => {
        const children = container.querySelectorAll('.stagger-item')
        gsap.fromTo(children,
          { opacity: 0, y: 24, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      // ===== Orb parallax on scroll =====
      gsap.utils.toArray('.orb-parallax').forEach((orb, i) => {
        const speed = [0.15, -0.1, 0.2][i % 3]
        gsap.to(orb, {
          y: () => window.innerHeight * speed,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.5,
          },
        })
      })

      // ===== Hero section text stagger =====
      const heroLines = gsap.utils.toArray('.hero-line')
      if (heroLines.length) {
        gsap.to(heroLines, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.3,
        })
      }

      // ===== Scroll progress bar =====
      const progressBar = document.querySelector('.scroll-progress')
      if (progressBar) {
        gsap.to(progressBar, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.3,
          },
        })
      }
    })

    return () => ctx.revert()
  }, [])
}

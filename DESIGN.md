# Design System Strategy: The Liquid Ethereal

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Greenhouse"**

This design system rejects the flat, sterile "Corporate Memphis" aesthetic in favor of a lush, optimistic, and hyper-tactile digital environment. It is a modern revival of early-2000s optimism, reimagined through high-end editorial clarity. We are not just building a portfolio; we are creating a pressurized, glass-enclosed ecosystem where content floats in a state of weightless clarity. 

The system breaks the "template" look by utilizing **intentional asymmetry**—large, high-gloss 3D orbs that bleed off the viewport edges—and **layered depth** that mimics physical glass panes stacked in a sunlit room. We prioritize breathability (`Spacing 16` and `20`) to ensure that even with rich textures, the UI feels minimal and premium.

---

## 2. Colors & Surface Logic
The palette is a high-vibrancy spectrum of atmospheric blues and organic greens, designed to feel "lit from within."

### The "No-Line" Rule
Traditional 1px borders are strictly prohibited for sectioning. Structural boundaries must be defined exclusively through:
*   **Background Shifts:** Transitioning from `surface` (#eff8fe) to `surface-container-low` (#e8f2f9).
*   **Tonal Transitions:** Using subtle, expansive gradients that flow from `primary-container` (#2dbcfe) to `secondary-container` (#0bfbff).

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of frosted materials. 
*   **Base Layer:** `surface` (#eff8fe).
*   **Secondary Content Areas:** `surface-container` (#dfeaf1).
*   **Interactive Floating Modules:** `surface-container-lowest` (#ffffff) with 60% opacity and a 20px `backdrop-blur`.

### The "Glass & Gradient" Rule
To achieve the "signature" look, main CTAs and hero headers must use a **Glossy Radial Gradient**. 
*   **Primary CTA:** A gradient from `primary-fixed` (#2dbcfe) at the top-left to `primary` (#006289) at the bottom-right, finished with a 1px inner-glow (white at 30% opacity) to simulate a glass edge.

---

## 3. Typography
The typography is a dialogue between the tech-forward **Plus Jakarta Sans** and the highly legible **Manrope**.

*   **Display & Headlines (Plus Jakarta Sans):** These are the "anchors." Use `display-lg` (3.5rem) with tighter letter-spacing (-0.02em) to create a bold, editorial impact. This conveys a sense of modern authority.
*   **Body & Titles (Manrope):** Chosen for its humanist geometric qualities. `body-lg` (1rem) provides high readability against complex, blurred backgrounds.
*   **Visual Hierarchy:** Always pair a `display-sm` headline in `on_surface` (#273034) with a `label-md` in `tertiary` (#2c6900) to create a vibrant, high-contrast focal point that guides the eye.

---

## 4. Elevation & Depth
In this system, depth is "Atmospheric," not "Structural."

*   **The Layering Principle:** Instead of shadows, use "Tonal Lifting." Place a `surface-container-lowest` card on a `surface-container-low` background. The slight shift in brightness creates a sophisticated, soft-touch lift.
*   **Ambient Shadows:** If a shadow is required for a floating orb or glass pane, use a highly diffused blur (40px+) with 5% opacity, using the `primary` color (#006289) as the shadow tint rather than black.
*   **Glassmorphism:** All modal or navigation elements must use `surface-container-lowest` at 40-70% opacity with a `backdrop-filter: blur(12px)`. This allows the background "orbs" and gradients to bleed through, ensuring the UI feels like a single, cohesive environment.
*   **The "Ghost Border" Fallback:** For input fields or necessary containers, use `outline-variant` (#a5aeb4) at **15% opacity**. High-contrast outlines are the enemy of this aesthetic.

---

## 5. Components

### Buttons
*   **Primary:** Rounded `full` (9999px). Gradient background (`primary-fixed` to `primary`). 
*   **Secondary:** Glass-style. `surface-container-lowest` at 20% opacity, `backdrop-blur` (8px), with a 1px "Ghost Border" at 20% opacity.
*   **Interaction:** On hover, buttons should "inflate"—a subtle scale (1.05x) and an increase in the inner-glow brightness.

### Cards & Lists
*   **Forbid Dividers:** Do not use lines to separate list items. Use `Spacing 4` (1.4rem) of vertical white space or a subtle alternating background of `surface` and `surface-container-low`.
*   **Card Shape:** Use `Roundedness xl` (3rem) for a friendly, organic, "pebble" feel.

### 3D Decorations (Orbs)
*   **Application:** Use `tertiary-fixed` (#75fd00) and `primary-fixed` (#2dbcfe) to create large, blurred spheres in the background. 
*   **Texture:** Apply a "Glossy Overlay"—a semi-transparent white radial gradient positioned at the top-left of the orb to simulate a light source.

### Input Fields
*   **Style:** `surface-container-low` with a `Roundedness md` (1.5rem). The label (`label-md`) should be placed 0.5rem above the field, never inside it, to maintain a clean, architectural look.

---

## 6. Do's and Don'ts

### Do:
*   **DO** use whitespace as a functional element. A `Spacing 24` (8.5rem) gap between sections is encouraged.
*   **DO** use "organic" overlapping. Let a text block partially overlap a background orb to create 3D depth.
*   **DO** maintain high contrast for text. Ensure `on_surface` is used on all light backgrounds for AA accessibility.

### Don't:
*   **DON'T** use sharp corners. `Roundedness none` or `sm` has no place in this system. 
*   **DON'T** use pure black (#000000). Use `on_primary_fixed` (#001a28) for the deepest tones to keep the palette "liquid."
*   **DON'T** use 100% opaque, flat-color cards. It breaks the "Digital Greenhouse" illusion of transparency and light.
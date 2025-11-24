# Structura Design System - The "Secret Sauce"

Welcome to the internal design guide for **Structura**. This document unveils the principles, prompts, and techniques used to build this design system. It is intended for Design Engineers, LLMs, and developers who want to create software that feels *crafted*, not just assembled.

## 1. The Core Philosophy

**"Reject Mediocrity. Establish Art Direction."**

Most generic UIs fail because they lack a soul. They use default Tailwind colors, standard Bootstrap grids, and uninspired typography. Structura is built on three pillars:

1.  **Atmosphere over Utility**: We don't just build inputs; we build *glass inputs with subtle specular highlights*. We don't just use white backgrounds; we use *generative mesh gradients* to create depth.
2.  **Motion as Texture**: Animation isn't an afterthought. It's a material. Things shouldn't just appear; they should *flow* in with physics-based springs.
3.  **Typography is UI**: We don't use distinct borders for everything. We use type hierarchy, weight, and spacing to define structure.

## 2. The "Secret Sauce" Prompts

When instructing an LLM (or yourself) to design, use these specific styling cues to break out of the "default look":

### The "Glassmorphism" Prompt
> *“Create a container that feels like a slice of frosted glass sitting on a digital void. Use a white opacity of 5-10% for the background, a 1px border with 10-20% opacity, and a backdrop-blur-xl. Add a subtle inner glow using a box-shadow or an inset ring.”*

**Implementation:**
```css
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}
```

### The "Industrial Clean" Typography Prompt
> *“Use a font pairing that feels technical but human. Combine a geometric grotesque (like Space Grotesk) for headers to give it a 'machined' look, and a clean sans-serif (like Inter) for body text to ensure readability. Tighten the tracking on headers (-0.02em) to make them feel solid.”*

### The "Organic Motion" Prompt
> *“Don't use linear easings. Everything should feel like it has mass and friction. Use spring animations with high stiffness (300-400) and medium damping (20-30) for a snappy, tactile feel. Stagger entrance animations so the UI 'unfolds' rather than loading all at once.”*

## 3. Technical Tricks & Tips

### Generative Backgrounds
Stop using flat colors. Use CSS radial gradients or generative noise textures to create "living" backgrounds.
*Tip:* Layer multiple radial gradients with `mix-blend-mode: overlay` or `soft-light` to create complex color interactions that shift in dark mode.

### The "1px" Border Hack
To make borders feel sharper and more premium on high-DPI screens, use `border-white/10` (10% opacity) rather than a solid grey. This allows the background color to bleed through slightly, making the component feel integrated rather than slapped on.

### Optical Alignment
*   **Padding**: If your border-radius is 16px, your internal padding should likely be 16px or 24px.
*   **Nested Radius**: The inner radius should be `Outer Radius - Padding`. If the outer card is 16px and padding is 16px, the inner content shouldn't be square; it implies a radius of 0. Actually, the formula is `R_inner = R_outer - Padding`. If that's negative, it's square.

## 4. Component Guidelines

### Buttons
*   **Don't** just change the background color on hover.
*   **Do** add a scale effect (`scale(1.02)`), a lift (`translateY(-1px)`), or a glow (`box-shadow`).

### Cards
*   **Don't** use heavy drop shadows (e.g., `shadow-xl`) to separate layers.
*   **Do** use lighter borders and backdrop filters. Depth should come from *blur*, not just shadow.

### Text
*   **Don't** use pure black (`#000`) or pure white (`#fff`).
*   **Do** use `slate-950` or `slate-50`. It reduces eye strain and feels richer.

## 5. For the AI Agents

If you are an AI reading this to generate UI:
1.  **Import `lucide-react`** for consistent iconography.
2.  **Use `framer-motion`** for all state changes.
3.  **Default to `backdrop-blur`** when in doubt.
4.  **Always check contrast ratios**—aesthetics should not kill accessibility.

---
*Crafted by Replit Design Engineer*

# Testing Checklist

This document outlines the testing procedures to ensure the hackathon website meets high quality standards for responsiveness, performance, and accessibility.

## 1. Responsive Behavior Across Devices
- [ ] **Standard Desktops (1440px - 1920px)**: Verify full layout, glassmorphism headers, and image grids.
- [ ] **Laptops (1280px - 1366px)**: Check for layout compression and ensure text doesn't overlap.
- [ ] **Tablets (768px - 1024px)**:
  - [ ] Verify navigation collapses into a mobile-friendly menu (if implemented) or remains usable.
  - [ ] Check if the 3-column student cards stack appropriately.
  - [ ] Verify the Astronaut section remains centered.
- [ ] **Mobile Devices (375px - 414px)**:
  - [ ] Ensure all sections stack vertically.
  - [ ] Verify the Timeline Scrubber is usable with touch gestures.
  - [ ] Check text sizing for readability on small screens.
- [ ] **Retina/High-Density Displays**: Verify image clarity and smooth vector (SVG) rendering.

## 2. Smooth Animations
- [ ] **Astronaut Section**:
  - [ ] Verify multi-axis geometric background rotation is fluid (60fps).
  - [ ] Check pulsing light rays for stuttering.
- [ ] **Timeline Scrubber**:
  - [ ] Verify the scrubber scrub-controls the horizontal scroll position smoothly.
  - [ ] Ensure snapping to points is consistent.
- [ ] **Custom Cursor**:
  - [ ] Test cursor morphing/text reveal on all marked images.
  - [ ] Verify the outer glow follows the mouse with the intended lag.
- [ ] **3D Tilt**:
  - [ ] Verify image tilt reacts to mouse movement without lag.
  - [ ] Ensure tilt resets on mouse leave.

## 3. Keyboard Accessibility
- [ ] **Focus Order**: Use `Tab` key to navigate through all links and buttons.
- [ ] **Visual Focus**: Ensure focused elements have a visible ring/indicator.
- [ ] **Scrubber Control**: Test if the timeline range slider is controllable via arrow keys.
- [ ] **Accordions (FAQ)**: Verify `Enter` or `Space` opens/closes FAQ items.

## 4. Touch Device Support
- [ ] **Swipe Gestures**: Verify the timeline can be swiped horizontally on touch.
- [ ] **Scrub Bar**: Ensure the range slider is touch-friendly and snaps correctly.
- [ ] **Hover Substitutes**: Verify that "hover" effects (like 3D tilt) are either disabled or handled gracefully via touch-start.

## 5. Cross-Browser Compatibility
- [ ] **Chrome/Edge**: Baseline performance.
- [ ] **Firefox**: Check for specific CSS filter performance (blur/glassmorphism).
- [ ] **Safari**: Verify backdrop-blur and SVG mask rendering.

## 6. Performance Audit
- [ ] **Lighthouse Score**: Aim for 90+ in Performance and Accessibility.
- [ ] **Asset Size**: Ensure images are optimized for fast loading.

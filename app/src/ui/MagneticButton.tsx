'use client';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { number } from 'zod';

// MagneticButton component
function MagneticButton({ children, className = '', ...props }: any) {
    // 1. Motion Values: Tracking displacement from the center
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // 2. Transform: Calculating rotation based on X and Y displacement
    // The constant 0.02 is a dampening factor to keep the rotation subtle.
    const rotate = useTransform([x, y], ([mx, my]) => (mx  + my ) * 0.02);

    // 3. Mouse Move Handler: Calculates distance from center and sets new X/Y
    const onMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        // Get coordinates relative to the center of the button
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        
        // Set motion values with a dampening factor (0.2) for the "pull" effect
        x.set(dx * 0.2);
        y.set(dy * 0.2);
    };

    // 4. Mouse Leave Handler: Resets X and Y to zero
    const onLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.button
            className={className}
            // Apply motion values and transformed properties
            style={{ x, y, rotate }}
            // Attach mouse events
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            // Scaling animation on hover
            whileHover={{ scale: 1.03 }}
            // Spring transition for smooth, physics-based movement
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            {...props}
        >
            {children}
        </motion.button>
    );
}
// Exporting the component for use in other files (if you split them up)
export { MagneticButton };
'use client';

import { motion, useMotionValue, useTransform, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

type MagneticButtonProps = HTMLMotionProps<'button'> & {
    children: ReactNode;
};

function MagneticButton({
    children,
    className = '',
    ...props
}: MagneticButtonProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotate = useTransform(x, (v) => v * 0.02);

    const onMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);

        x.set(dx * 0.2);
        y.set(dy * 0.2);
    };

    const onLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.button
            className={className}
            style={{ x, y, rotate }}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            {...props}
        >
            {children}
        </motion.button>
    );
}

export { MagneticButton };

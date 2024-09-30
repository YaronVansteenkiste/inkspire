import React from "react";
import { useSprings, animated } from "@react-spring/web";


export const AnimatedBackground = () => {
    const bubbles = Array(10).fill().map(() => ({
        from: {
            transform: `translate(${Math.random() * 100}vw, ${Math.random() * 100}vh) scale(0)`,
            opacity: 0,
        },
        to: {
            transform: `translate(${Math.random() * 100}vw, ${Math.random() * 100}vh) scale(1)`,
            opacity: 1,
        },
        loop: { reverse: true },
        config: { duration: 10000 },
    }));

    const springs = useSprings(bubbles.length, bubbles);

    return (
        <div className="animated-background">
            {springs.map((props, index) => (
                <animated.div key={index} style={{ ...props, backgroundColor: props.backgroundColor }} className="bubble bg-secondary" />
            ))}
        </div>
    );
};
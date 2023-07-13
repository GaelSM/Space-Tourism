export const pageVariants = {
    initial: {
        x: -10,
        opacity: 0
    },
    in: {
        x: 0,
        opacity: 1
    },
    out: {
        x: -10,
        opacity: 0
    }
}

export const sliderDownToTop = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 }
}

export const sliderRightToLeft = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 }
}
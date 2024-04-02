// Matches the Tailwind breakpoints
// Usage:
//     const isSm = useMediaQuery(breakpoints.sm)
//     let numOfRows = isSm ? 1 : 3

const breakpoints = {
    sm: { query: '(max-width: 640px)' },
    md: { query: '(max-width: 768px)' },
    lg: { query: '(max-width: 1024px)' },
    xl: { query: '(max-width: 1280px)' },
    xxl: { query: '(max-width: 1536px)' }
}
export default breakpoints

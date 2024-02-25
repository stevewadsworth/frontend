
export default class SwipeDetector {
    protected touchStartX: number = 0
    protected touchEndX: number = 0
    protected touchStartY: number = 0
    protected touchEndY: number = 0
    protected swiping: boolean = false

    constructor(
        protected tolerance: number,
        protected xSwiped: (distance: number) => void,
        protected ySwiped: (distance: number) => void
    ) {}

    onTouchStart(x: number, y: number) {
        this.touchStartX = x
        this.touchStartY = y
        this.swiping = true
    }

    onTouchEnd(x: number, y: number) {
        this.touchEndX = x
        this.touchEndY = y
        if (this.swiping) {
            let xDistance = this.touchStartX - this.touchEndX
            let yDistance = this.touchStartY - this.touchEndY
            if (Math.abs(xDistance) > this.tolerance) {
                // Indicate a horizontal swipe has been detected
                this.xSwiped(xDistance)
            }
            if (Math.abs(yDistance) > this.tolerance) {
                // Indicate a vertical swipe has been detected
                this.ySwiped(yDistance)
            }
        }
        this.swiping = false
    }
}

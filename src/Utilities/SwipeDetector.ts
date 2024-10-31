
export default class SwipeDetector {
    protected touchStartX: number = 0
    protected touchStartY: number = 0
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
        if (this.swiping) {
            const xDistance = this.touchStartX - x
            const yDistance = this.touchStartY - y
            const absX = Math.abs(xDistance)
            const absY = Math.abs(yDistance)
            if (absX > absY && absX > this.tolerance) {
                console.log("X swiped")
                // Indicate a horizontal swipe has been detected
                this.xSwiped(xDistance)
            } else if (absY > absX && absY > this.tolerance) {
                console.log("Y swiped")
                // Indicate a vertical swipe has been detected
                this.ySwiped(yDistance)
            }
        }
        this.swiping = false
    }
}

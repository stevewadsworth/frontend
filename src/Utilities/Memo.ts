const DEFAULT_CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

export default class Memo<T> {
    private data: T | null = null
    private lastFetchTime: number = 0
    private fetcher: () => T
    private cacheDuration: number

    constructor(fetcher: () => T, cacheDuration: number = DEFAULT_CACHE_DURATION) {
        this.fetcher = fetcher
        this.cacheDuration = cacheDuration
    }

    async getData(): Promise<T> {
        const expired = (Date.now() - this.lastFetchTime > this.cacheDuration)
        if (this.data === null || expired) {
            this.data = await this.fetcher()
            this.lastFetchTime = Date.now()
        }
        return this.data
    }
}

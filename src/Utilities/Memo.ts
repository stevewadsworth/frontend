const DEFAULT_CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

export const memo = <T>(fetcher: () => T, cacheDuration: number = DEFAULT_CACHE_DURATION) => {
    let cachedData: T | null = null
    let lastFetchTime: number = 0

    return async (force = false) => {
        const expired = (Date.now() - lastFetchTime > cacheDuration)
        if (cachedData === null || expired || force) {
            cachedData = await fetcher()
            lastFetchTime = Date.now()
        }
        return cachedData
    }
}

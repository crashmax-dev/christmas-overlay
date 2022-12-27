declare global {
  interface Window {
    snowConfig: Partial<SnowConfig>
  }
}

interface SnowConfig {
  color: number[]
  count: number
  opacity: number
  density: number
  depth: number
  gravity: number
  speed: number
  snowflake: string
}

export const snowConfig: Partial<SnowConfig> = {
  color: [
    161 / 256,
    197 / 256,
    231 / 256
  ],
  count: 1000,
  opacity: 1,
  density: 1 / 90,
  depth: 80,
  gravity: 100,
  speed: 1 / 5000
}

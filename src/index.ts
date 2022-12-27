import { snowConfig } from './snow.js'
import './style.scss'

window.snowConfig = snowConfig

const searchParams = new URLSearchParams(location.search)
const snow = searchParams.get('snow')
const color = searchParams.get('color')
const duration = searchParams.get('duration') ?? '120'
const size = searchParams.get('size') ?? '71'
const root = document.querySelector<HTMLElement>(':root')!
const background = document.querySelector<HTMLElement>('.background')!

class BackgroundController {
  private currentIndex = 0
  private readonly colors = [
    [
      '#a31e39', // cell 1
      '#1B9450', // cell 2
      '#fffff7' // xmas tree

    ],
    [
      '#8BE0FF',
      '#fffff7',
      '#1B9450'
    ],
    [
      '#17007c',
      '#fffff7',
      '#97cdff'
    ],
    [
      '#1B9450',
      '#a31e39',
      '#fffff7'
    ],
    [
      '#F9BABA',
      '#fffff7',
      '#D85F5F'
    ]

  ]

  changeBackgroundCellSize(size: string) {
    root.style.setProperty('--size', `${size}px`)
  }

  changeBackgroundDuration(duration: string) {
    root.style.setProperty('--duration', `${duration}s`)
  }

  changeBackgroundColors() {
    const [
      color1,
      color2,
      color3
    ] = this.getColors(color)
    root.style.setProperty('--cell_color1', color1)
    root.style.setProperty('--cell_color2', color2)
    root.style.setProperty('--tree_color', color3)
  }

  getColors(index: string | null) {
    if (this.colors.length - 1 === this.currentIndex) {
      this.currentIndex = 0
    } else {
      this.currentIndex++
    }

    return this.colors[index ? Number(index) : this.currentIndex]
  }
}

const backgroundController = new BackgroundController()
backgroundController.changeBackgroundDuration(duration)
backgroundController.changeBackgroundCellSize(size)

if (!snow) {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('canvas')?.remove()
  })
}

if (color) {
  backgroundController.changeBackgroundColors()
}

background.addEventListener('animationiteration', () => {
  backgroundController.changeBackgroundColors()
})

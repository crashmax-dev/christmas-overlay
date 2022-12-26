import './style.scss'

const duration = new URLSearchParams(location.search).get('duration') ?? '120'
const root = document.querySelector<HTMLElement>(':root')!
const background = document.querySelector<HTMLElement>('.background')!

class BackgroundController {
  private currentIndex = 0
  private readonly colors = [
    [
      '#a31e39',
      '#165B33',
      '#fff'
    ],
    [
      '#fff',
      '#a31e39',
      '#1B9450'
    ],
    [
      '#8BE0FF',
      '#4C9A1E',
      '#fffff7'
    ]

  ]

  changeBackgroundDuration(duration: string) {
    root.style.setProperty('--duration', `${duration}s`)
  }

  changeBackgroundColors() {
    const [
      color1,
      color2,
      color3
    ] = this.getColors()
    root.style.setProperty('--cell_color1', color1)
    root.style.setProperty('--cell_color2', color2)
    root.style.setProperty('--tree_color', color3)
  }

  getColors() {
    if (this.colors.length === this.currentIndex) {
      this.currentIndex = 0
    } else {
      this.currentIndex++
    }

    return this.colors[this.currentIndex]
  }
}

const backgroundController = new BackgroundController()
backgroundController.changeBackgroundDuration(duration)
background.addEventListener('animationiteration', () => {
  backgroundController.changeBackgroundColors()
})

import { useState } from 'react'
import { Themes } from 'constants'

function ThemControl() {
  const [currentTheme, setCurrentTheme] = useState(Themes.LIGHT)

  const handleChangeTheme = (theme: Themes) => {
    setCurrentTheme(theme)
    document.documentElement.setAttribute('data-theme', theme)
  }

  return (
    <div>
      {currentTheme === Themes.LIGHT ? (
        <button className='bg-secondaryBgr text-primary' onClick={() => handleChangeTheme(Themes.DARK)}>
          Dark
        </button>
      ) : (
        <button className='bg-secondaryBgr text-primary' onClick={() => handleChangeTheme(Themes.LIGHT)}>
          Light
        </button>
      )}
    </div>
  )
}

export default ThemControl

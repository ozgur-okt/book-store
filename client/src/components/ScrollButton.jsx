import { useEffect, useState } from 'react'
import upArrow from '../assets/up-arrow.svg'
import styles from '../styles/components/ScrollButton.module.scss'

const ScrollButton = () => {
  const [showScroll, setShowScroll] = useState(false)
  
  const SCROLL_THRESHOLD = 400

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > SCROLL_THRESHOLD) {
        setShowScroll(true)
      } else if (showScroll && window.scrollY <= SCROLL_THRESHOLD) {
        setShowScroll(false)
      }
    }
    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [showScroll])

  return (
    <button className={styles.scrollTop} onClick={scrollTop} style={{display: !showScroll && 'none' }}>
      <img src={upArrow} alt='scroll' />
    </button>
  )
}

export default ScrollButton
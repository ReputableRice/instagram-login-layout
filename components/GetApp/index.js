import styles from './getapp.module.css'
import Image from 'next/image'

export default function App() {
    return (
    
<div className={styles.appContainer}>

    <div className={styles.apptext}> Get the app.</div>

    <div className={styles.images}>
        <Image className={styles.microsoft} src={'/images/apple.png'} width={126} height={45} alt="Download on the App Store"></Image>
        <Image className={styles.googlePlay} src={'/images/Google_Play_Store_badge_EN.svg.png'} width={151} height={45} alt="Get it on Google Play"></Image>
    </div>
</div>

)    
}

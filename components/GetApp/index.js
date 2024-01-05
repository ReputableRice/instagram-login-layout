import styles from './getapp.module.css'

export default function App() {
    return (
    
<div className={styles.appContainer}>

    <div className={styles.apptext}> Get the app.</div>

    <div className={styles.images}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Get it on Google Play"></img>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/800px-Download_on_the_App_Store_Badge.svg.png" alt="Get it on the App Store"></img>
    </div>
</div>

)    
}

import styles from './getapp.module.css'

export default function App() {
    return (
    
<div className={styles.appContainer}>

    <div className={styles.apptext}> Get the app.</div>

    <div className={styles.images}>
        <img className={styles.googlePlay} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Get it on Google Play"></img>
        <img className={styles.microsoft} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Get_it_from_Microsoft_Badge.svg/2560px-Get_it_from_Microsoft_Badge.svg.png" alt="Get it from Microsoft"></img>
    </div>
</div>

)    
}

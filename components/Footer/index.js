import styles from './footer.module.css'

export default function FooterInstagram() {
    return(
<div className={styles.footerContainer}>
    <div className={styles.innerContainer}>
    <div className={styles.textContainerTop}>
            <div className={styles.footerText}>Meta</div>
            <div className={styles.footerText}>About</div>
            <div className={styles.footerText}>Blog</div>
            <div className={styles.footerText}>Jobs</div>
            <div className={styles.footerText}>Help</div>
            <div className={styles.footerText}>API</div>
            <div className={styles.footerText}>Privacy</div>
            <div className={styles.footerText}>Terms</div>
            <div className={styles.footerText}>Locations</div>
            <div className={styles.footerText}>Instagram Lite</div>
            <div className={styles.footerText}>Threads</div>
            <div className={styles.footerText}>Contact Uploading & Non-Users</div>
            <div className={styles.footerText}>Meta Verified</div>
    </div>

    <div className={styles.textContainerBottom}>
            <div className={styles.footerText}>English</div>
            <div className={styles.footerText}>© 2024 Instagram from Meta</div>
    </div>
    </div>
</div>
    )
}
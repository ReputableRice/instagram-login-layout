import styles from './signup.module.css'

export default function Signup() {
    return (
        <div className={styles.signupOuterContainer}>
                <div className={styles.signupInnerContainer}>
                    <div className={styles.textBlack}>
                        Don't have an account? <span className={styles.textBlue}>Sign up</span>
                        
                    </div>
                </div>
        </div>
    )
}
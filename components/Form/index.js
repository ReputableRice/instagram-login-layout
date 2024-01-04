import styles from './form.module.css'

export default function Form() {
    return(
        <>
            <div className={styles.formContainerOuter}>
                <div className={styles.formContainer}>
                    <form className={styles.form}>
                    <img className={styles.textLogo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfsGUMX5_VbQJQ4OpHr0SWdUin5PjJyLmfQ7Zzd8JyGA&s" alt="instagram text logo"></img>
                    <fieldset className={styles.fieldSet}>
                            <input 
                                
                                id="username"
                                className={styles.username}
                                type="text"
                                placeholder="Phone number, username, or email"

                               />

                            
                            <input

                                id="password"
                                className={styles.password}
                                type="password"
                                placeholder="Password"

                            />     
                            <button className={styles.logIn}>Log in</button>
                        </fieldset>
                    </form>

                <div className={styles.lineBreakContainer}>
                    <div className={styles.lineBreak}></div>
                    <div className={styles.or}>OR</div>
                    <div className={styles.lineBreak}></div>
                </div>

                <div className={styles.facebookContainer}>
                    <img className={styles.facebookIcon} src="https://static-00.iconduck.com/assets.00/facebook-icon-512x512-seb542ju.png" alt="Facebook icon"></img>
                    <div className={styles.facebookText}>Log in with Facebook</div>
                </div>

                <div className={styles.forgot}>Forgot password?</div>

                </div>
                </div>
        </>
    )
}
import styles from './form.module.css'
import LoginButton from '@/components/LoginButton'
import Image from 'next/image'

export default function instagramForm() {
    return(
        <>
                <div className={styles.formContainer}>
                    
                <Image src={'/images/Instagram.png'} width={192} height={54} className={styles.textLogo} alt="instagram logo"></Image>                    
                    <form className={styles.form}>
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
                            <LoginButton/>                        
                    </fieldset>
                    </form>
                <div className={styles.lineBreakContainer}>
                    <div className={styles.lineBreak}></div>
                    <div className={styles.or}>OR</div>
                    <div className={styles.lineBreak}></div>
                </div>

                <div className={styles.facebookContainer}>

                    <Image className={styles.facebookIcon} src={'/images/facebook.png'} 
                    
                    width={18} 
                    height={18} 
                    alt="Facebook icon"
                    
                    ></Image>

                    <div className={styles.facebookText}>Log in with Facebook</div>
                </div>

                <div className={styles.forgot}>Forgot password?</div>

                </div>
               
        </>
    )
}
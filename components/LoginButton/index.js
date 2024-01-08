import styles from '@/components/LoginButton/loginbutton.module.css'
import React, { useState } from "react"

export default function LoginButton() {
    const [submit, setSubmit] = useState([])

    return(
        <>
        <button

            className={styles.logIn} 
            onClick={() => {
                setSubmit([""])
                console.log(submit)

        }}>Log In
        </button>
        
        {submit}
        </>
    )
}
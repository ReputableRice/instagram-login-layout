import styles from '@/components/Form/form.module.css'
import React, { useState } from "react"

export default function LoginButton() {
    const [submit, setSubmit] = useState([])

    return(
        <>
        <button className={styles.logIn} onClick={() => {
            setSubmit([""])
            console.log(submit)
        }}>Log In

        </button>
        {submit}
        </>
    )
}
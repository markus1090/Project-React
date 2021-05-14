import React from "react"
import styles from "../style/Loading.module.css"

const Loading = () => {
    return (
        <div className={styles["containerLoading"]}>
            <div className={styles["lds-ring"]}><div></div><div></div><div></div><div></div></div>
        </div> 
    )
}

export default Loading
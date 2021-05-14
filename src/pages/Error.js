import React from "react"
import styles from "../style/Error.module.css"

const Error = (props) => {
    return (
        <div className={styles["container"]}>
            <div>
                <h1>Error: {props.value}</h1>
            </div>
        </div>
    )
}

export default Error
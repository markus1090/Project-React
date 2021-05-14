import React from "react"
import styles from "../style/About.module.css"

const About = () => {
    return (
        <div className={styles["container"]}>
            <div className={styles["about"]}>
                <h2>About</h2>
                <p>
                    A simple web app that allows to search content about books<br/>
                    through the use of API Google books.<br/>
                    You can search all information that you need in different ways:
                </p>   
                <ul>
                    <li>
                        Title
                    </li>
                </ul>
                <ul>
                    <li>
                        Authors
                    </li>
                </ul>
                <ul>
                    <li>
                        Publisher
                    </li>
                </ul>
                <h4>Enjoy yourself!</h4> 
            </div>
        </div> 
    )
}

export default About
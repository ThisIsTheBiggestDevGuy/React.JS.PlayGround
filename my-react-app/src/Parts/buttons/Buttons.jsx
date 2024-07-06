
import styles from './Buttons.module.css'

function Button1 () {
    return (<button className={styles.button}>Follow</button>);
}

function Button2 () {
    return (<button className={styles.button2}>Message</button>)
}

export { Button1, Button2 };

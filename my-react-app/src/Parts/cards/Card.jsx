
import { Button1, Button2 } from '../buttons/Buttons';
import Person from '../Person';

import styles from './Cards.module.css';
import bosspic from '../pics/bosspic.jpg'

function Card() {
    return (
        <div className={styles.card}>
            <img className={styles.cardImage} src={bosspic} alt="profile picture" />
            <h2 className={styles.cardTitle}>Bigg Boss</h2>
            <p className={styles.cardText}>Coding the shit out of the React app</p>
            <Person name='Bigg Boss' age={30} isActive={true} />
            <Button1 />
            <Button2 />
        </div>
    )
}

export default Card;

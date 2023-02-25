import React, {useState} from 'react';
import './App.css';
import styles from './App.module.css'


function App() {

    let [count, setCount] = useState(0)


    const onClickHandler = () => {
        if (count >= 5) {
            return
           // return alert('максимальное число')
        }
        setCount((prevState) => prevState + 1)
    }

    const onClickHandlerZero = () => {
        setCount(0)
    }


    return (
        <div className={styles.fon}>
            <div className={styles.counter}>
                <div className={styles.buttons_number}>
                    <h1 className={count === 5 ? `${styles.number}` : `${styles.numberCounter}`}>{count}</h1>
                    <div className={styles.buttons}>
                        <button className={styles.button_incActive} onClick={onClickHandler}> inc</button>
                        <button style={{background: count === 0 ? 'blue' : undefined}}
                                className={styles.button_resetActive} onClick={onClickHandlerZero}> reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

//style={{color: count === 5 ? 'red' : undefined}}
export default App;

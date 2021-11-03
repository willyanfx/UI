import { useRef, useState } from "react";

function padTime(time) {
    return time?.toString().padStart(2, "0");
}

export default function Pomodoro() {
    const [title, setTitle] = useState("Let the countdown begin!");
    const [time, setTime] = useState(1 * 60);
    const intervalRef = useRef(null);

    const startTimer = () => {
        if (intervalRef.current !== null) return;
        intervalRef.current = setInterval(() => {
            setTime((time) => {
                if (time >= 1) return time - 1;
                resetTimer();
                return 0;
            });
        }, 1000);
    };
    const stopTimer = () => {
        if (intervalRef.current === null) return;

        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTitle("Keep it up!");
    };
    const resetTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTitle("Read to go another round!");
        setTime(25 * 60);
    };

    let minutes = padTime(Math.floor(time / 60));
    let seconds = padTime(time - minutes * 60);

    console.log(seconds);
    console.log(time);
    return (
        <div className='app'>
            <h2>{title}</h2>

            <div className='timer'>
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
            </div>

            <div className='buttons'>
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
}

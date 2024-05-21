import { useState, useEffect } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    let timer;
    useEffect(() => {
        timer = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds === 59) {
                    setMinutes((prevMinutes) => prevMinutes + 1);
                    return 0;
                } else {
                    return prevSeconds + 1;
                }
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [seconds, minutes]);

    const restart = () => {
        setSeconds(0);
        setMinutes(0);
    };

    const stop = () => {
        clearInterval(timer);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-sky-200 via-sky-300 to-sky-400">
            <div className="bg-white p-10 rounded-lg shadow-lg w-80">
                <h1 className="text-2xl font-bold mb-4 text-center">Timer</h1>
                <h1 className="text-4xl font-mono mb-4 text-center">
                    {minutes < 10 ? "0" + minutes : minutes}:
                    {seconds < 10 ? "0" + seconds : seconds}
                </h1>
                <div className="flex justify-center space-x-4">
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                        onClick={restart}
                    >
                        Restart
                    </button>
                    <button
                        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
                        onClick={stop}
                    >
                        Stop
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Timer;

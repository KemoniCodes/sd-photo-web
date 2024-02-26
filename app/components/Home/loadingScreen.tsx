import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        const progressBar = document.getElementById('loadingBar') as HTMLDivElement;
        const counter = document.getElementById('loadingPercent') as HTMLSpanElement;
        const loadingScreen = document.getElementsByClassName('loadingScreen')[0] as HTMLDivElement;
        const heroSection = document.querySelector('.home') as HTMLDivElement;

        function updateProgress(progress: number) {
            progressBar.style.width = `${progress}%`;
            counter.textContent = `${progress}%`;
        }

        updateProgress(progress);

        document.body.style.overflow = 'hidden';

        let intervalId: NodeJS.Timeout | null = null;
        if (progress < 100) {
            intervalId = setInterval(() => {
                setProgress(prevProgress => prevProgress + 5);
            }, 100);
        } else if (progress >= 65) {
            clearInterval(intervalId!);
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                loadingScreen.style.height = '0';
                heroSection.style.opacity = '1';
                setTimeout(() => {
                    // window.addEventListener('wheel', handleScroll);
                    // document.body.style.overflowY = 'scroll';
                }, 100);
            }, 0);
        }

        return () => {
            if (intervalId !== null) {
                clearInterval(intervalId);
            }
        };
    }, [progress]);

    return (
        <>
            <div className="loadingScreen bg-midnightBlack h-[128vh] -m-[28px] overflow-hidden relative z-10" style={{ transition: 'opacity .2s ease-out, height 1s ease' }}>
                <div id="loadingBar"></div>
                <div id="loadingPercent" className=' text-ghostWite text-center relative top-[32%] '>
                    0%
                </div>
            </div>
        </>
    );
};

export default LoadingScreen;

// function handleScroll(this: Window, ev: WheelEvent) {
//     throw new Error('Function not implemented.');
// }
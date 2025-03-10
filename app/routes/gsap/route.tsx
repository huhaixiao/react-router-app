import { gsap } from 'gsap';

export default function () {

    return <>
        <div className="box w-32 h-32 bg-blue-500"></div>
        <button onClick={() => {
            //rotate and move elements with a class of "box" ("x" is a shortcut for a translateX() transform) over the course of 1 second.
            // gsap.fromTo(".box", { rotation: 27, x: 100, duration: 1 });
            gsap.fromTo(".box", { rotation: 0, x: 0, opacity: 0 }, { rotation: 27, x: 100, opacity: 1, duration: 1 });
        }}>Click</button>
    </>
}
import React, { MouseEvent, useState } from 'react';
import './mdRipple.scss';

// no funcional aun. hay que perfeccionarlo
const MdRipple = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [isDisplaying, setDisplaying] = useState(false);
    const [styles, setStyles] = useState({});

    let rippleEffect = null;
    if (isDisplaying) {
        rippleEffect = <span
            style={styles}
            className='ripple-effect'>
        </span>

        console.log(styles.hasOwnProperty('transform'))
        if (!styles.hasOwnProperty('transform')) {
            setTimeout(() => {
                // @ts-ignore
                setStyles({ transform: 'scale(1)', left: `${x}px`, top: `${y}px`, opacity: 0 });
            });

            setTimeout(() => {
                setDisplaying(false);
                setStyles({});
            }, 20000);
        }
    }

    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        // @ts-ignore
        const target: HTMLDivElement = e.target;
        const rect = target.getBoundingClientRect();

        setX(e.clientX - rect.left);
        setY(e.clientY - rect.top);
        setDisplaying(true);
    }

    return (
        <div className='md-ripple' onClick={handleClick}>
            {rippleEffect}
        </div>
    );
};

export default MdRipple;
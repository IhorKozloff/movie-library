import onNoPosterSmall from '../images/onNoPoster.jpg';
import onNoPosterLarge from '../images/onNoPosterLarge.jpg';

export const posterGuard = (data:string, size:string) => {

    if (data !== null) {
        return `https://image.tmdb.org/t/p/original${data}`;
    } else {
        switch (size) {
        case 'small':
            return onNoPosterSmall;
        case 'large':
            return onNoPosterLarge;
        default:
            return; 
        }
    };
};
export default function getTwoDigitString(num) {
    let retVal;

    if(num < 10) {
        retVal = `0${num}`;
    } else {
        retVal = `${num}`;
    }

    return retVal;
}
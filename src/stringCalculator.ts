export class StringCalculator {

    add(input: any) {
        let reducer = (accumulator, currentValue) => accumulator + currentValue;

        if (input !== null) {
            let result;

            if (input < 0 || Number.isSafeInteger(input)) {
                return 'Its a negative';
            } else {
                return input.replace(/[^0-9\.]+/g, ' ').split(' ').map(Number).reduce(reducer);
            }
        }
        else {
            return 0;
        }
    }

}
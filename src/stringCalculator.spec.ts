import { StringCalculator } from './stringCalculator';
import { expect } from 'chai';
import 'mocha';


describe('String Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new StringCalculator;
    })

    it('should return zero when input is null', () => {
        expect(calculator.add(null)).to.equal(0);
    });

    it('should return zero when input is empty', () => {
        expect(calculator.add('')).to.equal(0);
    });

    it('should return the number when input is a number', () => {
        expect(calculator.add('1')).to.equal(1);
    });

    it('should return sum when input is two numbers', () => {
        expect(calculator.add('1,2')).to.equal(3);
    });

    it('should return sum when input is separated By a newline', () => {
        expect(calculator.add('1,2\n2')).to.equal(5);
    });

    it('should use the delimiter when first line contains a delimiter', () => {
        expect(calculator.add('#|\n12|5\n1')).to.equal(18);
    });

    it('should support different delimiters when first line declares the delimiter started with hash:', () => {
        expect(calculator.add('#|\n1 | 2 | 10')).to.equal(13);
    });

    it('should support different delimiters with any length', () => {
        expect(calculator.add('#--\n1--7--23\n4--4')).to.equal(39);
    });

    describe('Exception', () => {
        it('should throw an exception when input is negative', () => {
            expect(calculator.add(-1)).to.equal('Its a negative');
        });

        it('should throw an exception when input is negative non-integers', () => {
            expect(calculator.add(-1.34243)).to.equal('Its a negative');
        });

        // it('should throw an exception when input is positive non-integers', () => {
        //     expect(calculator.add(1.34243)).to.equal('Its a negative');
        // });
    });


});
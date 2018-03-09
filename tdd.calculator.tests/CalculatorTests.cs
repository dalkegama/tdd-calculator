using System;
using NUnit.Framework;
using Shouldly;

namespace tdd.calculator.tests
{
    [TestFixture]
    public class CalculatorTests
    {
        [Test]
        public void Add_WhenInputIsNull_ShouldReturnZero()
        {
            const string numbers = null;

            var result = Calculator.Add(numbers);

            result.ShouldBe(0);
        }

        [Test]
        public void Add_WhenInputIsAnumber_ShouldReturnTheNumber()
        {
            var result = Calculator.Add("1");

            result.ShouldBe(1);
        }

        [Test]
        public void Add_WhenInputIsTwoNumbers_ShouldReturnSum()
        {
            var result = Calculator.Add("1,2");

            result.ShouldBe(3);
        }

        [Test]
        public void Add_WhenInputIsSeparatedByAnewLine_ShouldReturnSum()
        {
            var result = Calculator.Add("1,2" + Environment.NewLine + "2");

            result.ShouldBe(5);
        }

        [Test]
        public void Add_WhenFirstLineContainsADelimiter_ShouldUseTheDelimiter()
        {
            var result = Calculator.Add("#|\n12|5\n1");

            result.ShouldBe(18);
        }
    }
}

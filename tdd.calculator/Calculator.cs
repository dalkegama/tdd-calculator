using System;

namespace tdd.calculator
{
    public static class Calculator
    {
        public static int Add(string input)
        {
            var value = 0;
            if (input != null)
            {
                var firstline = 0;
                var delimiters = ",";
                if (input.StartsWith("#"))
                {
                    firstline = input.IndexOfAny(Environment.NewLine.ToCharArray());
                    delimiters = input.Substring(1, firstline);
                }

                var numbers = input.Substring(firstline).Split((delimiters + Environment.NewLine).ToCharArray(), StringSplitOptions.RemoveEmptyEntries);

                foreach (var number in numbers)
                {
                    var intVal = int.Parse(number);
                    if (intVal < 0)
                    {
                        throw new Exception("Its negative!");
                    }

                    value += intVal;
                }
            }
            return value;
        }
    }
}

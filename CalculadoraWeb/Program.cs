using System;

namespace PracticaBasica
{
    class PracticaBasica
    {
        static void Main(string[] args)
        {
            Console.Write("Ingrese su nombre: ");
            string nombre = Console.ReadLine();

            Console.Write("Ingrese su edad: ");
            int edad = int.Parse(Console.ReadLine());

            if (edad >= 18)
            {
                Console.WriteLine("Eres mayor de edad.");
            }
            else
            {
                Console.WriteLine("Eres menor de edad.");
            }

            Console.WriteLine("Números del 1 al 10:");
            for (int i = 1; i <= 10; i++)
            {
                Console.WriteLine(i);
            }
        }
    }
}
using System;
					
public class Program
{
	private static UInt32 UpdateNumber(UInt32 number)
	{
		UInt32 maskForOdd = 0x55555555;
		UInt32 maskForEven = 0xAAAAAAAA;
		
		UInt32 oddNumber = number & maskForOdd;
		UInt32 evenNumber = number & maskForEven;
		
		UInt32 result = (oddNumber << 1) ^ (evenNumber >> 1); // ^ or | does not matter
		
		return result;	
	}
	
	public static void Main()
	{
		UInt32 number = 978939247;
		var result = UpdateNumber(number);
		Console.WriteLine(result);
	}
}
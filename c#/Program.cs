static string NumerosFelizesESortudos(int number){
    bool feliz = NumerosFelizes(number);
    bool sortudo = NumerosSortudos(number);
    string frase = number.ToString();

    if (sortudo) {
        if (feliz) return number + " - Número Sortudo e Feliz.";
        return number + " - Número Sortudo e Não-Feliz.";
    }
    if (feliz) return number + " Número Não-Sortudo e Feliz.";
    return number + " Número Não-Sortudo e Não-Feliz.";
}

static bool NumerosFelizes(int number){
    int i = 1;
    int result = number;

    do {
        string digits = result.ToString();
        List<int> array = new List<int>();

        for (int j = 0; j < digits.Length; j++) {
            array.Add(int.Parse(digits[j].ToString()));
        };
        
        result = array.Aggregate(0, (acc, curr) =>  acc + (int)Math.Pow(curr, 2));
        
        i++;
    } while (result != 1 && i <= 100);
    if (result == 1) return true;
    return false;
}

static bool NumerosSortudos(int number){
    List<int> array = new List<int>();
    for (int i = 1; i <= number; i++) array.Add(i);
    int posicao = 0;
    int multiplos = 2;

    do {
        List<int> newArr = new List<int>();

        for (int i = 0; i < array.Count; i++)   {
            if ((i + 1) % multiplos != 0) newArr.Add(array[i]);
        }
    
        array = newArr;

        posicao++;
        if(posicao < array.Count) multiplos = array[posicao];
        
    } while (posicao < array.Count && multiplos < number);

    if (array.Contains(number)) return true;
    return false;
}

Console.WriteLine(NumerosFelizesESortudos(7));
Console.WriteLine(NumerosFelizesESortudos(21));
Console.WriteLine(NumerosFelizesESortudos(28));
Console.WriteLine(NumerosFelizesESortudos(142));
Console.WriteLine(NumerosFelizesESortudos(37));
Console.WriteLine(NumerosFelizesESortudos(100));

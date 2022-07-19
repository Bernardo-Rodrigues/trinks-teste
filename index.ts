export default function NumerosFelizesESortudos(number: number) {
  const feliz = NumerosFelizes(number);
  const sortudo = NumerosSortudos(number);

  if (sortudo) {
    if (feliz) return `${number} - Número Sortudo e Feliz.`;
    return `${number} - Número Sortudo e Não-Feliz.`;
  }
  if (feliz) return `${number} - Número Não-Sortudo e Feliz.`;
  return `${number} - Número Não-Sortudo e Não-Feliz.`;
}

function NumerosFelizes(number: number) {
  let i = 1;
  let result = number;

  do {
    const digits = result.toString().split("");
    result = digits.reduce((curr, acc) => curr + Math.pow(+acc, 2), 0);
    i++;
  } while (result !== 1 && i <= 100);

  if (result === 1) return true;
  return false;
}

function NumerosSortudos(number: number) {
  let arr = Array.from({ length: number }, (_, i) => i + 1);
  let posicao = 0;
  let multiplos = 2;

  do {
    const newArr = [];

    arr.forEach((n, i) => {
      if ((i + 1) % multiplos !== 0) newArr.push(n);
    });
    arr = newArr;

    posicao++;
    multiplos = arr[posicao];
  } while (multiplos < number);

  if (arr.includes(number)) return true;
  return false;
}

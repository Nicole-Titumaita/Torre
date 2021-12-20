//Torres de Hanoi
void hanoi(int num, String A, String C, String B) {
  if (num == 1) {
    print('Mueva el bloque $num desde $A hasta  $C');
  } else {
    hanoi(num - 1, A, B, C);
    print('Mueva el bloque $num desde $A hasta  $C');
    hanoi(num - 1, B, C, A);
  }
}

void main() {
  int n = 13;
  String A, B, C;

  print('Los clavijas son A B C\n');
  print('Numero de discos: ');
  hanoi(n, 'A', 'C', 'B');
}

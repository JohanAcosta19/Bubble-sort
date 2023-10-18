function Bubble() {
    var lista, n, i, k, aux;
    n = lista.length;
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (lista[i] > lista[i + 1]) {
                aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;
            }
        }
    }
    const lista = [76, 89, 63, 976, 8, 826, 5, 812, 11, 47];
    const sortedArray = Bubble();
    console.log("La lista ordenada es:", sortedArray);

// Funções em Arrow Function

// a) Função swap

const swap = (array, position1, position2) => {
    // Trocar os valores nas posições especificadas
    [array[position1], array[position2]] = [array[position2], array[position1]];
}

// b) Função shuffle
const shuffle = (array, numberOfSwaps) => {
    // Realizar o número especificado de trocas para embaralhar o vetor
    for (let i = 0; i < numberOfSwaps; i++) {
        const position1 = Math.floor(Math.random() * array.length);
        const position2 = Math.floor(Math.random() * array.length);
        swap(array, position1, position2);
    }
}

// c) Função bubbleSort

const bubbleSort = (array) => {
    const length = array.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
    // Comparar elementos adjacentes e trocar se estiverem na ordem errada
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
}

// d) Função selectionSort
const selectionSort = (array) => {
    const length = array.length;
    for (let i = 0; i < length - 1; i++) {
        let minIndex = i;
    // Encontrar o índice do menor elemento no restante do vetor
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        swap(array, i, minIndex);
    }
    return array;
}

// e) Função quickSort

const quickSort = (array, start = 0, end = array.length - 1) => {
    if (start < end) {
        const pivotIndex = partition(array, start, end);
        quickSort(array, start, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, end);
    }
    return array;
}

// Função de particionamento para o Quick Sort

const partition = (array, start, end) => {
    const pivotValue = array[end];
    let pivotIndex = start;

    for (let i = start; i < end; i++) {
        if (array[i] < pivotValue) {
            swap(array, i, pivotIndex);
            pivotIndex++;
        }
    }

    swap(array, pivotIndex, end);

    return pivotIndex;
}
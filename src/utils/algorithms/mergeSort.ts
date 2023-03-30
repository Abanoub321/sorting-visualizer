import SortingAlgorithm from "./SortingAlgorithm";

export default class MergeSort implements SortingAlgorithm {
    sort(array: number[], setState: React.Dispatch<React.SetStateAction<number[]>>): number[] {
        let sortedArray = [...array];
        let sortedArrayCopy = [...array];
        this.mergeSort(sortedArray, sortedArrayCopy, 0, sortedArray.length, setState);
        return sortedArray;
    }

    private mergeSort(array: number[], arrayCopy: number[], start: number, end: number, setState: React.Dispatch<React.SetStateAction<number[]>>) {
        if (end - start < 2) {
            return;
        }
        let middle = Math.floor((start + end) / 2);
        this.mergeSort(arrayCopy, array, start, middle, setState);
        this.mergeSort(arrayCopy, array, middle, end, setState);
        this.merge(array, arrayCopy, start, middle, end, setState);
    }

    private merge(array: number[], arrayCopy: number[], start: number, middle: number, end: number, setState: React.Dispatch<React.SetStateAction<number[]>>) {
        let left = start;
        let right = middle;
        let index = start;
        while (left < middle && right < end) {
            if (arrayCopy[left] < arrayCopy[right]) {
                array[index] = arrayCopy[left];
                left++;
            } else {
                array[index] = arrayCopy[right];
                right++;
            }
            index++;
        }
        setState([...array]);
        while (left < middle) {
            array[index] = arrayCopy[left];
            left++;
            index++;
        }
        while (right < end) {
            array[index] = arrayCopy[right];
            right++;
            index++;
        }
    }
}
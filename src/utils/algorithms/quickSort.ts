import SortingAlgorithm from "./SortingAlgorithm";

export default class QuickSort implements SortingAlgorithm {
    sort(array: number[], setState: React.Dispatch<React.SetStateAction<number[]>>): number[] {
        let sortedArray = [...array];
        if (sortedArray.length <= 1) {
            return sortedArray;
        }
        
        let pivot = sortedArray[0];
        let left: number[] = [];
        let right: number[] = [];
        for (let i = 1; i < sortedArray.length; i++) {
            if (sortedArray[i] < pivot) {
                left.push(sortedArray[i]);
            } else {
                right.push(sortedArray[i]);
            }
        }

        let sortedArrayCopy = [...this.sort(left, setState), pivot, ...this.sort(right, setState)];
        setTimeout(() => {
            setState([...sortedArrayCopy]);
        }, 2500);
        return sortedArrayCopy;
    }
}
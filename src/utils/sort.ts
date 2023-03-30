import SortingAlgorithm from "./algorithms/SortingAlgorithm";

export default class Sort {
    algorithm: SortingAlgorithm;

    constructor(algorithm: SortingAlgorithm) {
        this.algorithm = algorithm;
    }

    public sort(array: number[], setState: React.Dispatch<React.SetStateAction<number[]>>): number[] {
        return this.algorithm.sort(array, setState);
    }
}
import {
    BubbleSort,
    SelectionSort,
    InsertionSort,
    MergeSort,
    QuickSort
} from "../utils/algorithms";

const algorithms = [
    {
        name: "Bubble Sort",
        algorithm: new BubbleSort()
    },
    {
        name: "Selection Sort",
        algorithm: new SelectionSort()
    },
    {
        name: "Insertion Sort",
        algorithm: new InsertionSort()
    },
    {
        name: "Quick Sort",
        algorithm: new QuickSort()
    },
    {
        name: "Merge Sort",
        algorithm: new MergeSort()
    },
]

export default algorithms;
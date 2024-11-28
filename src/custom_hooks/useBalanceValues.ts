import { useEffect, useState } from "react";
import { ExpenseItem } from "../components/ExpenseForm";
import useExpenseContext from "./useExpenseListContext";

interface BalanceReturnType {
    positive: number,
    negative: number,
    sum: number
}

export const useBalanceValues = () => {
    const [ expenseNegativeValue, setExpenseNegativeValue ] = useState<number>();
    const [ expensePositiveValue, setExpensePositiveValue  ] = useState<number>();
    const [ expenseSum, setExpenseSum ] = useState<number>(0);
    const { expenseList } = useExpenseContext();

    const getExpenseSum = (): BalanceReturnType => {
        let totalSum = 0;
        let negativeTotal = 0;
        let positiveTotal = 0;
        if (expenseList.length) {
            expenseList.map((expense: ExpenseItem) => {
                if (expense.value < 0) {
                    negativeTotal += expense.value;
                    setExpenseNegativeValue(negativeTotal);
                }

                if (expense.value >= 0) {
                    positiveTotal += expense.value;
                    setExpensePositiveValue(positiveTotal);
                }

                totalSum += expense.value;
            })
            return { positive: positiveTotal, negative: negativeTotal, sum: parseFloat(totalSum.toFixed(2))};
        }
        return { positive: 0, negative: 0, sum: 0 }
    }

    useEffect(() => {
        setExpenseSum(getExpenseSum().sum);
        setExpenseNegativeValue(getExpenseSum().negative)
        setExpensePositiveValue(getExpenseSum().positive)
    }, [expenseList])

    return { expenseSum, expensePositiveValue, expenseNegativeValue }
}
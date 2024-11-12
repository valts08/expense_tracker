import { useEffect, useState } from "react";
import useExpenseContext from "../hooks/useExpenseListContext";
import "../styles/main.css";
import { ExpenseItem } from "./ExpenseForm";

interface BalanceReturnType {
    positive: number,
    negative: number,
    sum: number
}

export const ExpenseSum = () => {
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

    return (
        <>
            <span className="balance" id={`${expenseSum >= 0 ? "green" : "red"}`}>Balance: {expenseSum}</span>
            <div className="summary">
                <div className="summary-card">
                    <h3>Income</h3>
                    <span className="income">{expensePositiveValue}</span>
                </div>
                <div className="summary-card">
                    <h3>Expenses</h3>
                    <span className="expense">{expenseNegativeValue}</span>
                </div>
            </div>
        </>
    )
}
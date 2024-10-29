import { useEffect, useState } from "react";
import useExpenseContext from "../hooks/useExpenseContext"

export const ExpenseSum = () => {
    const [ expenseSum, setExpenseSum ] = useState(0);
    const { expenseList } = useExpenseContext();

    const getExpenseSum = () => {
        let totalSum = 0;

        if (expenseList.length) {
            expenseList.map((expense) => {
                totalSum += expense.value;
            })
        }
        
        return totalSum;
    }

    useEffect(() => {
        setExpenseSum(getExpenseSum());
        console.log("useEffect in ExpenseSum ran")
    }, [expenseList])

    return (
        <>
            {expenseSum}
        </>
    )
}
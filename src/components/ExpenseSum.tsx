import { useBalanceValues } from "../custom_hooks/useBalanceValues";
import "../styles/main.css";

export const ExpenseSum = () => {
    const { expenseSum, expensePositiveValue, expenseNegativeValue} = useBalanceValues()

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
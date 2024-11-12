import { useEffect, useState } from "react";
import { ExpenseList } from "./ExpenseList";
import { ExpenseSum } from "./ExpenseSum";
import { DeleteButton } from "./DeleteButton";
import { ExpenseListContext } from "../contexts/ExpenseListContext";
import "../styles/main.css";

export interface ExpenseItem {
    name: string,
    value: number,
    id: number
  }

export const ExpenseForm = () => {
    const [ value, setValue ] = useState<number>(0);
    const [ title, setTitle ] = useState<string>("");
    const [ expenseList, setExpenseList ] = useState<ExpenseItem[]>([]);

    useEffect(() => {
        const storageValue: string | null = localStorage.getItem("expense-list")
        if (storageValue !== null) {
            setExpenseList(JSON.parse(storageValue))
        }
    }, [])
    
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (!value || !title.length) {
            return
        }
        const newExpenseList: ExpenseItem[] = [...expenseList, {name: title, value: value, id: !expenseList.length ? 1 : expenseList.slice(-1)[0].id + 1}]
        setExpenseList(newExpenseList);
        localStorage.setItem("expense-list", JSON.stringify(newExpenseList))
    }

    return (
        <ExpenseListContext.Provider value={{expenseList, setExpenseList}}>
            <h1 style={{ textAlign: 'center'}}>Expense Tracker</h1>
            <section className="container">
                <div style={{ width: "50%" }}>
                    <ExpenseSum />
                    <form className="transaction-form" name="ExpenseForm" onSubmit={(e) => handleFormSubmit(e)}>
                        <h3>New Expense</h3>
                        <label htmlFor="expense-title">Expense title</label>
                        <input type='text' id="expense-title" name="expense-title" onChange={(e) => setTitle(e.target.value)} placeholder='Name of expense...' />
                        <label htmlFor="expense-amount">Expense amount</label>
                        <input type='number' id="expense-amount" name="expense-amount" step="0.01" onChange={(e) => setValue(parseFloat(e.target.value))} placeholder='Start writing numbers...' />
                        <input type="submit"/>
                    </form>
                </div>
                <div style={{ width: "50%" }}>
                    <ExpenseList />
                    <DeleteButton type={"all"} />
                </div>
            </section>
        </ExpenseListContext.Provider>
    )
}
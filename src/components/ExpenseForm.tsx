import { useState } from "react";
import { ExpenseList } from "./ExpenseList";
import { ExpenseSum } from "./ExpenseSum";
import { DeleteButton } from "./DeleteButton";
import { ExpenseContext } from "../contexts/ExpenseContext";

export interface ExpenseItem {
    name: string,
    value: number,
    id: number
  }

export const ExpenseForm = () => {
    const [ value, setValue ] = useState(0);
    const [ title, setTitle ] = useState("");
    const [ expenseList, setExpenseList ] = useState<ExpenseItem[]>([]);


    
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setExpenseList((prev: any): any => [...prev, { name: title, value: value, id: !expenseList.length ? 1 : expenseList.slice(-1)[0].id + 1}]);
    }

    return (
        <ExpenseContext.Provider value={{expenseList, setExpenseList}}>
            <form name="ExpenseForm" onSubmit={(e) => handleFormSubmit(e)}>
                <input type='number' onChange={(e) => setValue(parseInt(e.target.value))} placeholder='Start writing numbers...' />
                <input type='text' onChange={(e) => setTitle(e.target.value)} placeholder='Name of expense...' />
                <input type="submit"/>
            </form>
            
            <ExpenseList />
            <DeleteButton type={"all"} />
            <ExpenseSum />
        </ExpenseContext.Provider>
    )
}
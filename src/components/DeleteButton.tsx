import useExpenseContext from "../custom_hooks/useExpenseListContext"
import { ExpenseItem } from "./ExpenseForm"
import "../styles/main.css";

type ButtonProp = {
    type: string,
    id?: number
}

export const DeleteButton = ({ type, id }: ButtonProp) => {
    const { expenseList, setExpenseList } = useExpenseContext();

    const removeItem = (e: number | undefined): void => {

        if (typeof e === undefined) {
            throw new Error("Function removeItem got an argument of type undefined");
        }
        const newExpenseList: ExpenseItem[] = [...expenseList.filter((item: ExpenseItem) => item.id !== e)];
        setExpenseList(newExpenseList);
        if (!localStorage.getItem("expense-list")) {
            localStorage.removeItem("expense-list")
            return
        }
        localStorage.setItem("expense-list", JSON.stringify(newExpenseList))
    }

    const handleRemoveAll = (): void => {
        if (!expenseList.length) {
            return
        }
        setExpenseList([]);
        localStorage.removeItem("expense-list")
    }

    return (
        (type === "item" ? 
            <button className="delete-button" onClick={() => removeItem(id)}>
                X
            </button> :
            <button id="clear-all" onClick={() => handleRemoveAll()}>
                Clear All
            </button>
        )
    )
}
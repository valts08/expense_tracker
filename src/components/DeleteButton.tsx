import useExpenseContext from "../hooks/useExpenseListContext"
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
        setExpenseList((prev: ExpenseItem[]) => prev && prev.filter((item: ExpenseItem) => item.id !== e));
    }

    const handleRemoveAll = (): void => {
        if (!expenseList.length) {
            return
        }
        setExpenseList([]);
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
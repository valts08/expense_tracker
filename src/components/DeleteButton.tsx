import useExpenseContext from "../hooks/useExpenseContext"
import { ExpenseItem } from "./ExpenseForm"
import "../styles/main.css";

type ButtonProp = {
    type: string,
    id?: number
}

export const DeleteButton = ({ type, id }: ButtonProp) => {
    const { setExpenseList } = useExpenseContext();

    const removeItem = (e: number | undefined): void => {

        if (typeof e === undefined) {
            throw new Error("Function removeItem got a argument of type undefined");
        }
        setExpenseList((prev: ExpenseItem[]) => prev && prev.filter((item: ExpenseItem) => item.id !== e));
    }

    const removeAll = (): void => {
        setExpenseList([]);
    }

    return (
        (type === "item" ? 
            <button className="item-button" onClick={() => removeItem(id)}>
                X
            </button> :
            <button id="clear-all" onClick={() => removeAll()}>
                Clear All
            </button>
        )
    )
}
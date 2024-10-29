import useExpenseContext from "../hooks/useExpenseContext"
import { ExpenseItem } from "./ExpenseForm"

type ButtonProp = {
    type: string,
    id?: number
}

export const DeleteButton = ({ type, id }: ButtonProp) => {
    const { setExpenseList } = useExpenseContext();

    const removeItem = (e: number | undefined): any => {

        if (typeof e === undefined) {
            throw new Error("Function removeItem got a argument of type undefined");
        }
        setExpenseList((prev: ExpenseItem[]) => prev && prev.filter((item: ExpenseItem) => item.id !== e));
    }

    const removeAll = (): any => {
        setExpenseList([]);
    }

    return (
        (type === "item" ? 
            <button onClick={() => removeItem(id)}>
                X
            </button> :
            <button onClick={() => removeAll()}>
                Clear All
            </button>
        )
    )
}
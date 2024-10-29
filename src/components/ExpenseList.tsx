import { ExpenseItem } from './ExpenseForm';
import { DeleteButton } from "./DeleteButton";
import useExpenseContext from "../hooks/useExpenseContext";


export const ExpenseList = () => {
    const { expenseList } = useExpenseContext();

    return (
        <>
            {expenseList.length && expenseList.map((item: ExpenseItem) => {
                return (
                    <div key={item.id}>
                        <span>{item.name}</span>
                        <span>{item.value}</span>
                        <DeleteButton type={"item"} id={item.id} />
                    </div>
                )
            })}
        </>
    )
}


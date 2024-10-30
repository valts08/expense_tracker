import { ExpenseItem } from './ExpenseForm';
import { DeleteButton } from "./DeleteButton";
import useExpenseContext from "../hooks/useExpenseContext";
import "../styles/main.css";

export const ExpenseList = () => {
    const { expenseList } = useExpenseContext();

    return (
        <ul>
            {expenseList.length && expenseList.map((item: ExpenseItem) => {
                return (
                    <>
                        <li key={item.id}>
                            <span>{item.name} {item.value}</span>
                            <DeleteButton type={"item"} id={item.id} />
                        </li>
                    </>
                )
            })}
        </ul>
    )
}


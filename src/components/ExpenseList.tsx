import { ExpenseItem } from './ExpenseForm';
import { DeleteButton } from "./DeleteButton";
import useExpenseContext from "../custom_hooks/useExpenseListContext";
import "../styles/main.css";

export const ExpenseList = () => {
    const { expenseList } = useExpenseContext();

    return (
        <div className='transaction-history'>
            <h3 style={{ marginTop: "0px"}}>Expense History</h3>
            <ul>
                {expenseList.map((item: ExpenseItem) => {
                    return (
                        <li className={`transaction-item ${item.value > 0 ? "income" : "expense"}`} key={item.id}>
                            <span className='transaction-name'>{item.name}</span>
                            <span className='transaction-amount'>{item.value}</span>
                            <DeleteButton type={"item"} id={item.id} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


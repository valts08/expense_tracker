import { createContext } from "react";
import { ExpenseItem } from "../components/ExpenseForm";

type ExpenseContextType = {
    expenseList: ExpenseItem[],
    setExpenseList: React.Dispatch<React.SetStateAction<ExpenseItem[]>>
  }

export const ExpenseListContext = createContext<ExpenseContextType | null>(null);
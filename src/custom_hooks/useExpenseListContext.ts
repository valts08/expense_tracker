import { useContext } from "react";
import { ExpenseListContext } from "../contexts/ExpenseListContext";

export default function useExpenseContext() {
    const context = useContext(ExpenseListContext);
    if (!context) {
        throw new Error("useExpenseContext must be used within a ExpenseContextProvider")
    };
    return context;
}
export interface IChildAddNewExpense {
    addNewExpense: Function
}

export interface INewExpenseForm {
    title: string
    amount: number
    date: string
}

export interface IChildNewExpenseProps {
    onSaveExpenseData: Function
}
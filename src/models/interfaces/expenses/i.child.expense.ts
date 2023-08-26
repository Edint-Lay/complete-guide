export interface IExpense {
    id: string
    title: string
    amount: number
    date: Date
}

export interface IChildExpenseItemProps {
    expense: {
        id: string
        title: string
        amount: number
        date: Date
    }
}

export interface IChildExpenseDateProps {
    date: Date
}

export interface IChildExpenseSelectedProps {
    selected: string
    onChangeFilter: Function
}
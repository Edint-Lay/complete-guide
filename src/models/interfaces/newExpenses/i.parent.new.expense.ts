import { INewExpenseForm } from "./i.child.new.expense";

export interface IParentNewExpenseFormData {
    data : INewExpenseForm
}

export interface IParentNewExpenseData {
    id : string
    data : INewExpenseForm
}
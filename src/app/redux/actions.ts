export enum ActionType{
    AllProductsDownloaded,
    OneProductAdded,
    OneProductUpdated,
    OneProductDeleted
}

export interface IAction{
    type: ActionType,
    payload?: any
}
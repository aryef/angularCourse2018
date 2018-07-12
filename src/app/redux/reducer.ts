import { AppState } from "./app.state";
import { IAction, ActionType } from "./actions";

export function reducer(oldState: AppState, action: IAction)
{
    let newState: AppState = new AppState(oldState.products);

    switch(action.type)
    {
        case ActionType.AllProductsDownloaded:
            newState.products= action.payload;
            break;
        case ActionType.AllProductsDownloaded:
            // add a new product at the beginnig of th earray
            newState.products.unshift(action.payload);
            break;
    }

    return newState;
}
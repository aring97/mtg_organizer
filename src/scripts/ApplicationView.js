import React from "react"
import {Route} from "react-router-dom"
import {MyCardList} from "./mycards/myCardList"
import {CardsOwnedProvider} from "./providers/cardsOwnedProvider"
import {CardCashProvider} from "./providers/cardCashingProvider"
import {MTGProvider} from "./providers/MTGAPIProvider"
import {CardSearch} from "./search/search"

export const ApplicationView=(props)=>{
    return(
        <>
        <CardCashProvider>
        <CardsOwnedProvider>
            <Route exact path="/">
                <MyCardList/>
            </Route>
        </CardsOwnedProvider>
        </CardCashProvider>
        <MTGProvider>
            <Route path="/search">
                <CardSearch />
            </Route>
        </MTGProvider>
        </>
    )
}
import React from 'react'
import { useParams } from 'react-router-dom'

import { CardData } from "./config/data";
import { MenuBottom } from './components/MenuBottom';
import { Yakiniku } from './pages/MenuYakiniku';
import { OneDish } from './pages/MenuOneDish';
import { RiceDishes } from './pages/MenuRiceDishes';
import { Drink } from './pages/MenuDrink';
import { Dessert } from './pages/MenuDessert';
import { PartyPlan } from './pages/MenuPartyPlan';
import { Lunch } from './pages/MenuLunch';

const MenuItem = () => {
    const { id } = useParams()
    return (
        <>
            {getComponent(id)}
            <MenuBottom />
        </>
    )

}

const getComponent = (id) => {
    const fetchData = CardData.filter(cd => cd.id === id)[0];
    switch (id) {
        case 'yakiniku': return <Yakiniku data={fetchData} />
        case 'one-dish': return <OneDish data={fetchData} />;
        case 'rice-dishes': return <RiceDishes data={fetchData} />;
        case 'drinks': return <Drink data={fetchData} />;
        case 'dessert': return <Dessert data={fetchData} />;
        case 'party-plan': return <PartyPlan data={fetchData} />;
        case 'lunch': return <Lunch data={fetchData} />;
        default: return <h1>No Menu Match</h1>;
    }
}

export default MenuItem

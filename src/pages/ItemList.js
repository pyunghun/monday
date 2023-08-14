import Item from './Item.js';
import { useEffect, useState } from 'react';

function ItemList() {

    const [users, setUsers] = useState([]);

    useEffect(
        () => {
            fetch('http://api.kcisa.kr/openapi/service/rest/convergence2019/getConver09?serviceKey=66d8b024-ac1b-426c-a9ca-c0f3665a17d0&numOfRows=200', {
                headers: {
                    'accept': 'application/json'
                }
            })
                .then(response => response.json())
                .then(responseUsers => setUsers(responseUsers.response.body.items.item));
        },
        []
    );
    return (
        <div>
            { users.map(user => <Item user={ user } key={ user.rnum } />)}   
        </div>
    );
}

export default ItemList;
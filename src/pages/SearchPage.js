// import { Navigate } from "react-router-dom";
import all from '../css/all.css';
import React from 'react';
import {useEffect, useState} from 'react';
import Item from './Item';
import ItemList from './ItemList';


function SearchPage() {


    // const [users, setUsers] = useState([]);
    // useEffect(
    //     () => {
    //         fetch('http://api.kcisa.kr/openapi/service/rest/convergence2019/getConver09?serviceKey=66d8b024-ac1b-426c-a9ca-c0f3665a17d0', {
    //             headers: {
    //                  'accept': 'application/json'
    //     }
    //         })
    //         .then(response => response.json())
    //         .then(responseUsers => setUsers(responseUsers.response.body.items.item));
    //     },
    //     []   
    //         );
    

    
    // const {useState, useEffect} = React;

    // function Item({ user }) {

    //     return (
    //         <div className="item">
    //             <h4>{ user.title }</h4>
    //             <hr/>
    //             <p>
    //                 지역 : { user.venue }<br/>
    //                 강좌명 : { user.subjectCategory }<br/>
    //                 과목 : { user.subjectKeyword }<br/>
    //             </p>
    //         </div>
    //     );
    // }

    // function ItemList() {

    //     const [users, setUsers] = useState([]);

    //     useEffect(
    //         () => {
    //             fetch('http://api.kcisa.kr/openapi/service/rest/convergence2019/getConver09?serviceKey=66d8b024-ac1b-426c-a9ca-c0f3665a17d0', {
    //                 headers: {
    //                     'accept': 'application/json'
    //                 }
    //             })
    //                 .then(response => response.json())
    //                 .then(responseUsers => setUsers(responseUsers.response.body.items.item));
    //         },
    //         []
    //     );

    //     // console.log(users);

    //     return (
    //         <div>
    //             { users.map(user => <Item user={ user } key={ user.rnum } />)}   
    //         </div>
    //     );
    // }

    // function Title() {

    //     return <h1>훈련장 목록</h1>;
    // }

    // function Good() {

    //     return (
    //         <>
    //             <Title/>
    //             <ItemList/>
    //         </>
    //     );
    // }

    return(
        <div className="search">
            <h1>정보창</h1>
            <label>지역 명 검색 : </label>
            <select name="place">
                <option value="1">경기</option>
                <option value="2">서울</option>
                <option value="3">강원</option>
                <option value="4">충북</option>
                <option value="5">충남</option>
                <option value="6">전남</option>
                <option value="7">전북</option>
                <option value="8">경북</option>
                <option value="9">경남</option>
                <option value="10">제주</option>
                <option value="11">인천</option>
                <option value="12">전체</option>
            </select>
            <ItemList/>
        </div>
    );
}

export default SearchPage;
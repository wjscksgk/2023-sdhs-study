import { useState } from "react";
import { data } from "../reactList";
import Button from "../../components/Button/index";
import ItemList from "./itemList/index";
// import * as S from "./styled";

function Sort() {
    const listData = data.data;
    const [sortState, setSortState] = useState(listData);

    const idUp = () => {
        setSortState([...listData].sort(function(a,b) { return a.id < b.id ? -1 : a.id > b.id ? 1 : 0; }))
    }
    const idDown =() => {
        setSortState([...listData].sort(function(a,b) { return a.id > b.id ? -1 : a.id < b.id ? 1 : 0; }))
    }
    const levelUp = () => {
        setSortState([...listData].sort(function(a,b) { 
            if(a.level === b.level){
                if(a.id > b.id){
                    return 1;
                }else{
                    return -1;
                }
            }
            if(a.level === undefined) return -1;
            return a.level > b.level ? -1 : a.level < b.level ? 1 : 0; 
        }))
    }
    const nameUp = () => {
        setSortState([...listData].sort(function(a,b) { return a.name < b.name ? -1 : a.name > b.name ? 1 : 0; }))
    }
    const nameDown = () => {
        setSortState([...listData].sort(function(a,b) { return a.name > b.name ? -1 : a.name < b.name ? 1 : 0; }))
    }

    return (
        <div>
            <Button onClick={idUp}>아이디순(오름차)</Button>
            <Button onClick={idDown}>아이디순(내림차)</Button>
            <Button onClick={nameUp}>이름순(오름차)</Button>
            <Button onClick={nameDown}>이름순(내림차)</Button>
            <Button onClick={levelUp}>레벨순(내림차)</Button>
            <ItemList sortState={sortState}></ItemList>
        </div>
    );
}

export default Sort;
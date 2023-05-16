import { useState } from "react";
import Button from "../../components/Button";
import { data } from "../reactList";

import * as S from './styled';

function List() {
    const listData = data.data;
    
    const [sortById, setSortById] = useState('');

    const onClick1 = () => {
        setSortById(
            listData.sort(function(a,b){
                if(a.id > b.id) return 1;
                if(a.id < b.id) return -1;
                return 0;
            })
        )
    }
    console.log("fe",sortById)

    const onClick2 = () => {
        setSortById(
            listData.sort(function(a,b){
                if(a.id < b.id) return 1;
                if(a.id > b.id) return -1;
                return 0;
            })
        )
    }
    console.log("fe",sortById)

    return (
        <div>
            <Button onClick={onClick1}>아이디순(오름차)</Button>
            <Button onClick={onClick2}>아이디순(내림차)</Button>
            {
                listData.map(({id, name, level}) => {
                    return (
                        <S.Flex>
                            <p>id: {id}</p> <p>이름: {name}</p> <p>레벨: {level}</p>
                        </S.Flex>
                    )
                })
            }
        </div>
    );
}

export default List;
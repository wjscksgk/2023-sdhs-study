import { useState } from 'react';

import * as S from './styled';

function SearchInput({ onChange }) {
    const handleValue = e => {
        // 1. input에서 입력한 값
        console.log(e.target.value);

        // 2. onChange라는 함수에 input에서 입력한 값을 넘겨줌
        onChange?.(e.target.value); // ?는 앞 값이 없으면 undefined 있으면 실행
    };

    return (
        <S.SearchInputBox>
            <S.SearchInput placeholder='검색할 내용을 입력하세요.' onChange={handleValue} />
        </S.SearchInputBox>
    );
}

export default SearchInput;
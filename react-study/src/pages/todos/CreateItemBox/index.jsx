import Button from '../../../components/Button';

import * as S from './styled';

function CreateItemBox({ value, onChange, createTodo }) {
    const handleInputValue = e => {
        onChange(e.target.value);
    }
    const inputEnter = e => {
        if(e.keyCode == 13) createTodo();
    }
    
    return (
        <S.InputBox>
            <S.Input value={value} placeholder='To do를 입력해주세요' onChange={handleInputValue} onKeyUp={inputEnter} />
            <Button onClick={createTodo} disabled={!value.trim()}>등록</Button>
        </S.InputBox>                    // 값이 없으면 등록 못 누르게
    );
}

export default CreateItemBox;
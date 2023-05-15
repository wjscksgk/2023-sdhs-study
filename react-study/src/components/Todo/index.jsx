import Button from '../Button';
import Checkbox from '../Checkbox';

import * as S from './styled';

function Todo(props) {
    const { deleteTodo, handleSelected } = props;
    return (
        <S.Wrap>
            <S.Container>
                <Checkbox onChange={handleSelected} />
                <S.Title>{props.children}</S.Title>
                <div>
                    <Button className='delete' onClick={deleteTodo}>삭제</Button>
                </div>
            </S.Container>
        </S.Wrap>
        
    );
}

export default Todo;
import Button from '../Button';

import * as S from './styled';

function Todo(props) {
    const { deleteTodo } = props;
    return (
        <S.Wrap>
            <S.Container>
                <S.Title>{props.children}</S.Title>
                <div>
                    <Button className='delete' onClick={deleteTodo}>삭제</Button>
                </div>
            </S.Container>
        </S.Wrap>
        
    );
}

export default Todo;
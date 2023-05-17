import List from '../list';
import { data } from '../reactList';
import * as S from './styled';

function Main() {
    
    return (
        <S.Container>
            <div>
                <S.Title>{data.title}</S.Title>
                <List />
            </div>
        </S.Container>
    );
}

export default Main;
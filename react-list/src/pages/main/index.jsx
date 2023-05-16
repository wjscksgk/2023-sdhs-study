import Button from '../../components/Button';
import Result from '../../components/Result'

import List from '../list';

import * as S from './styled';

function Main() {
    
    return (
        <S.Container>
            <div>
                <S.Title>list</S.Title>
                <Result>
                    <List />
                </Result>
            </div>
        </S.Container>
    );
}

export default Main;
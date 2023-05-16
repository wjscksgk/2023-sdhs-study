import * as S from './styled';

function List({id, name, level}){
    return(
        <S.Li>
            <S.P>{id}</S.P>
            <S.P>{name}</S.P>
            <S.P>{level}</S.P>
        </S.Li>
    );
}

export default List;
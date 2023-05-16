import * as S from './styled';

function Result(props) {
    return (
        <S.Container>
            {props.children}
        </S.Container>
    );
}

export default Result;
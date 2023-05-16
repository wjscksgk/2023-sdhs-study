import List from '../../../components/List/index';
import * as S from './styled';
function ItemList({sortState}){
    return(
        <S.ListContainer>
            {
            sortState.map(({id, name, level}) => {
            return <List key={id} id={id} name={name} level={level} />; 
            })
            }
        </S.ListContainer>
    )
}
export default ItemList;
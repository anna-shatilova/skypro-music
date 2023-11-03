import { useState } from 'react'
import * as S from './Styles'
import { PopupPerformer } from './PopupPerformer'
import { PopupGenre } from './PopupGenre'
import { PopupYear } from './PopupYear'

export const Filter = ({ data }) => {
  const [activeFilter, setActiveFilter] = useState(null)

  const filters = [
    { id: 'author', name: 'исполнителю' },
    { id: 'genre', name: 'жанру' },
  ]

  const filterClickHandler = (id) => {
    setActiveFilter(activeFilter === id ? null : id)
  }

  return (
    <S.MainCenterBlockFilter>
      <S.CenterblockFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        {filters.map((filter) => {
          return (
            <S.FilterButton
              aria-hidden="true"
              className="_btn-text"
              $activeButton={activeFilter === filter.id}
              key={filter.id}
              onClick={() => {
                return filterClickHandler(filter.id)
              }}
            >
              {filter.name}
              {/* {matchedAuthor.length === 0 ? null : ( */}
              <S.FilterCounter> 2 </S.FilterCounter>
            {/* )}  */}
            </S.FilterButton>
          )
        })}
        {activeFilter === filters[0].id && <PopupPerformer data={data} />}
        {activeFilter === filters[1].id && <PopupGenre />}
      </S.CenterblockFilter>

      <S.CenterblockFilter>
        <S.FilterTitle>Сортировка:</S.FilterTitle>
        <S.FilterButton
          aria-hidden="true"
          className="_btn-text"
          $activeButton={activeFilter === 'year'}
          onClick={() => {
            return filterClickHandler('year')
          }}
        >
          По умолчанию
        </S.FilterButton>
        {activeFilter === 'year' && <PopupYear />}
      </S.CenterblockFilter>
    </S.MainCenterBlockFilter>
  )
}


// const authors = ['Alexander Nakarada', Frank Schroter', 'Kevin Macleod'];
// function FilterButton(props) {
//   const dispatch = useDispatch();

//   const nameFilter = useSelector((state) => state.filter.nameFilter); 
//   const dateFilter = useSelector((state) => state.filter.dateFilter);
//   const genreFilter = useSelector((state) => state.filter.genreFilter);


//   const theme = useSelector((state) => state.themes.value);
//   const [filters, setFilters] = useState(authors);
//   const dateFilters = ['Сначала новые', 'Сначала старые'];

//   const filterHandler = (value) => {
//     console.log('author id', value);
//     console.log(nameFilter);

//     switch (props.id) {
//       case 'author':
//         nameFilter.includes(value)
//           ? dispatch(removeNameFilter(value))
//           : dispatch(setNameFilters(value));


//         break;
// //
//       default:
//         break;
//     }
//   };

//   const filtersEl = filters.map((el) => (
//     <S.filterText key={el} onClick={() => filterHandler(el)}>
//       {el}
//     </S.filterText>
//   ));
//   return (
//     <S.filter>
//       <S.filterButton theme={theme} active={props.visible} id={props.id} onClick={props.clicker}>
//         {props.text}
//       </S.filterButton>
//       {props.visible && (
//         <S.filterDropDown>
//           <S.filterContent>{filtersEl}</S.filterContent>
//         </S.filterDropDown>
//       )}
//     </S.filter>
//   );
// }
// export default FilterButton;
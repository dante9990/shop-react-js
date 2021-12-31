import React from 'react'
import PropTypes from 'prop-types'


export const Categories = React.memo(({ activeCategory, items, onClickCategory }) => {


    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickCategory(null)}>Все</li>
                {items &&
                    items.map((item, index) => <li className={activeCategory === index ? 'active' : ''} onClick={() => onClickCategory(index)} key={`${item}_${index}`}>
                        {item}
                    </li>)
                }
            </ul>
        </div>
    )
})

Categories.propTypes = {
    // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func.isRequired
}

Categories.defaultProps = {
    activeCategory: null,
    items: []
}

// export class Categories extends React.Component {
//     state = {
//         activeItem: 1
//     }

//     onSelectItem = index => {
//         this.setState({
//             activeItem: index
//         })
//         this.forceUpdate()
//     }

//     render() {
//         const { items, onClick } = this.props
//         return (
//             <div className="categories">
//                 <ul>
//                     <li>Все</li>
//                     {
//                         items.map((item, index) =>
//                         <li className={this.state.activeItem === index ? 'active' : ''} onClick={() => this.onSelectItem(index)} key={`${item}_${index}`}>
//                             {item}
//                         </li>)
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }

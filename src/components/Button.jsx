import React from "react";
import classNames from 'classnames';

export const Button = ({ onClick, className, outline, children }) => {
    return <button
        onClick={onClick}
        className={classNames('button', className, {
            'button--outline': outline
        })}>{children}</button>
}

// export class Button extends React.Component {
//     render() {
//         return <button className={classNames('button', {
//             'button--outline' : this.props.outline
//         })}>{this.props.children}</button>
//     }
// }


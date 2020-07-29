import React from 'react';

function ButtonLink(props) {
    // props são propriedades de outros componentes
    // props => {className : "o que alguém passar "}
    console.log(props)

    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink;
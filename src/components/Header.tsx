import React, {FC} from 'react';

interface HeaderProps{
    title:string;
    color?:string;
}

const Header:FC<HeaderProps> = (props) => {
    return (
        <h2 style={{color:props.color, margin:0, padding:'20px'}}>
            {props.title}
        </h2>
    );
};

Header.defaultProps = {
    title: "a",
    color: "#ffffff",
}

export default Header;
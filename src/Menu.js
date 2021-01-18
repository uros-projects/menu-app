import React from 'react';

// id, title, category, price, img, desc, 

const Menu = ({ items }) => {
    return (
        <div className='section-center'>
            {items.map( item => {
                const { id, title, price, img, desc } = item;
                return (
                    <article key={id} className='menu-item'>
                        <img src={`${process.env.PUBLIC_URL}/images/${img}`} alt={title} className='photo' />
                        <div className='item-info'>
                            <header>
                                <h4>{title}</h4>
                                <h4 className='price'>${price}</h4>
                            </header>
                            <p className='item-text'>{desc}</p>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default Menu

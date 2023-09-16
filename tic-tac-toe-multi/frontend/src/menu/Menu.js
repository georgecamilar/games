import React from 'react';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        // Define your menu items here
        this.state = {
            menuItems: [
                {id: 1, label: 'Home', link: '/'},
                {id: 2, label: 'About', link: '/about'},
                {id: 3, label: 'Services', link: '/services'},
                {id: 4, label: 'Contact', link: '/contact'},
            ],
        };
    }

    render() {
        return (
            <div className="menu">
                <ul>
                    {
                        this.state.menuItems.map((item) => (
                                <li key={item.id}>
                                    <a href={item.link}>{item.label}</a>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default Menu;


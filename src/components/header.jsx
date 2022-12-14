import React, { Component } from 'react';
import { Link } from 'gatsby';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: false
        };
    }

    render() {
        const { data, header } = this.props;
        const { menu } = this.state;

        return (
            <header className={`site-header ${menu ? 'active' : ''}`}>
                <div className='container'>
                    <div className='header-main'>
                        <div className='logo'>
                            <Link to='/'>
                                {data.logo.file.url ? (
                                    <img
                                        src={data.logo.file.url}
                                        alt='logo'
                                        width='45'
                                        height='45'
                                    />
                                ) : (
                                    <span>{data.siteName}</span>
                                )}
                            </Link>
                        </div>

                        <div
                            className='responsive-menu'
                            onClick={() => {
                                this.setState({ menu: !menu });
                            }}>
                            <span></span>
                        </div>

                        {header === 'home' ? (
                            <div className='menu'>
                                <ul
                                    onClick={() => {
                                        this.setState({
                                            menu: false
                                        });
                                    }}>
                                    <li key='home'>
                                        <Link to='/#home'>Home</Link>
                                    </li>
                                    {data.menus
                                        .filter(item => item === 'Projects')
                                        .map(t => {
                                            return (
                                                <li key='Projects'>
                                                    <Link to={`/#Projects`}>
                                                        Projects
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    {data.menus
                                        .filter(item => item === 'Contact')
                                        .map(t => {
                                            return (
                                                <li key='Contact'>
                                                    <Link to={`/#Contact`}>
                                                        Contact
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                </ul>
                            </div>
                        ) : (
                            <div className='menu'>
                                <ul
                                    onClick={() => {
                                        this.setState({
                                            menu: false
                                        });
                                    }}>
                                    <li key='home'>
                                        <Link to='/#home'>Home</Link>
                                    </li>
                                    {data.menus
                                        .filter(item => item === 'Projects')
                                        .map(t => {
                                            return (
                                                <li key='projects'>
                                                    <Link to={`/projects`}>
                                                        Projects
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        );
    }
}

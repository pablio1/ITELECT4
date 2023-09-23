import React, { Component } from 'react';

class Main extends Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { className: 'd-flex flex-column flex-shrink-0 p-3 text-bg-dark', style: { width: '280px', height: '100vh' } },
                React.createElement(
                    'a',
                    { href: '/', className: 'd-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none' },
                    React.createElement(
                        'svg',
                        { className: 'bi pe-none me-2', width: '40', height: '32' },
                        React.createElement('use', { xlinkHref: '#bootstrap' })
                    ),
                    React.createElement('span', { className: 'fs-4' }, 'Sidebar')
                ),
                React.createElement('hr', null),
                React.createElement(
                    'ul',
                    { className: 'nav nav-pills flex-column mb-auto' },
                    React.createElement(
                        'li',
                        { className: 'nav-item' },
                        React.createElement(
                            'a',
                            { href: '#', className: 'nav-link active', 'aria-current': 'page' },
                            React.createElement(
                                'svg',
                                { className: 'bi pe-none me-2', width: '16', height: '16' },
                                React.createElement('use', { xlinkHref: '#home' })
                            ),
                            'Home'
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            'a',
                            { href: '#', className: 'nav-link text-white' },
                            React.createElement(
                                'svg',
                                { className: 'bi pe-none me-2', width: '16', height: '16' },
                                React.createElement('use', { xlinkHref: '#speedometer2' })
                            ),
                            'Dashboard'
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            'a',
                            { href: '#', className: 'nav-link text-white' },
                            React.createElement(
                                'svg',
                                { className: 'bi pe-none me-2', width: '16', height: '16' },
                                React.createElement('use', { xlinkHref: '#table' })
                            ),
                            'Orders'
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            'a',
                            { href: '#', className: 'nav-link text-white' },
                            React.createElement(
                                'svg',
                                { className: 'bi pe-none me-2', width: '16', height: '16' },
                                React.createElement('use', { xlinkHref: '#grid' })
                            ),
                            'Products'
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            'a',    
                            { href: '#', className: 'nav-link text-white' },
                            React.createElement(
                                'svg',
                                { className: 'bi pe-none me-2', width: '16', height: '16' },
                                React.createElement('use', { xlinkHref: '#people-circle' })
                            ),
                            'Customers'
                        )
                    )
                ),
                React.createElement('hr', null),
                React.createElement(
                    'div',
                    { className: 'dropdown' },
                    React.createElement(
                        'a',
                        {
                            href: '#',
                            className: 'd-flex align-items-center text-white text-decoration-none dropdown-toggle',
                            'data-bs-toggle': 'dropdown',
                            'aria-expanded': 'false',
                        },
                        React.createElement('img', { src: 'https://github.com/mdo.png', alt: '', width: '32', height: '32', className: 'rounded-circle me-2' }),
                        React.createElement('strong', null, 'mdo')
                    ),
                    React.createElement(
                        'ul',
                        { className: 'dropdown-menu dropdown-menu-dark text-small shadow' },
                        React.createElement('li', null, React.createElement('a', { className: 'dropdown-item', href: '#' }, 'New project...')),
                        React.createElement('li', null, React.createElement('a', { className: 'dropdown-item', href: '#' }, 'Settings')),
                        React.createElement('li', null, React.createElement('a', { className: 'dropdown-item', href: '#' }, 'Profile')),
                        React.createElement('li', null, React.createElement('hr', { className: 'dropdown-divider' })),
                        React.createElement('li', null, React.createElement('a', { className: 'dropdown-item', href: '#' }, 'Sign out'))
                    )
                )
            )
        );
    }
}

export default Main;
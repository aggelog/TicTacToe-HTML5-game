import React from 'react';

export default class App extends React.Component {
    static propTypes = {
        children: React.PropTypes.element
    };

    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="main">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

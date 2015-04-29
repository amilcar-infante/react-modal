var React = require('react/addons'),
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

require('modal.css');

module.exports = React.createClass({
    propTypes: {
        display: React.PropTypes.bool.isRequired
    },
    render: function() {
        var modal;
        if( this.props.display ){
            modal = 
                <div className='react-modal'>
                    <div className="modal-dialog">
                        {this.props.children}
                    </div>
                </div>;
        }
        return (
            <ReactCSSTransitionGroup
                transitionName="modalTransition">
                    {modal}
            </ReactCSSTransitionGroup>
        )
    }
});

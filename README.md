#React Modal (https://github.com/salesforce-demos/react-modal)

React Modal component to be reused on any new app built on React.

## Installing

```bash
$ npm install --save https://github.com/salesforce-demos/react-modal.git
```

## Requirements

In order to make this component work in your project you need to add these meta
tags on your index.html:

```html
<meta name="description" content="">
<meta name="format-detection" content="telephone=no" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
```
and you can override in your css the following rules:

## Configuration 

- This component has a required property 'display' used to show/hide the modal 

- To configure the modal-dialog width and height:

```css
.react-modal .modal-dialog {
    width: 50%;
    height: 50%;
}
```

Note: we are using 50% just as an example.

- To remove the backround opacity:

```css
.react-modal {
    background-color: transparent;
}
```

## Example

```js
var React = require('react'),
    Modal = require('react-modal');

var App = React.createClass({
    ...
    render: function () {
        return (
            <div>
                ...
                <Modal display={...} >
                    ...
                    Modal content
                    ...
                </Modal>        
                ...
            </div>        
        );
    }
});

React.render(<App/>, document.body);
```

/**
 * PhotoList component.
 */
var PhotoList = (function() {
    'use strict';

    var _el;


    /**
     * Initialization function.
     * @param {String} element - CSS Selector
     * @private
     */
    var _init = function(element) {
        _el = document.querySelector(element);
    };


    /**
     * Adding list item.
     * @param {DocumentFragment} item
     * @private
     */
    var _addItem = function(item) {
        if (_el) {
            _el.appendChild(item);
        }
    };


    return {
        init: _init,
        addItem: _addItem
    };
})();
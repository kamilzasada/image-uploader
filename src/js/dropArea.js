/**
 * DropArea component.
 */
var DropArea = (function() {
    'use strict';

    var _el;
    var _dropCallback;


    /**
     * Initialization function.
     * @param {String} element - CSS Selector
     * @private
     */
    var _init = function(element) {
        _el = document.querySelector(element);

        if (_el) {
            _attachEvents(_el);
        }
    };


    /**
     * Event listeners initialization.
     * @param {Element} element - DOM Element object
     * @private
     */
    var _attachEvents = function(element) {
        element.addEventListener('dragenter', function(e) {
            e.stopPropagation();
            e.preventDefault();
        });

        element.addEventListener('dragover', function(e) {
            e.stopPropagation();
            e.preventDefault();

            e.dataTransfer.dropEffect = 'copy';
        });

        element.addEventListener('drop', function(e) {
            e.stopPropagation();
            e.preventDefault();
            _dropCallback(e);
        });
    };


    /**
     * Setting callback for 'onDrop' event.
     * @param {Function} callback
     * @private
     */
    var _setDropCallback = function(callback) {
        _dropCallback = callback;
    };


    return {
        init: _init,
        onDrop: _setDropCallback
    };
})();
/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojmasonrylayout', 'ojs/ojchart', 'ojs/ojgauge'],
 function(oj, ko, $) {

    function DashboardViewModel() {
      var self = this;

      self.barChart = {
          name: 'Something else vs. Won',
          sizeClass: 'oj-masonrylayout-tile-3x2'
        };

              /* toggle button variables */
        self.orientationValue = ko.observable('vertical');
        self.renderSeparators = ko.observable("on");

        self.separatorColor = ko.observable('#C4CED7');
        self.dataSetValue = ko.observable('even');

        /* even hierarchy chart data example */
        var seriesItems1 = [];
        var seriesItems2 = [];
        for (var g = 0; g < 5; g++) {
           var randomValue1 = (1000 + (Math.random() * 1000)) * 750;
           seriesItems1.push(randomValue1);
           var randomValue2 = (1000 + (Math.random() * 1000)) * 500;
           seriesItems2.push(randomValue2);
        }
        var seriesValue = [{name: "Quota", items: seriesItems1},
                           {name: "Won", items: seriesItems2}];


        self.seriesValue = ko.observableArray(seriesValue);

        var converterFactory = oj.Validation.converterFactory('number');
        var currencyConverter = converterFactory.createConverter({style: 'currency', currency: 'USD'});
        self.yAxisConverter = ko.observable(currencyConverter);

        var valueFormat = [{type:'y', converter: currencyConverter}, {type: 'group', tooltipLabel: ['Region', 'Department', 'Quarter']}];
        self.valueFormatsValue = ko.observable(valueFormat);

        var styleData = {groupSeparators: {rendered:ko.toJS(self.renderSeparators), color: ko.toJS(self.separatorColor)}};
        self.styleDefaultValue = ko.observable(styleData);

      self.teamLeads = {
        name: 'Team Leads',
        sizeClass: 'oj-masonrylayout-tile-1x1'

      };
      self.orders = {
        name: 'Orders',
        sizeClass: 'oj-masonrylayout-tile-1x1'
      };
      self.serviceRequests = {
        name: 'Service Requests',
        sizeClass: 'oj-masonrylayout-tile-1x1'
      };
      self.myVacation = {
        name: 'My Vacation',
        sizeClass: 'oj-masonrylayout-tile-1x1'
      };








      // Below are a subset of the ViewModel methods invoked by the ojModule binding
      // Please reference the ojModule jsDoc for additionaly available methods.

      /**
       * Optional ViewModel method invoked when this ViewModel is about to be
       * used for the View transition.  The application can put data fetch logic
       * here that can return a Promise which will delay the handleAttached function
       * call below until the Promise is resolved.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
       * the promise is resolved
       */
      self.handleActivated = function(info) {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
       */
      self.handleAttached = function(info) {
        // Implement if needed
      };


      /**
       * Optional ViewModel method invoked after the bindings are applied on this View.
       * If the current View is retrieved from cache, the bindings will not be re-applied
       * and this callback will not be invoked.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       */
      self.handleBindingsApplied = function(info) {
        // Implement if needed
      };

      /*
       * Optional ViewModel method invoked after the View is removed from the
       * document DOM.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
       */
      self.handleDetached = function(info) {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new DashboardViewModel();
  }
);

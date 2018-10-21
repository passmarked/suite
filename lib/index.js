/**
* Returns the categories being used by the system
**/
exports.getCategories = function() {

  return {
    passmarked_ssl: {
      title: 'HTTPS/SSL',
      description: 'HTTPS/SSL issues and problems that are identified',
      auditRefs: [
        {id: 'searchable-audit', weight: 1},
      ],
    },
  };

};

/**
* Returns the gatherers from the suite that can be used by Lighthouse
**/
exports.getGatherers = function() {

  return [

    require('./gatherers/searchabletime'),

  ];

};

/**
* Returns the audits from the suite that can be loaded into Lighthouse.
**/
exports.getAudits = function() {

  return [

    require('./audits/searchabletime'),

  ];

};

/**
* Returns the lighthouse config that can be loaded in
**/
exports.getConfig = function() {

  return {
    // 1. Run your custom tests along with all the default Lighthouse tests.
    extends: 'lighthouse:default',

    // 2. Add gatherer to the default Lighthouse load ('pass') of the page.
    passes: [{
      
      passName:   'defaultPass', // we want to access those metrics as well
      gatherers:  exports.getGatherers(),

    }],

    // 3. Add custom audit to the list of audits 'lighthouse:default' will run.
    audits: exports.getAudits(),

    // 4. Create a new 'My site metrics' section in the default report for our results.
    categories: exports.getCategories(),
  };

};
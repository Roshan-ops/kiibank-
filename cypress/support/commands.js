// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />


Cypress.Commands.add('selectDropdownOption', (labelSelector, optionText) => {
    cy.get(labelSelector).type(optionText);
    
    cy.get('div[role="listbox"]').each(($el, index, $list) => {
      const countryName = $el.text().trim();
  
      if (countryName === optionText) {
        cy.wrap($el).click();
      }
    });
  });
  




//   const durationOptions = [
//     'Less than one year',
//     'One year',
//     'Two years',
//     'Three years',
//     'More than three years',
//   ];
// const shuffledOptions = Cypress._.shuffle(durationOptions);

//   // Iterate through the shuffled options
//   shuffledOptions.forEach((option) => {
//     // Select the option from the dropdown
//     cy.get('mat-label.ng-tns-c1205077789-21').select(option);
//      const durationAsDecimal = convertDurationToDecimal(option);

// // Log the selected option and converted decimal for debugging (optional)
// cy.log('Selected Duration:', option);
// cy.log('Converted Decimal:', durationAsDecimal);

// // Perform assertions or actions based on the converted decimal
// if (durationAsDecimal > 3) {
// cy.get('#next-button').click();
// } else {
// // Handle the case where the duration is not more than 3 years
// // (e.g., add another address or perform other actions)
// // You can use a custom command or function for this
// }
//  // Continue with the next iteration
// });
// });

// // Custom function to convert a duration string to a decimal number
// function convertDurationToDecimal(durationString) {
// switch (durationString) {
//   case 'Less than one year':
//     return 0.5; // Example: 6 months represented as 0.5 years
//   case 'One year':
//     return 1;
//   case 'Two years':
//     return 2;
//   case 'Three years':
//     return 3;
//   case 'More than three years':
//     return 3.5; // Example: 4 years and 6 months represented as 4.5 years
//   default:
//     // Handle unknown values or return an appropriate default
//     return -1;
// }
// }
// });

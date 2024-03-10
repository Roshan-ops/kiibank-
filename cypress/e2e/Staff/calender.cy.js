// // cypress/integration/date_of_birth_spec.js

// describe('Date of Birth Selection', () => {
//     beforeEach(() => {
//       cy.visit('https://qakiibankweb.kiibank.net/staff-registration'); // Replace with the actual path
//     });
  
//     it('should select a random date of birth', () => {
//       // Click on the Date of Birth field to open the calendar pop-up
//       cy.contains("Date of Birth").click({force:true})// Replace with the actual selector of your Date of Birth field
  
//       // Select a random year from the dropdown in the header
//     //   cy.get('.mat-calendar-period-button > .mat-mdc-button-touch-target')
//       cy.get('button[aria-label="Choose month and year"]').click().then(yearDropdown => {
//         const years = yearDropdown.find('option');
//         const randomYearIndex = Cypress._.random(0, years.length - 1);
//         const randomYear = years.eq(randomYearIndex).text();
  
//         cy.get('.mat-calendar-content').click(randomYear);
//       });
  
//       // Select a random month from the tabular form below the header
//       cy.get('.mat-calendar-content').then(monthsTable => {
//         const months = monthsTable.find('td');
//         const randomMonthIndex = Cypress._.random(0, months.length - 1);
//         const randomMonth = months.eq(randomMonthIndex).text();
  
//         cy.get('.mat-calendar-content').contains(randomMonth).click();
//       });
  
//       // Select a random day from the displayed calendar
//       cy.get('.mat-calendar-table').then(daysTable => {
//         const days = daysTable.find('td');
//         const randomDayIndex = Cypress._.random(0, days.length - 1);
//         const randomDay = days.eq(randomDayIndex).text();
  
//         cy.get('.mat-calendar-table').contains(randomDay).click();
//       });
  
//       // Add assertions or perform other actions as needed
//       // For example, you can assert that the selected date is displayed correctly.
  
//       // Continue with the rest of your test or assertions.
//     });
//   });
  
describe('Date of Birth Selection', () => {
    beforeEach(() => {
      cy.visit('https://qakiibankweb.kiibank.net/staff-registration'); // Replace with the actual path
    });
  
    it('should select a random date of birth', () => {
      // Use the custom command to select a random date of birth

// Define an array of options
const option = ['Less Than One Year', 'One Year', 'Two Year', 'Three Year', 'More Than Three Year'];

// Shuffle the options array
  
//   // Select a random option
const shuffledOptions = Cypress._.shuffle(option);

// Variable to keep track of total living years
let totalLivingYears = 0;

// Iterate over each option
shuffledOptions.forEach((option, index) => {
  it(`Should select option "${option}" and check if additional form is visible if living years is less than three`, () => {
    // Click on the field to open the dropdown
    cy.get('mat-label.ng-tns-c1205077789-17').click();
    
    // Click on the option based on the current iteration
    cy.get('.cdk-overlay-pane').contains(option).click();
    
    // Update total living years based on the current option
    totalLivingYears += index + 1; // index is zero-based, so adding 1
    
    // If total living years is less than three and the option is not 'More Than Three Year'
    if (totalLivingYears < 3 && index !== 4) {
      // Additional form should be visible
      cy.get('.additional-form').should('be.visible');
      // Add more assertions or actions as needed
    } else {
      // Additional form should not be visible
      cy.get('.additional-form').should('not.be.visible');
      // Add more assertions or actions as needed
    }
  });
});
  
      // Continue with the rest of your test or assertions.
    });
  });
  
// const { data } = require("cypress/types/jquery");


// })
///<reference types="cypress"/>
import 'cypress-file-upload';
describe('Kiibank',()=>{

 it('Staff Details Register',()=>{
   cy.fixture('staffs.json').then((staff)=>{
   
      cy.visit('/')
      cy.wait(5000)

      cy.contains('Sign up').click()
      //making assertion
      cy.url().should('include', 'https', '/staff-registration')
   
      cy.contains("First Name").type(staff.Name)
      cy.contains("Middle Name").type(staff.Middle)
      cy.contains("Last Name").type(staff.Last)

      // cy.selectRandomDateOfBirth();

      // cypress/integration/date_of_birth_spec.js
// // Wait for "Date of Birth" field to be visible and clickable
// cy.contains("Date of Birth").should('be.visible').click({ force: true });

// // Wait for the "Choose month and year" button to be visible and clickable
// cy.get('button[aria-label="Choose month and year"]').should('be.visible').click();

// // Select a random year from the dropdown in the header
// cy.get('.mat-calendar-period-button').contains('button', /\d{4}/).should('be.visible').click();

// // Select a random month from the tabular form below the header
// cy.get('.mat-calendar-content').contains('td', /\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b/).should('be.visible')
//   .eq(Cypress._.random(0, 11)).click();

// // Select a random day from the displayed calendar
// cy.get('.mat-calendar-table td').eq(Cypress._.random(0, 41)).should('be.visible').click();

// // Continue with the rest of your test or assertions.
// cy.contains("Email Address").should('be.visible').type(staff.email_adress);
// cy.contains("Confirm Email").should('be.visible').type(staff.confirm_email);


      // Click on the Date of Birth field to open the calendar pop-up
      cy.contains("Date of Birth").should('be.visible').click({force:true})// Replace with the actual selector of your Date of Birth field
  
      // Select a random year from the dropdown in the header
    //   cy.get('.mat-calendar-period-button > .mat-mdc-button-touch-target')
      cy.get('button[aria-label="Choose month and year"]').should('be.visible').click().then(yearDropdown => {
        const years = yearDropdown.find('option');
        const randomYearIndex = Cypress._.random(0, years.length - 1);
        const randomYear = years.eq(randomYearIndex).text();
  
        cy.get('.mat-calendar-content').should('be.visible').click(randomYear);
      });
  
      // Select a random month from the tabular form below the header
      cy.get('.mat-calendar-content').then(monthsTable => {
        const months = monthsTable.find('td');
        const randomMonthIndex = Cypress._.random(0, months.length - 1);
        const randomMonth = months.eq(randomMonthIndex).text();
  
        cy.get('.mat-calendar-content').contains(randomMonth).click();
      });
  
      // Select a random day from the displayed calendar
      cy.get('.mat-calendar-table').then(daysTable => {
        const days = daysTable.find('td');
        const randomDayIndex = Cypress._.random(0, days.length - 1);
        const randomDay = days.eq(randomDayIndex).text();
  
        cy.get('.mat-calendar-table').contains(randomDay).click();
      });
      cy.get('.cdk-overlay-backdrop mat-overlay-transparent-backdrop mat-datepicker-0-backdrop cdk-overlay-backdrop-showing').should('not.exist');
  
      // Add assertions or perform other actions as needed
      // For example, you can assert that the selected date is displayed correctly.
  
      // Continue with the rest of your test or assertions.


      cy.contains("Email Address").click({force:true}).type(staff.email_adress)
      cy.contains("Confirm Email").type(staff.confirm_email)


      // cy.get('.mdc-button__label > span').click()
      cy.get('.mat-mdc-button-touch-target').each(($el, index, $list)=>{
         
      })



// cy.get('mat-label.ng-tns-c1205077789-9').type('ca');

// cy.get('#mat-autocomplete-0').each(($el, index, $list) => {
//   const countryName = $el.text().trim(); // Get the text content and trim any leading/trailing whitespace

//   if (countryName === "Cameroon") {
//     cy.wrap($el).click();
//   }
// });

cy.selectDropdownOption('mat-label.ng-tns-c1205077789-9', 'Cameroon');


      cy.contains("Mobile Number").type(staff.Mobile_Number)
      cy.contains("Gender").click()
      cy.contains('Male').click()
      cy.contains('Next').click()
   
   //  })
   
     
      ///////////////////////// Next Page  /////////////////////////////////////////


   cy.selectDropdownOption('mat-label.ng-tns-c1205077789-16', 'Cameroon');
   cy.wait(1000)
   cy.contains('Province/State').click()
   cy.contains('Centre').click()
   cy.contains('City').click()
   cy.contains('Akono').click()
   // cy.contains('Sekondi-Takoradi').click()
   cy.contains('Address Line 1 ').type(staff.Address_Line1)
   cy.contains('Address Line 2 ').type(staff.Address_Line2)
   cy.contains('Postal/Zip Code ').type(staff.code)
   cy.get('#mat-mdc-form-field-label-32').click({force:true})



   const options = [
    'Less Than One Year',
    'One Year',
    'Two Year',
    'Three Year',
    'More Than Three Year',
  ];
  
  // Select a random option
  const randomIndex = Cypress._.random(0, options.length - 1);
  const selectedOption = options[randomIndex];
  
  // Click on the selected option
  cy.contains(selectedOption).click({force:true});
  cy.wait(1000);
  // cy.get('.overlay-close-button').click();
  // cy.get('.ng-invalid.ng-dirty > div.ng-untouched > .font-medium').should('contain', ' Address 2 ')
  
  // Check if additional information needs to be filled
  if (
    // cy.get('.ng-invalid.ng-dirty > div.ng-untouched > .font-medium').should('equal', ' Address 2 ')
    selectedOption === 'Less Than One Year' ||
    selectedOption === 'One Year' ||
    selectedOption === 'Two Year'
  ) {
    // Fill in additional information if staying duration is less than three years
    // cy.get('#mat-input-38').type('Cameroon').click({force:true});
    cy.selectDropdownOption('mat-label.ng-tns-c1205077789-54', 'Cameroon');
    cy.get('cdk-overlay-pane').should('not.exist');
    cy.wait(1000)
    cy.get('#mat-input-42').type('Centre');
    // cy.selectDropdownOption('#mat-mdc-form-field-label-90', 'Centre');
    cy.selectDropdownOption('mat-label.ng-tns-c1205077789-52', 'Akono');
  
    cy.get('#mat-input-39').type(staff.Address);
    cy.get('#mat-input-40').type(staff.Address2);
    cy.get('mat-label.ng-tns-c1205077789-58').type(staff.Postal);
  
    // Click on the "How long you have been staying here" field again
    cy.get('mat-label.ng-tns-c1205077789-59').click({ force: true });
  
    // Select a new random staying duration after filling additional info
    const newRandomIndex = Cypress._.random(0, options.length - 1);
    const newSelectedOption = options[newRandomIndex];
  
    // Click on the new selected duration option
    cy.contains(newSelectedOption).click({ force: true });
    cy.wait(1000);
  } else if(
    
      // cy.get('.ng-invalid.ng-dirty > div.ng-untouched > .font-medium').should('equal', ' Address 2 ')
      selectedOption === 'Less Than One Year' ||
      selectedOption === 'One Year' ||
      selectedOption === 'Two Year'
    ) 
  {
      // Fill in additional information if staying duration is less than three years
      // cy.get('#mat-input-38').type('Cameroon').click({force:true});
      cy.selectDropdownOption('mat-label.ng-tns-c1205077789-65', 'Cameroon');
      cy.get('cdk-overlay-pane').should('not.exist');
      cy.wait(1000)
      cy.get('mat-label.ng-tns-c1205077789-70').type('Centre');
      // cy.selectDropdownOption('#mat-mdc-form-field-label-90', 'Centre');
      cy.selectDropdownOption('mat-label.ng-tns-c1205077789-61', 'Akono');
    
      cy.get('mat-label.ng-tns-c1205077789-61').type(staff.Address);
      cy.get('#mat-input-45').type(staff.Address2);
      cy.get('mat-label.ng-tns-c1205077789-58').type(staff.Postal);
    
      // Click on the "How long you have been staying here" field again
      cy.get('mat-label.ng-tns-c1205077789-68').click({ force: true });
    
      // Select a new random staying duration after filling additional info
      const newRandomIndex = Cypress._.random(0, options.length - 1);
      const newSelectedOption = options[newRandomIndex];
    
      // Click on the new selected duration option
      cy.contains(newSelectedOption).click({ force: true });
      cy.wait(1000);

  }
  else if(
    
    // cy.get('.ng-invalid.ng-dirty > div.ng-untouched > .font-medium').should('equal', ' Address 2 ')
    selectedOption === 'Less Than One Year' ||
    selectedOption === 'One Year' ||
    selectedOption === 'Two Year'
  ) 
{
    // Fill in additional information if staying duration is less than three years
    // cy.get('#mat-input-38').type('Cameroon').click({force:true});
    cy.selectDropdownOption('mat-label.ng-tns-c1205077789-72', 'Cameroon');
    cy.get('cdk-overlay-pane').should('not.exist');
    cy.wait(1000)
    cy.get('mat-label.ng-tns-c1205077789-79').type('Centre');
    // cy.selectDropdownOption('#mat-mdc-form-field-label-90', 'Centre');
    cy.selectDropdownOption('mat-label.ng-tns-c1205077789-70', 'Akono');
  
    cy.get('#mat-input-49').type(staff.Address);
    cy.get('#mat-input-50').type(staff.Address2);
    cy.get('#mat-input-51').type(staff.Postal);
  
    // Click on the "How long you have been staying here" field again
    cy.get('mat-label.ng-tns-c1205077789-77').click({ force: true });
  
    // Select a new random staying duration after filling additional info
    const newRandomIndex = Cypress._.random(0, options.length - 1);
    const newSelectedOption = options[newRandomIndex];
  
    // Click on the new selected duration option
    cy.contains(newSelectedOption).click({ force: true });
    cy.wait(1000);
}
  else {
    cy.contains('Next').click({ force: true });
    cy.wait(4000);
  }
  cy.contains('Next').should('be.visible').click({ force: true });
  cy.wait(4000);

//  const options = [
//       'Less Than One Year',
//       'One Year',
//       'Two Year',
//       'Three Year',
//       'More Than Three Year',
//     ];

//     // Select a random option
//     const randomIndex = Cypress._.random(0, options.length - 1);
//     const selectedOption = options[randomIndex];

//     // Click on the selected option
//     cy.contains(selectedOption).click();

//     // Check if additional information needs to be filled
//       if (selectedOption === 'Less than one year' || selectedOption === 'One year' || selectedOption === 'Two years') {
//       // Fill in additional information if staying duration is less than three years
//         cy.selectDropdownOption('#mat-mdc-form-field-label-80', 'Cameroon');
//         cy.selectDropdownOption('#mat-mdc-form-field-label-90', 'Centre');
//         cy.selectDropdownOption('#mat-mdc-form-field-label-78', 'Akono');



//         cy.get('#mat-mdc-form-field-label-82').type(staff.Address);
//         cy.get('#mat-mdc-form-field-label-84').type(staff.Address2)
//         cy.get('#mat-mdc-form-field-label-86').type(staff.Postal)


//       // Click on the "How long you have been staying here" field again
//       cy.contains('How long you have been staying here').click({ force: true });
//       // Select a new random staying duration after filling additional info
//       const newRandomIndex = Cypress._.random(0, options.length - 1);
//       const newSelectedOption = options[newRandomIndex];
//       // Click on the new selected duration option
//       cy.contains(newSelectedOption).click();
//     }
//     else{
//        cy.contains('Next').click({force:true})
//    cy.wait(4000)
//     }





  //  cy.contains('Two Year').click()
  //  cy.get('#mat-input-36').click({force:true})
  //  cy.contains('Cameroon').click({force:true})
  //  cy.get('mat-label.ng-tns-c1205077789-57').click()
  //  cy.contains('Centre').click()
  //  cy.get('#mat-input-41').click()
  //  cy.contains('Akono').click({force:true})
  //  cy.get('#mat-input-37').type(staff.Address)
  //  cy.get('#mat-input-38').type(staff.Address2)
  //  cy.get('#mat-input-39').type(staff.Postal)
  //  cy.get('mat-label.ng-tns-c1205077789-55').click({force:true})
  //  cy.contains('Three Year').click({force:true})
  //  cy.contains('Next').click({force:true})
  //  cy.wait(4000)
   
   
   


  //  cy.get('.mat-mdc-button-persistent-ripple mdc-button__ripple').click({ force: true });
  //  cy.wait(4000);
  cy.get('div[_ngcontent-ng-c1998308113=""][style=""] > .flex-between > :nth-child(2) > .mat-stepper-next > .mat-mdc-button-touch-target').click()
  // cy.contains('Next').should('be.visible').click({ force: true });
  cy.wait(4000);
   cy.get('h4').should('contain', 'Staff KIN')
   
   cy.get('mat-label.ng-tns-c1205077789-21').type(staff.Kin_name)
   cy.get('#mat-input-15').type(staff.Kin_middle)
   cy.get('#mat-input-16').type(staff.Kin_last)
   cy.get('mat-label.ng-tns-c1205077789-24').click()
   cy.contains('Cameroon').click()
   cy.get('#mat-input-42').click()
   cy.get('mat-label.ng-tns-c1205077789-61').click()
   cy.contains('Centre').click()
   cy.get('#mat-input-43').click({force:true})
   // cy.get('mat-label.ng-tns-c1205077789-65').click()
   // cy.get('mat-label.ng-tns-c1205077789-65').click({force:true})
   cy.contains('Akono').click({force:true})
   cy.get('#mat-input-44').click({force:true})
   cy.get('#mat-option-62').click()
   // cy.get('#mat-option-59').click({force:true})
   cy.get('#mat-input-18').type(staff.address,{force: true})
   cy.get('#mat-input-19').type(staff.address2,{force: true})
   cy.get('#mat-input-20').type(staff.Postal_code,{force: true})
   cy.get('#mat-input-21').type(staff.New_number,{force: true})
   cy.get('#mat-input-22').type(staff.Realtion,{force: true})
   cy.get('#mat-input-23').type(staff.Kin_email,{force: true}) 
   cy.contains('Next').click({force:true})
   
   
   
   
   cy.get('h4').should('contain', 'Reference')
   cy.get('#mat-input-24').type(staff.Reference_name)
   cy.get('#mat-input-25').type(staff.Reference_company)
   cy.get('#mat-input-26').type(staff.Reference_number)
   cy.get('#mat-input-27').type(staff.Reference_email)
   cy.get('#mat-input-28').type(staff.Reference_relation ,{force: true} )
   
   cy.get('div.ng-untouched > .mt-2').should('contain', ' Reference 2 ')
   
   cy.get('#mat-input-29').type(staff.Reference1_name)
   cy.get('#mat-input-30').type(staff.Reference1_company)
   cy.get('#mat-input-31').type(staff.Reference1_number)
   cy.get('#mat-input-32').type(staff.Reference1_email)
   cy.get('#mat-input-33').type(staff.Reference1_relation ,{force: true})
   cy.contains('Next').click({force:true})

   cy.get('h4:visible').should('contain', 'Staff documentation ')
   cy.contains('Identity Type').click()
   cy.get('#mat-select-4-panel').click(37)
   cy.contains('Id Number').type('2367485498')
          cy.get('label[for="inputidentityDocument"]').selectFile('cypress/fixtures/1.pdf',{force: true})
         //  .attachFile('1.pdf',{force: true});
         // cy.get('label[for="inputidentityDocumentBack"]').selectFile('cypress/fixtures/image.png',{force: true})
         cy.get('label[for="inputresidencePermit"]').selectFile('cypress/fixtures/image.png',{force: true})

   //  });
    
    });
   });
})



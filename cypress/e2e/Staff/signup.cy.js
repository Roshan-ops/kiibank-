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


      // Click on the Date of Birth field to open the calendar pop-up
      cy.contains("Date of Birth").click({force:true})// Replace with the actual selector of your Date of Birth field
  
      // Select a random year from the dropdown in the header
    //   cy.get('.mat-calendar-period-button > .mat-mdc-button-touch-target')
      cy.get('button[aria-label="Choose month and year"]').click().then(yearDropdown => {
        const years = yearDropdown.find('option');
        const randomYearIndex = Cypress._.random(0, years.length - 1);
        const randomYear = years.eq(randomYearIndex).text();
  
        cy.get('.mat-calendar-content').click(randomYear);
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
  
      // Add assertions or perform other actions as needed
      // For example, you can assert that the selected date is displayed correctly.
  
      // Continue with the rest of your test or assertions.


      cy.contains("Email Address").type(staff.email_adress)
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
   cy.contains('Province/State').click()
   cy.contains('Centre').click()
   cy.contains('City').click()
   cy.contains('Akono').click()
   // cy.contains('Sekondi-Takoradi').click()
   cy.contains('Address Line 1 ').type(staff.Address_Line1)
   cy.contains('Address Line 2 ').type(staff.Address_Line2)
   cy.contains('Postal/Zip Code ').type(staff.code)
   cy.get('mat-label.ng-tns-c1205077789-19').click({force:true})
   cy.contains('Two Year').click()
   cy.get('#mat-input-36').click({force:true})
   cy.contains('Cameroon').click({force:true})
   cy.get('mat-label.ng-tns-c1205077789-57').click()
   cy.contains('Centre').click()
   cy.get('#mat-input-41').click()
   cy.contains('Akono').click({force:true})
   cy.get('#mat-input-37').type(staff.Address)
   cy.get('#mat-input-38').type(staff.Address2)
   cy.get('#mat-input-39').type(staff.Postal)
   cy.get('mat-label.ng-tns-c1205077789-55').click({force:true})
   cy.contains('Three Year').click({force:true})
   cy.contains('Next').click({force:true})
   cy.wait(4000)
   
   
   
   
   
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



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
      cy.contains("Date of Birth").click({force:true})
      cy.get('.mdc-button__label > span').click()
      cy.get('.mat-calendar-content').click(2000)
      cy.get('.mat-calendar-content').click(10)
      cy.get('.mat-calendar-content').click(20).click({force: true})
      cy.contains("Email Address").type(staff.email_adress)
      cy.contains("Confirm email").type(staff.confirm_email)


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



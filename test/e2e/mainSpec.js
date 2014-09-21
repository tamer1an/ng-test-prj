(function() {
   describe("Virtual keypad module", function() {
     it("should have basic text bindings", function() {
       browser.get('http://localhost:3000');
       expect(browser.getTitle()).toEqual('Virtual Keybord module');
     });

     it("should click", function() {
       element(by.id('keypad-num-_START')).click()
       expect(true).toEqual(true);


     });
   });
}).call(this);

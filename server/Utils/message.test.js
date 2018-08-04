var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message.js');

describe('generateMessage' , () => {
    it('should generate correct message Object', () => {
    var from = "jen";
    var text = "Some messsage";
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,text});
});
});

describe('generateLocationMessage', () => {
    it('sholud generate correct location object', () => {
       var from = "Admin";
       var latitude = 15;
       var longitude = 19;
       var url = 'https://www.google.com/maps?q=15,19';
       var LoactionMessage = generateLocationMessage(from, latitude, longitude);

       expect(LoactionMessage.createdAt).toBeA('number');
       expect(LoactionMessage).toInclude({from, url});
    });
});
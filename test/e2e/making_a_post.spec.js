var db = require('../../db')
var expect = require('chai').expect

describe('making a post', function () {
    it('logs in and creates a new post', function () {
        // Go to homepage
        browser.get('http://localhost:3001')
        
        // Click 'login
        element(by.css('nav .login')).click()
        
        // Fill out and submit login form
        element(by.model('username')).sendKeys('anthony')
        element(by.model('password')).sendKeys('pass')
        element(by.css('form .btn')).click()

        // Submit a new post on the posts page
        var post = 'my new post'
        element(by.model('postBody')).sendKeys(post)
        element(by.css('form .btn')).click()

        // Remove the test post
        element.all(by.css('ul.list-group li')).first().getText().then(function (text) {
            console.log(text) 
        })
    })
    // Drop the database
    //afterEach(function () {
        //db.connection.db.dropDatabase()
    //})
})

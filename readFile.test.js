"use strict"

const assert = require("chai").assert;
const expect = require("chai").expect;
const users = require("../../lib/business/require.js").Users;
//test suite
describe("Array", function(){
	describe("#indexOf()",function(){
		it("should return -1 when the value is not present", function(){
			let arr = [1,2,3,4]
			let i = arr.indexOf(5);//fixure
			console.log("Index:");
			console.log(i);
			
			assert.equal(-1,i);
			assert.equal(-1,[1,2,3].indexOf(0));
		});
		
		it(" name should be rafa", function(){
			let name = "rafa";
			
			assert.equal(name,"rafa");
		})
		
		it(" name should be rafa2", function(){
			let name = "rafa2";
			
			expect(name).to.equal("rafa2");
		})
		
		it(" obj should have name", function(){
			let obj = {
				name:'Jhon',
				last_Name:'Gomez'
			}
			
			expect(obj).to.have.property("name");
			expect(obj).to.have.property("last_Name");
		})
		
		
		it(" Female should be 480", function(done){
			users.getLadies().then(function(arrLadies){
				//muestra los datos filtrados
				//console.log(arrLadies)
				
				expect(arrLadies.length).to.equal(480);
				done();
			}, function(error){
				expect(error).to.not.exist;
				done();
			})
		})
		
		it("If 'id' is 11 first_name should be Matthew", function(done){
		let data = {
			key: id,
		      	value: 11};
    
		users.getFilterQS(data).then(function(person){
		expect(person.first_name).to.equal("Matthew")
		},function(err){
			console.log(err)
			});
		});
		
	});
});

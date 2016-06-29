const assert = require("chai").assert;
const expect = require("chai").expect;
const users = require("../../lib/business/require.js").Users;

describe("Array", function(){
	describe("#indexOf()",function(){
		it("should return -1 when the value is not present", function(){
			let arr = [1,2,3,4]
			let i = arr.indexOf(5);
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
				console.log(arrLadies)
				console.log(arrLadies.length)
				
				expect(arrLadies.length).to.equal(480);
				done();
			}, function(error){
				console.log("-------- Error -----------")
				console.log(error);
				expect(error).to.not.exist;
				done();
			})
			
		})
	});
});
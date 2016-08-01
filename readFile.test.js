"use strict"

const assert = require("chai").assert;
const db = require("../../lib/data/dataBase.js").DB
const expect = require("chai").expect;
const People = require("../../lib/business/people.service.js").People
const Users = require("../../lib/business/require.js").Users;
const readFile = require("../../lib/data/readFile.js").File;
const sinon = require("sinon");
require("sinon-as-promised");

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
			let users = new Users(readFile)
			
			users.getLadies().then(function(arrLadies){
				expect(arrLadies.length).to.equal(480);
				done();
			}, function(error){
				console.log(error)
				expect(error).to.not.exist;
				done();
			})
			
		})
		
		it("If 'id' is 11 first_name should be Matthew", function(done){
		//creating an object of Users---------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		let users = new Users(readFile)
		let data = {
			key: "id",
		    value: 11};
		
		users.getFilterQS(data).then(function(person){
			let per = person[0]
			expect(per.first_name).to.equal("Matthew")
			done();
		},function(err){
			console.log(err)
			done();
			});
		});

		
		it("Should be 480 records", function(done){
			let arr = [ { id: 32,
    first_name: 'Jason',
    last_name: 'Kennedy',
    email: 'jkennedyv@wikipedia.org',
    gender: 'Male' },
  { id: 124,
    first_name: 'Jason',
    last_name: 'Phillips',
    email: 'jphillips3f@devhub.com',
    gender: 'Male' },
  { id: 369,
    first_name: 'Jason',
    last_name: 'James',
    email: 'jjamesa8@mit.edu',
    gender: 'Male' },
  { id: 516,
    first_name: 'Jason',
    last_name: 'Clark',
    email: 'jclarkeb@timesonline.co.uk',
    gender: 'Male' },
  { id: 588,
    first_name: 'Jason',
    last_name: 'King',
    email: 'jkinggb@mayoclinic.com',
    gender: 'Male' },
  { id: 880,
    first_name: 'Jason',
    last_name: 'Hart',
    email: 'jhartof@craigslist.org',
    gender: 'Male' },
  { id: 945,
    first_name: 'Jason',
    last_name: 'Jones',
    email: 'jjonesq8@senate.gov',
    gender: 'Male' } ];
			let str = JSON.stringify(arr)
			//let jasons = sinon.stub().returns();
			readFile.readFileP = function(){
				return {
					then: function(cb, err){
						cb(str)
					}
				}
				f
			}
			let users = new Users(readFile)
			let data = {
				key: "first_name",
				value: "Jason"
			};
			
			users.getFilterQS(data).then(function(ladies){
				console.log(ladies.length)
				console.log(ladies)
				expect(ladies.length).to.equal(7)
				done();
			},function(err){
				console.log(err)
				done(err);
			})
			
		});
		
		it("name should be Matthew", function(){
			let stub = sinon.stub();
			let obj = {
				name:"Matthew",
				last_Name:"Gomez",
				age: "24"
			}
			
			stub.withArgs("Matthew").returns(obj);
			
			assert.equal(stub("Matthew").name,"Matthew");
			assert.equal(stub("Matthew").last_Name,"Gomez");
			assert.equal(stub("Matthew").age,24);
		})
		
		it("verify name", function(done){
			let stub = sinon.stub();
			let objN = {
				name: "Jhon",
				lastName: "Har",
				age: 45
				}
			let objM = {
				name: "Sara",
				lastName: "Conor",
				age: 37
			}
			
			stub.withArgs("Male").resolves(objN);
			stub.withArgs("Female").resolves(objM);
			
			db.getPeopleInfo = stub;
			let people = new People(db);
			
			people.getInfo("Female").then(function(data){
				assert.equal(data.name,"Sara")
				done()
			},function(error){
				console.log(error)
				done()
			})
			
		})
	
		it("Some", function(done){
			let stub = sinon.stub();
			
			let obj1 = {
				name: "Pedro",
				lastName: "Picapiedra",
				age: 2
			}
			
			stub.withArgs(42).resolves(obj1)
			
			db.getPeopleInfo = stub;
			let people = new People(db);
			
			people.getInfo(42).then(function(data){
				console.log(data.name)
				// expect(true).to.be.false;
				assert(data.name === "Pedro")
				// assert.equal(data.lastName, "Picapiedra")
				done()
			},function(error){
				console.log(error)
				done()
			})	
		})
		
		it("Some2", function(done){
			let stub = sinon.stub();
			stub.withArgs("Hola").resolves("Mundo")
			
			db.getPeopleInfo = stub;
			let people = new People(db);
			
			people.getInfo("Hola").then(function(data){
				console.log(data)
				assert(data === "Mundoo")
				console.log("------>")
				done()
			},function(error){
				console.log(error)
				done()
			})
		})
		
		it("Some3", function(done){
			let stub = sinon.stub();
			
			// stub.withArgs("Hola").resolves(throw new Error("Not found"))
			
			db.getPeopleInfo = stub;
			let people = new People(db);
			
			people.getInfo("Hola").then(function(data){
				console.log(data)
				assert(data === "Mundoo")
				console.log("------>")
				done()
			},function(error){
				console.log(error)
				done()
			})
		})
		
		it.only("Some4", function(done){
			let stub = sinon.stub();
			
      		let arr = [{name: "Pablo", lastName: "Marmol"},
      			{name: "bambam"},
      			{name:"Pedro"}]
      
			stub.withArgs("Hola").resolves(arr)
			
			db.getPeopleInfo = stub;
			let people = new People(db);
			
			people.getInfo("Hola").then(function(data){
				assert(data.length === 3)
				assert(data[0].name === "Pablo")
				assert(data[0].lastName === "Marmol")
				done()
			},function(error){
				console.log(error)
				done()
			})
		})
		
	});
});
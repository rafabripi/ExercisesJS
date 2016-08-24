import 'isomorphic-fetch';
import Frisbee from 'frisbee';

const api = new Frisbee({
      baseURI: 'http://localhost:3700',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
});

const showData = async () => {
	let res = await api.get('/showladies')
	//let res2 = await api.get('/showSome')
	
	console.log(res.body[1])
	//console.log(res2)
}

showData();

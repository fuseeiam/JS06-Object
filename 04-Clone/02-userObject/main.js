// const state1 = {username : 'John' , point : 100 , loading : true};

// const state 2 = Object.assign({},state1,{loading : false,point:75},{success:true})

// state2

// const permission1 = {cnvi}



const state1 = { username: 'john', point: 100, loading: true };

const state2 = Object.assign({}, state1, { loading: false, point: 75 }, { success: true });

console.log(state2);
const employees = {
    john: {
        salary: 1000,
        address: {
            district: 'Ratchathewi',
            province: 'Bangkok'
        }
    },
    peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
    mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
    sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
};



const show = (obj) => {
    let isName = true;
    for (let key in obj) {
        if (key == "") {
            isName = false;
            return console.log("Not Found");
        } else {
            isName;
            return console.log(`key: ${key}, value: ${obj[key]}`)
        }

    }
};
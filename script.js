let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  function PrintDeveloper() {
    const developers = arr.filter(person => person.profession === 'developer');
    console.log('Developers:', developers);
  }
  
  function addData() {
    const newData = { id: 4, name: 'emma', age: 22, profession: 'admin' };
    arr.push(newData);
    console.log('Data Added:', newData);
  }
  
  function removeAdmin() {
    const nonAdmins = arr.filter(person => person.profession !== 'admin');
    console.log('Array with Admins Removed:', nonAdmins);
  }
  
  function concatenateArray() {
    const newArray = [
      { id: 4, name: 'emma', age: 22, profession: 'admin' },
      { id: 5, name: 'michael', age: 25, profession: 'developer' }
    ];
    const concatenatedArray = arr.concat(newArray);
    console.log('Concatenated Array:', concatenatedArray);
  }
  
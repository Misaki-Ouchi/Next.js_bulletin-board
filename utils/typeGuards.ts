type User = {
  name: string
  age: number
}

type Admin = {
  name: string
  privileges: string[]
}

type UnknownEmployee = User | Admin

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('name:' + emp.name)
  if ('privileges' in emp) {
    console.log('Privileges' + emp.privileges.join(','))
  }
  if ('age' in emp) {
    console.log('Age' + emp.age)
  }
  
}

printEmployeeInformation({ name: 'Hiroshi', age: 20 })
printEmployeeInformation({ name: 'Riko', privileges: ['create-server'] })

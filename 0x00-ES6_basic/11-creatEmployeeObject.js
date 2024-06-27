export default function createEmployeesObject(departmentName, employees) {
        return {
          [departmentName]: employees,
        };
      }
      
      // 11-main.js
      import createEmployeesObject from './11-createEmployeesObject.js';
      
      console.log(createEmployeesObject("Software", ["Bob", "Sylvie"]));
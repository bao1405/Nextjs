'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Employee {
  id?: number;
  employeeName: string;
  dateOfBirth: string;
  image: string;
  email: string;
}

const EmployeeTable = () => {
  const [newEmployee, setNewEmployee] = useState<Employee>({
    employeeName: '',
    dateOfBirth: '',
    image: '',
    email: '',
  });
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/employees");
      console.log(response.data.employees);

      if (Array.isArray(response.data.employees)) {
        setEmployees(response.data.employees);
      } else {
        console.error("API response is not an array");
        setError("Failed to load employees.");
      }
    } catch (err) {
      console.error("Error fetching employees", err);
      setError("Error fetching employees.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewEmployee({
      ...newEmployee,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddEmployee = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEmployee),
      });

      if (response.ok) {
        const addedEmployee = await response.json();
        setEmployees([...employees, addedEmployee]);

        // Reset form
        setNewEmployee({
          employeeName: '',
          dateOfBirth: '',
          image: '',
          email: '',
        });
      } else {
        console.error('Failed to add employee');
        setError('Failed to add employee.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error adding employee.');
    }
  };

  const handleEditClick = (employee: Employee) => {
    setEditingEmployee(employee);
  };

  const handleUpdateEmployee = async () => {
    if (editingEmployee) {
      try {
        const response = await fetch(`http://localhost:3000/api/employees/${editingEmployee.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(editingEmployee),
        });

        if (response.ok) {
          const updatedEmployee = await response.json();
          setEmployees(employees.map(emp => emp.id === updatedEmployee.id ? updatedEmployee : emp));
          setEditingEmployee(null);
          fetchData();
        } else {
          console.error('Failed to update employee');
          setError('Failed to update employee.');
        }
      } catch (error) {
        console.error('Error:', error);
        setError('Error updating employee.');
      }
    }
  };

  const handleDeleteClick = async (employeeId: number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/employees/${employeeId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setEmployees(employees.filter(emp => emp.id !== employeeId));
      } else {
        console.error('Failed to delete employee');
        setError('Failed to delete employee.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error deleting employee.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Danh sách nhân viên</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className='flex'>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">STT</th>
                <th className="px-4 py-2">Tên nhân viên</th>
                <th className="px-4 py-2">Ngày sinh</th>
                <th className="px-4 py-2">Hình ảnh</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Chức năng</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={employee.id}>
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{employee.employeeName}</td>
                  <td className="px-4 py-2">{employee.dateOfBirth}</td>
                  <td className="px-4 py-2">
                    <img src={employee.image} alt={employee.employeeName} className="w-16 h-16 rounded-2" />
                  </td>
                  <td className="px-4 py-2">{employee.email}</td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleEditClick(employee)}
                    >
                      Sửa
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleDeleteClick(employee.id!)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-2 ml-3">
          <h2 className="text-2xl font-bold mb-2">Thêm mới nhân viên</h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="employeeName" className="block text-gray-700 text-sm font-bold mb-2">
                Tên nhân viên:
              </label>
              <input
                type="text"
                id="employeeName"
                name="employeeName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={newEmployee.employeeName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="dateOfBirth" className="block text-gray-700 text-sm font-bold mb-2">
                Ngày sinh:
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={newEmployee.dateOfBirth}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
                Hình ảnh:
              </label>
              <input
                type="text"
                id="image"
                name="image"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={newEmployee.image}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={newEmployee.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline mt-4"
            onClick={handleAddEmployee}
          >
            Thêm
          </button>
        </div>
      </div>

      {editingEmployee && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-2">Sửa nhân viên</h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="employeeName" className="block text-gray-700 text-sm font-bold mb-2">
                Tên nhân viên:
              </label>
              <input
                type="text"
                id="employeeName"
                name="employeeName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={editingEmployee.employeeName}
                onChange={(e) => setEditingEmployee({...editingEmployee, employeeName: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="dateOfBirth" className="block text-gray-700 text-sm font-bold mb-2">
                Ngày sinh:
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={editingEmployee.dateOfBirth}
                onChange={(e) => setEditingEmployee({...editingEmployee, dateOfBirth: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
                Hình ảnh:
              </label>
              <input
                type="text"
                id="image"
                name="image"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={editingEmployee.image}
                onChange={(e) => setEditingEmployee({...editingEmployee, image: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={editingEmployee.email}
                onChange={(e) => setEditingEmployee({...editingEmployee, email: e.target.value})}
              />
            </div>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline mt-4"
            onClick={handleUpdateEmployee}
          >
            Cập nhật
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline mt-4 ml-2"
            onClick={() => setEditingEmployee(null)}
          >
            Hủy
          </button>
        </div>
      )}
    </div>
  );
};

export default EmployeeTable;

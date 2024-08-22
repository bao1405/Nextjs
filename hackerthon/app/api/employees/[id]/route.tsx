import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

interface Employee {
  id: number;
  employeeName: string;
  dateOfBirth: string;
  image: string;
  email: string;
}

const filePath = path.join(process.cwd(), "data/employees.json");

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const employees: Employee[] = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const findEmployeeById = employees.find(
      (employee: Employee) => employee.id === +params.id
    );
    if (findEmployeeById) {
      return NextResponse.json(findEmployeeById);
    } else {
      return NextResponse.json({ message: "Không tìm thấy nhân viên" });
    }
  } catch (error) {
    return NextResponse.json({ error: "Đã xảy ra lỗi khi tìm kiếm nhân viên" });
  }
}
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const employees: Employee[] = JSON.parse(fs.readFileSync(filePath, "utf8"));

    const updatedEmployee: Employee = await req.json();

    const index = employees.findIndex(employee => employee.id === +params.id);

    if (index === -1) {
      return NextResponse.json({ message: "Nhân viên không tồn tại" }, { status: 404 });
    }

    employees[index] = { ...employees[index], ...updatedEmployee };

    // Write the updated data back to the file
    fs.writeFileSync(filePath, JSON.stringify(employees, null, 2), "utf8");

    return NextResponse.json(employees[index]);
  } catch (error) {
    console.error("Error updating employee:", error);
    return NextResponse.json({ error: "Đã xảy ra lỗi khi cập nhật nhân viên" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const employees: Employee[] = JSON.parse(fs.readFileSync(filePath, "utf8"));

    const idToDelete = +params.id;
    const updatedEmployees = employees.filter(employee => employee.id !== idToDelete);

    if (updatedEmployees.length === employees.length) {
      return NextResponse.json({ message: "Nhân viên không tồn tại" }, { status: 404 });
    }

    // Write the updated data back to the file
    fs.writeFileSync(filePath, JSON.stringify(updatedEmployees, null, 2), "utf8");

    return NextResponse.json({ message: "Nhân viên đã được xóa thành công" });
  } catch (error) {
    console.error("Error deleting employee:", error);
    return NextResponse.json({ error: "Đã xảy ra lỗi khi xóa nhân viên" }, { status: 500 });
  }
}
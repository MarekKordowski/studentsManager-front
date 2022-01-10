import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Student } from "./student";

@Injectable ({
    providedIn: 'root'
})

export class StudentService {


    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getStudents(): Observable<Student[]> {

        return this.http.get<Student[]>(`${this.apiServerUrl}/student`);

    }

    public getStudent(student: Student): Observable<Student> {

        return this.http.post<Student>(`${this.apiServerUrl}/student`, student);
    }
   
    public updateStudent(studentId: number): Observable<Student> {

        return this.http.put<Student>(`${this.apiServerUrl}/student${studentId}`,studentId);
    }

    public deleteStudent(studentId: number): Observable<void> {

        return this.http.delete<void>(`${this.apiServerUrl}/student${studentId}`);
    }

}
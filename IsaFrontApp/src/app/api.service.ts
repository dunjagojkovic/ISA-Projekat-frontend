import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = "http://localhost:8081";

  constructor(private http: HttpClient) { }

  getAuthoHeader() : any {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer ' + localStorage.getItem("token")
    }
    return{
      headers: headers
    };
  }

  login(data: any) {
    return this.http.post(this.baseURL + "/api/users/login", data);
  }

  current() {
    return this.http.get(this.baseURL + "/api/users/current", this.getAuthoHeader());
  }

  registerClient(data: any) {
    return this.http.post(this.baseURL + "/api/users/client/register", data);
  }

  registerHouseOwner(data: any) {
    return this.http.post(this.baseURL + "/api/users/house-owner/register", data);
  }

  registerBoatOwner(data: any) {
    return this.http.post(this.baseURL + "/api/users/boat-owner/register", data);
  }

  registerAdmin(data: any) {
    return this.http.post(this.baseURL + "/api/users/admin/register", data);
  }

  registerFishingInstructor(data: any) {
    return this.http.post(this.baseURL + "/api/users/fishing-instructor/register", data);
  }

  loginUser(data: any) {
    return this.http.post(this.baseURL + "/api/users/login", data);

  }

  getUsers() {
    return this.http.get(this.baseURL + '/api/users/userStatus', this.getAuthoHeader());
  }

  approveUser(id: any) {
    return this.http.post(this.baseURL + "/api/users/approve/" + id, {}, this.getAuthoHeader());
  }

  declineUser(id: any) {
    return this.http.post(this.baseURL + "/api/users/decline/" + id, {}, this.getAuthoHeader());
  }

  deleteUser(id: any){
    return this.http.delete(this.baseURL + "/api/users/deleteUser/" + id, this.getAuthoHeader());
  }

  getAllUsers(){
    return this.http.get(this.baseURL + '/api/users/allUsers', this.getAuthoHeader());
  }

  getAllCottages(){
    return this.http.get(this.baseURL + 'api/homes/home-profiles', this.getAuthoHeader());
  }

  getAllBoats(){
    return this.http.get(this.baseURL + 'api/boats/boat-profiles', this.getAuthoHeader());
  }

  

}

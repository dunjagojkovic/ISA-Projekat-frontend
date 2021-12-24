import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = "http://localhost:8080";

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

  loginUser(data: any) {
    return this.http.post(this.baseURL + "/api/users/login", data);
  }

  addHouse(data: any) {
    return this.http.post(this.baseURL + "/api/homes", data, this.getAuthoHeader());
  }

  loadHouse() {
    return this.http.get(this.baseURL + "/api/homes/my", this.getAuthoHeader());
  }

  loadHousesForClients(){
    return this.http.get(this.baseURL + "/api/homes/home-profiles", this.getAuthoHeader());
  }

  loadHousesForAllUsers(){
    return this.http.get(this.baseURL + "/api/homes/home-profiles", this.getAuthoHeader());
  }

  loadBoatsForClients(){
    return this.http.get(this.baseURL + "/api/boats/boat-profiles", this.getAuthoHeader())
  }

  editInfo(id: number, data: any) {
    return this.http.put(this.baseURL + "/api/users/id", this.getAuthoHeader());
  }

  deleteMyHouse(id: number) {
    return this.http.delete(this.baseURL + "/api/homes/" + id, this.getAuthoHeader())
  }

  addHouseFreeTerms(data: any){
    return this.http.post(this.baseURL + "/api/hometerms", data, this.getAuthoHeader());
  }
  
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { id } from 'date-fns/locale';

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

  addHouse(data: any) {
    return this.http.post(this.baseURL + "/api/homes", data, this.getAuthoHeader());
  }

  loadHouse() {
    return this.http.get(this.baseURL + "/api/homes/my", this.getAuthoHeader());
  }

  loadHousesForClients(){
    return this.http.get(this.baseURL + "/api/homes/home-profiles", this.getAuthoHeader());
  }

  loadBoatsForClients(){
    return this.http.get(this.baseURL + "/api/boats/boat-profiles", this.getAuthoHeader())
  }

  loadIstructorsForClients(){
    return this.http.get(this.baseURL + "/api/adventures/adventure-profiles", this.getAuthoHeader());
  }

  loadHousesForAllUsers(){
    return this.http.get(this.baseURL + "/api/homes/home-profiles");
  }

  loadBoatsForAllUsers(){
    return this.http.get(this.baseURL + "/api/boats/boat-profiles");
  }

  loadInstructorsForAllUsers(){
    return this.http.get(this.baseURL + "/api/adventures/adventure-profiles");
  }

  editInfo(id: number, data: any) {
    return this.http.put(this.baseURL + "/api/users/", data, this.getAuthoHeader());
  }

  searchFreeHouses(data: any){
    return this.http.post(this.baseURL + "/api/homeReservations/searchFree", data, this.getAuthoHeader());
  }

  deleteMyHouse(id: number) {
    return this.http.delete(this.baseURL + "/api/homes/" + id, this.getAuthoHeader())
  }

  addHouseFreeTerms(data: any){
    return this.http.post(this.baseURL + "/api/hometerms", data, this.getAuthoHeader());
  }

  loadHouseFreeTerms(id: any){
    return this.http.get(this.baseURL + "/api/hometerms/" + id, this.getAuthoHeader());
  }

  loadOneHouse(id: any) {
    return this.http.get(this.baseURL + "/api/homes/" +id, this.getAuthoHeader());
  }

  editHouse(id: number, data: any) {
    return this.http.put(this.baseURL + "/api/homes/" +id, data, this.getAuthoHeader());
  }

  bookHouse(data: any){
    return this.http.post(this.baseURL + "/api/homeReservations/", data, this.getAuthoHeader());
  }

  bookBoat(data: any){
    return this.http.post(this.baseURL + "/api/boatReservations/book", data, this.getAuthoHeader());
  }

  filterHouses(data:any){
    return this.http.post(this.baseURL + "/api/homes/filterHomes", data);
  }

  sendDeleteRequest(id: number){
    return this.http.delete(this.baseURL + "/api/users/" + id, this.getAuthoHeader());
  }

  filterBoats(data: any){
    return this.http.post(this.baseURL + "/api/boats/filterBoats",  data);
  }

  filterInstructors(data: any){
    return this.http.post(this.baseURL + "/api/adventures/filterAdventures", data);
  }

  searchFreeBoats(data: any){
    return this.http.post(this.baseURL + "/api/boatReservations/searchFree", data, this.getAuthoHeader());
  } 
  
  searchFreeInstructors(data: any){
    return this.http.post(this.baseURL + "/api/adventuresReservation/searchFree", data, this.getAuthoHeader());
  }

  loadOneBoat(id: any) {
    return this.http.get(this.baseURL + "/api/boats/" +id, this.getAuthoHeader());
  }

  
}

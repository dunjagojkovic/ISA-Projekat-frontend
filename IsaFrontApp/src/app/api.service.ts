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

  addHouse(data: any) {
    return this.http.post(this.baseURL + "/api/homes", data, this.getAuthoHeader());
  }

  addBoat(data: any) {
    return this.http.post(this.baseURL + "/api/boats", data, this.getAuthoHeader());
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

  deleteMyHouse(id: number) {
    return this.http.delete(this.baseURL + "/api/homes/" + id, this.getAuthoHeader())
  }

  deleteMyBoat(id: number) {
    return this.http.delete(this.baseURL + "/api/boats/" + id, this.getAuthoHeader())
  }

  addHouseFreeTerms(data: any){
    return this.http.post(this.baseURL + "/api/hometerms", data, this.getAuthoHeader());
  }

  addBoatFreeTerms(data: any){
    return this.http.post(this.baseURL + "/api/boatterms", data, this.getAuthoHeader());
  }

  loadHouseFreeTerms(id: any){
    return this.http.get(this.baseURL + "/api/hometerms/" + id, this.getAuthoHeader());
  }

  loadBoatFreeTerms(id: any){
    return this.http.get(this.baseURL + "/api/boatterms/" + id, this.getAuthoHeader());
  }

  editHouse(id: number, data: any) {
    return this.http.put(this.baseURL + "/api/homes/" +id, data, this.getAuthoHeader());
  }

  loadBoat() {
    return this.http.get(this.baseURL + "/api/boats/my", this.getAuthoHeader());
  }
  
  bookHouse(data: any){
    return this.http.post(this.baseURL + "/api/homeReservations/", data, this.getAuthoHeader());
  }

  bookByOwnerHouse(data: any){
    return this.http.post(this.baseURL + "/api/homeReservations/owner", data, this.getAuthoHeader());
  }

  bookByOwnerBoat(data: any){
    return this.http.post(this.baseURL + "/api/boatReservations/owner", data, this.getAuthoHeader());
  }

  bookBoat(data: any){
    return this.http.post(this.baseURL + "/api/boatReservations/book", data, this.getAuthoHeader());
  }

  bookInstructor(data: any){
    return this.http.post(this.baseURL + "/api/adventuresReservation/", data, this.getAuthoHeader());
  }

  sendDeleteRequest(id: number){
    return this.http.delete(this.baseURL + "/api/users/" + id, this.getAuthoHeader());
  }
  
  filterHouses(data:any){
    return this.http.post(this.baseURL + "/api/homes/filterHomes", data);
  }
  filterBoats(data: any){
    return this.http.post(this.baseURL + "/api/boats/filterBoats",  data);
  }

  filterInstructors(data: any){
    return this.http.post(this.baseURL + "/api/adventures/filterAdventures", data);
  }

  changePassword(data: any){
    return this.http.post(this.baseURL + "/api/users/password", data, this.getAuthoHeader());
  }
  
  searchFreeHouses(data: any){
    return this.http.post(this.baseURL + "/api/homeReservations/searchFree", data, this.getAuthoHeader());
  }

  searchFreeBoats(data: any){
    return this.http.post(this.baseURL + "/api/boatReservations/searchFree", data, this.getAuthoHeader());
  } 
  
  searchFreeInstructors(data: any){
    return this.http.post(this.baseURL + "/api/adventuresReservation/searchFree", data, this.getAuthoHeader());
  }

  loadOneUserInfo(id: any){
    return this.http.get(this.baseURL + "/api/users/" + id,this.getAuthoHeader());
  }

  loadOneUser(clientId: any){
    return this.http.get(this.baseURL + "/api/users/" + clientId,this.getAuthoHeader());
  }

  loadOneHouse(id: any) {
    return this.http.get(this.baseURL + "/api/homes/" +id, this.getAuthoHeader());
  }

  loadOneBoat(id: any) {
    return this.http.get(this.baseURL + "/api/boats/" +id, this.getAuthoHeader());
  }

  loadOneInstructor(id: any) {
    return this.http.get(this.baseURL + "/api/adventures/" +id, this.getAuthoHeader());
  }

getMyHouseReservations(){
  return this.http.get(this.baseURL + "/api/homeReservations/myReservations", this.getAuthoHeader());
}

getMyHouseFinishedReservations(){
  return this.http.get(this.baseURL + "/api/homeReservations/myFinishedReservations", this.getAuthoHeader());
}

getMyBoatReservations(){
  return this.http.get(this.baseURL + "/api/boatReservations/myReservations", this.getAuthoHeader());
}

getMyInstructorReservations(){
  return this.http.get(this.baseURL + "/api/adventuresReservation/myReservations", this.getAuthoHeader());
}

getAllHousesOnActions(){
  return this.http.get(this.baseURL + "/api/homeReservations/getHousesOnAction", this.getAuthoHeader())
}

getAllBoatsOnActions(){
  return this.http.get(this.baseURL + "/api/boatReservations/getBoatsOnAction", this.getAuthoHeader())
}

getAllInstructorsOnActions(){
  return this.http.get(this.baseURL + "/api/adventuresReservation/getAdventuresOnAction", this.getAuthoHeader())
}

cancelHouseReservation(id: number){
return this.http.delete(this.baseURL + "/api/homeReservations/" +id, this.getAuthoHeader());
}

cancelBoatReservation(id: number){
  return this.http.delete(this.baseURL + "/api/boatReservations/" +id, this.getAuthoHeader());
}

cancelInstructorReservation(id: number){
   return this.http.delete(this.baseURL + "/api/adventuresReservation/" +id, this.getAuthoHeader());
}

editBoat(id: number, data: any) {
  return this.http.put(this.baseURL + "/api/boats/" +id, data, this.getAuthoHeader());
}

sendComplaintsForHouseReservation(data: any){
  return this.http.post(this.baseURL + "/api/homeComplaints/", data, this.getAuthoHeader());
}

sendComplaintsForBoatReservation(data: any){
  return this.http.post(this.baseURL + "/api/boatComplaints/", data, this.getAuthoHeader());
}

sendComplaintsForInstructorReservation(data: any){
  return this.http.post(this.baseURL + "/api/adventureComplaints/", data, this.getAuthoHeader());
}

sendReviewsForHouseReservation(data: any){
  return this.http.post(this.baseURL + "/api/homeReviews/", data, this.getAuthoHeader());
}

sendReviewsForBoatReservation(data: any){
  return this.http.post(this.baseURL + "/api/boatReviews/", data, this.getAuthoHeader());
}

loadOneHouseReservation(id: any) {
  return this.http.get(this.baseURL + "/api/homeReservations/" +id, this.getAuthoHeader());
}

loadOneBoatReservation(id: any) {
  return this.http.get(this.baseURL + "/api/boatReservations/" +id, this.getAuthoHeader());
}

loadOneInstructorReservation(id: any) {
  return this.http.get(this.baseURL + "/api/adventuresReservation/" +id, this.getAuthoHeader());
}

sendEvaluationsForHouseReservation(data: any){
  return this.http.post(this.baseURL + "/api/homeEvaluations/", data, this.getAuthoHeader());
}

sendEvaluationsForBoatReservation(data: any){
  return this.http.post(this.baseURL + "/api/boatEvaluations/", data, this.getAuthoHeader());
}

sendEvaluationsForInstructorReservation(data: any){
  return this.http.post(this.baseURL + "/api/adventureEvaluations/", data, this.getAuthoHeader());
}

subscribeUserOnAction(id: number, data: any){
  return this.http.put(this.baseURL + "/api/subscriptions/subscribe/" +id, data, this.getAuthoHeader());
}

unSubscribeUserOnAction(id:number,  data: any){
  return this.http.put(this.baseURL + "/api/subscriptions/unsubscribe/" +id, data, this.getAuthoHeader());
}

getMyHouseSubscriptions(){
  return this.http.get(this.baseURL + "/api/subscriptions/mySubscribedHomeProfiles", this.getAuthoHeader());
}
  
getReservationsForMyHouses(data: any){
  return this.http.post(this.baseURL + "/api/homeReservations/myReservationsForMyHouses", data, this.getAuthoHeader());
}

getTodayReservationsForMyHouses(data: any){
  return this.http.post(this.baseURL + "/api/homeReservations/myTodayReservationsForMyHouses", data, this.getAuthoHeader());
}

getHistoryReservationsForMyHouses(data: any){
  return this.http.post(this.baseURL + "/api/homeReservations/myHistoryReservationsForMyHouses", data, this.getAuthoHeader());
}

getReservationsForCharts(data: any){
  return this.http.post(this.baseURL + "/api/homeReservations/myReservationsForCharts", data, this.getAuthoHeader());
}

getAllReservations(houseId: number, ownerId: number){
  return this.http.get(this.baseURL + "/api/homeReservations/getAllReservations/" +houseId + '/' + ownerId, this.getAuthoHeader());
}

getAllBoatReservations(boatId: number, ownerId: number){
  return this.http.get(this.baseURL + "/api/boatReservations/getAllBoatReservations/" +boatId + '/' + ownerId, this.getAuthoHeader());
}

getReservationsForMyBoats(data: any){
  return this.http.post(this.baseURL + "/api/boatReservations/myReservationsForMyBoats", data, this.getAuthoHeader());
}

getTodayReservationsForMyBoats(data: any){
  return this.http.post(this.baseURL + "/api/boatReservations/myTodayReservationsForMyBoats", data, this.getAuthoHeader());
}

getHistoryReservationsForMyBoats(data: any){
  return this.http.post(this.baseURL + "/api/boatReservations/myHistoryReservationsForMyBoats", data, this.getAuthoHeader());
}

}

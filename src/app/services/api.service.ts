import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = 'http://localhost:8000/';
  // baseUrl: string = 'https://wonderla-be-5mh1.vercel.app/';

  park: string = 'park/get';
  outing: string = 'outing/get';
  resort: string = 'resort/get';
  address: string = 'address/get';
  locations: string = 'locations/get';
  socialLinks: string = 'socialLinks/get';
  mobileMenuUrl: string = 'mobileMenu/get';
  contactLinks: string = 'contactLinks/get';
  liveChatConversationProperty: string = 'liveChatConversationProperty/get';

  constructor(private http: HttpClient) { }

  getMobileMenu(): Observable<any> {
    return this.http.get(this.baseUrl + this.mobileMenuUrl);
  }

  getLiveChatConversationProperty(): Observable<any> {
    return this.http.get(this.baseUrl + this.liveChatConversationProperty);
  }

  getOuting(): Observable<any> {
    return this.http.get(this.baseUrl + this.outing);
  }

  getResort(): Observable<any> {
    return this.http.get(this.baseUrl + this.resort);
  }

  getPark(): Observable<any> {
    return this.http.get(this.baseUrl + this.park);
  }

  getLocations(): Observable<any> {
    return this.http.get(this.baseUrl + this.locations);
  }

  getContactLinks(): Observable<any> {
    return this.http.get(this.baseUrl + this.contactLinks);
  }

  getAddreses(): Observable<any> {
    return this.http.get(this.baseUrl + this.address);
  }

  getSocialLinks(): Observable<any> {
    return this.http.get(this.baseUrl + this.socialLinks);
  }

}

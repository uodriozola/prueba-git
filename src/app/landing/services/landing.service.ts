import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators'
import { Profile } from 'src/app/core/models/profile';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(private http: HttpClient) { }

  public doLogin(username: string, password: string): Observable<Profile> {
    const url = environment.apiUrl + 'do-login';
    const entrada = {
      user: username,
      password: password
    };
    return this.http.post(url, entrada).pipe(tap((res: Profile) => {
      return res;
    }));
  }

}

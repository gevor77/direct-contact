import { Injectable} from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import { filter } from 'rxjs/operators';
import { HttpService } from './http.service';
@Injectable()
export class UserService {
  user = new BehaviorSubject<any>(null);

  constructor(private http: HttpService,) {
  }

  get userAsync() {
    const a = localStorage.getItem('b2bUser') ? JSON.parse(localStorage.getItem('b2bUser')) : this.user.getValue();

    this.setUser(a);

    return this.user.asObservable();
  }

  get userReady() {
    return !!this.user
    
  }
  
  updateMessagesInfo(info, id){    
    return this.http.put('/messages/updatemessage/'+id,
    {
      status:info
    })    
  }
  updatNotyficationInfo(info, id){    
    return this.http.put('/profiles/' + id)
    
  }

  getProfileInfo(id){     
    return this.http.get(`/profiles/${id}`)
  }  

  setUser(a) {
    this.user.next(a);
    localStorage.removeItem('b2bUser');
    if (!!JSON.stringify(this.user.getValue())) {
      localStorage.setItem('b2bUser', JSON.stringify(this.user.getValue()));
    }
  }
}

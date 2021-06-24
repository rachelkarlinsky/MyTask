import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NoticeDetails } from './notice-details/notice-details';

const baseUrl = 'http://localhost:4201';

@Injectable({
  providedIn: 'root'
})
export class NoticesService {
  noticeDetails: NoticeDetails = new NoticeDetails();

  constructor(private http: HttpClient) {
  }

  private async request(method: string, url: string, data?: any, responseType?: any) {

    console.log('request ' + JSON.stringify(data));
    const result = this.http.request(method, url, {
      body: data,
      responseType: responseType || 'json',
      observe: 'body',
      headers: {}
    });
    return new Promise<any>((resolve, reject) => {
      result.subscribe(resolve as any, reject as any);
    });
  }

  getNotices() {
    return this.request('get', `${baseUrl}/notices`);
  }

  getNotice(id: string) {
    return this.request('get', `${baseUrl}/notices/${id}`);
  }

  createNotice(notice: NoticeDetails) {
    console.log('createNotice ' + JSON.stringify(notice));
    return this.request('post', `${baseUrl}/notices`, notice);
  }

  updateNotice(notice: NoticeDetails) {
    console.log('updateNotice ' + JSON.stringify(notice));
    return this.request('post', `${baseUrl}/notices/${notice.id}`, notice);
  }

  deleteNotice(id: string) {
    return this.request('delete', `${baseUrl}/notices/${id}`, null, 'text');
  }

  getSelectedNotice(id: number){
    return this.request('get', `${baseUrl}/notices/${id}`);
  }

}
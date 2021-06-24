import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NoticesService } from '../notice.service';
import { NoticeDetails } from './notice-details';


@Component({
  selector: 'app-notice-details',
  templateUrl: './notice-details.component.html',
  styleUrls: ['./notice-details.component.css']
})

export class NoticeDetailsComponent implements OnInit {
  selectedNotice: NoticeDetails = new NoticeDetails();
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private noticeService: NoticesService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getSelectedNotice();
  }
  
  async getSelectedNotice() {
    this.loading = true;
    let data = new NoticeDetails();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id){
      data = await this.noticeService.getSelectedNotice(id)
    }
    this.selectedNotice = data;
    this.loading = false;
  }

  async updateNotice() {
    if (this.selectedNotice.id !== undefined) {
      await this.noticeService.updateNotice(this.selectedNotice);
    } else {
      await this.noticeService.createNotice(this.selectedNotice);
    }
    this.selectedNotice = new NoticeDetails();
    await this.goBack();
  }

  clearNotice() {
    this.selectedNotice = new NoticeDetails();
  }

  goBack() {
    this.location.back();
  }
}

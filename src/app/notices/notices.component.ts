import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { NoticesService } from '../notice.service';
import { NoticeDetails } from '../notice-details/notice-details';


@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {
  notices: Array<any>;
  selectedNotice: NoticeDetails = new NoticeDetails();
  loading = false;

  constructor(public noticeService: NoticesService) {
  }

  ngOnInit() {
    this.refresh();
  }

  async refresh() {
    this.loading = true;
    const data = await this.noticeService.getNotices();    
    this.notices = data;
    this.loading = false;
  }

  async deleteNotice(notice: NoticeDetails) {
    this.loading = true;
    if (confirm(`Are you sure you want to delete the notice ${notice.title}. This cannot be undone.`)) {
      await this.noticeService.deleteNotice(notice.id);
    }
    await this.refresh();
  }
}
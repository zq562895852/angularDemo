import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap,Router} from '@angular/router';
@Component({
  template:`
	  <index-header [title]='title'></index-header>
	  <ul class="menu clear">
				<li>
					<strong>11:00</strong>
					<span>已开抢</span>
				</li>
				<li>
					<strong>12:00</strong>
					<span>已开抢</span>
				</li>
				<li class="active">
					<strong>13:00</strong>
					<span>抢购进行中</span>
				</li>
				<li>
					<strong>14:00</strong>
					<span>即将开抢</span>
				</li>
				<li>
					<strong>15:00</strong>
					<span>即将开抢</span>
				</li>
			</ul>
	  <div class="division">
	  		<div class="common clear" *ngFor="let itam of seckillData">
				<img class="picShow" [src]="itam.imgUrl" alt="" />
				<div class="content">
					<p class="name">{{itam.name}}</p>
					<p class="link">{{itam.link}}</p>
					<p class="price">
						<span class="tod">￥{{itam.tod}}</span>
						<span class="ori">￥{{itam.ori}}</span>
					</p>
					<div class="operation clear">
						<p class="progressBar">
							<span></span>
							<strong>48%</strong>
						</p>
						<p class="btn">

						</p>
					</div>
	  			</div>
	  		</div>
	  </div>
  `,
  styleUrls: ['../css/seckill.component.scss']
})
export class seckillComponent {
	title="秒杀";

	// 数据
	seckillData=[
		{
			imgUrl:'../../../../assets/img/market/index/Personal/collection/friut_one.png',
			name:'意大利绿奇异果3200g/20个',
			link:'享受清爽汁水融进齿间感觉',
			tod:35.9,
			ori:55.9,
		},
		{
			imgUrl:'../../../../assets/img/market/index/Personal/collection/friut_two.png',
			name:'黔阳冰糖橙3200g/20个',
			link:'享受清爽汁水融进齿间感觉',
			tod:55.9,
			ori:75.9,
		},
		{
			imgUrl:'../../../../assets/img/market/index/Personal/collection/friut_three.png',
			name:'菲律宾龙眼3200g/20个',
			link:'享受清爽汁水融进齿间感觉',
			tod:89.9,
			ori:100.9,
		},
		{
			imgUrl:'../../../../assets/img/market/index/Personal/collection/friut_four.png',
			name:'秦岭软柿子3200g/10个',
			link:'享受清爽汁水融进齿间感觉',
			tod:56.9,
			ori:579.9,
		},
		{
			imgUrl:'../../../../assets/img/market/index/Personal/collection/friut_four.png',
			name:'秦岭软柿子3200g/10个',
			link:'享受清爽汁水融进齿间感觉',
			tod:56.9,
			ori:579.9,
		},
		{
			imgUrl:'../../../../assets/img/market/index/Personal/collection/friut_four.png',
			name:'秦岭软柿子3200g/10个',
			link:'享受清爽汁水融进齿间感觉',
			tod:56.9,
			ori:579.9,
		},
		{
			imgUrl:'../../../../assets/img/market/index/Personal/collection/friut_four.png',
			name:'秦岭软柿子3200g/10个',
			link:'享受清爽汁水融进齿间感觉',
			tod:56.9,
			ori:579.9,
		},
		{
			imgUrl:'../../../../assets/img/market/index/Personal/collection/friut_four.png',
			name:'秦岭软柿子3200g/10个',
			link:'享受清爽汁水融进齿间感觉',
			tod:56.9,
			ori:579.9,
		},
	];
}

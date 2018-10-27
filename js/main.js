$(document).ready(function(){$('#nav-icon').click(function(){$(this).toggleClass('open');$(".nav-menu").toggleClass('nav-active')});var owl=$('.owl-carousel');owl.owlCarousel({items:1,loop:!0,dots:!1,autoplay:!0,autoplayTimeout:6000,autoplayHoverPause:!1})});var bar=new ProgressBar.Line(container,{strokeWidth:4,easing:'easeInOut',duration:1400,color:'rgb(65, 185, 87)',trailColor:'#eee',trailWidth:1,svgStyle:{width:'100%',height:'100%'},text:{style:{color:'#999',position:'absolute',left:'80%',top:'-20px',padding:0,margin:0,transform:null},autoStyleContainer:!1},from:{color:'rgb(65, 185, 87)'},to:{color:'#ED6A5A'},step:(state,bar)=>{bar.setText(Math.round(bar.value()*100)+' %')}});var bar2=new ProgressBar.Line(container2,{strokeWidth:4,easing:'easeInOut',duration:1400,color:'rgb(65, 185, 87)',trailColor:'#eee',trailWidth:1,svgStyle:{width:'80%',height:'100%'},text:{style:{color:'#999',position:'absolute',left:'70%',top:'-20px',padding:0,margin:0,transform:null},autoStyleContainer:!1},from:{color:'rgb(65, 185, 87)'},to:{color:'#ED6A5A'},step:(state,bar2)=>{bar2.setText(Math.round(bar2.value()*80)+' %')}});var bar3=new ProgressBar.Line(container3,{strokeWidth:4,easing:'easeInOut',duration:1400,color:'rgb(65, 185, 87)',trailColor:'#eee',trailWidth:1,svgStyle:{width:'90%',height:'100%'},text:{style:{color:'#999',position:'absolute',left:'80%',top:'-20px',padding:0,margin:0,transform:null},autoStyleContainer:!1},from:{color:'rgb(65, 185, 87)'},to:{color:'#ED6A5A'},step:(state,bar3)=>{bar3.setText(Math.round(bar3.value()*90)+' %')}});var bar4=new ProgressBar.Line(container4,{strokeWidth:4,easing:'easeInOut',duration:1400,color:'rgb(65, 185, 87)',trailColor:'#eee',trailWidth:1,svgStyle:{width:'70%',height:'100%'},text:{style:{color:'#999',position:'absolute',top:'-20px',left:'60%',padding:0,margin:0,transform:null},autoStyleContainer:!1},from:{color:'rgb(65, 185, 87)'},to:{color:'#ED6A5A'},step:(state,bar4)=>{bar4.setText(Math.round(bar4.value()*70)+' %')}});$(function(){var jqBar=$('#container');$(window).scroll(function(){var scrollEvent=($(window).scrollTop()>(jqBar.position().top-$(window).height()));if(scrollEvent){bar.animate(1.0);bar2.animate(1.0);bar3.animate(1.0);bar4.animate(1.0)}})});jQuery(document).ready(function($){$('.cd-filter-trigger').on('click',function(){triggerFilter(!0)});$('.cd-filter .cd-close').on('click',function(){triggerFilter(!1)});function triggerFilter($bool){var elementsToTrigger=$([$('.cd-filter-trigger'),$('.cd-filter'),$('.cd-tab-filter'),$('.cd-gallery')]);elementsToTrigger.each(function(){$(this).toggleClass('filter-is-visible',$bool)})}
var filter_tab_placeholder=$('.cd-tab-filter .placeholder a'),filter_tab_placeholder_default_value='Select',filter_tab_placeholder_text=filter_tab_placeholder.text();$('.cd-tab-filter li').on('click',function(event){var selected_filter=$(event.target).data('type');if($(event.target).is(filter_tab_placeholder)){(filter_tab_placeholder_default_value==filter_tab_placeholder.text())?filter_tab_placeholder.text(filter_tab_placeholder_text):filter_tab_placeholder.text(filter_tab_placeholder_default_value);$('.cd-tab-filter').toggleClass('is-open')}else if(filter_tab_placeholder.data('type')==selected_filter){filter_tab_placeholder.text($(event.target).text());$('.cd-tab-filter').removeClass('is-open')}else{$('.cd-tab-filter').removeClass('is-open');filter_tab_placeholder.text($(event.target).text()).data('type',selected_filter);filter_tab_placeholder_text=$(event.target).text();$('.cd-tab-filter .selected').removeClass('selected');$(event.target).addClass('selected')}});$('.cd-filter-block h4').on('click',function(){$(this).toggleClass('closed').siblings('.cd-filter-content').slideToggle(300)})
$(window).on('scroll',function(){(!window.requestAnimationFrame)?fixGallery():window.requestAnimationFrame(fixGallery)});function fixGallery(){var offsetTop=$('.cd-main-content').offset().top,scrollTop=$(window).scrollTop();(scrollTop>=offsetTop)?$('.cd-main-content').addClass('is-fixed'):$('.cd-main-content').removeClass('is-fixed')}
buttonFilter.init();$('.cd-gallery ul').mixItUp({controls:{enable:!1},callbacks:{onMixStart:function(){$('.cd-fail-message').fadeOut(200)},onMixFail:function(){$('.cd-fail-message').fadeIn(200)}}});var inputText;var $matching=$();var delay=(function(){var timer=0;return function(callback,ms){clearTimeout(timer);timer=setTimeout(callback,ms)}})();$(".cd-filter-content input[type='search']").keyup(function(){delay(function(){inputText=$(".cd-filter-content input[type='search']").val().toLowerCase();if((inputText.length)>0){$('.mix').each(function(){var $this=$(this);if($this.attr('class').toLowerCase().match(inputText)){$matching=$matching.add(this)}else{$matching=$matching.not(this)}});$('.cd-gallery ul').mixItUp('filter',$matching)}else{$('.cd-gallery ul').mixItUp('filter','all')}},200)})});var buttonFilter={$filters:null,groups:[],outputArray:[],outputString:'',init:function(){var self=this;self.$filters=$('.cd-main-content');self.$container=$('.cd-gallery ul');self.$filters.find('.cd-filters').each(function(){var $this=$(this);self.groups.push({$inputs:$this.find('.filter'),active:'',tracker:!1})});self.bindHandlers()},bindHandlers:function(){var self=this;self.$filters.on('click','a',function(e){self.parseFilters()});self.$filters.on('change',function(){self.parseFilters()})},parseFilters:function(){var self=this;for(var i=0,group;group=self.groups[i];i++){group.active=[];group.$inputs.each(function(){var $this=$(this);if($this.is('input[type="radio"]')||$this.is('input[type="checkbox"]')){if($this.is(':checked')){group.active.push($this.attr('data-filter'))}}else if($this.is('select')){group.active.push($this.val())}else if($this.find('.selected').length>0){group.active.push($this.attr('data-filter'))}})}
self.concatenate()},concatenate:function(){var self=this;self.outputString='';for(var i=0,group;group=self.groups[i];i++){self.outputString+=group.active}!self.outputString.length&&(self.outputString='all');if(self.$container.mixItUp('isLoaded')){self.$container.mixItUp('filter',self.outputString)}}};$(document).ready(function(){$(document).on("scroll",onScroll);$('a[href^="#"]').on('click',function(e){e.preventDefault();$(document).off("scroll");$('a').each(function(){$(this).removeClass('active')})
$(this).addClass('active');var target=this.hash,menu=target;$target=$(target);$('html, body').stop().animate({'scrollTop':$target.offset().top+2},500,'swing',function(){window.location.hash=target;$(document).on("scroll",onScroll)})})});function onScroll(event){var scrollPos=$(document).scrollTop();$('#menu-center a').each(function(){var currLink=$(this);var refElement=$(currLink.attr("href"));if(refElement.position().top<=scrollPos&&refElement.position().top+refElement.height()>scrollPos){$('#menu-center ul li a').removeClass("nav_active");currLink.addClass("nav_active")}else{currLink.removeClass("nav_active")}})};$(document).ready(function(){$("#form").submit(function(e){$(".thank-you-message").css("display","block"),this.reset(),e.preventDefault()})});$(document).ready(function(){$(".js-overlay-campaign").addClass("disabled"),$(".js-close-campaign").click(function(){$(".js-overlay-campaign").fadeOut()}),$(document).mouseup(function(e){var o=$(".js-popup-campaign");e.target!=o[0]&&0===o.has(e.target).length&&$(".js-overlay-campaign").fadeOut()}),$(window).on("load",function(){setTimeout(function(){if($(".js-overlay-campaign").hasClass("disabled"))return!1;$(".js-overlay-campaign").fadeIn()},1e4)}),

(function($){
    console.log('TAMBURINS page Load');

    $landing = $('.landing_area');
    $landingIntro = $landing.find('.sc_intro');
    $landingSum= $landing.find('.sc_sum');
    $keyword = $('.sc_keyword');
    $keywordGp = $keyword.find('.keyword_group');
    $landingIntroTit = $landingIntro.find('.title span');
    $landingIntroSub = $landingIntro.find('.sub');
    $aboutAre = $('.sc_about');
    $aboutTxt = $aboutAre.find('.title_wrap');
    $aboutImg = $aboutAre.find('.img_gallery .img_box');
    $aboutImgV2 = $aboutAre.find('.img_gallery_v2 .img_bg');

    $perfumeAre = $('.perfume_area');
    $perfumeTxt = $perfumeAre.find('.sc_perfume');
    $perfumeMv = $perfumeAre.find('.sc_perfume .mv_box');
    $perfumeSlid = $perfumeAre.find('.sc_collection .swiper-slide .img_wrap');

    $linkItem = $('.link_item');

    $blamAre = $('.perfumeBalm_area');
    $blamTxt = $blamAre.find('.sc_perfumeBalm .title_wrap');
    $blamColl = $blamAre.find('.sc_collection .coll_group');

    $cateAre = $('.category_area');
    $cateGallery = $cateAre.find('.cateGallery');
    $cateGallImg = $cateGallery.find('.cateGallery .img_wrap');

//cursor
    $('body').mousemove(function(e){
        xVal = e.clientX - 25;
        yVal = e.clientY - 25;
        console.log()
        gsap.to('.cursor',{
            x:xVal,y:yVal
        })
    })
//link mouseover
    $linkItem.mouseover(function(){
        $(this).addClass('on').siblings().removeClass('on');
    })
    $linkItem.mouseleave(function(){
        $(this).removeClass('on');
    })

//페이지 로딩 될떄
    $('header').delay(1000).animate({opacity : '1'},500,);
    $('.landing_bg').addClass('on');
    $landingIntroTit.delay(1000).animate({opacity:'1',top:'0'},1500,'swing')
    $landingIntroSub.delay(2000).animate({opacity:'1'},1000,'swing')

//스크롤시 움직임
    $(window).scroll(function(){
        
        var curr = $(this).scrollTop();

        var headerTg = $('.main_area').offset().top;
        var landingSumTg = $landingSum.offset().top;
        var aboutTxtTg = $('.sc_about').offset().top;
        var imgGallTg = $('.sc_about .title_wrap').offset().top;
        var imgGallTg2 = $('.sc_about .img_gallery').offset().top;
        var perfumeMvTg = $perfumeMv.offset().top;
        var blamTxtTg = $perfumeSlid.offset().top;

        if (curr >= headerTg + ($('.header_area').height()/2)){
            $('.header_area').addClass('on');
        }
        if(curr >= landingSumTg - ($landingSum.height()/4) ){
            $landingSum.find('.sum_wrap').addClass('on');
        }
        if(curr >= aboutTxtTg - ($('.sc_about').height()/5)){
            $aboutTxt.addClass('on');
        }
        if(curr >= imgGallTg ){
            $aboutImg.addClass('on');
        }
        if(curr >= imgGallTg2 + ($('.sc_about .img_gallery').height()/2)){
            $aboutImgV2.addClass('on');
        }
        if(curr >= perfumeMvTg - ($('.sc_about').height()/5)){
            $perfumeMv.addClass('on');
        }
        if(curr >= blamTxtTg + $perfumeSlid.height()){
            $blamTxt.addClass('on');
        }

    })
$(window).trigger('scroll')

//ketgroup
    $keyword.mouseover(function(){
        $('.cursor div').text('');
        gsap.to(".cursor",{
           border :"1px solid rgb(190, 219, 170)",
           scale:2,
        })
    })
    $keyword.mouseout(function(){
        gsap.to(".cursor",{
           scale:0,
        })
    })
     $keywordGp.mouseover(function(e){
        $(this).addClass('on').siblings().removeClass('on');

     })

//gsap - about img gallery
    $aboutImg.mouseover(function(){
        $(this).find('img').stop().animate({width : '105%'},300,'swing');
        
    })
    $aboutImg.mouseout(function(){
        $(this).find('img').stop().animate({width : '100%'},300,'swing');

    })



gsap.fromTo('.img_gallery_v2 .img_bg img',0.7,{
    scale:1.5,
},{
    scrollTrigger:{
        trigger:'.img_gallery_v2 .img_bg',
        start:"top 100%", 
        end:"bottom top",
        scrub:1,
    },
    scale:1,
})
//gsap - perfume txt bg
gsap.fromTo($perfumeTxt,2,{
    color:'rgb(255,255,255)',
    background:'rgb(0,0,0)'
},{
    scrollTrigger:{
        trigger:$('.sc_perfume'),
        start:"top 50%", 
        end:"top 50%",
        scrub:1,
    },
    background:'rgb(255,255,255)',
    color: "rgb(0,0,0)"
})

//perfuem mouse cousor
$perfumeMv.mouseover(function(){
    $('.cursor div').text('Play');
    gsap.to(".cursor",{
       background :"rgb(14, 93, 221)",
       border:'0',
       scale:2,
       opacity:1,
    })
})
$perfumeMv.mouseout(function(){
    gsap.to(".cursor",{
        opacity:0,
        scale:0,
     })
})

// 향수 스와이프
 swiper = new Swiper(".sc_collection .mySwiper", {
    slidesPerView: 1,
    centeredSlides: 40,
    spaceBetween: 30,
    // grabCursor: true,
    navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
    breakpoints: {
        767: { 
            slidesPerView: 2,
          },
        1024: { 
            slidesPerView: 3,
        },
        1440: { 
            slidesPerView: 4,
          },
        },
  });

//퍼퓸 슬라이드 마우스 오버
$perfumeSlid.mouseover(function(e){
    $(this).addClass('on');
    $(this).find('img.v2_img').stop().animate({opacity : '1'},500);

 })
 $perfumeSlid.mouseout(function(e){
    $(this).removeClass('on')
    $(this).find('img.v2_img').stop().animate({opacity : '0'},500);
    
 })

//퍼퓸밤 마우스 오버
$blamColl.mouseover(function(e){
    $(this).find('img.v2_img').stop().animate({opacity : '1'},300);
    $(this).find('.link_item').css({'transform':'translateY(0vw)',opacity:'1'});
})
 $blamColl.mouseout(function(e){
    $(this).find('img.v2_img').stop().animate({opacity : '0'},300);
    $(this).find('.link_item').css({'transform':'translateY(5vw)',opacity:'0'});

 })

//카테고리 슬라이드
 var swiper = new Swiper(".category_area .mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '<img src = "./asset/img/cate/cate_icon_' +(index+1) + '.png" alt="">'+"</span>";
      }
      ,
    },
});

//gsap 카테고리 
gsap.fromTo($('.cateGallery .img_wrap'),0.7,{
    scale:1.5,
    opacity:0
},{
    scrollTrigger:{
        trigger:$('.cateGallery'),
        start:"top 50%", 
        end:"top top",
        scrub:1,
    },
    scale:1,
    opacity:1
})
})(jQuery);
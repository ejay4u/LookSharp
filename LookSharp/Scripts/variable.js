//
// config file
// --------------------------------------------------
//
// customize the template function via this file.
//
// but for the contact form and subscribe, please check the documentation
//

//
// overlay
// --------------------------------------------------
//
// overlay color doesnt mean home section bckground color

var _site_bg_overlay_color =                      'rgba(16, 128, 242, 0.9)'; // overlay color, rgba format
var _site_bg_overlay_disable =                    true; // [true, false] - force disable overlay, sometime we dont need it, disable by this variable

//
// background effect (constellation, parallax star star, particles)
// --------------------------------------------------
var _site_bg_effect =                             0; // 0 = disable, 1 = constellation, 2 = parallax star star, 3 = particles
var _side_bg_effect_parallax =                    false; // [true, false] - enable parallax effect on effect 1,2 its force disable on mobile, and not work with outdated browser

// if _bg_effect == 1 (constellation)
var _constellation_color =                        'rgba(255, 255, 255, .9)';// [rgba format] - constellation color
var _constellation_width =                        1.5; // [px] - constellation width

// if _bg_effect == 2 (parallax star)
var _parallax_star_opacity =                      1; // [0.1 to 1] - parallax star opacity

// if _bg_effect == 3 (particles)
var _particles_opacity =                          .5; // [0.1 to 1] - particles opacity
var _particles_link_opacity =                     .4; // [0.1 to 1] - particles link opacity

//
// map (google map)
// https://maps.google.com/
// --------------------------------------------------
//

// [true, false] - enable or disable google map
var _map_toggle =                                 false;

// map latitude
var _map_latitude_longitude =                     [35.6046472, 140.2642208];

// map water color
var _map_water_color =                            '#1080f2';


//
// background
// --------------------------------------------------
//
// choose background version for both desktop and mobile :)
//

// for desktop
var _bg_style_desktop =                           2;
                                                    // 0 = flat color
                                                    // 1 = flat color (mp3 audio)
                                                    // 2 = image
                                                    // 3 = image (mp3 audio)
                                                    // 4 = slideshow
                                                    // 5 = slideshow (mp3 audio)
                                                    // 6 = slideshow (kenburn)
                                                    // 7 = slideshow (kenburn, mp3 audio)
                                                    // 8 = html5 video (mute)
                                                    // 9 = html5 video (video audio)
                                                    // 10 = html5 video (mp3 audio)
                                                    // 11 = youtube video (mute)
                                                    // 12 = youtube video (video audio)
                                                    // 13 = youtube video (mp3 audio)

// for mobile
var _bg_style_mobile =                            2;
                                                    // 0 = flat color
                                                    // 1 = flat color (mp3 audio)
                                                    // 2 = image
                                                    // 3 = image (mp3 audio)
                                                    // 4 = slideshow
                                                    // 5 = slideshow (mp3 audio)
                                                    // 6 = slideshow (kenburn)
                                                    // 7 = slideshow (kenburn, mp3 audio)

// if _bg_style == 4 - 7 (slideshow)
var _bg_slideshow_image_amount =                  2; // slideshow image amount
var _bg_slideshow_duration =                      9000; // millisecond

// if _bg_style_desktop == 11 - 13 (youtube video)
var _bg_video_youtube_url; //=                       'gme8UgbTLHE'; // youtube video url id - https://www.youtube.com/watch?v=gme8UgbTLHE
var _bg_video_youtube_quality; //=                   'hightres'; // hightres, hd1080, hd720, default - youtube video quality
var _bg_video_youtube_start; //=                     1; // seconds - video start time
var _bg_video_youtube_end; //=                       0; // seconds - video end time, 0 to ignored
var _bg_video_youtube_loop; //=                      true; // true, false - video loop


//Get Site bg-video mute
var bgVideo = $(".site-bg-video").data("bgvhost");
if (bgVideo !== "" && bgVideo != null) {
    var bgvurl = JSON.parse($(".site-bg-video").data("bgvurl"));

    //$(".site-bg-video").data("property", "videoURL", bgvurl);
    //var gameStatus = jQuery("#awesome-json").data('awesome').game;

   _bg_video_youtube_url = bgvurl; // youtube video url id - https://www.youtube.com/watch?v=gme8UgbTLHE
   _bg_video_youtube_quality = 'highres'; // highres, hd1080, hd720, default - youtube video quality
   _bg_video_youtube_start = 1; // seconds - video start time
   _bg_video_youtube_end = 0; // seconds - video end time, 0 to ignored
   _bg_video_youtube_loop = true; // true, false - video loop

   var darray = '{ videoURL:' + _bg_video_youtube_url + ', autoPlay:' + true + ', loop:' + _bg_video_youtube_loop + ', startAt:' + _bg_video_youtube_start + ', stopAt:' + _bg_video_youtube_end + ', mute:' + true + ', quality:' + _bg_video_youtube_quality + ', realfullscreen:' + true + ', optimizeDisplay:' + true + ', addRaster:' + false + ', showYTLogo:' + false + ', showControls:' + false + ', stopMovieOnBlur:' + false + ', useOnMobile:' + true + ', containment: "self" }';
   $("site-bg-video mb_YTPlayer isMuted").attr("data-property", darray);

   $("body").attr("class", "is-site-bg-video-youtube is-loaded");

   //$("html").attr("class", "desktop landscape is-desktop");

   $(".site-bg-video").addClass("mb_YTPlayer");
}
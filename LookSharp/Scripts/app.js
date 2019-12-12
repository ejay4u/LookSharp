var PIO_VURL = "";
var PH_VURL = "";
var PIO_IMG = "";
var PH_IMG = "";
var PIO_ENDED = false;
var PH_ENDED = false;
var timer, timeSpent = [];
var phtimer, phtimeSpent = [];
var CLI_COUNTRY = "";
var LS_STARTTIME = moment().format();
var LS_ENDTIME = moment().format();
$(document).ready(function () {
    $(".dimg").hide();
    /*
        Background slideshow
    */
    $('body').backstretch("/Content/img/bg/blue-texture-pf-1.png");



    /*
        Countdown initializer
    */
    //var now = new Date();
    //var countTo = 25 * 24 * 60 * 60 * 1000 + now.valueOf(); "2018-11-29T23:58:00"
    var stime = $(".site-pio-video").data("starttime");

    if (stime !== "" && stime != null) {
        LS_STARTTIME = JSON.parse($(".site-pio-video").data("starttime"));
    }

    //console.log(moment().format());

    var countTo = moment(LS_STARTTIME);
    //console.log(countTo.toDate());
    $('.timer').countdown(countTo.toDate()).on('update.countdown', function (event) {
            $(this).find('.days').text(event.offset.totalDays);
            $(this).find('.hours').text(event.offset.hours);
            $(this).find('.minutes').text(event.offset.minutes);
            $(this).find('.seconds').text(event.offset.seconds);

            if (event.elapsed) {
                var url = $("#RedirectTo").val();
                window.location.href = url.replace("__uT__", moment().format());
            }
    }).on('finish.countdown', function () {      
        var url = $("#RedirectTo").val();
        window.location.href = url.replace("__uT__", moment().format());

        /*$.post("/Home/LookSharpCheck",
        {
            StartTime: moment().format()
        });*/

    });

    //For LookSharp Countdown.
    if ($(".site-lketim").data("lketim") !== "" && $(".site-lketim").data("lketim") != null) {
        LS_ENDTIME = JSON.parse($(".site-lketim").data("lketim"));
    }

    var countFrom = moment(LS_ENDTIME);
    //console.log(countFrom.toDate());
    $('.ltimer').countdown(countFrom.toDate()).on('update.countdown', function (event) {
        $(this).find('.ldays').text(event.offset.totalDays);
        $(this).find('.lhours').text(event.offset.hours);
        $(this).find('.lminutes').text(event.offset.minutes);
        $(this).find('.lseconds').text(event.offset.seconds);

    }).on('finish.countdown', function () {

        var url = $("#RedirectBack").val();
        window.location.href = url;
    });

    /*
        Function Calls
    */
    $('.first').click(function (e) {

        var dialog = bootbox.dialog({
            message: '<p class="text-center"><i class="fa fa-spin fa-spinner"></i> Checking your choice...</p>',
            closeButton: false
        });
        //Make The API Call
        $.post("/api/looksharp",
            {
                PassitCode: "1" + $("#Id").val()
            },
            function (data, status) {
                //console.log("Data: " + data + "\nStatus: " + status);
                dialog.modal('hide'); //close the custom dialog

                if (data === "Success") {
                    bootbox.alert({
                        message: "Hurray, you just won!!!",
                        backdrop: true
                    });

                    $(".dimg").attr("href", "/assets/image/looksharp/" + $("#Id").val() + "/" + $("#Id").val() + ".jpg");
                    e.preventDefault();
                    var url = $(".dimg").attr("href");
                    window.open(url, '_blank');

                    $(".pick-first").css("background-color", "#515151");
                }
                else {
                    bootbox.alert({
                        message: data,
                        backdrop: true
                    });
                }
            });
    });

    $('.second').click(function (e) {

        var dialog = bootbox.dialog({
            message: '<p class="text-center"><i class="fa fa-spin fa-spinner"></i> Checking your choice...</p>',
            closeButton: false
        });
        //Make The API Call
        $.post("/api/looksharp",
            {
                PassitCode: "2" + $("#Id").val()
            },
            function (data, status) {
                //console.log("Data: " + data + "\nStatus: " + status);
                dialog.modal('hide'); //close the custom dialog

                if (data === "Success") {
                    bootbox.alert({
                        message: "Hurray, you just won!!!",
                        backdrop: true
                    });

                    $(".dimg").attr("href", "/assets/image/looksharp/" + $("#Id").val() + "/" + $("#Id").val() + ".jpg");
                    e.preventDefault();
                    var url = $(".dimg").attr("href");
                    window.open(url, '_blank');

                    $(".pick-second").css("background-color", "#515151");
                }
                else {
                    bootbox.alert({
                        message: data,
                        backdrop: true
                    });
                }
            });
    });

    $('.third').click(function (e) {

        var dialog = bootbox.dialog({
            message: '<p class="text-center"><i class="fa fa-spin fa-spinner"></i> Checking your choice...</p>',
            closeButton: false
        });
        //Make The API Call
        $.post("/api/looksharp",
            {
                PassitCode: "3" + $("#Id").val()
            },
            function (data, status) {
                //console.log("Data: " + data + "\nStatus: " + status);
                dialog.modal('hide'); //close the custom dialog

                if (data === "Success") {
                    bootbox.alert({
                        message: "Hurray, you just won!!!",
                        backdrop: true
                    });

                    $(".dimg").attr("href", "/assets/image/looksharp/" + $("#Id").val() + "/" + $("#Id").val() + ".jpg");
                    e.preventDefault();
                    var url = $(".dimg").attr("href");
                    window.open(url, '_blank');

                    $(".pick-third").css("background-color", "#515151");
                }
                else {
                    bootbox.alert({
                        message: data,
                        backdrop: true
                    });
                }
            });
    });

    $('.fourth').click(function (e) {

        var dialog = bootbox.dialog({
            message: '<p class="text-center"><i class="fa fa-spin fa-spinner"></i> Checking your choice...</p>',
            closeButton: false
        });
        //Make The API Call
        $.post("/api/looksharp",
            {
                PassitCode: "4" + $("#Id").val()
            },
            function (data, status) {
                //console.log("Data: " + data + "\nStatus: " + status);
                dialog.modal('hide'); //close the custom dialog

                if (data === "Success") {
                    bootbox.alert({
                        message: "Hurray, you just won!!!",
                        backdrop: true
                    });

                    $(".dimg").attr("href", "/assets/image/looksharp/" + $("#Id").val() + "/" + $("#Id").val() + ".jpg");
                    e.preventDefault();
                    var url = $(".dimg").attr("href");
                    window.open(url, '_blank');

                    $(".pick-fourth").css("background-color", "#515151");
                }
                else {
                    bootbox.alert({
                        message: data,
                        backdrop: true
                    });
                }
            });
    });

    $('.fifth').click(function (e) {

        var dialog = bootbox.dialog({
            message: '<p class="text-center"><i class="fa fa-spin fa-spinner"></i> Checking your choice...</p>',
            closeButton: false
        });
        //Make The API Call
        $.post("/api/looksharp",
            {
                PassitCode: "5" + $("#Id").val()
            },
            function (data, status) {
                //console.log("Data: " + data + "\nStatus: " + status);
                dialog.modal('hide'); //close the custom dialog

                if (data === "Success") {
                    bootbox.alert({
                        message: "Hurray, you just won!!!",
                        backdrop: true
                    });

                    $(".dimg").attr("href", "/assets/image/looksharp/" + $("#Id").val() + "/" + $("#Id").val() + ".jpg");
                    e.preventDefault();
                    var url = $(".dimg").attr("href");
                    window.open(url, '_blank');

                    $(".pick-fifth").css("background-color", "#515151");
                }
                else {
                    bootbox.alert({
                        message: data,
                        backdrop: true
                    });
                }
            });
    });

    $('.sixth').click(function (e) {

        var dialog = bootbox.dialog({
            message: '<p class="text-center"><i class="fa fa-spin fa-spinner"></i> Checking your choice...</p>',
            closeButton: false
        });
        //Make The API Call
        $.post("/api/looksharp",
            {
                PassitCode: "6" + $("#Id").val()
            },
            function (data, status) {
                //console.log("Data: " + data + "\nStatus: " + status);
                dialog.modal('hide'); //close the custom dialog

                if (data === "Success") {
                    bootbox.alert({
                        message: "Hurray, you just won!!!",
                        backdrop: true
                    });

                    $(".dimg").attr("href", "/assets/image/looksharp/" + $("#Id").val() + "/" + $("#Id").val() + ".jpg");
                    e.preventDefault();
                    var url = $(".dimg").attr("href");
                    window.open(url, '_blank');

                    $(".pick-sixth").css("background-color", "#515151");
                }
                else {
                    bootbox.alert({
                        message: data,
                        backdrop: true
                    });
                }
            });
    });

    $('.seventh').click(function (e) {

        var dialog = bootbox.dialog({
            message: '<p class="text-center"><i class="fa fa-spin fa-spinner"></i> Checking your choice...</p>',
            closeButton: false
        });
        //Make The API Call
        $.post("/api/looksharp",
            {
                PassitCode: "7" + $("#Id").val()
            },
            function (data, status) {
                //console.log("Data: " + data + "\nStatus: " + status);
                dialog.modal('hide'); //close the custom dialog

                if (data === "Success") {
                    bootbox.alert({
                        message: "Hurray, you just won!!!",
                        backdrop: true
                    });

                    $(".dimg").attr("href", "/assets/image/looksharp/" + $("#Id").val() + "/" + $("#Id").val() + ".jpg");
                    e.preventDefault();
                    var url = $(".dimg").attr("href");
                    window.open(url, '_blank');

                    $(".pick-seventh").css("background-color", "#515151");
                }
                else {
                    bootbox.alert({
                        message: data,
                        backdrop: true
                    });
                }
            });
    });

    $('.eigth').click(function (e) {

        var dialog = bootbox.dialog({
            message: '<p class="text-center"><i class="fa fa-spin fa-spinner"></i> Checking your choice...</p>',
            closeButton: false
        });
        //Make The API Call
        $.post("/api/looksharp",
            {
                PassitCode: "8" + $("#Id").val()
            },
            function (data, status) {
                //console.log("Data: " + data + "\nStatus: " + status);
                dialog.modal('hide'); //close the custom dialog

                if (data === "Success") {
                    bootbox.alert({
                        message: "Hurray, you just won!!!",
                        backdrop: true
                    });

                    $(".dimg").attr("href", "/assets/image/looksharp/" + $("#Id").val() + "/" + $("#Id").val() + ".jpg");
                    e.preventDefault();
                    var url = $(".dimg").attr("href");
                    window.open(url, '_blank');

                    $(".pick-eigth").css("background-color", "#515151");
                }
                else {
                    bootbox.alert({
                        message: data,
                        backdrop: true
                    });
                }
            });
    });

    $('.ninth').click(function (e) {

        var dialog = bootbox.dialog({
            message: '<p class="text-center"><i class="fa fa-spin fa-spinner"></i> Checking your choice...</p>',
            closeButton: false
        });
        //Make The API Call
        $.post("/api/looksharp",
            {
                PassitCode: "9" + $("#Id").val()
            },
            function (data, status) {
                //console.log("Data: " + data + "\nStatus: " + status);
                dialog.modal('hide'); //close the custom dialog

                if (data === "Success") {
                    bootbox.alert({
                        message: "Hurray, you just won!!!",
                        backdrop: true
                    });

                    $(".dimg").attr("href", "/assets/image/looksharp/" + $("#Id").val() + "/" + $("#Id").val() + ".jpg");
                    e.preventDefault();
                    var url = $(".dimg").attr("href");
                    window.open(url, '_blank');

                    $(".pick-ninth").css("background-color", "#515151");
                }
                else {
                    bootbox.alert({
                        message: data,
                        backdrop: true
                    });
                }
            });
    });

    $('.tenth').click(function (e) {

        var dialog = bootbox.dialog({
            message: '<p class="text-center"><i class="fa fa-spin fa-spinner"></i> Checking your choice...</p>',
            closeButton: false
        });
        //Make The API Call
        $.post("/api/looksharp",
            {
                PassitCode: "0" + $("#Id").val()
            },
            function (data, status) {
                //console.log("Data: " + data + "\nStatus: " + status);
                dialog.modal('hide'); //close the custom dialog

                if (data === "Success") {
                    bootbox.alert({
                        message: "Hurray, you just won!!!",
                        backdrop: true
                    });

                    $(".dimg").attr("href", "/assets/image/looksharp/" + $("#Id").val() + "/" + $("#Id").val() + ".jpg");
                    e.preventDefault();
                    var url = $(".dimg").attr("href");
                    window.open(url, '_blank');

                    $(".pick-tenth").css("background-color", "#515151");
                }
                else {
                    bootbox.alert({
                        message: data,
                        backdrop: true
                    });
                }
            });
    });

    //$('.site-bg-overlay').css('background-color', 'rgba(41, 174, 160, 0.9)');  
    //$('.site-bg-img').css('background-image', 'url(assets/image/bg.jpg)');
    var country_name;
    var telInput = $("#phoneNumber"), errorMsg = $("#error-msg"), validMsg = $("#valid-msg");
    $("#codeplayer").hide();
    $("#phoneplayer").hide();

    /*$.get("https://json.geoiplookup.io", initFunc);
    function initFunc(data) {
        CLI_COUNTRY = data.country_name;
        $.post("home/?country=" + CLI_COUNTRY,
            function(data, status) {
                //console.log(data + ", " + status);
                if (data == null || data === "" && status === "success") {
                    toastr.info("Sorry your country is not currently supported!");
                }  
            });
    }*/

    telInput.intlTelInput({
        // allowDropdown: false,
        // autoHideDialCode: false,
        autoPlaceholder: "polite",
        dropdownContainer: "body",
        // excludeCountries: ["us"],
        formatOnDisplay: true,
        geoIpLookup: function(callback) {
            $.get("https://json.geoiplookup.io", function () { }, "jsonp").always(function (resp) {
                var countryCode = (resp && resp.country_code) ? resp.country_code : "";
            callback(countryCode);
          });
        },
        // hiddenInput: "full_number",
        initialCountry: "auto",
        nationalMode: true,
        onlyCountries: ['gh','se'],
        placeholderNumberType: "MOBILE",
        // preferredCountries: ['gh', 'ng', 'ke', 'za'],
        // separateDialCode: true,
        utilsScript: "Scripts/utils.js"
    });

    var reset = function () {
        telInput.removeClass("error");
        errorMsg.addClass("hide");
        validMsg.addClass("hide");
    };

    // on blur: validate
    /*telInput.blur(function () {
        reset();
        if ($.trim(telInput.val())) {
            if (telInput.intlTelInput("isValidNumber") && telInput.intlTelInput("getNumberType") === intlTelInputUtils.numberType.MOBILE) {
                validMsg.removeClass("hide");
                console.log(telInput.intlTelInput("getNumber"));
                //console.log(telInput.intlTelInput("getSelectedCountryData").iso2);
                //console.log(telInput.intlTelInput("getNumber"), intlTelInputUtils.numberFormat.E164);
                //console.log(telInput.intlTelInput("getNumber"), intlTelInputUtils.numberFormat.INTERNATIONAL);
                //console.log(telInput.intlTelInput("getNumber"), intlTelInputUtils.numberFormat.NATIONAL);
                //console.log(telInput.intlTelInput("getNumber"), intlTelInputUtils.numberFormat.RFC3966);
            } else {
                telInput.addClass("error");
                errorMsg.removeClass("hide");
            }
        }
    });*/

    // on keyup / change flag: reset
    telInput.on("keyup change", reset);

    /*function initFunc(data) {
        CLI_COUNTRY = data.country_name;
        console.log(CLI_COUNTRY);

        $.post("home/?country=" + CLI_COUNTRY,
            function(data, status) {
                console.log(data + ", " + status);
                if (data == null || data === "" && status === "success") {
                    $('.site-bg-img').hide();
                    $('.site-bg-audio').hide();
                    $('.site-bg-video').hide();
                    $("#codeplayer").hide();
                    $("#phoneplayer").hide();
                    toastr.info("Sorry your country is not currently supported!");
                }
                else if (data !== "" && status === "success") {
                    /*object.keys(data).forEach(function(key) {
                        
                    });#1#
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].AdType === "Background-Image") {
                            $('.site-bg-img').show();
                            $('.site-bg-img').attr('data-bgimage', data[i].ImageUrl);
                            $("body").attr("class", "is-site-bg-img");
                            $(".site-bg-img").css("background-image", "url(" + data[i].ImageUrl + ")");
                        }
                        else if (data[i].AdType === "Background-Audio") {
                            $('.site-bg-audio').show();
                            $('.site-bg-audio').attr('data-bgaudio', data[i].AudioUrl);
                            $("body").addClass("is-loaded is-audio-on");
                            $("<audio id='audioPlayer' loop></audio>").attr({
                                'src': "'" + data[i].AudioUrl + "'",
                                'type': 'audio/mpeg',
                                'volume': 0.4,
                                'autoplay': 'autoplay'
                            }).appendTo("body");
                        }
                        else if (data[i].AdType === "Background-Video(mute)") {
                            $('.site-bg-video').show();
                            $('.site-bg-video').attr('data-bgvhost', data[i].VideoHost);
                            $('.site-bg-video').attr('data-bgvurl', data[i].VideoUrl);

                        }
                        else if (data[i].AdType === "PassItCode-Image") {
                            $("#codeplayer").hide();
                            $("#piocodead").attr('src', "'" + data[i].ImageUrl + "'");
                            $("#passItOnCode").prop("disabled", false);
                        }
                        else if (data[i].AdType === "PassItCode-Video") {
                            $("#piocodead").hide();
                            PIO_VURL = data[i].VideoUrl;
                        }
                        else if (data[i].AdType === "PhoneNo-Image(Default)") {
                            $("#phoneplayer").hide();
                            $("#phonead").attr('src', "'" + data[i].ImageUrl + "'");
                        }
                        else if (data[i].AdType === "PhoneNo-Video(Default)") {
                            $("#phonead").hide();
                            PH_VURL = data[i].VideoUrl;;
                        }
                    }
                }
            });

    }*/

    //Get Site bg-image
    var bgImage = $(".site-bg-img").data("bgimage");
    if (bgImage !== "" && bgImage != null) {
        $("body").attr("class", "is-site-bg-img");
        $(".site-bg-img").css("background-image", "url(" + $(".site-bg-img").data("bgimage") + ")");
    }
    
    //Get Site bg-audio
    var bgAudio = $(".site-bg-audio").data("bgaudio");
    if (bgAudio !== "" && bgAudio != null) {
        $("body").addClass("is-loaded is-audio-on");
        $("<audio id='audioPlayer' loop></audio>").attr({
            'src': "'" + bgAudio + "'",
            'type': 'audio/mpeg',
            'volume': 0.4,
            'autoplay': 'autoplay'
        }).appendTo("body");
    }


    //Get Passitcode Image
    var PIO_IMG = $(".site-pio-img").data("pioimage");
    if (PIO_IMG !== "" && PIO_IMG != null) {
        $("#codeplayer").hide();
        $("#piocodead").attr('src', JSON.parse(PIO_IMG));
        $("#passItOnCode").prop("disabled", false);
    }

    //Get Passitcode Video
    var piovideo = $(".site-pio-video").data("piovurl");
    if (piovideo !== "" && piovideo != null) {
        $("#piocodead").hide();
        $("#codeplayer").show();
        PIO_VURL = JSON.parse($(".site-pio-video").data("piovurl"));

        //var pioarray = '{ videoURL:' + PIO_VURL + ', autoPlay:' + true + ', loop:' + false + ', startAt:' + _bg_video_youtube_start + ', mute:' + false + ', quality:' + "'default'" + ', optimizeDisplay:' + true + ', showYTLogo:' + false + ', showControls:' + false + ', opacity:' + 1 + ', containment:' + "'self'" + ' }';
        //$("#codeiframe").attr("data-property", pioarray);
        //$("#codeiframe").attr("class", "player");
        //jQuery('#codeiframe').YTPPlay();
        //jQuery("#codeiframe").YTPlayer();
        /*var src = "https://www.youtube.com/embed/" + PIO_VURL + "?autoplay=1&enablejsapi=1";
        $("#codeiframe").attr('src', src);*/

    }

    //Get Phone Image - Default
    var PH_IMG = $(".site-phone-img").data("phoneimage");
    if (PH_IMG !== "" && PH_IMG != null) {
        $("#phoneplayer").hide();
        $("#phonead").attr('src', JSON.parse(PH_IMG));
    }

    //Get Phone Video - Default
    var phvideo = $(".site-phone-video").data("phonevurl");
    if (phvideo !== "" && phvideo != null) {
        $("#phonead").hide();
        $("#phoneplayer").show();
        PH_VURL = JSON.parse($(".site-phone-video").data("phonevurl"));
    }


    $("input[id=passItOnCode]").keyup(function () {
        if ($(this).val().length === 10) {
            //alert(charLimit);
            $.get("api/passiton/?passitCode=" + $('#passItOnCode').val(),
            function (data) {
                if (data.AdType === "PhoneNo-Image") {
                    $("#phoneplayer").hide();
                    $("#phonead").attr('src', data.ImageUrl);
                    $("#phoneNumber").prop("disabled", false);
                    $("#phoneNumber").prop("placeholder", "Enter Mobile Number...");

                }
                else if (data.AdType === "PhoneNo-Video") {
                    $("#phonead").hide();
                    phoneplayer.cueVideoById({
                        videoId: data.VideoUrl,
                        startSeconds: 1,
                        endSeconds: 0,
                        suggestedQuality: 'medium'
                    });
                    PH_ENDED = false;
                    phtimeSpent = [];
                    //phoneplayer.addEventListener('onReady', 'onPhPlayerReady');
                    phoneplayer.addEventListener('onStateChange', 'onPhPlayerStateChange');

                }
                //console.log("Data: " + data.AdType + "\nStatus: " + status);
            });
            $('#passItOnCode').blur();
            $('#passNumber').trigger("click");
        }
    });

    function keypressHandler(e) {
        if (e.which === 13) {
            e.preventDefault(); //stops default action: submitting form
            $(this).blur();
            $('#reward').focus().click();//give your submit an ID
        }
    }

    $('#phoneNoForm').keypress(keypressHandler);

    $("#reward").on("click", function () {
        if ($.trim(telInput.val()) && telInput.intlTelInput("isValidNumber") && telInput.intlTelInput("getNumberType") === intlTelInputUtils.numberType.MOBILE) {
            reset();
            bootbox.confirm("Ready to recieve your reward?", function (result) {
                if (result) {
                    var dialog = bootbox.dialog({
                        message: '<p class="text-center"><i class="fa fa-refresh fa-spin"></i> Please wait while we process your request...</p>',
                        closeButton: false
                    });
                    //Make The API Call
                    $.post("api/passiton/?passitCode=" + $('#passItOnCode').val(),
                        {
                            //MobileNo: $("#phoneNumber").val()
                            MobileNo: telInput.intlTelInput("getNumber"),
                            CountryCode: telInput.intlTelInput("getSelectedCountryData").iso2
                        },
                        function(data, status) {
                            //console.log("Data: " + data + "\nStatus: " + status);
                            dialog.modal('hide'); //close the custom dialog

                            bootbox.alert({
                                message: data,
                                backdrop: true
                            });

                        //Do Re-Initialization
                        $("input[id=passItOnCode]").clearFields();
                        $("input[id=phoneNumber]").clearFields();
                        
                        if (PIO_IMG !== "" && PIO_IMG != null) {
                            $("#codeplayer").hide();
                            $("#piocodead").attr('src', JSON.parse(PIO_IMG));
                            $("#passItOnCode").prop("disabled", false);
                        }

                        $("#phoneNumber").prop("disabled", true);

                        if (PH_IMG !== "" && PH_IMG != null) {
                            $("#phoneplayer").hide();
                            $("#phonead").attr('src', JSON.parse(PH_IMG));
                        }

                        if (PIO_VURL !== "" && PIO_VURL != null) {

                            $("#passItOnCode").prop("disabled", true);
                            codeplayer.cueVideoById({
                                videoId: PIO_VURL,
                                startSeconds: 1,
                                endSeconds: 0,
                                suggestedQuality: 'medium'
                            });

                            PIO_ENDED = false;
                            timeSpent = [];
                        }

                        if (PH_VURL !== "" && PH_VURL != null) {
                            phoneplayer.cueVideoById({
                                videoId: PH_VURL,
                                startSeconds: 1,
                                endSeconds: 0,
                                suggestedQuality: 'medium'
                            });
                            phtimeSpent = [];
                            phoneplayer.removeEventListener('onStateChange', 'onPhPlayerStateChange');
                            //phoneplayer.removeEventListener('onReady', 'onPlayerReady');
                        }

                        $('#passCode').trigger("click");
                    });
                }
            });

            $('body').css('padding-right', '0');
        }
        else {
            telInput.addClass("error");
            errorMsg.removeClass("hide");
        }
    });

    $("#phoneNoForm").submit(function(){
        if ($.trim(telInput.val()) && telInput.intlTelInput("isValidNumber") && telInput.intlTelInput("getNumberType") === intlTelInputUtils.numberType.MOBILE) {
            reset();
            bootbox.confirm("Ready to recieve your reward?", function (result) {
                if (result) {
                    var dialog = bootbox.dialog({
                        message: '<p class="text-center"><i class="fa fa-refresh fa-spin"></i> Please wait while we process your request...</p>',
                        closeButton: false
                    });
                    //Make The API Call
                    $.post("api/passiton/?passitCode=" + $('#passItOnCode').val(),
                        {
                            //MobileNo: $("#phoneNumber").val()
                            MobileNo: telInput.intlTelInput("getNumber"),
                            CountryCode: telInput.intlTelInput("getSelectedCountryData").iso2
                        },
                        function (data, status) {
                            //console.log("Data: " + data + "\nStatus: " + status);
                            dialog.modal('hide'); //close the custom dialog

                            bootbox.alert({
                                message: data,
                                backdrop: true
                            });

                            //Do Re-Initialization
                            $("input[id=passItOnCode]").clearFields();
                            $("input[id=phoneNumber]").clearFields();

                            if (PIO_IMG !== "" && PIO_IMG != null) {
                                $("#codeplayer").hide();
                                $("#piocodead").attr('src', JSON.parse(PIO_IMG));
                                $("#passItOnCode").prop("disabled", false);
                            }

                            $("#phoneNumber").prop("disabled", true);

                            if (PH_IMG !== "" && PH_IMG != null) {
                                $("#phoneplayer").hide();
                                $("#phonead").attr('src', JSON.parse(PH_IMG));
                            }

                            if (PIO_VURL !== "" && PIO_VURL != null) {

                                $("#passItOnCode").prop("disabled", true);
                                codeplayer.cueVideoById({
                                    videoId: PIO_VURL,
                                    startSeconds: 1,
                                    endSeconds: 0,
                                    suggestedQuality: 'medium'
                                });

                                PIO_ENDED = false;
                                timeSpent = [];
                            }

                            if (PH_VURL !== "" && PH_VURL != null) {
                                phoneplayer.cueVideoById({
                                    videoId: PH_VURL,
                                    startSeconds: 1,
                                    endSeconds: 0,
                                    suggestedQuality: 'medium'
                                });
                                phoneplayer.removeEventListener('onStateChange', 'onPhPlayerStateChange');
                                //phoneplayer.removeEventListener('onReady', 'onPlayerReady');
                            }

                            $('#passCode').trigger("click");
                        });
                }
            });

            $('body').css('padding-right', '0');
        }
        else {
            telInput.addClass("error");
            errorMsg.removeClass("hide");
        }
    });

});

/*var tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);*/

// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//var player;
var codeplayer;
var phoneplayer;

if ($("html").hasClass("mobile portrait")) {
    function onYouTubeIframeAPIReady() {
        codeplayer = new YT.Player('codeiframe',
        {
            height: '340',
            width: '300',
            videoId: PIO_VURL,
            playerVars: {
                playlist: PIO_VURL,
                autoplay: 1,
                mute: 1,
                modestbranding: 1,
                iv_load_policy: 3,
                cc_load_policy: 0,
                origin: 'https://www.looksharp.live',
                suggestedQuality: 'medium',
                fs: 0,
                rel: 0,
                showinfo: 0
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }
}
else if ($("html").hasClass("ios ipad tablet portrait")) {
    function onYouTubeIframeAPIReady() {
        codeplayer = new YT.Player('codeiframe',
        {
            height: '340',
            width: '340',
            videoId: PIO_VURL,
            playerVars: {
                playlist: PIO_VURL,
                autoplay: 1,
                mute: 1,
                modestbranding: 1,
                iv_load_policy: 3,
                cc_load_policy: 0,
                origin: 'https://www.looksharp.live',
                suggestedQuality: 'medium',
                fs: 0,
                rel: 0,
                showinfo: 0
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }
}
else {
    function onYouTubeIframeAPIReady() {
        codeplayer = new YT.Player('codeiframe',
        {
            height: '360',
            width: '440',
            videoId: PIO_VURL,
            playerVars: {
                playlist: PIO_VURL,
                autoplay: 1,
                mute: 1,
                modestbranding: 1,
                iv_load_policy: 3,
                cc_load_policy: 0,
                origin: 'https://www.looksharp.live',
                suggestedQuality: 'medium',
                fs: 0,
                rel: 0,
                showinfo: 0
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }
}



//PIOCODE Video Events
function onPlayerReady(event) {
    event.target.playVideo();
}


function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.CUED) {
        event.target.playVideo();
    }
    else if (event.data === YT.PlayerState.ENDED) {
        event.target.playVideo();
    }
}
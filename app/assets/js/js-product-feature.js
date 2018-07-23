$.fn.jsProductFeature = function (options) {
    /* default settings */
    var defaults = {
        pauseOnHover: true
    };

    var self = this;
    var settings = $.extend(defaults, options);
    var pointCount = settings.points.length;
    var paused = false;

    /* Wrap Product Image */
    self.wrap("<div class='pf-product-container'></div>")


    var container = self.parent();
    container.after("<div class='pf-mobile-container'></div>");
    var mobileContainer = container.next();
    $.each(settings.points, function (i, v) {

        //For Desktop
        var html = '<a href="javascript:void(0)" class="pf-point" style="left:' + v.x + ';top:' + v.y + '" data-point-index="' + i + '">';
        html += '<span>' + i + '</span>';
        html += '<div class="pf-point-box">';
        html += '<h2 class="pf-point-title">' + v.title + '</h2>';
        html += '<div class="pf-point-desc">' + v.description + '</div>';
        html += '</div>';
        html += '</a>';
        container.append(html);

        //For Mobile
        var html = '<div class="pf-tab" data-point-index="' + i + '">';
        html += '<span>' + i + '</span>';
        html += '<h2 class="pf-point-title">' + v.title + '</h2>';
        html += '<div class="pf-point-desc">' + v.description + '</div>';
        html += '</div>';
        mobileContainer.append(html);

    });

    /* Select first point */
    container.find(".pf-point").first().addClass("selected");
    mobileContainer.find(".pf-tab").first().addClass("active");


    index = 0;

    var timer = setInterval(function () {
        if (!paused) {
            index = (index >= pointCount) ? 0 : index;
            container.find(".pf-point").removeClass("selected");
            container.find(".pf-point[data-point-index='" + index + "']").addClass("selected");
            mobileContainer.find(".pf-tab").removeClass("active");
            mobileContainer.find(".pf-tab[data-point-index='" + index + "']").addClass("active");
            index++;
        }
    }, 5000);

    container.on("mouseenter", function () {
        if (settings.pauseOnHover) {
            paused = true;
        }
    }).on("mouseleave", function () {
        paused = false
    });

    container.find(".pf-point").on("click", function (result) {
        container.find(".pf-point").removeClass("selected");
        $(this).addClass("selected");
        var i = $(this).attr("data-point-index");
        mobileContainer.find(".pf-tab").removeClass("active");
        mobileContainer.find(".pf-tab[data-point-index='" + i + "']").addClass("active");
    });

    

};
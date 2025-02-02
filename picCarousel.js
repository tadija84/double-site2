
(function($) {
  var PicCarousel = (function() {
    function PicCarousel(element, options) {
      this.settings = $.extend(true, $.fn.PicCarousel.defaults, options || {});
      this.element = element;
      this.init();
    }

    PicCarousel.prototype = {
      init: function() {
        var me = this;
        this.poster = this.element;
        this.posterItemMain = this.poster.find("ul.poster-list");
        this.nextBtn = this.poster.find("div.poster-next-btn");
        this.prevBtn = this.poster.find("div.poster-prev-btn");
        this.posterItems = this.poster.find("li.poster-item");

        if (this.posterItems.size() % 2 == 0) {
          this.posterItemMain.append(this.posterItems.eq(0).clone());
          this.posterItems = this.posterItemMain.children();
        }

        this.posterFirstItem = this.posterItems.first();
        this.posterLastItem = this.posterItems.last();
        this.rotateFlag = true;

        this.setSettingValue();
        this.setPosterPost();

        this.nextBtn.click(function() {
          if (me.rotateFlag) {
            me.rotateFlag = false;
            me.carouseRotate("left");
          }
        });

        this.prevBtn.click(function() {
          if (me.rotateFlag) {
            me.rotateFlag = false;
            me.carouseRotate("right");
          }
        });

        if (this.settings.autoPlay) {
          this.autoPlay();
          this.poster.hover(
            function() {
              window.clearInterval(me.timer);
            },
            function() {
              me.autoPlay();
            }
          );
        }
      },

      autoPlay: function() {
        var me = this;
        me.timer = window.setInterval(function() {
          me.nextBtn.click();
        }, me.settings.delay);
      },

      carouseRotate: function(dir) {
        var me = this;
        var zIndexArr = [];
        if (dir === "left") {
          me.posterItems.each(function() {
            var self = $(this),
              prev = self.prev().get(0) ? self.prev() : me.posterLastItem,
              width = prev.width(),
              height = prev.height(),
              zIndex = prev.css("zIndex"),
              opacity = prev.css("opacity"),
              left = prev.css("left"),
              top = prev.css("top");
            zIndexArr.push(zIndex);
            self.animate(
              {
                width: width,
                height: height,
                opacity: opacity,
                left: left,
                top: top
              },
              me.settings.speed,
              function() {
                me.rotateFlag = true;
              }
            );
          });
          me.posterItems.each(function(i) {
            $(this).css("zIndex", zIndexArr[i]);
          });
        } else if (dir === "right") {
          me.posterItems.each(function() {
            var self = $(this),
              next = self.next().get(0) ? self.next() : me.posterFirstItem,
              width = next.width(),
              height = next.height(),
              zIndex = next.css("zIndex"),
              opacity = next.css("opacity"),
              left = next.css("left"),
              top = next.css("top");
            zIndexArr.push(zIndex);
            self.animate(
              {
                width: width,
                height: height,
                opacity: opacity,
                left: left,
                top: top
              },
              me.settings.speed,
              function() {
                me.rotateFlag = true;
              }
            );
          });
          me.posterItems.each(function(i) {
            $(this).css("zIndex", zIndexArr[i]);
          });
        }
      },

      setPosterPost: function() {
        var me = this;
        var sliceItems = me.posterItems.slice(1),
          sliceSize = sliceItems.size() / 2,
          rightSlice = sliceItems.slice(0, sliceSize),
          level = Math.floor(me.posterItems.size() / 2),
          leftSlice = sliceItems.slice(sliceSize);

        var rw = me.settings.posterWidth,
          rh = me.settings.posterHeight,
          
          gap = (me.settings.width - me.settings.posterWidth) / 2 / level;

        var firstLeft = (me.settings.width - me.settings.posterWidth) / 2;
        var fixOffsetLeft = firstLeft + rw;

        rightSlice.each(function(i) {
          level--;
          rw = rw * me.settings.scale;
          rh = rh * me.settings.scale;
          var j = i;
          $(this).css({
            zIndex: level,
            width: rw,
            height: rh,
            opacity: 1 / ++j,
            left: fixOffsetLeft + ++i * gap - rw,
            top: me.setVertucalAlign(rh)
          });
        });

        
        var lw = rightSlice.last().width(),
          lh = rightSlice.last().height(),
          oloop = Math.floor(me.posterItems.size() / 2);

        leftSlice.each(function(i) {
          $(this).css({
            zIndex: i,
            width: lw,
            height: lh,
            opacity: 1 / oloop,
            left: i * gap,
            top: me.setVertucalAlign(lh)
          });

          lw = lw / me.settings.scale;
          lh = lh / me.settings.scale;
          oloop--;
        });
      },

      
      setVertucalAlign: function(height) {
        var me = this;
        var verticalType = me.settings.verticalAlign,
          top = 0;

        if (verticalType === "middle") {
          top = (me.settings.height - height) / 2;
        } else if (verticalType === "top") {
          top = 0;
        } else if (verticalType === "bottom") {
          top = me.settings.height - height;
        } else {
          top = (me.settings.height - height) / 2;
        }

        return top;
      },

      
      setSettingValue: function() {
        var me = this;
        me.poster.css({
          width: me.settings.width,
          height: me.settings.height
        });

        me.posterItemMain.css({
          width: me.settings.width,
          height: me.settings.height
        });

        
        var w = (me.settings.width - me.settings.posterWidth) / 2;

        me.nextBtn.css({
          width: w,
          height: me.settings.height,
          zIndex: Math.ceil(me.posterItems.size() / 2)
        });
        me.prevBtn.css({
          width: w,
          height: me.settings.height,
          zIndex: Math.ceil(me.posterItems.size() / 2)
        });
        me.posterFirstItem.css({
          width: me.settings.posterWidth,
          height: me.settings.posterHeight,
          top: me.setVertucalAlign(me.settings.posterHeight),
          left: w,
          zIndex: Math.floor(me.posterItems.size() / 2)
        });
      }
    };
    return PicCarousel;
  })();

  
  $.fn.PicCarousel = function(options) {
    return this.each(function() {
      var me = $(this),
        instance = me.data("PicCarousel");
      if (!instance) {
        instance = new PicCarousel(me, options);
        me.data("PicCarousel", instance);
      }
    });
  };
  
  $.fn.PicCarousel.defaults = {
    width: 1000, 
    height: 300, 
    posterWidth: 520, 
    posterHeight: 300, 
    scale: 0.9, 
    speed: 300, 
    autoPlay: false, 
    delay: 500, 
    verticalAlign: "middle" 
  };
})(jQuery);


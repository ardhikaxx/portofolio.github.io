function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

glitch_exec = {
    NR_OF_GLITCHED_CANVASES : 7,
    GLITCH_RENDER_COUNT     : 0,
    GLITCH_INTERVAL_PROGRESSIVE : 1,
    GLITCH_INTERVAL_MIN     : 500,
    GLITCH_INTERVAL_MAX     : 1500,
    DELAY_BETWEEN_FRAMES    : 30,
    DELAY_BETWEEN_GLITCHES  : 0,
    GLITCH_REFRESH_FRAMES_INTERVAL : 1,


    refresh_glitch_frames_counter : 0,
    rendered_canvases : 0,
    times_rendered    : 0,
    glitched_canvases : Array(),
    curr_canvas       : null,

    __state_machine: function(gl) {
        var otg = gl.object_to_glitch;

        if (gl.GLITCH_RENDER_COUNT > 0 && gl.times_rendered >= gl.GLITCH_RENDER_COUNT) {
            if (typeof gl.done_callback == "function")
                gl.done_callback();
            return;
        }

        if (gl.curr_canvas != null) {
            otg.removeChild(gl.curr_canvas);
        }
        if ((0 < gl.glitched_canvases.length) && (gl.rendered_canvases < gl.glitched_canvases.length)) {
            gl.curr_canvas = gl.glitched_canvases[gl.rendered_canvases];
            otg.insertBefore(gl.curr_canvas, otg.firstChild);
            gl.rendered_canvases++;
            setTimeout(function() { gl.__state_machine(gl) }, gl.DELAY_BETWEEN_FRAMES);
        } else {
            if (gl.GLITCH_RENDER_COUNT > 0 && gl.rendered_canvases >= gl.glitched_canvases.length)
                gl.times_rendered ++;
            gl.rendered_canvases = 0;
            if (gl.DELAY_BETWEEN_GLITCHES > 0)
                setTimeout(function() { gl.__state_machine(gl) }, gl.DELAY_BETWEEN_GLITCHES);
            else if (gl.GLITCH_INTERVAL_PROGRESSIVE && gl.GLITCH_RENDER_COUNT > 0)
                setTimeout(function() { gl.__state_machine(gl) }, gl.times_rendered * getRandomInt(500, 1500));
            else
                setTimeout(function() { gl.__state_machine(gl) }, getRandomInt(gl.GLITCH_INTERVAL_MIN, gl.GLITCH_INTERVAL_MAX));
            gl.curr_canvas = null;

            if (gl.GLITCH_REFRESH_FRAMES_INTERVAL > 0 && --gl.refresh_glitch_frames_counter <= 0) {
                gl.glitch_frames();
                gl.refresh_glitch_frames_counter = gl.GLITCH_REFRESH_FRAMES_INTERVAL;
            }
        }
    },

    glitch_frames : function() {
        var gl = this;
        gl.glitched_canvases = Array();
        var maskImage = new Image();
        maskImage.src = "../assets/foto about.png";
    
        maskImage.onload = function() {
            for(var i = 0; i < gl.NR_OF_GLITCHED_CANVASES; ++i) {
                var imageDiv = document.getElementById("featured-image");
                var imgElement = imageDiv.querySelector('img');
    
                glitch(imgElement, {
                    amount: i,
                    complete: function(canvas) {
                        var maskedCanvas = document.createElement('canvas');
                        var ctx = maskedCanvas.getContext('2d');
                        maskedCanvas.width = canvas.width;
                        maskedCanvas.height = canvas.height;
                        maskedCanvas.style.position = "absolute";
                        ctx.drawImage(maskImage, 0, 0, canvas.width, canvas.height);
                        ctx.globalCompositeOperation = 'source-in';
                        ctx.drawImage(canvas, 0, 0);
                        gl.glitched_canvases.push(maskedCanvas);
                    }
                });
            }
        };
    },
    
    start: function(obj_to_glitch) {
        var gl = this;
        gl.object_to_glitch = obj_to_glitch;
        gl.glitch_frames();
        gl.__state_machine(gl);
    }

};
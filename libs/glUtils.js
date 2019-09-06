(function(global){
    var glUtils = 
    {
        VERSION: '0.0.1',
        checkWebGL: function(canvas)
        {
            var gl;
            var context =["webgl", "moz-webgl","webkit-3d","experimental-webgl"];
                var gl;
                for (let i=0;i<context.length;i++)
                {
                    try{
                        gl = canvas.getContext(context[i]);
                    }catch(error)
                    {
                    }
                    if(gl)
                    {
                        break;
                    }
                }
                if(!gl)
                {
                    alert("Webgl gak nemu");
                }
            return gl;
        },
        getShader: function (gl,type,source)
        {
            var shader = gl.createShader(type);
            gl.shaderSource(shader,source);
            gl.compileShader(shader);
            if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS))
            {
                console.log("shader gagal kompile: "+ gl.getShaderInfoLog(shader));
                gl.deleteShader(shader);
                return null;
            }
            return shader;
        },
        createProgram: function(gl,vertexShader,fragmentShader)
        {
            var program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            if(!gl.getProgramParameter(program,gl.LINK_STATUS))
            {
                console.log("program gagal kompile: "+ gl.getProgramInfoLog(program));
                gl.deleteProgram(program);
                gl.deleteShader(vertexShader);
                gl.deleteShader(fragmentShader);
                return null;
            }
            return program;
        }
    }
    global.glUtils = glUtils;
})(window || this);
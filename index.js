(function()
{
    var canvas = document.getElementById("document");
    var gl = glUtils.checkWebGL(canvas);
    var vertexShaderSource = 
    'void main(){\n'+
    'gl_Position = vec4(0.0,0.0,0.0,1.0);\n'+
    'gl_PointSize = 10.0;\n'+'}';
    var fragmentShaderSource = 
    'void main (){\n'+
    'gl_FragColor = vec4(1.0,0.0,0.0,1.0);\n'+
    '}';
    var vertexShader = glUtils.getShader(gl,gl.VERTEX_SHADER,vertexShaderSource);
    var fragmentShader = glUtils.getShader(gl,gl.FRAGMENT_SHADER,fragmentShaderSource);
    var program = glUtils.createProgram(gl,vertexShader,fragmentShader);
    gl.useProgram(program);
    gl.clearColor(0,10,10,1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.POINTS,0,1);
})();
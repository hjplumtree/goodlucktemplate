import {Mesh} from "../common/mesh.js";
import {
    GL_ARRAY_BUFFER,
    GL_ELEMENT_ARRAY_BUFFER,
    GL_FLOAT,
    GL_STATIC_DRAW,
} from "../common/webgl.js";
import {Attribute} from "../materials/layout.js";

export function mesh_ludek(gl: WebGL2RenderingContext): Mesh {
    let vao = gl.createVertexArray()!;
    gl.bindVertexArray(vao);

    let vertex_buf = gl.createBuffer()!;
    gl.bindBuffer(GL_ARRAY_BUFFER, vertex_buf);
    gl.bufferData(GL_ARRAY_BUFFER, vertex_arr, GL_STATIC_DRAW);
    gl.enableVertexAttribArray(Attribute.Position);
    gl.vertexAttribPointer(Attribute.Position, 3, GL_FLOAT, false, 0, 0);

    let normal_buf = gl.createBuffer()!;
    gl.bindBuffer(GL_ARRAY_BUFFER, normal_buf);
    gl.bufferData(GL_ARRAY_BUFFER, normal_arr, GL_STATIC_DRAW);
    gl.enableVertexAttribArray(Attribute.Normal);
    gl.vertexAttribPointer(Attribute.Normal, 3, GL_FLOAT, false, 0, 0);

    let texcoord_buf = gl.createBuffer()!;
    gl.bindBuffer(GL_ARRAY_BUFFER, texcoord_buf);
    gl.bufferData(GL_ARRAY_BUFFER, texcoord_arr, GL_STATIC_DRAW);
    gl.enableVertexAttribArray(Attribute.TexCoord);
    gl.vertexAttribPointer(Attribute.TexCoord, 2, GL_FLOAT, false, 0, 0);

    let weights_buf = gl.createBuffer()!;
    gl.bindBuffer(GL_ARRAY_BUFFER, weights_buf);
    gl.bufferData(GL_ARRAY_BUFFER, weights_arr, GL_STATIC_DRAW);
    gl.enableVertexAttribArray(Attribute.Weights);
    gl.vertexAttribPointer(Attribute.Weights, 4, GL_FLOAT, false, 0, 0);

    let index_buf = gl.createBuffer()!;
    gl.bindBuffer(GL_ELEMENT_ARRAY_BUFFER, index_buf);
    gl.bufferData(GL_ELEMENT_ARRAY_BUFFER, index_arr, GL_STATIC_DRAW);

    gl.bindVertexArray(null);

    return {
        Vao: vao,
        VertexBuffer: vertex_buf,
        VertexArray: vertex_arr,
        NormalBuffer: normal_buf,
        NormalArray: normal_arr,
        TexCoordBuffer: texcoord_buf,
        TexCoordArray: texcoord_arr,
        WeightsBuffer: weights_buf,
        WeightsArray: weights_arr,
        IndexBuffer: index_buf,
        IndexArray: index_arr,
        IndexCount: index_arr.length,
    };
}

// prettier-ignore
let vertex_arr = Float32Array.from([
    -0.27, 0.63, 0.00,
    -0.27, 0.63, 0.00,
    -0.27, 0.63, 0.00,
    0.27, 0.63, 0.00,
    0.27, 0.63, 0.00,
    0.27, 0.63, 0.00,
    -0.30, 1.20, -0.15,
    -0.30, 1.20, -0.15,
    -0.30, 1.20, -0.15,
    0.30, 1.20, -0.15,
    0.30, 1.20, -0.15,
    0.30, 1.20, -0.15,
    0.30, 1.20, -0.15,
    -0.45, 1.47, 0.00,
    -0.45, 1.47, 0.00,
    -0.45, 1.47, 0.00,
    -0.45, 1.47, 0.00,
    0.45, 1.47, 0.00,
    0.45, 1.47, 0.00,
    0.45, 1.47, 0.00,
    0.45, 1.47, 0.00,
    0.45, 1.47, 0.00,
    0.30, 1.20, 0.15,
    0.30, 1.20, 0.15,
    0.30, 1.20, 0.15,
    0.30, 1.20, 0.15,
    1.05, 1.35, 0.00,
    1.05, 1.35, 0.00,
    1.05, 1.35, 0.00,
    -0.30, 1.20, 0.15,
    -0.30, 1.20, 0.15,
    -0.30, 1.20, 0.15,
    -0.30, 1.20, 0.15,
    -1.05, 1.35, 0.00,
    -1.05, 1.35, 0.00,
    -1.05, 1.35, 0.00,
    0.00, 0.63, -0.15,
    0.00, 0.63, -0.15,
    0.00, 0.63, -0.15,
    0.00, 2.25, -0.15,
    0.00, 2.25, -0.15,
    0.15, 0.00, 0.00,
    0.15, 0.00, 0.00,
    0.15, 0.00, 0.00,
    -0.15, 0.00, 0.00,
    -0.15, 0.00, 0.00,
    -0.15, 0.00, 0.00,
    0.00, 0.63, 0.15,
    0.00, 0.63, 0.15,
    0.00, 0.63, 0.15,
    0.00, 2.25, 0.45,
    0.00, 2.25, 0.45,
    0.00, 2.25, 0.45
]);

// prettier-ignore
let normal_arr = Float32Array.from([
    -0.95, -0.30, 0.00,
    -0.95, -0.30, 0.00,
    -0.95, -0.30, 0.00,
    0.95, -0.30, 0.00,
    0.95, -0.30, 0.00,
    0.95, -0.30, 0.00,
    -0.42, -0.04, -0.90,
    -0.42, -0.04, -0.90,
    -0.42, -0.04, -0.90,
    0.42, -0.04, -0.90,
    0.42, -0.04, -0.90,
    0.42, -0.04, -0.90,
    0.42, -0.04, -0.90,
    -0.36, 0.93, -0.03,
    -0.36, 0.93, -0.03,
    -0.36, 0.93, -0.03,
    -0.36, 0.93, -0.03,
    0.36, 0.93, -0.03,
    0.36, 0.93, -0.03,
    0.36, 0.93, -0.03,
    0.36, 0.93, -0.03,
    0.36, 0.93, -0.03,
    0.42, -0.04, 0.90,
    0.42, -0.04, 0.90,
    0.42, -0.04, 0.90,
    0.42, -0.04, 0.90,
    1.00, 0.06, 0.00,
    1.00, 0.06, 0.00,
    1.00, 0.06, 0.00,
    -0.42, -0.04, 0.90,
    -0.42, -0.04, 0.90,
    -0.42, -0.04, 0.90,
    -0.42, -0.04, 0.90,
    -1.00, 0.06, 0.00,
    -1.00, 0.06, 0.00,
    -1.00, 0.06, 0.00,
    0.00, -0.27, -0.96,
    0.00, -0.27, -0.96,
    0.00, -0.27, -0.96,
    0.00, 0.77, -0.64,
    0.00, 0.77, -0.64,
    0.09, -1.00, 0.00,
    0.09, -1.00, 0.00,
    0.09, -1.00, 0.00,
    -0.09, -1.00, 0.00,
    -0.09, -1.00, 0.00,
    -0.09, -1.00, 0.00,
    0.00, -0.27, 0.96,
    0.00, -0.27, 0.96,
    0.00, -0.27, 0.96,
    0.00, 0.63, 0.78,
    0.00, 0.63, 0.78,
    0.00, 0.63, 0.78
]);

// prettier-ignore
let texcoord_arr = Float32Array.from([
    0.36, 0.75,
    0.71, 0.49,
    0.72, 0.41,
    0.21, 0.85,
    0.55, 0.45,
    0.81, 0.80,
    0.26, 0.59,
    0.72, 0.22,
    0.91, 0.50,
    0.11, 0.70,
    0.66, 0.00,
    0.81, 0.77,
    0.81, 0.61,
    0.26, 0.49,
    0.29, 0.35,
    0.44, 0.06,
    0.72, 0.77,
    0.02, 0.65,
    0.10, 0.35,
    0.44, 0.71,
    0.51, 0.19,
    0.59, 0.06,
    0.50, 0.63,
    0.59, 0.25,
    0.72, 0.61,
    0.91, 0.75,
    0.59, 0.00,
    0.66, 0.25,
    0.91, 1.00,
    0.51, 0.00,
    0.69, 0.67,
    0.81, 0.50,
    0.81, 0.22,
    0.44, 0.41,
    0.51, 0.25,
    0.86, 0.75,
    0.28, 0.80,
    0.81, 0.11,
    0.90, 0.29,
    0.00, 0.35,
    0.19, 0.09,
    0.36, 1.00,
    0.62, 0.25,
    0.90, 0.29,
    0.44, 0.95,
    0.72, 0.27,
    0.90, 0.50,
    0.63, 0.47,
    0.81, 0.32,
    0.90, 0.08,
    0.00, 0.09,
    0.38, 0.09,
    0.53, 1.00
]);

// prettier-ignore
let weights_arr = Float32Array.from([
    5.00, 1.00, 0.00, 0.00,
    5.00, 1.00, 0.00, 0.00,
    5.00, 1.00, 0.00, 0.00,
    4.00, 1.00, 0.00, 0.00,
    4.00, 1.00, 0.00, 0.00,
    4.00, 1.00, 0.00, 0.00,
    3.00, 1.00, 0.00, 0.00,
    3.00, 1.00, 0.00, 0.00,
    3.00, 1.00, 0.00, 0.00,
    2.00, 1.00, 0.00, 0.00,
    2.00, 1.00, 0.00, 0.00,
    2.00, 1.00, 0.00, 0.00,
    2.00, 1.00, 0.00, 0.00,
    1.00, 0.75, 3.00, 0.25,
    1.00, 0.75, 3.00, 0.25,
    1.00, 0.75, 3.00, 0.25,
    1.00, 0.75, 3.00, 0.25,
    1.00, 0.75, 2.00, 0.25,
    1.00, 0.75, 2.00, 0.25,
    1.00, 0.75, 2.00, 0.25,
    1.00, 0.75, 2.00, 0.25,
    1.00, 0.75, 2.00, 0.25,
    2.00, 1.00, 0.00, 0.00,
    2.00, 1.00, 0.00, 0.00,
    2.00, 1.00, 0.00, 0.00,
    2.00, 1.00, 0.00, 0.00,
    2.00, 1.00, 0.00, 0.00,
    2.00, 1.00, 0.00, 0.00,
    2.00, 1.00, 0.00, 0.00,
    3.00, 1.00, 0.00, 0.00,
    3.00, 1.00, 0.00, 0.00,
    3.00, 1.00, 0.00, 0.00,
    3.00, 1.00, 0.00, 0.00,
    3.00, 1.00, 0.00, 0.00,
    3.00, 1.00, 0.00, 0.00,
    3.00, 1.00, 0.00, 0.00,
    4.00, 0.50, 5.00, 0.50,
    4.00, 0.50, 5.00, 0.50,
    4.00, 0.50, 5.00, 0.50,
    1.00, 1.00, 0.00, 0.00,
    1.00, 1.00, 0.00, 0.00,
    4.00, 1.00, 0.00, 0.00,
    4.00, 1.00, 0.00, 0.00,
    4.00, 1.00, 0.00, 0.00,
    5.00, 1.00, 0.00, 0.00,
    5.00, 1.00, 0.00, 0.00,
    5.00, 1.00, 0.00, 0.00,
    5.00, 0.50, 4.00, 0.50,
    5.00, 0.50, 4.00, 0.50,
    5.00, 0.50, 4.00, 0.50,
    1.00, 1.00, 0.00, 0.00,
    1.00, 1.00, 0.00, 0.00,
    1.00, 1.00, 0.00, 0.00
]);

// prettier-ignore
let index_arr = Uint16Array.from([
    24, 12, 5,
    18, 50, 40,
    16, 52, 19,
    16, 19, 22,
    30, 22, 47,
    22, 4, 47,
    30, 47, 1,
    6, 36, 9,
    6, 0, 36,
    36, 3, 9,
    17, 39, 13,
    17, 13, 6,
    49, 43, 37,
    31, 8, 35,
    7, 32, 2,
    51, 14, 40,
    48, 38, 46,
    25, 28, 11,
    45, 1, 47,
    0, 44, 36,
    36, 41, 3,
    34, 15, 29,
    22, 30, 16,
    13, 33, 6,
    10, 27, 21,
    26, 23, 20,
    42, 47, 4,
    9, 17, 6
]);

/* Inverse bind pose matrices:
Root 1.00, 0.00, 0.00, 0.00, 0.00, 1.00, 0.00, 0.00, 0.00, 0.00, 1.00, 0.00, 0.00, -0.63, 0.00, 1.00
Spine 1.00, 0.00, 0.00, 0.00, 0.00, 1.00, 0.00, 0.00, 0.00, 0.00, 1.00, 0.00, 0.00, -1.35, 0.00, 1.00
Arm.L 0.00, 1.00, 0.00, 0.00, -1.00, 0.00, 0.00, 0.00, 0.00, 0.00, 1.00, 0.00, 1.20, -0.30, -0.00, 1.00
Arm.R 0.00, -1.00, 0.00, 0.00, 1.00, 0.00, 0.00, 0.00, -0.00, 0.00, 1.00, 0.00, -1.20, -0.30, -0.00, 1.00
Hip.L -1.00, 0.00, -0.00, 0.00, 0.00, -1.00, -0.00, 0.00, -0.00, -0.00, 1.00, 0.00, 0.15, 0.63, 0.00, 1.00
Hip.R -1.00, -0.00, 0.00, 0.00, -0.00, -1.00, -0.00, 0.00, 0.00, -0.00, 1.00, 0.00, -0.15, 0.63, 0.00, 1.00
*/

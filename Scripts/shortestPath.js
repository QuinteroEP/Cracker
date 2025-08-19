  function minDistance(points) {
    const n = points.length;
    if (n < 2) return null;

    let minDist = Infinity;
    let pair = null;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const [x1, y1] = points[i];
            const [x2, y2] = points[j];

            const dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

            if (dist < minDist) {
                minDist = dist;
                pair = [points[i], points[j]];
            }
        }
    }

    return { minDist, pair };
}

function drawGraph(points, pair) {
    const canvas = document.getElementById("graphCanvas");
    const ctx = canvas.getContext("2d");

    // Clear previous drawings
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Scale & offset for visualization (simple)
    const scale = 60; // adjust scaling for spread
    const offsetX = 50;
    const offsetY = 350;

    // Draw points
    ctx.fillStyle = "blue";
    points.forEach(([x, y]) => {
        const px = offsetX + x * scale;
        const py = offsetY - y * scale; // invert Y for Cartesian look
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillText(`(${x},${y})`, px + 8, py - 8);
    });

    // Draw shortest distance line
    if (pair) {
        const [p1, p2] = pair;
        ctx.strokeStyle = "red";
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(offsetX + p1[0] * scale, offsetY - p1[1] * scale);
        ctx.lineTo(offsetX + p2[0] * scale, offsetY - p2[1] * scale);
        ctx.stroke();
    }
}

document.getElementById("distanceForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Leer los valores del formulario
    const points = [
        [parseFloat(document.getElementById("x1").value), parseFloat(document.getElementById("y1").value)],
        [parseFloat(document.getElementById("x2").value), parseFloat(document.getElementById("y2").value)],
        [parseFloat(document.getElementById("x3").value), parseFloat(document.getElementById("y3").value)]
    ];

    const result = minDistance(points);
    const resultElement = document.getElementById("ResultadoPath");

    if (result) {
        resultElement.textContent =
            `Distancia mínima: ${result.minDist.toFixed(4)} unidades entre ${JSON.stringify(result.pair[0])} y ${JSON.stringify(result.pair[1])}`;
            drawGraph(points, result.pair);
    } else {
        resultElement.textContent = "No hay suficientes puntos.";
    }
});

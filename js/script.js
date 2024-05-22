document.getElementById('triangle-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);

    const area = 0.5 * base * height;
    const perimeter = base + height + Math.sqrt(base*2 + height*2);

    document.getElementById('result').innerHTML = `
        <p>Luas Segitiga: ${area.toFixed(2)}</p>
        <p>Keliling Segitiga: ${perimeter.toFixed(2)}</p>
    `;
});
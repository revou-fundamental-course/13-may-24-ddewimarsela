// ini js
document.addEventListener("DOMContentLoaded", function() {

    const hitungLuasButton = document.getElementById("hitung");
    const resetLuasButton = document.getElementById("reset");
  
    hitungLuasButton.addEventListener("click", function() {
      const alas = parseFloat(document.getElementById("alas").value);
      const tinggi = parseFloat(document.getElementById("tinggi").value);
      const resultElement = document.getElementById("result");
      const prosesElement = document.getElementById("proses");
  
      if (isNaN(alas) || isNaN(tinggi)) {
        resultElement.textContent = "Harap masukkan nilai yang valid untuk alas dan tinggi.";
        prosesElement.textContent = '';
        return;
      }
  
      const luas = 0.5 * alas * tinggi;
      resultElement.textContent = `Luas Segitiga: ${luas}`;
      prosesElement.innerHTML = `Rumus: L = 1/2 x a x t<br>Cara: L = 1/2 x ${alas} x ${tinggi}<br>Hasil: L = ${luas}`;
    });
  
    resetLuasButton.addEventListener("click", function() {
      document.getElementById("alas").value = '';
      document.getElementById("tinggi").value = '';
      document.getElementById("result").textContent = '';
      document.getElementById("proses").textContent = '';
    });
  
   
    const hitungKelilingButton = document.querySelector("#hitungKeliling");
    const resetKelilingButton = document.querySelector("#resetKeliling");
  
    hitungKelilingButton.addEventListener("click", function() {
      const sisiA = parseFloat(document.getElementById("sisiA").value);
      const sisiB = parseFloat(document.getElementById("sisiB").value);
      const sisiC = parseFloat(document.getElementById("sisiC").value);
      const kelilingResultElement = document.getElementById("kelilingResult");
      const kelilingProsesElement = document.getElementById("kelilingProses");
  
      if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
        kelilingResultElement.textContent = "Harap masukkan nilai yang valid untuk ketiga sisi.";
        kelilingProsesElement.textContent = '';
        return;
      }
  
      const keliling = sisiA + sisiB + sisiC;
      kelilingResultElement.textContent = `Keliling Segitiga: ${keliling}`;
      kelilingProsesElement.innerHTML = `Rumus: K = S1 + S2 + S3<br>Cara: K = ${sisiA} + ${sisiB} + ${sisiC}<br>Hasil: K = ${keliling}`;
    });
  
    resetKelilingButton.addEventListener("click", function() {
      document.getElementById("sisiA").value = '';
      document.getElementById("sisiB").value = '';
      document.getElementById("sisiC").value = '';
      document.getElementById("kelilingResult").textContent = '';
      document.getElementById("kelilingProses").textContent = '';
    });
  });
  
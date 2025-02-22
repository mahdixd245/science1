/**************************************
  خرائط لتحويل النصوص إلى جينات مبسطة
***************************************/
const eyeMap = {
    "أحمر (سائد)": "R",
    "أبيض (متنحٍ)": "r"
  };
  
  const bodyMap = {
    "رمادي (سائد)": "G",
    "أسود (متنحٍ)": "g"
  };
  
  const wingMap = {
    "طبيعي (سائد)": "N",
    "متعرج (متنحٍ)": "n"
  };
  
  /***********************************************
    دالة عامة لحساب الاحتمال (مبسطة جدًا)
    - إذا الأب والأم سائدان => 100% سائد
    - إذا الأب والأم متنحيان => 100% متنحٍ
    - إذا أحدهما سائد والآخر متنحٍ => 50%-50%
  ***********************************************/
  function getDistribution(fGene, mGene, domLabel, recLabel) {
    if (fGene === fGene.toUpperCase() && mGene === mGene.toUpperCase()) {
      // كلاهما سائد
      return `100% ${domLabel}`;
    } else if (fGene === fGene.toLowerCase() && mGene === mGene.toLowerCase()) {
      // كلاهما متنحٍ
      return `100% ${recLabel}`;
    } else {
      // أحدهما سائد والآخر متنحٍ
      return `50% ${domLabel} و 50% ${recLabel}`;
    }
  }
  
  function calculateResults() {
    // 1. جلب القيم المختارة من القوائم
    const eyeMaleVal = document.getElementById("eye-male").value;
    const eyeFemaleVal = document.getElementById("eye-female").value;
    const bodyMaleVal = document.getElementById("body-male").value;
    const bodyFemaleVal = document.getElementById("body-female").value;
    const wingMaleVal = document.getElementById("wing-male").value;
    const wingFemaleVal = document.getElementById("wing-female").value;
  
    // 2. تحويل القيم إلى جينات (R/r, G/g, N/n)
    const fatherEyeGene = eyeMap[eyeMaleVal];       // R أو r
    const motherEyeGene = eyeMap[eyeFemaleVal];
    const fatherBodyGene = bodyMap[bodyMaleVal];    // G أو g
    const motherBodyGene = bodyMap[bodyFemaleVal];
    const fatherWingGene = wingMap[wingMaleVal];    // N أو n
    const motherWingGene = wingMap[wingFemaleVal];
  
    // 3. حساب احتمالات كل صفة
    const eyeDistribution = getDistribution(
      fatherEyeGene, 
      motherEyeGene, 
      "أحمر",    // domLabel
      "أبيض"     // recLabel
    );
  
    const bodyDistribution = getDistribution(
      fatherBodyGene, 
      motherBodyGene, 
      "رمادي",   // domLabel
      "أسود"     // recLabel
    );
  
    const wingDistribution = getDistribution(
      fatherWingGene, 
      motherWingGene, 
      "طبيعي",   // domLabel
      "متعرج"    // recLabel
    );
  
    // 4. عرض النتائج بشكل واضح
    const resultsDiv = document.getElementById("results");
    resultsDiv.classList.add("show-results");
    resultsDiv.innerHTML = `
      <p>👁️ <strong>احتمالات لون العين عند الأبناء:</strong> ${eyeDistribution}</p>
      <p>🦟 <strong>احتمالات لون الجسم عند الأبناء:</strong> ${bodyDistribution}</p>
      <p>🦋 <strong>احتمالات شكل الجناح عند الأبناء:</strong> ${wingDistribution}</p>
    `;
  }
  
  
  

  
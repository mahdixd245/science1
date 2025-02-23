document.addEventListener("DOMContentLoaded", function() {
  const eyeMap = {
      "أحمر": "R",
      "أرجواني": "r"
  };

  const bodyMap = {
      "رمادي": "G",
      "أسود": "g"
  };

  const wingMap = {
      "طويلة": "N",
      "أثرية": "n"
  };

  function getDistribution(fGene, mGene, domLabel, recLabel) {
      if (fGene === fGene.toUpperCase() && mGene === mGene.toUpperCase()) {
          return `100% ${domLabel}`;
      } else if (fGene === fGene.toLowerCase() && mGene === mGene.toLowerCase()) {
          return `100% ${recLabel}`;
      } else {
          return `50% ${domLabel} و 50% ${recLabel}`;
      }
  }

  function calculateResults() {
      const eyeMaleVal = document.getElementById("eye-male").value;
      const eyeFemaleVal = document.getElementById("eye-female").value;
      const bodyMaleVal = document.getElementById("body-male").value;
      const bodyFemaleVal = document.getElementById("body-female").value;
      const wingMaleVal = document.getElementById("wing-male").value;
      const wingFemaleVal = document.getElementById("wing-female").value;

      const fatherEyeGene = eyeMap[eyeMaleVal];
      const motherEyeGene = eyeMap[eyeFemaleVal];
      const fatherBodyGene = bodyMap[bodyMaleVal];
      const motherBodyGene = bodyMap[bodyFemaleVal];
      const fatherWingGene = wingMap[wingMaleVal];
      const motherWingGene = wingMap[wingFemaleVal];

      if (!fatherEyeGene || !motherEyeGene || !fatherBodyGene || !motherBodyGene || !fatherWingGene || !motherWingGene) {
          console.error("🚨 خطأ: القيم غير صحيحة!");
          return;
      }

      const eyeDistribution = getDistribution(fatherEyeGene, motherEyeGene, "أحمر", "أرجواني");
      const bodyDistribution = getDistribution(fatherBodyGene, motherBodyGene, "رمادي", "أسود");
      const wingDistribution = getDistribution(fatherWingGene, motherWingGene, "طويلة", "أثرية");

      console.log("🎲 توزيع العين:", eyeDistribution);
      console.log("🎲 توزيع الجسم:", bodyDistribution);
      console.log("🎲 توزيع الأجنحة:", wingDistribution);

      const resultsDiv = document.getElementById("results");
      resultsDiv.classList.add("show-results");
      resultsDiv.innerHTML = `
          <p>👁️ <strong>احتمالات لون العين عند الأبناء:</strong> ${eyeDistribution}</p>
          <p>🦟 <strong>احتمالات لون الجسم عند الأبناء:</strong> ${bodyDistribution}</p>
          <p>🦋 <strong>احتمالات شكل الجناح عند الأبناء:</strong> ${wingDistribution}</p>
      `;
  }

  document.querySelector(".calculate-btn").addEventListener("click", calculateResults);
});

  }
  
  
  

  

document.addEventListener("DOMContentLoaded", () => {
  // 정규식 패턴 정의
  const patterns = {
    name: {
      regex: /^.{1,}$/, // 최소 1글자 이상
      msg: "이름을 입력하세요."
    },
    phone: {
      regex: /^[0-9]{9,}$/,
      msg: "전화번호는 숫자 9자리 이상 입력하세요."
    },
    email: {
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      msg: "이메일은 올바른 형식(example@email.com)으로 입력하세요."
    }
  };

  // [data-validate] 속성 있는 input만 검증
  document.querySelectorAll("[data-validate]").forEach(input => {
    const type = input.dataset.validate;
    if (!patterns[type]) return;

    const p = document.createElement("p");
    p.textContent = patterns[type].msg;
    p.className = "text-red-600 text-sm mt-1 hidden";
    input.insertAdjacentElement("afterend", p);

    input.addEventListener("input", () => {
      if (!patterns[type].regex.test(input.value)) {
        p.classList.remove("hidden");
      } else {
        p.classList.add("hidden");
      }
    });
  });
});

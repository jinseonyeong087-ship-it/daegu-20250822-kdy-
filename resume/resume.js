// 정규식 패턴 정의
const patterns = {
  name: {
    regex: /.+/,
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

// input 요소 탐색
document.querySelectorAll("[data-validate]").forEach(input => {
  const type = input.dataset.validate;
  if (!patterns[type]) return; // 패턴 없는 건 무시

  // wrapper 생성
  const wrapper = document.createElement("div");
  wrapper.className = "relative"; // error-msg absolute 배치 기준

  // input 감싸기
  input.parentNode.insertBefore(wrapper, input);
  wrapper.appendChild(input);

  // 에러 메시지 요소 생성
  const p = document.createElement("p");
  p.textContent = patterns[type].msg;
  p.className = "absolute left-0 top-full mt-1 text-red-600 text-sm hidden";
  wrapper.appendChild(p);

  // 실시간 검증
  input.addEventListener("input", () => {
    if (!patterns[type].regex.test(input.value.trim())) {
      p.classList.remove("hidden");
    } else {
      p.classList.add("hidden");
    }
  });
});

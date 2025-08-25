const patterns = {
      phone: /^[0-9]{9,}$/, // 숫자 9자리 이상
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // 기본 이메일 형식
    };

    document.querySelectorAll("[data-validate]").forEach(input => {
      input.addEventListener("input", () => {
        const type = input.dataset.validate;
        const errorMsg = input.nextElementSibling;
        if (!patterns[type].test(input.value)) {
          errorMsg.classList.remove("hidden");
        } else {
          errorMsg.classList.add("hidden");
        }
      });
    });
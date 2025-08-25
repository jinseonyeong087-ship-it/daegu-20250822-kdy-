// Tailwind class presets
const cls = {
  section: "mb-8",
  sectionTitle: "text-xl font-semibold mb-4",
  input: "w-full border rounded-lg p-2 focus:ring focus:ring-blue-300",
  grid2: "grid grid-cols-1 md:grid-cols-2 gap-6",
  grid3: "grid grid-cols-1 md:grid-cols-3 gap-4",
  textarea: "w-full border rounded-lg p-2 focus:ring focus:ring-blue-300",
  btnReset: "px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400",
  btnSubmit: "px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700",
};

// 버튼 라벨 텍스트
const labels = {
  reset: "초기화",
  submit: "제출하기",
};

// HTML 템플릿 생성
document.getElementById("resume-container").innerHTML = `
  <div class="bg-white shadow-lg rounded-xl p-8">
    <h1 class="text-2xl font-bold mb-6 text-center">이력서</h1>
    <form id="resume-form">

      <!-- 개인정보 -->
      <section class="${cls.section}">
        <h2 class="${cls.sectionTitle}">개인정보</h2>
        <div class="${cls.grid2}">
         <input type="text" class="${cls.input}" placeholder="이름" data-validate="name">
          <input type="date" class="${cls.input}">
          <input type="tel" class="${cls.input}" placeholder="01012345678" data-validate="phone">
          <input type="email" class="${cls.input}" placeholder="example@email.com" data-validate="email">
        </div>
      </section>

      <!-- 학력 -->
      <section class="${cls.section}">
        <h2 class="${cls.sectionTitle}">학력</h2>
        <div class="space-y-4">
          <div class="${cls.grid3}">
            <input type="text" class="${cls.input}" placeholder="학교명">
            <input type="text" class="${cls.input}" placeholder="전공">
            <input type="text" class="${cls.input}" placeholder="졸업년도">
          </div>
        </div>
      </section>

      <!-- 경력 -->
      <section class="${cls.section}">
        <h2 class="${cls.sectionTitle}">경력</h2>
        <div class="space-y-4">
          <div class="${cls.grid3}">
            <input type="text" class="${cls.input}" placeholder="회사명">
            <input type="text" class="${cls.input}" placeholder="직무">
            <input type="text" class="${cls.input}" placeholder="근무기간 (예: 2019-2023)">
          </div>
        </div>
      </section>

      <!-- 기술 스택 -->
      <section class="${cls.section}">
        <h2 class="${cls.sectionTitle}">기술 스택</h2>
        <textarea class="${cls.textarea}" rows="4" placeholder="예: JavaScript, React, Node.js, AWS..."></textarea>
      </section>

      <!-- 자기소개 -->
      <section class="${cls.section}">
        <h2 class="${cls.sectionTitle}">자기소개</h2>
        <textarea class="${cls.textarea}" rows="6" placeholder="자기소개를 입력하세요"></textarea>
      </section>

      <!-- 버튼 -->
      <div class="flex justify-end gap-4">
        <button type="reset" class="${cls.btnReset}">${labels.reset}</button>
        <button type="submit" class="${cls.btnSubmit}">${labels.submit}</button>
      </div>
    </form>
  </div>
`;

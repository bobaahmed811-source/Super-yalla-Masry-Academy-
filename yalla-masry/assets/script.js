// هذا الملف سيتوسع لاحقاً لربط Firebase
document.addEventListener('DOMContentLoaded', () => {
    console.log("نظام أكاديمية يلا مصري جاهز للعمل 🏛️");
});

// وظيفة تسجيل الخروج (سنحتاجها في لوحة التحكم)
function logout() {
    localStorage.removeItem('userLoggedIn');
    window.location.href = 'index.html';
}

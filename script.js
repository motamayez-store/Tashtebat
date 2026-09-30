// كود ربط موقع أبو مصطفى بالواتساب
function sendToWhatsApp() {
    // رقم أبو مصطفى (مسبوق بكود مصر 20)
    const myNumber = "201008739515";

    // تجهيز نص رسالة ترحيبية تلقائية
    const message = "السلام عليكم يا أبو مصطفى.. كنت محتاج استفسر عن خدمات التشطيبات والديكورات المتاحة عندكم. 🏠✨";

    // فتح رابط الواتساب
    const url = "https://wa.me/" + myNumber + "?text=" + encodeURIComponent(message);
    
    window.open(url, '_blank');
}

// إضافة وظيفة الاتصال المباشر
function callNow() {
    window.location.href = "tel:+201008739515";
}
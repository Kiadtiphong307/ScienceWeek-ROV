<template>
  <main>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl py-6 shadow-lg rounded-lg">
        <div class="container">
          <h2 class="highlight text-2xl">สถานที่ติดต่อสอบถามและรับสมัครผ่านทางระบบออนไลน์</h2>
          <h3>สัปดาห์วิทยาศาสตร์แห่งชาติภาคเหนือส่วนบนประจำปี 2567</h3>

          <div class="contact-info">
            <p><strong>1. ภาคเหนือส่วนบน</strong></p>
            <p>
              คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้ (คุณช่อทิพย์ สิทธิ์ หมายเลขโทรศัพท์ 053-873890 ต่อ
              25) ติดต่อวันและเวลาราชการ ประชาสัมพันธ์รายละเอียดที่เพจ
              <a href="https://www.facebook.com/computersciencemju">วิทยาการคอมพิวเตอร์ ม.แม่โจ้</a>
            </p>
          </div>

          <p><strong>2. ช่องทางติดต่อสอบถาม</strong></p>

          <div class="contact-section">
            <div class="contact-info">
              <p>2.1 ระดับมัธยมศึกษาตอนปลาย หรือ ระดับประกาศนียบัตรวิชาชีพ</p>
              <p class="line-openchat">LINE OPENCHAT</p>
              <p>MjuScienceWeek E-Sport ม.ปลาย/ปวช.</p>
              <div class="qr-code">
                <img src="../assets/ระดับมอต้น.jpg" alt="QR Code" />
              </div>
              <div><a href="https://maejo.link/Z2nd">https://maejo.link/Z2nd</a></div>
            </div>

            <div class="contact-info">
              <p>2.2 ระดับทั่วไป</p>
              <p class="line-openchat">LINE OPENCHAT</p>
              <p>True5G Esports Tournament 2024 สนามแข่งขันเชียงใหม่</p>
              <div class="qr-code">
                <img src="../assets/ระดับทั่วไป.jpg" alt="QR Code" />
              </div>
              <div><a href="https://maejo.link/k7hD">https://maejo.link/k7hD</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
body {
  font-family: Arial, sans-serif;
}
.highlight {
  background-color: yellow;
}
.container {
  margin: 0 auto;
}
.contact-info,
.qr-code {
  margin: 20px 0;
}
.qr-code img {
  width: 200px;
}
.line-openchat {
  color: green;
  font-weight: bold;
}
a {
  color: blue;
  text-decoration: none;
}
.contact-section {
  display: flex;
  justify-content: space-between;
}
.contact-info {
  padding-top: 5px;
  flex: 1;
  margin-right: 20px;
}
.contact-info:last-child {
  margin-right: 0;
}
.qr-code {
  text-align: center;
}
</style>

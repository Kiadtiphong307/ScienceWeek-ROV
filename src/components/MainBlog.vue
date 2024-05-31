<script>
export default {
  name: 'CompetitionRules'
}

</script>

<template>
  <main>
    <div id="banner"></div>
    <div class="pt-24 pb-10">
      <div class="mx-auto max-w-6xl sm:px-6 lg:px-4">
        <div class="mx-auto max-w-6xl rounded-lg">
          <!-- image banner -->
          <div class="mx-auto max-w-7xl sm:px-6 lg:px-4 pb-6">
            <div class="mx-auto max-w-7xl rounded-lg">
              <div class="overflow-hidden">
                <a href="#register" title="click">
                  <img
                    src="../assets/Banner_qr.svg"
                    class="w-full h-full scale-90 hover:scale-75 rounded-lg transition duration-1000 ease-in-out"
                  />
                </a>
              </div>
            </div>
          </div>

          <div class="mx-auto max-w-7xl sm:px-6 lg:px-4">
            <div class="mx-auto max-w-7xl rounded-lg">
              <!-- register menu -->

              <div class="register-menu" id="register">
                <div class="pt-52 pb-48">
                  <div class="center hover:scale-110 transition duration-1000 ease-in-out">
                    <p class="text-red-500 noto-sans-thai-bold text-6xl">E-Sports Science Week67</p>

                    <p class="text-red-500 noto-sans-thai-bold text-5xl">
                      งานสัปดาห์วิทยาศาสตร์แห่งชาติ <br />ภาคเหนือตอนบน ประจำปี 2567
                    </p>
                    <p class="text-green-500 noto-sans-thai-bold text-xl">
                      สาขาวิชาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้
                    </p>
                  </div>

                  <!-- button register -->
                  <div class="flex justify-center pt-4">
                    <!-- ระดับทั่วไป -->
                    <button
                      class="relative bg-gradient-to-r bg-green-500 rounded-lg p-2 text-white hover:from-blue-600 hover:to-violet-600 hover:scale-110 text-lg transition duration-700 ease-in-out mx-4"
                    >
                      <div>
                        <a href="#esports-general" class="text-white">สมัครแข่งขันระดับทั่วไป </a>
                      </div>
                    </button>
                    <!-- ระดับมัธยม และ ปวช. -->
                    <button
                      class="relative bg-gradient-to-r bg-green-500 rounded-lg p-2 text-white hover:from-blue-600 hover:to-violet-600 hover:scale-110 text-lg transition duration-700 ease-in-out mx-4"
                    >
                      <div class="">
                        <a href="#esports-highschool-vocational" class="text-white"
                          >สมัครแข่งขันระดับม.ปลาย หรือปวช.</a
                        >
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="esports-general"></div>

    <div class="mx-auto max-w-6xl py-6 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl py-6 shadow-lg rounded-lg">
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="mx-auto max-w-7xl rounded-lg">
            <!-- สมัครรูปแบบทั่วไป -->
            <div class="mx-auto max-w-5xl py-6 sm:px-6 lg:px-8">
              <div class="mx-auto max-w-5xl py-6 rounded-lg">
                <div class="section-title noto-sans-thai-bold">
                  1.รายละเอียดการแข่งขัน E-Sports (ROV) ประจำปี 2567 ระดับทั่วไป
                </div>
                <div class="mx-8">
                  <h2 class="noto-sans-thai-bold">
                    1.1. ระดับทั่วไป (ประเภทบุคคลทั่วไป ไม่จำกัดอายุ ไม่จำกัดเพศ)
                  </h2>
                  <p class="text-red-500">(รับสมัครเพียง 32 ทีม เท่านั้น)</p>
                  <ul>
                    <li>
                      เป็นการแข่งขันของ True5G Esports Tournament 2024 สนามแข่งขันเชียงใหม่
                      โดยผู้ชนะเลิศลำดับที่ 1-2 จะเป็นตัวแทนเข้าแข่งขันรอบคัดเลือกตัวแทนจังหวัด
                      Winter (Tournament) โดยไม่ต้องเสียค่าเติมแพ็คเกจ
                    </li>
                    <li>สมัครเป็นทีม ทีมละ 5 คน และสำรอง 1 คน โดยไม่จำกัดเพศ รวมเป็นทีมละ 6 คน</li>
                    <li>
                      ผู้เข้าร่วมแข่งขันทุกคนจะต้องเตรียมบัตรประชาชนหรือสำเนาบัตรประชาชน จำนวน 1 ชุด
                      มาด้วยในวันแข่งขัน
                    </li>
                    <li>
                      ผู้สมัครแข่งขันทุกคนจะต้องรับซิมจากทางบริษัททรู และเติมเงิน สมัครแพ็คเน็ต 100
                      บาท ต่อคน และใช้ซิมของบริษัททรูในการแข่งขันเท่านั้น
                      โดยผู้เข้าแข่งขันสามารถมารับและลงทะเบียนซิมจากบริษัททรูในวันเสาร์ที่ 17
                      สิงหาคม 2567 เวลา 9.00-16.00 น. ณ ลานใต้ถุนอาคารจุฬาภรณ์ คณะวิทยาศาสตร์
                      มหาวิทยาลัยแม่โจ้
                    </li>
                  </ul>
                  <h2 class="noto-sans-thai-bold">1.2 รูปแบบการแข่งขัน</h2>
                  <ul>
                    <li>
                      1.2.1 การจับคู่แข่งขันจะเป็นแบบสุ่ม โดยจัดลงตารางสำเร็จ
                      เพื่อคัดเลือกและแบ่งสายทีมแข่งขัน
                    </li>
                    <li>1.2.2 แข่งขันในโหมด 5V5</li>
                    <li>
                      1.2.3 อุปกรณ์การแข่งขัน
                      <ul>
                        <li>ผู้แข่งขันจะต้องใช้โทรศัพท์มือถือส่วนตัวเท่านั้น</li>
                        <li>ไม่อนุญาตให้ใช้ Tablet/iPad</li>
                        <li>สามารถใช้หูฟังส่วนตัวได้</li>
                      </ul>
                    </li>
                    <li>
                      1.2.4 เกณฑ์การแข่งขันในระดับทั่วไป
                      <ul>
                        <li>รอบคัดเลือก แบบแพ้ชนะในตาเดียว (Death match)</li>
                        <li>รอบ 8 ทีมสุดท้าย แข่งขันแบบชนะ 2 ใน 3 Normal pick ban</li>
                        <li>รอบชิงชนะเลิศ แข่งขันแบบชนะ 2 ใน 3 Global pick ban</li>
                      </ul>
                    </li>
                    <li>
                      1.2.5 ห้ามใช้กริยา, ท่าทาง หรือ คำพูดที่ไม่เหมาะสมตลอดการแข่งขัน
                      มีโทษปรับแพ้ทันที
                    </li>
                    <li>1.2.6 ผู้เข้าแข่งขัน 1 คน สามารถเข้าร่วมทีมได้เพียง 1 ทีมเท่านั้น</li>
                  </ul>
                  <h2 class="noto-sans-thai-bold">1.3 เงินรางวัล และเกียรติบัตร(ระดับทั่วไป)</h2>
                  <table class="table-fixed">
                    <thead>
                      <tr>
                        <th>รางวัล</th>
                        <th>จำนวนเงิน</th>
                        <th>รายละเอียด</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>รางวัลที่ 1</td>
                        <td>3,000 บาท</td>
                        <td>พร้อมใบประกาศเกียรติคุณและของที่ระลึกจากบริษัททรู</td>
                      </tr>
                      <tr>
                        <td>รางวัลที่ 2</td>
                        <td>2,000 บาท</td>
                        <td>พร้อมใบประกาศเกียรติคุณและของที่ระลึกจากบริษัททรู</td>
                      </tr>
                      <tr>
                        <td>รางวัลที่ 3</td>
                        <td>1,000 บาท</td>
                        <td>พร้อมใบประกาศเกียรติคุณและของที่ระลึกจากบริษัททรู</td>
                      </tr>
                      <tr>
                        <td>รางวัลชมเชย 3 รางวัล</td>
                        <td>600 บาท</td>
                        <td>พร้อมใบประกาศเกียรติคุณและของที่ระลึกจากบริษัททรู</td>
                      </tr>
                    </tbody>
                  </table>

                  <h2 class="noto-sans-thai-bold">1.4 คณะกรรมการตัดสิน</h2>
                  <ul>
                    <li>
                      คณาจารย์หลักสูตรฯสาขาวิชาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้
                      ของศูนย์ภาคที่จัดกิจกรรม
                    </li>
                    <li>เจ้าหน้าที่จากทางบริษัททรู คอร์ปอเรชั่น จำกัด (มหาชน)</li>
                  </ul>
                  <p class="text-red-500">
                    *** หมายเหตุ: การตัดสินของคณะกรรมการตัดสินถือเป็นที่สิ้นสุด
                  </p>

                  <h2 class="noto-sans-thai-bold">1.5 กิจกรรม สำหรับระดับทั่วไป</h2>
                  <h2 class="noto-sans-thai-bold"></h2>
                  <table class="table-auto">
                    <tr>
                      <th>วันที่</th>
                      <th>กิจกรรม</th>
                    </tr>
                    <tr>
                      <td>วันที่ 1 มิถุนายน – 15 สิงหาคม 2567</td>
                      <td>
                        รับสมัครในระบบออนไลน์ผ่านเว็บไซต์
                        <a href="http://www.nsru.ac.th" target="_blank"
                          >สัปดาห์วิทยาศาสตร์แห่งชาติภาคเหนือออนไลน์ประจำปี 2567</a
                        >
                        <span class="highlight"
                          >(โดยที่ทีมสมัครแข่งขันจะต้องอัปโหลดแบบฟอร์มใบสมัครเพื่อยืนยันการเข้าร่วมแข่งขันภายใน
                          3 วันหลังจากสมัครออนไลน์
                          โดยยืนยันสถานะการเข้าร่วมผ่านการส่งลายเซ็นจากเจ้าของสถานบันรับรอง
                          หากไม่ส่งใบสมัครภายในจะถือว่าสละสิทธิ์การเข้าร่วมแข่งขัน)</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td>วันที่ 16 สิงหาคม 2567</td>
                      <td>ประกาศรายชื่อทีมที่มีสิทธิ์แข่งขัน</td>
                    </tr>
                    <tr>
                      <td>วันที่ 17 สิงหาคม 2567</td>
                      <td>
                        ผู้สมัครเข้าร่วมแข่งขันทุกคนบัตรประชาชนมารับและลงทะเบียนยังสถานที่แข่ง<br />
                        เวลา 9.00-16.00 น. ณ ลานใต้ตึกอาคารจุฬาภรณ์ คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้
                      </td>
                    </tr>
                    <tr class="important-dates">
                      <td>วันที่ 18 สิงหาคม 2567</td>
                      <td>
                        วันแข่งขันระดับทั่วไป<br />ณ ห้องปฏิบัติการคอมพิวเตอร์ 3203 ชั้น 2
                        อาคารจุฬาภรณ์ คณะวิทยาศาสตร์
                      </td>
                    </tr>
                  </table>

                  <div>
                    <h2 class="noto-sans-thai-bold">
                      1.6 กำหนดการแข่งขันวันที่ 18 สิงหาคม 2567 ระดับทั่วไป
                    </h2>
                  </div>
                  <table class="table-auto">
                    <tr>
                      <th>เวลา</th>
                      <th>กิจกรรม</th>
                      <th>สถานที่</th>
                    </tr>
                    <tr>
                      <td>8.00-8.30 น.</td>
                      <td>รายงานตัวและลงทะเบียน</td>
                      <td>ห้องปฏิบัติการคอมพิวเตอร์ 3203 ชั้น 2 อาคารจุฬาภรณฯ คณะวิทยาศาสตร์</td>
                    </tr>
                    <tr>
                      <td>8.30-9.00 น.</td>
                      <td>
                        ชี้แจงรายละเอียดการแข่งขันให้กับผู้สมัคร
                        โดยคณะกรรมการคณะวิทยาการคอมพิวเตอร์และบริษัทผู้จัด ชี้แจงและทดสอบการใช้งาน
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>9.00-17.00 น.</td>
                      <td>ดำเนินการแข่งขัน E-Sports (ROV) ระดับทั่วไป</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>17.00 น. เป็นต้นไป</td>
                      <td>
                        คณะกรรมการตัดสินและประกาศผลการแข่งขันพร้อมมอบรางวัลและใบประกาศเกียรติคุณและของที่ระลึกจากบริษัทผู้ให้การสนับสนุน
                      </td>
                      <td>ห้องแข่งขัน</td>
                    </tr>
                  </table>

                  <!-- button register ทั่วไป-->
                  <div class="flex justify-left pt-6">
                    <!-- ระดับทั่วไป -->
                    <button
                      class="relative bg-gradient-to-r bg-green-500 rounded-lg p-2 text-white hover:from-blue-600 hover:to-violet-600 hover:scale-110 text-lg transition duration-700 ease-in-out mx-4"
                    >
                      <div>
                        <a
                          href="https://docs.google.com/forms/d/e/1FAIpQLSesnYCK4IuDiIU0S8vhzvIRUh-wWZOt-6hiANgefEtOxFY85Q/viewform"
                          class="text-white"
                          target="_blank"
                          >สมัครแข่งขันระดับทั่วไป(Online)
                        </a>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div id="esports-highschool-vocational" class="pt-11"></div>
            <div class="mx-auto max-w-5xl py-6 sm:px-6 lg:px-8">
              <div class="mx-auto max-w-5xl py-6 rounded-lg">
                <div class="section-title noto-sans-thai-bold">
                  2.รายละเอียดการแข่งขัน E-Sports (ROV) ประจำปี 2567 ระดับมัธยมศึกษาตอนปลาย หรือ
                  ระดับประกาศนียบัตรวิชาชีพ
                </div>
                <div class="mx-8">
                  <h2 class="noto-sans-thai-bold">
                    2.1 ระดับมัธยมศึกษาตอนปลาย หรือ ระดับประกาศนียบัตรวิชาชีพ
                  </h2>
                  <p class="text-red-500">(รับสมัครเพียง 16 ทีม เท่านั้น)</p>
                  <ul>
                    <li>แต่ละสถาบันสามารถส่งทีมเข้าร่วมแข่งขันได้เพียง 1 ทีม ต่อ 1 สถาบัน</li>
                    <li>
                      ผู้เข้าร่วมแข่งขันทุกคนจะต้องเตรียมบัตรประชาชนหรือสำเนาบัตรประชาชน จำนวน 1 ชุด
                      มาด้วยในวันแข่งขัน
                    </li>
                    <li>
                      ผู้เข้าร่วมแข่งขันไม่จำเป็นต้องรับซิมจากทางบริษัททรูและสมัครแพ็คเน็ตใด ๆ
                    </li>
                    <li>
                      สิทธิพิเศษ: ผู้ชนะเลิศลำดับที่ 1
                      จะเป็นตัวแทนเข้าร่วมแข่งขันรอบคัดเลือกตัวแทนจังหวัด Winter (Tournament)
                      โดยไม่ต้องเสียค่าเติมแพ็คเกจจ้
                    </li>
                  </ul>
                  <h2 class="noto-sans-thai-bold">2.2 รูปแบบการแข่งขัน</h2>
                  <ul>
                    <li>
                      2.2.1 การจับคู่แข่งขันจะเป็นแบบสุ่ม โดยจัดลงตารางสำเร็จ
                      เพื่อคัดเลือกและแบ่งสายทีมแข่งขัน
                    </li>
                    <li>2.2.2 แข่งขันในโหมด 5V5</li>
                    <li>
                      2.2.3 อุปกรณ์การแข่งขันของทั้ง
                      <ul>
                        <li>ผู้แข่งขันจะต้องใช้โทรศัพท์มือถือส่วนตัวเท่านั้น</li>
                        <li>ไม่อนุญาตให้ใช้ Tablet/iPad</li>
                        <li>สามารถใช้หูฟังส่วนตัวได้</li>
                      </ul>
                    </li>
                    <li>
                      2.2.4 เกณฑ์การแข่งขันในระดับมัธยมศึกษาตอนปลาย หรือ ระดับประกาศนียบัตรวิชาชีพ
                      <ul>
                        <li>รอบคัดเลือก แบบแพ้ชนะในตาเดียว (Death match)</li>
                        <li>รอบชิงชนะเลิศ แข่งขันแบบชนะ 2 ใน 3 Global pick ban</li>
                      </ul>
                    </li>
                    <li>
                      2.2.5 ห้ามใช้กริยา, ท่าทาง หรือ คำพูดที่ไม่เหมาะสมตลอดการแข่งขัน
                      มีโทษปรับแพ้ทันที
                    </li>
                    <li>2.2.6 ผู้เข้าแข่งขัน 1 คน สามารถเข้าร่วมทีมได้เพียง 1 ทีมเท่านั้น</li>
                  </ul>
                  <h2 class="noto-sans-thai-bold">
                    2.3 เงินรางวัล และเกียรติบัตร (ระดับมัธยมศึกษาตอนปลาย หรือ
                    ระดับประกาศนียบัตรวิชาชีพ)
                  </h2>
                  <table class="table-fixed">
                    <thead>
                      <tr>
                        <th>รางวัล</th>
                        <th>จำนวนเงิน</th>
                        <th>รายละเอียด</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>รางวัลที่ 1</td>
                        <td>3,000 บาท</td>
                        <td>พร้อมใบประกาศเกียรติคุณและของที่ระลึกจากบริษัททรู</td>
                      </tr>
                      <tr>
                        <td>รางวัลที่ 2</td>
                        <td>2,000 บาท</td>
                        <td>พร้อมใบประกาศเกียรติคุณและของที่ระลึกจากบริษัททรู</td>
                      </tr>
                      <tr>
                        <td>รางวัลที่ 3</td>
                        <td>1,000 บาท</td>
                        <td>พร้อมใบประกาศเกียรติคุณและของที่ระลึกจากบริษัททรู</td>
                      </tr>
                      <tr>
                        <td>รางวัลชมเชย 3 รางวัล</td>
                        <td>600 บาท</td>
                        <td>พร้อมใบประกาศเกียรติคุณและของที่ระลึกจากบริษัททรู</td>
                      </tr>
                    </tbody>
                  </table>
                  <p class="highlight-red">
                    *** หมายเหตุ:
                    ทุกทีมที่เข้าร่วมการแข่งขันจะได้รับใบประกาศเกียรติคุณเข้าร่วมการแข่งขันทุกคน
                  </p>
                  <h2 class="noto-sans-thai-bold">2.4 คณะกรรมการตัดสิน</h2>
                  <ul>
                    <li>
                      คณาจารย์หลักสูตรฯสาขาวิชาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้
                      ของศูนย์ภาคที่จัดกิจกรรม
                    </li>
                    <li>เจ้าหน้าที่จากทางบริษัททรู คอร์ปอเรชั่น จำกัด (มหาชน)</li>
                  </ul>
                  <p class="text-red-500">
                    *** หมายเหตุ: การตัดสินของคณะกรรมการตัดสินถือเป็นที่สิ้นสุด
                  </p>

                  <h2 class="noto-sans-thai-bold">
                    2.5 กิจกรรม ระดับมัธยมศึกษาตอนปลาย หรือ ระดับประกาศนียบัตรวิชาชีพ
                  </h2>
                  <h2 class="noto-sans-thai-bold"></h2>
                  <table class="table-auto">
                    <tr>
                      <th>วันที่</th>
                      <th>กิจกรรม</th>
                    </tr>
                    <tr>
                      <td>วันที่ 1 - 15 มิถุนายน 2567</td>
                      <td>
                        รับสมัครในระบบออนไลน์ผ่านเว็บไซต์
                        <a target="_blank">สัปดาห์วิทยาศาสตร์แห่งชาติภาคเหนือออนไลน์ประจำปี 2567</a>
                        <span class="highlight"
                          >รับสมัครในระบบออนไลน์ผ่านเว็บไซต์
                          สัปดาห์วิทยาศาสตร์แห่งชาติภาคเหนือออนไลน์ประจำปี 2567
                          (โดยที่ทีมสมัครแข่งขันจะต้องอัปโหลดแบบฟอร์มใบสมัครเพื่อยืนยันการเข้าร่วมแข่งขันภายใน
                          3 วันหลังจากสมัครออนไลน์
                          โดยยืนยันสถานะการเข้าร่วมผ่านการส่งลายเซ็นจากเจ้าของสถานบันรับรอง
                          หากไม่ส่งใบสมัครภายในจะถือว่าสละสิทธิ์การเข้าร่วมแข่งขัน)</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td>วันที่ 20 มิถุนายน 2567</td>
                      <td>ประกาศรายชื่อทีมที่มีสิทธิ์แข่งขัน</td>
                    </tr>
                    <tr>
                      <td>วันที่ 19 สิงหาคม 2567</td>
                      <td>
                        วันแข่งขันระดับมัธยมศึกษาตอนปลาย หรือ ระดับประกาศนียบัตรวิชาชีพ<br />ณ
                        ห้องปฏิบัติการคอมพิวเตอร์ 3203 ชั้น 2 อาคารจุฬาภรณ์ คณะวิทยาศาสตร์
                      </td>
                    </tr>
                  </table>

                  <div>
                    <h2 class="noto-sans-thai-bold">
                      2.6 กำหนดการแข่งขันวันที่ 19 สิงหาคม 2567 ระดับมัธยมศึกษาตอนปลาย หรือ
                      ระดับประกาศนียบัตรวิชาชีพ
                    </h2>
                  </div>
                  <table class="table-auto">
                    <tr>
                      <th>เวลา</th>
                      <th>กิจกรรม</th>
                      <th>สถานที่</th>
                    </tr>
                    <tr>
                      <td>8.00-8.30 น.</td>
                      <td>รายงานตัวและลงทะเบียน</td>
                      <td>ห้องปฏิบัติการคอมพิวเตอร์ 3203 ชั้น 2 อาคารจุฬาภรณฯ คณะวิทยาศาสตร์</td>
                    </tr>
                    <tr>
                      <td>8.30-9.00 น.</td>
                      <td>
                        ชี้แจงรายละเอียดการแข่งขันให้กับผู้สมัคร
                        โดยคณะกรรมการคณะวิทยาการคอมพิวเตอร์และบริษัทผู้จัด ชี้แจงและทดสอบการใช้งาน
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>9.00-12.00 น.</td>
                      <td>ดำเนินการแข่งขัน E-Sports (ROV) ระดับทั่วไป</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>13.00 น. เป็นต้นไป</td>
                      <td>
                        คณะกรรมการตัดสินและประกาศผลการแข่งขันพร้อมมอบรางวัลและใบประกาศเกียรติคุณและของที่ระลึกจากบริษัทผู้ให้การสนับสนุน
                      </td>
                      <td>ห้องแข่งขัน</td>
                    </tr>
                  </table>

                  <!-- button register มัธยม หริอปวช.-->
                  <div class="flex justify-left pt-6 space-x-4">
                    <!-- มัธยม หริอปวช. -->

                    <button
                      class="relative bg-gradient-to-r bg-green-500 rounded-lg p-2 text-white hover:from-blue-600 hover:to-violet-600 hover:scale-110 transition duration-700 ease-in-out mx-2"
                    >
                      <div>
                        <a
                          href="https://docs.google.com/forms/d/e/1FAIpQLSevw6H0MsVRWEj0a_bxNl2_JGk7-JaP9A0nsUrNTfHlsz4W7g/viewform"
                          class="text-white"
                          target="_blank"
                          >สมัครแข่งขันระดับม.ปลาย หรือปวช.(Online)
                        </a>
                      </div>
                    </button>

                    <button
                      class="relative bg-gradient-to-r bg-blue-500 rounded-lg p-2 text-white hover:from-blue-600 hover:to-violet-600 hover:scale-110 text-lg transition duration-700 ease-in-out mx-2"
                    >
                      <div>
                        <a href="https://maejo.link/fX6F" class="text-white" target="_blank"
                          >อัพโหลดยืนยันสิทธิ์การสมัคร
                        </a>
                      </div>
                    </button>
                  </div>

                  <p class="text-red-500 pt-5">
                    *** หมายเหตุ: อัพโหลดแบบฟอร์มใบสมัครเพื่อยืนยันการเข้า ร่วมแข่งขันภายใน 3
                    วันหลังจากสมัครออนไลน์ โดยมีลายเซ็นอาจารย์ที่ปรึกษาทีม และ
                    ลายเซ็นจากเจ้าของสถาบันรับรอง
                    หากไม่ส่งใบสมัครยืนยันจะถือว่าสละสิทธิ์การเข้าร่วมแข่งขัน
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- </div>
            </div>
          </div>
        </div> -->

        <div class="pt-14" id="contact"></div>
        <div class="mx-auto max-w-6xl py-6 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-6xl py-6 rounded-lg">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div class="mx-auto max-w-7xl rounded-lg">
                <!-- conect open chat -->

                <div class="section-title noto-sans-thai-bold">
                  สถานที่ติดต่อสอบถามและรับสมัครผ่านทาง ระบบออนไลน์
                </div>
                <div class="mx-8">
                  <div>
                    <div>สัปดาห์วิทยาศาสตร์แห่งชาติภาคเหนือส่วนบนประจำปี 2567</div>
                    <div><strong>1. ภาคเหนือส่วนบน</strong></div>
                    <div>
                      คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้ (คุณช่อทิพย์ สิทธิ์ หมายเลขโทรศัพท์
                      053-873890 ต่อ 25) ติดต่อวันและเวลาราชการ ประชาสัมพันธ์รายละเอียดที่เพจ
                      <a href="https://www.facebook.com/computersciencemju" target="_blank"
                        >วิทยาการคอมพิวเตอร์ ม.แม่โจ้</a
                      >

                      <div class="mt-4">
                        สัปดาห์วิทยาศาสตร์แห่งชาติภาคเหนือส่วนบนประจำปี 2567 1. ภาคเหนือส่วนบน
                        คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้ (คุย่อทิพย์ สิทธิ์ หมายเลขโทรศัพท์
                        053-873890 ต่อ 25) ติดต่อวันและเวลาราชการ ประชาสัมพันธ์รายละเอียดที่เพจ
                        <a href="https://example.com" target="_blank" class="text-blue-600"
                          >วิทยาการคอมพิวเตอร์ ม.แม่โจ้</a
                        >
                      </div>

                      <div class="mt-4">
                        <div>2. ช่องทางติดต่อสอบถาม</div>
                        <div class="flex flex-col md:flex-row justify-between mt-4">
                          <div class="md:w-1/2">
                            <div>2.1 ระดับมัธยมศึกษาตอนปลาย หรือ ระดับประกาศนียบัตรวิชาชีพ</div>
                            <div class="text-green-600">LINE OPENCHAT</div>
                            <div>MjuScienceWeek E-Sport ม.ปลาย/ปวช.</div>
                            <div class="qr-code mt-2">
                              <img src="../assets/QR_2.jpg" alt="QR Code" class="w-56 max-w-xs" />
                            </div>
                            <div>
                              <a
                                href="https://maejo.link/Z2nd"
                                target="_blank"
                                class="text-blue-600"
                                >https://maejo.link/Z2nd</a
                              >
                            </div>
                          </div>

                          <div class="md:w-1/2">
                            <div>2.2 ระดับทั่วไป</div>
                            <div class="text-green-600">LINE OPENCHAT</div>
                            <p>True5G Esports Tournament 2024 สนามแข่งขันเชียงใหม่</p>
                            <div class="qr-code mt-2">
                              <img src="../assets/QR_1.jpg " alt="QR Code" class="w-56 max-w-xs" />
                            </div>
                            <div>
                              <a
                                href="https://maejo.link/k7hD"
                                target="_blank"
                                class="text-blue-600"
                                >https://maejo.link/k7hD</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- หมายเหตุ -->
        <div class="mx-auto max-w-6xl sm:px-6 lg:px-8">
          <div class="mx-auto max-w-6xl rounded-lg">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div class="mx-auto max-w-7xl rounded-lg">
                <div class="mx-8">
                  <p class="note center text-lg pt-2">
                    *** หมายเหตุ: ผู้ที่เข้าร่วมแข่งขันและอาจารย์ที่ปรึกษาระดับมัธยมศึกษาตอนปลาย
                    หรือ
                    ระดับประกาศนียบัตรวิชาชีพที่ได้รับรางวัลใบประกาศเกียรติคุณสามารถติดต่อขอทำบัตรนักกีฬาระดับชาติได้ภายในงาน
                    หรือภายหลังผ่านเว็บไซต์ของสาขาวิทยาการคอมพิวเตอร์ ชั้น 6 อาคารเฉลิมพระเกียรติ 60
                    ปี คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้ ในเวลาราชการ
                    หรือส่งคำขอรับทางไปรษณีย์ถึงให้ทางสาขาฯ ***
                  </p>
                </div>
                <!-- ปล. -->
                <div>
                  <div class="mx-8">
                    <p class="center pt-4 text-xl">
                      *** แผนการดำเนินการอาจมีการเปลี่ยนแปลงได้ตามความเหมาะสม
                      ขอความกรุณาผู้เข้าร่วมแข่งขัน <br />โปรดติดต่อทางผู้จัดของแต่ละศูนย์ภาค ***
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- footer -->
  <div class="pt-20">
    <!-- <div class="mx-2">
      <p>จำนวนผู้เข้าชมเว็บไซต์นี้: <span id="visit-count">0</span></p>
    </div> -->

    <footer class="text-center font-bold pt-6 pb-6 bg-red-600 py-2 text-white text-2xl">
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="mx-auto max-w-7xl rounded-lg">
          <div class="mx-4 text-xl">
            ติดต่อสอบถามรายละเอียดได้ที่ผู้ประสานงานฝ่ายการแข่งขัน<br />
            นางสาวช่อทิพย์ สิทธิ 053-873890 ต่อ25 หรือ inbox ทางเพจ วิทยาการคอมพิวเตอร์ ม.แม่โจ้
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.section-title {
  color: red;
  font-size: 24px;
  margin-bottom: 16px;
  font-weight: bold;
}

h2 {
  font-size: 20px;
  margin-top: 16px;
  margin-bottom: 8px;
}

p {
  margin: 8px 0;
}

.highlight-red {
  color: red;
}

ol,
ul {
  margin-left: 20px;
}

ul {
  list-style-type: disc;
}

li {
  margin-bottom: 8px;
}
.prizes-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
}

.prizes-table th,
.prizes-table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.prizes-table th {
  background-color: #f2f2f2;
  text-align: left;
}

.highlight-red {
  color: red;
  margin-top: 16px;
}

.container {
  width: 80%;
  margin: 0 auto;
}
.section-title {
  background-color: yellow;
  font-weight: bold;
  padding: 10px;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}
th {
  background-color: #f2f2f2;
}
.important-dates {
  color: red;
  font-weight: bold;
}
a {
  color: blue;
}

.note {
  color: red;
  font-weight: bold;
}
.center {
  text-align: center;
}
</style>

// Bai toan 1
/**-Dau vao:
 * +luong mot ngay lam
 * +so ngay lam
 * -Xu ly:
 * +Tong luong nhan duoc=luong mot ngay lam*so ngay lam
 * -Dau ra
 * +Tong luong
 */

var luong1Ngay = 100000;
var soNgay = 2;

var tongLuong = luong1Ngay * soNgay;

var currentFormat = new Intl.NumberFormat("vn-VN");
var tongLuong = "Lương nhân viên là: " + currentFormat.format(tongLuong) + "đ";

console.log(tongLuong);

//Bai toan 2

/** Dau vao:
 * - 5 so thuc
 * Xu ly
 * -tinh tong 5 so thuc=so thuc 1 + so thuc 2 + so thuc 3 + so thuc 4 + so thuc 5
 * - gia tri trung binh cua 5 so thuc= tong 5 so thuc /5
 * Dai ra
 * -gia tri trung binh?
 *
 */
var R = 1;
var R2 = 0;
var R3 = -3;
var R4 = 5 / 4;
var R5 = 5;

var tongSo = R + R2 + R3 + R4 + R5;

var gtTB = tongSo / 5;

console.log("Giá trị trung bình 5 số: " + gtTB);

//Bai toan 3

/** Dau vao
 * - so tien usd can doi
 * -so tien vnd cho 1 usd la 23500
 * Xu ly
 * - tinh so tien sau quy doi= usd*vnd
 *
 * Dau ra
 * -so tien sau quy doi?
 *
 */

var USD = 2;
var VND = 23500;
var tinh = USD * VND;

var currentVND = new Intl.NumberFormat("vn-VN");
var tinh = "Số tiền đã quy đổi là: " + currentFormat.format(tinh) + "đ";

console.log(tinh);

//Bai toan so 4

/** Dau vao
 * -chieu dai
 * -chieu rong
 * Xu ly
 * -dien tich hinh chu nhat= chieu dai* chieu rong
 * -chu vi hinh chu nhat =(chieu dai +chieu rong)*2
 * Dau ra
 * -dien tich hinh chu nhat
 * -chu vi hinh chu nhat
 */

var chieuDai = 6;
var chieuRong = 2;

var dienTich = chieuDai * chieuRong;
var chuVi = (chieuDai + chieuRong) * 2;

console.log("Diện tích hình chữ nhật là: " + dienTich);
console.log("Chu vi của hình chữ nhật là: " + chuVi);

//Bai toan 5
/**Dau vao
 * -số tự nhiên có hai chữ số
 * Xu ly
 *-tách lấy hàng trăm: Math.floor(n/100)
  -Tách lấy hàng chục: Math.floor(n % 100 / 10)
   -Tách lấy hàng đơn vị: n % 10
   - hàng trăm + hàng chục + hàng dv
dau ra 
show kq
 * 
 */

var n = 33;

var hangTram = Math.floor(n / 100);
var hangChuc = Math.floor((n % 100) / 10);
var hangDV = n % 10;

var tongKySo = hangTram + hangChuc + hangDV;
console.log("Tổng 2 số ký là: " + tongKySo);

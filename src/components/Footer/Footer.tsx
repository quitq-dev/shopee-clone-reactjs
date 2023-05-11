export default function Footer() {
  return (
    <footer className='bg-slate-50 py-16'>
      <div className='container'>
        <div className='gird-cols-1 grid gap-4 text-sm lg:grid-cols-3'>
          <div className='lg:col-span-1'>© 2023 Shopee. Tất cả các quyền được bảo lưu.</div>
          <div className='lg:col-span-2'>
            Quốc gia & Khu vực: Singapore Indonesia Đài Loan Thái Lan Malaysia Việt Nam Philippines Brazil México
            Colombia Chile
          </div>
        </div>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <span>CHÍNH SÁCH BẢO MẬT</span>
          <span>QUY CHẾ HOẠT ĐỘNG</span>
          <span>CHÍNH SÁCH VẬN CHUYỂN</span>
          <span>CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</span>
        </div>
        <div className='mt-10 flex items-center justify-center gap-10'>
          <img className='w-30 h-12' src='http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoCCDV.png' alt='' />
          <img className='w-30 h-12' src='http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoCCDV.png' alt='' />
        </div>
        <div className='mt-10 text-center text-sm'>
          <div>Công ty TNHH Shopee</div>
          <div className='mt-10'>
            Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành
            phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
          </div>
          <div className='mt-2'>
            Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)
          </div>
          <div className='mt-2'>
            Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015
          </div>
          <div className='mt-2'>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</div>
        </div>
      </div>
    </footer>
  )
}

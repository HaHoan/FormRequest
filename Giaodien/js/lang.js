$(function () {
    /* Mutil Language */
    var lang = localStorage.getItem('lang') || 'en-gb';
    changeLanguage(lang);

})
function changeLanguage(lang) {
    if (lang == "en") {
        $(".icon-lang").attr('src', "./assets/img/united-states.png");
        $(".text-lang").text("Tiếng Anh")
    } else if (lang == "vi") {
        $(".icon-lang").attr('src', "./assets/img/vietnam.png");
        $(".text-lang").text("Tiếng Việt")
    } else if (lang == "ja") {
        $(".icon-lang").attr('src', "./assets/img/japan.png");
        $(".text-lang").text("Tiếng Nhật")
    }
    $(".lang").each(function (index, element) {
        $(this).text(arrLang[lang][$(this).attr("key")]);
        $(this).attr("placeholder", arrLang[lang][$(this).attr("key")]);
    });
}
$(".translate").click(function () {
    var lang = $(this).attr("id");
    localStorage.setItem('lang', lang);
    changeLanguage(lang);

});
var arrLang = {
    "en": {
        "Home": "Home",
        "Summary": "Summary",
        "Search-for": "Search for...",
        "Username": "Username",
        "create-request": "Create new request",
        "send-to-me": "Send to me",
        "my-request": "My request",
        "following": "My follow",
        "list-request": "Request list",
        "all": "All",
        "in-turn": "In turn",
        "overdue": "Overdue",
        "title-supply-req": "Supply request",
        "state": "State",
        "waitting": "Waiting",
        "accept": "Accept",
        "reject": "Reject",
        "req-info": "Request info",
        "code": "Code",
        "creator": "Creator",
        "date-create": "Create time",
        "issus-date": "Issus date",
        "dept": "Dept",
        "type-supply": "Type Supply",
        "table-no":"No",
        "table-code":"Code No",
        "table-item-name":"Item name",
        "table-desc":"Description",
        "table-vendor":"Vendor",
        "table-unit-price":"Unit_price",
        "table-qty":"Qty",
        "table-unit":"Unit(kg*pcs)",
        "table-amount":"Amount(USD or VND)",
        "table-owner-of-item":"Owner(U→UMC, C→Customer)",
        "table-cost-center":"Cost Center(AI/SMT/FAT/Other/Office)",
        "table-account":"Account",
        "table-account-no":"Account No",
        "table-total":"Total",
        "more-info":"**More Infomation**",
        "req-delivery-date":"- Request Delivery Date",
        "note":"- Remark",
        "round-robin":"- Round robin",
        "yes":"YES",
        "no":"NO",
        "req-expenses-cus":"- Request expenses to Customer ? YES / NO",
        "req-checkout":"Có yêu cầu khách hàng thanh toán : Có / Không",
        "attach":"**File Attach**",
        "main-action":"Main Action",
        "apply":"1.Apply",
        "dept-manager":"2.Dept Manager",
        "asset-center":"3.Asset center",
        "factory-manager":"4.Factory Manager",
        "general-director":"5.General Director",
        "purchasing-dept":"6.Purchasing Dept",
        "applicant":"7.Applicant",
        "asset-center-recive-check":"8.Asset Center",
        "comment":"comment",
        "send":"Send",
        "name":"Name",
        "add-row":"Add row",
        "cancel":"Cancel",
        "create":"Create",
        "return":"Back to",
        "type_form":"Choose type form",
        "save_change":"Save changes",
        'title' : "UMC FORM REQUEST"
    },
    "vi": {
        "Home": "Trang chủ",
        "Summary": "Tổng kết",
        "Search-for": "Tìm kiếm...",
        "Username": "Tên đăng nhập",
        "create-request": "Tạo đề xuất mới",
        "send-to-me": "Gửi cho tôi",
        "my-request": "Tôi gửi đi",
        "following": "Đang theo dõi",
        "list-request": "Danh sách đề xuất",
        "all": "Tất cả",
        "in-turn": "Đến lượt",
        "overdue": "Quá hạn",
        "title-supply-req": "Yêu cầu cung cấp",
        "state": "Trạng thái",
        "waitting": "Đang chờ duyệt",
        "accept": "Chấp thuận",
        "reject": "Từ chối",
        "req-info": "Thông tin đề xuất",
        "code": "Mã đề xuất",
        "creator": "Người tạo",
        "date-create": "Thời gian tạo",
        "issus-date": "Ngày phát hành",
        "dept": "Bộ phận",
        "type-supply": "Loại yêu cầu",
        "table-no":"STT",
        "table-code":"Mã số",
        "table-item-name":"Tên hàng",
        "table-desc":"Quy cách",
        "table-vendor":"Nhà cung cấp",
        "table-unit-price":"Đơn giá",
        "table-qty":"Số lượng",
        "table-unit":"Đơn vị(kg*pcs)",
        "table-amount":"Số tiền(USD or VND)",
        "table-owner-of-item":"Owner(U→UMC, C→Customer)",
        "table-cost-center":"Cost Center(AI/SMT/FAT/Other/Office)",
        "table-account":"Tài khoản",
        "table-account-no":"Số tài khoản",
        "table-total":"Tổng số",
        "more-info":"**Thông tin thêm**",
        "req-delivery-date":"- Ngày yêu cầu giao hàng",
        "note":"- Ghi chú",
        "round-robin":"- Round robin",
        "yes":"Có",
        "no":"Không",
        "req-expenses-cus":"- Request expenses to Customer ? YES / NO",
        "req-checkout":"Có yêu cầu khách hàng thanh toán : Có / Không",
        "attach":"**File đính kèm**",
        "main-action":"hoạt động chính",
        "apply":"1.Người đề xuất",
        "dept-manager":"2.Trưởng phòng",
        "asset-center":"3.Qly tài sản",
        "factory-manager":"4.Giám đốc xưởng",
        "general-director":"5.Tổng giám đốc",
        "purchasing-dept":"6.Người duyệt",
        "applicant":"7.Applicant",
        "asset-center-recive-check":"8.Asset Center",
        "c":"Thảo luận",
        "send":"Gửi",
        "name":"Họ tên",
        "add-row":"Thêm dòng",
        "cancel":"Hủy",
        "create":"Đề xuất",
        "return":"Quay lại bước",
        "type_form":"Chọn mẫu form",
        "save_change":"Lưu thay đổi",
        'title' : "UMC FORM REQUEST"
    },
    "ja": {

    }
};

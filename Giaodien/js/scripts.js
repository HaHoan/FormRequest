/*!
    * Start Bootstrap - SB Admin v6.0.3 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2021 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
(function ($) {
    "use strict";

    // Add active state to sidbar nav links
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function () {
        if (this.href === path) {
            $(this).addClass("active");
        }
    });

    // Toggle the side navigation
    $("#sidebarToggle").on("click", function (e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
    });


    $("#searchRequestForm").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#listRequestForm li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
    $('#listRequestForm li').on('click', function (e) {
        $("#findRequestForm").modal('hide');
        $("#enterRequestForm").modal('show');
    });
    var listInfos = [];

    $('#btnAddInfo').on('click', function (e) {
        addRowInfo();
        refreshListInfo();
    });
    function addRowInfo() {
        var newInfo = {
            No: $('#txbNo').val(),
            ItemName: $('#txbItemName').val(),
            Desc: $('#txbDesc').val(),
            Vendor: $('#txbVendor').val(),
            Price: $('#txbPrice').val(),
            Qty: $('#txbQty').val(),
            Unit: $('#txbUnit').val(),
            Amount: $('#txbAmount').val(),
            OwnerItem: $('#txbOwnerItem').val(),
            CostCenter: $('#txbCostCenter').val(),
            Account: $('#txbAccount').val(),
            Asset: $('#txbAsset').val()
        };
        listInfos.push(newInfo);
    }
    function refreshListInfo() {
        $("#tableInfo").html("");
        var total = 0;
        listInfos.forEach(function (m, index) {
            var row = $('<tr/>');
            var Index = $('<td/>', {
                text: (index + 1)
            });
            var No = $('<td/>', {
                text: m.No
            });
            var ItemName = $('<td/>', {
                text: m.ItemName
            });
            var Desc = $('<td/>', {
                text: m.Desc
            });
            var Vendor = $('<td/>', {
                text: m.Vendor
            });
            var Price = $('<td/>', {
                text: m.Price
            });
            if (m.Amount != '')
                total += parseFloat(m.Amount);
            var Qty = $('<td/>', {
                text: m.Qty
            });
            var Unit = $('<td/>', {
                text: m.Unit
            });
            var Amount = $('<td/>', {
                text: m.Amount
            });
            var OwnerItem = $('<td/>', {
                text: m.OwnerItem
            });
            var CostCenter = $('<td/>', {
                text: m.CostCenter
            });
            var Account = $('<td/>', {
                text: m.Account
            });
            var Asset = $('<td/>', {
                text: m.Asset
            });
            var rowDelete = $('<td/>');
            var btnXoa = $('<button/>', {
                text: 'Xóa',
                type: 'button',
                class: 'btnXoa btn btn-danger',
                click: function () {
                    deleteRowInfo(index);
                }
            });
            rowDelete.append(btnXoa);
            row.append(Index);
            row.append(No);
            row.append(ItemName);
            row.append(Desc);
            row.append(Vendor);
            row.append(Qty);
            row.append(Unit);
            row.append(Amount);
            row.append(OwnerItem);
            row.append(CostCenter);
            row.append(Account);
            row.append(Asset);
            row.append(rowDelete);

            $('#tableInfo').append(row);

        });
        if (listInfos.length > 0) {
            var row = $('<tr/>');
            var td1 = $('<td/>', {
                colspan: "6"
            });
            var td2 = $('<td/>', {
                colspan: "2",
                text: "TOTAL"
            });
            var td3 = $('<td/>', {
                text: total,
                class: "font-weight-bold"
            });
            var td4 = $('<td/>', {
                colspan: "2",
                class: "font-weight-bold",
                text: "（USD or VND）"
            });
            row.append(td1);
            row.append(td2);
            row.append(td3);
            row.append(td4);
            row.append($('<td/>'));
            row.append($('<td/>'));
            row.append($('<td/>'));
            $('#tableInfo').append(row);
        }

    }
    function deleteRowInfo(index) {
        listInfos.splice(index, 1);
        refreshListInfo();
    };

    $('.request-item').click(function (e) {
        var item = $(this).prop('name');
        console.log(item);
    });
    var numberComment = 0;
    $('#btnAddComment').click(function (e) {
        if (!$.trim($("#txbComment").val())) {
            $('#txbComment').focus();
            return;
        }
        var li = $('<li/>', {
            class: "list-group-item"
        });
        var row = $('<div/>', {
            class: "row"
        });
        var col1 = $('<div/>', {
            class: "col-3"
        });
        var img = $('<img/>', {
            src: "https://cdn.brvn.vn/news/480px/2017/13343_Maruko.jpg",
            alt: "avatar"
        });
        col1.append(img);
        row.append(col1);
        var col2 = $('<div/>', {
            class: "col-8"
        });

        var name = $('<div/>', {
            class: "font-weight-bold mt-2",
            text: "Ha Hoan"
        });
        col2.append(name);
        var date = $('<div/>', {
            text: moment().calendar()
        });

        col2.append(date);
        row.append(col2);
        li.append(row);

        var msg = $('#txbComment').val();
        var arrChar = msg.split(' ');
        msg = "";
        var content = $('<p/>');
        var userTag = [];
        arrChar.forEach(function (item) {

            var startChar = item.substr(0, 1);
            if (startChar == "@") {
                var username = item.substr(1) 
                var user = users.find(x => x.username === username);
                if (user != null) {
                    if(!userTag.includes(user.name)){
                        userTag.push(user.name);
                    }
                  
                    var span = $('<span/>', {

                    });
                    span.css("background", "#bbdefb")
                    span.append(item);
                    content.append(span);
                    content.append(" ");
                } else {
                    content.append(item + " ");
                }

            } else {
                content.append(item + " ");
            }

        })

        li.append(content);
        var a = $('<a/>', {
            href: "javascript:void(0)",
            style: "text-decoration:none",
            class: "text-secondary",

        });
        var i = $('<i/>', {
            class: "fas fa-thumbs-up mr-1"
        });
        a.append(i);
        a.append("Like");
        li.append(a);
        $('.list-comment').prepend(li);
        numberComment++;
        $('#totalComment').text(numberComment);
        $('#txbComment').val("");
        $('#txbComment').focus();
        console.log(userTag);
    });

    /* Tag friends */
    var users = [
        {
            name: '34811',
            username: 'HaHoan'
        },
        {
            name: '34812',
            username: 'HaHoan2'
        },
        {
            name: '34813',
            username: 'HaHoan3'
        },
        {
            name: '34814',
            username: 'HaHoan4'
        },
        {
            name: '34815',
            username: 'HaHoan5'
        },
        {
            name: '34816',
            username: 'HaHoan6'
        },
        {
            name: '34817',
            username: 'HaHoan7'
        }
    ];
    $("#txbComment").mention({
        users: users
    });
})(jQuery);

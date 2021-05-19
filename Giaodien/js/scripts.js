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
            row.append(Price);
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
})(jQuery);

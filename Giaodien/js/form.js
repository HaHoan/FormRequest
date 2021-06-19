$(function () {
    $('#robinAttach').hide();
    $('#customer-checkout-info').hide();

    $('input[type=radio][name=robin]').change(function () {
        if (this.value == 'y') {
            $('#robinAttach').show();
        }
        else if (this.value == 'n') {
            $('#robinAttach').hide();
        }
    });
    $('input[type=radio][name=customer-checkout]').change(function () {
        if (this.value == 'y') {
            $('#customer-checkout-info').show();
        }
        else if (this.value == 'n') {
            $('#customer-checkout-info').hide();
        }
    });

    $('html').click(function () {
        $contextMenu.hide();
    });
    function addTd() {
        var col2 = $('<td/>');
        var input2 = $('<input/>', {
            class: 'form-input',
            change: function () {
                $('.total').text(getTotalAmount())
            }
        })
        col2.append(input2);
        return col2;
    }
    $("#contextMenu li a").click(function (e) {
        var index = $('#tableInfo tr').length;
        var row = $('<tr/>');
        var col1 = $('<td/>', {
            text: (index)
        })
        row.append(col1);
        row.append(addTd());
        row.append(addTd());
        row.append(addTd());
        row.append(addTd());
        row.append(addTd());
        row.append(addTd());
        row.append(addTd());
        row.append(addTd());
        var col3 = $("<td/>");
        var div3 = $('<div/>', {
            class: "form-inline"
        });
        var input3 = $('<input/>', {
            type: 'radio',
            name: "owner" + index,
            val: "u",
            checked: true
        });
        var label3 = $("<label/>", {
            for: "u",
            text: "U"
        })
        div3.append(input3);
        div3.append(label3);
        var input3 = $('<input/>', {
            type: 'radio',
            name: "owner" + index,
            val: "c",

        });
        var label3 = $("<label/>", {
            for: "c",
            text: "C"
        })
        div3.append(input3);
        div3.append(label3);
        col3.append(div3);
        row.append(col3);

        row.append(addTd())

        var col4 = $("<td/>");
        var div4 = $('<div/>', {
            class: "form-inline"
        });
        var input4 = $('<input/>', {
            type: 'radio',
            name: "assets" + index,
            val: "a",
            checked: true
        });
        var label4 = $("<label/>", {
            for: "a",
            text: "A"
        })
        div4.append(input4);
        div4.append(label4);
        var input4 = $('<input/>', {
            type: 'radio',
            name: "assets" + index,
            val: "K"
        });
        var label4 = $("<label/>", {
            for: "k",
            text: "K"
        })
        div4.append(input4);
        div4.append(label4);
        col4.append(div4);
        row.append(col4);
        var rowDelete = $('<td/>');
        var btnXoa = $('<button/>', {
            text: 'Xóa',
            type: 'button',
            class: 'btnXoa btn btn-danger',
            click: function () {
                deleteRow(this)
            }
        });
        row.append(addTd())
        row.append(addTd())
        rowDelete.append(btnXoa);

        row.append(rowDelete);
        $('#tableInfo').append(row);
        $('.summary').remove();
        var row = $('<tr/>', {
            class: 'summary'
        });
        var td1 = $('<td/>', {
            colspan: "6"
        });
        var area = $('<textarea/>', {
            class: "form-input",
            row: 2
        })
        td1.append(area)
        var td2 = $('<td/>', {
            colspan: "2",
            class: "font-weight-bold",
            text: "TOTAL"
        });
        var td3 = $('<td/>', {
            text: getTotalAmount(),
            class: "font-weight-bold total"
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
    });
    $(".btnXoa").on('click', function () {
        deleteRow(this);
    })
    function updateSTT() {
        var index = 1;
        $('#tableInfo tr').each(function (rowIndex) {
            var stt = $('#tableInfo tr:eq(' + rowIndex + ') td:eq(0)').text();
            if (stt) {
                $('#tableInfo tr:eq(' + rowIndex + ') td:eq(0)').text(index);
                index++;
            }

        });
    }
    function deleteRow(e) {
        $(e).parent().parent().remove();
        $(".total").text(getTotalAmount())
        updateSTT();
    }
    function getTotalAmount() {
        var total = 0;
        $('#tableInfo tr').each(function (rowIndex) {
            var amount = $('#tableInfo tr:eq(' + rowIndex + ') td:eq(8) input').val();
            if (typeof amount !== "undefined" && amount) {
                total += parseInt(amount);
            }

        });
        if (isNaN(total)) return "0"
        else
            return total;
    }
    $('.form-input').on('change', function () {
        $('.total').text(getTotalAmount())
    });
    $('.form-input').keypress(function (e) {
        if (e.which == 13) {
            $('.total').text(getTotalAmount())
        }
    });
    $('form input').keydown(function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
           
        }
    });
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
            class: "d-inline ml-2"
        });
        var img = $('<img/>', {
            src: "https://cdn.brvn.vn/news/480px/2017/13343_Maruko.jpg",
            alt: "avatar",
            class: "avatar"
        });
        col1.append(img);
        row.append(col1);
        var col2 = $('<div/>', {
            class: "d-inline ml-1"
        });

        var name = $('<div/>', {
            class: "font-weight-bold mt-2 ml-1",
            text: "Ha Hoan"
        });
        col2.append(name);
        var date = $('<div/>', {
            text: moment().calendar(),
            class: "ml-2 text-muted"
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
                    if (!userTag.includes(user.name)) {
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

    var $contextMenu = $("#contextMenu");

    $("body").on("contextmenu", "table tr", function (e) {
        $contextMenu.css({
            display: "block",
            left: e.pageX,
            top: e.pageY
        });
        return false;
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

})
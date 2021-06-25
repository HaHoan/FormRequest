$(function () {
    var users = [];
    var listStep = [{
        index: 0,
        key: 'step-1',
        name: 'Dept Manager'
    
    },
    {
        index: 1,
        key: 'step-2',
        name: 'Assets',
        return: {
            "name": "Back to",
            "items": {
                "step-1": { "name": "Dept Manager" },
                "step-2": { "name": "Assets" },
                "step-3": { "name": "Factory Manager" }
            }
        }
    },
    {
        index: 2,
        key: 'step-3',
        name: 'Factory Manager',
        return: {
            "name": "Back to",
            "items": {
                "step-1": { "name": "Dept Manager" },
                "step-2": { "name": "Assets" }
            }
        }
    },

    {
        index: 3,
        key: 'step-4',
        name: 'General Director',
        return: {
            "name": "Back to",
            "items": {
                "step-1": { "name": "Dept Manager" },
                "step-2": { "name": "Assets" }
            }
        }
    },

    {
        index: 4,
        key: 'step-5',
        name: 'Purchasing Dept',
        return: {
            "name": "Back to",
            "items": {
                "step-1": { "name": "Dept Manager" },
                "step-2": { "name": "Assets" }
            }
        }
    },

    {
        index: 5,
        key: 'step-6',
        name: 'Applicant',
        return: {
            "name": "Back to",
            "items": {
                "step-1": { "name": "Dept Manager" },
                "step-2": { "name": "Assets" }
            }
        }
    },

    {
        index: 6,
        key: 'step-7',
        name: 'Asset Center',
        return: {
            "name": "Back to",
            "items": {
                "step-1": { "name": "Dept Manager" },
                "step-2": { "name": "Assets" }
            }
        }
    }
    ];
    var current_step = 0;
    $("#searchUser").on("keydown", function (e) {
        if (e.which == 13) {
            var value = $(this).val().toLowerCase();
            $("#listUser li").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        }

    });
    $('#submitors').hide();
    $('.steps-step a').on("click", function () {
        $(".steps-step a").each(function (index) {
            $(this).removeClass('btn-success')
        });
        $(this).addClass('btn-success')
        current_step = $(this).text();
        resetList();

        $("#submitors").fadeOut(1);
        $("#submitors").fadeIn();
    })

    function resetList() {
        $('#listUser .form-check-input').prop('checked', false);
        var step = users.findIndex(obj => obj.index == current_step);
        if (step >= 0) {
            var member_in_step = users[step].member;
            $("#listUser li label input").each(function (index) {
                var member = member_in_step.findIndex(obj => obj.code == this.name);
                if (member >= 0)
                    $(this).prop('checked', true);
            });
        }

    }
    $('#listUser .form-check-input').change(function () {
        var step = users.findIndex((obj => obj.index == current_step));
        var user = {
            code: this.name,
            name: $(this).attr('value')
        };
        if (this.checked) {
            if (step >= 0) {
                users[step].member.push(user);
            } else {

                step = {
                    index: current_step,
                    member: [
                        user
                    ]
                }
                users.push(step);
            }
            var memberApprove = $('<p/>', {
                text: user.name,
                id: current_step + '-' + user.code
            })
            $('#step-' + current_step).append(memberApprove)
        } else {
            if (step >= 0) {
                var new_member = $.grep(users[step].member, function (item) {
                    return item.code !== user.code;
                })
                users[step].member = new_member;
                $('#' + current_step + '-' + user.code).remove();
            }
        }
    });
    $.each(listStep, function (index,value) {
        if(value.return != null){
            $.contextMenu({
                selector: '.context-menu-' + (index + 1),
                callback: function (key, options) {
                    var step = listStep.find(x => x.key === key);
                    alert(step.name);
                },
                items: {
    
                    "Return":value.return 
                }
            });
        }
       
    })
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.moveTo(0,0);
    ctx.lineTo(200,100);
    ctx.stroke();

});
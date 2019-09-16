// 设置侧边导航收起展开图标
$('#collapseExample').on('hidden.bs.collapse', function () {
    $(this).prev().children('svg').attr('data-icon', 'arrow-alt-circle-down')
})
$('#collapseExample').on('shown.bs.collapse', function () {
    $(this).prev().children('svg').attr('data-icon', 'arrow-alt-circle-up')
})

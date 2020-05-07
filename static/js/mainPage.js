layui.use(['table', 'element'], function (table, element) {
    var laytpl = layui.laytpl,
        $ = layui.jquery,
        layer = layui.layer;

    
    var navElem = $('[lay-filter="nav_main"]');

    // 默认关闭其他的折叠
    element.on('nav(nav_main)', function (elem) {
        console.log(elem);
        let url = elem.attr('lay-url');
        if(url!=''){
            $('#mainIframe').attr('src',elem.attr('lay-url'));
        }
        // console.log(elem); //得到当前点击的DOM对象
        elem.parents('dd,li').siblings().removeClass('layui-nav-itemed');

        
    });

    navElem.html(laytpl($('#menu-tpl').html()).render(navDataConfig));
    element.render('nav', 'nav_main');

    // 默认打开的页面
    var pageName = 'page2';
    // 打开默认页面
    var navCurr = navElem.find('[lay-href="' + pageName + '"]');
    navCurr.parent().addClass('layui-this').parents('li,dl').addClass('layui-nav-itemed');
    // 模拟点击，这个看情况不是必须的
    navCurr.click();


    var index = 0;
    $('.addNewNode').click(function () {
        var type = $(this).data('type');
        index++;
        var navActive = navElem.find('.layui-this');
        if (!navActive.length && type === 'child') {
            layer.msg('请先选择一个父节点', {anim: 6});
            return;
        }

        if (type === 'root') {
            // 新增到根节点
            navElem.append('<li class="layui-nav-item"><a href="javascript:void(0);" name="node' + index + '">新增节点' + index + '</a></li>');
        } else {
            navActive.append('<dl class="layui-nav-child"><dd><a href="javascript:void(0);" name="node' + index + '">新增节点' + index + '</a></dd></dl>');
            navActive.addClass('layui-nav-itemed');
        }
        element.render('nav', 'nav_main');
        $('a[name="node' + index + '"]').click();
    });

});
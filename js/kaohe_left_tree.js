$(function() {
    var defalu = [];
    var nodeName = [];
    var dom, nodeDom;
    for (var a = 0; a < 5; a++) {
        nodeDom = {
            text: '计划总结',
            icon: 'fa fa-folder-open zt_yellow',
            href: 'teacher_jihuazongjie.html',
            tags: ['2']
        };
        nodeName.push(nodeDom);
    }
    for (var i = 0; i < 5; i++) {

        dom = {
            text: "<b>教学常规</b>",
            href: "#ppp",
            icon: "fa fa-folder-open zt_yellow",
            tags: ['18'],
            state: {
                expanded: false
            },
            nodes: nodeName
        }
        defalu.push(dom);
    }
    var defaultData = [{
            text: '<b>教学常规</b>',
            href: '#ppp',
            icon: 'fa fa-folder-open zt_yellow',
            tags: ['18'],
            state: {
                expanded: false
            },
            nodes: [{
                    text: '计划总结',
                    icon: 'fa fa-folder-open zt_yellow',
                    href: 'teacher_jihuazongjie.html',
                    tags: ['2']
                },
                {
                    text: '教学检查',
                    icon: 'fa fa-folder-open zt_yellow',
                    href: '#',
                    state: {
                        expanded: false
                    },
                    tags: ['0'],
                    nodes: [{
                            text: '备课',
                            icon: 'fa fa-folder-open zt_yellow',
                            href: 'teacher_beike.html',
                            tags: ['0']
                        },
                        {
                            text: '上课',
                            icon: 'fa fa-folder-open zt_yellow',
                            href: 'teacher_shangke.html',
                            tags: ['0']
                        },
                        {
                            text: '作业布置与批改',
                            icon: 'fa fa-folder-open zt_yellow',
                            href: '#grandchild2',
                            tags: ['0']
                        },
                        {
                            text: '听课情况',
                            icon: 'fa fa-folder-open zt_yellow',
                            href: '#grandchild2',
                            tags: ['0']
                        },
                        {
                            text: '行政推门课',
                            icon: 'fa fa-folder-open zt_yellow',
                            href: '#grandchild2',
                            tags: ['0']
                        }
                    ]
                },
                {
                    text: '考勤',
                    icon: 'fa fa-folder-open zt_yellow',
                    href: '#child2',
                    tags: ['0']
                }
            ]
        },
        {
            text: '<b>教学活动</b>',
            icon: 'fa fa-folder-open zt_yellow',
            href: '#parent2',
            state: {
                expanded: false
            },
            tags: ['0'],
            nodes: [{
                text: '公开课展示课',
                icon: 'fa fa-folder-open zt_yellow',
                href: '#child1',
                tags: ['2']
            }, {
                text: '参加备课组教研组活动情况',
                icon: 'fa fa-folder-open zt_yellow',
                href: '#child1',
                tags: ['2']
            }, {
                text: '承担大型主题教研活动或支教活动',
                icon: 'fa fa-folder-open zt_yellow',
                href: '#child1',
                tags: ['2']
            }, {
                text: '外派学习',
                icon: 'fa fa-folder-open zt_yellow',
                href: '#child1',
                tags: ['2']
            }, {
                text: '继续教育',
                icon: 'fa fa-folder-open zt_yellow',
                href: '#child1',
                tags: ['2']
            }]
        },
        {
            text: '<b>教学质量</b>',
            icon: 'fa fa-folder-open zt_yellow',
            href: '#parent3',
            state: {
                expanded: false
            },
            tags: ['0'],
            nodes: [{
                text: '教学质量',
                icon: 'fa fa-folder-open zt_yellow',
                href: '#child1',
                tags: ['2']
            }]
        },
        {
            text: '<b>获奖情况</b>',
            icon: 'fa fa-folder-open zt_yellow',
            href: '#parent4',
            state: {
                expanded: false
            },
            tags: ['0'],
            nodes: [{
                text: '学科竞赛',
                icon: 'fa fa-folder-open zt_yellow',
                href: '#child1',
                tags: ['2']
            }, {
                text: '论文论著奖',
                icon: 'fa fa-folder-open zt_yellow',
                href: '#child1',
                tags: ['2']
            }, {
                text: '教学技能奖',
                icon: 'fa fa-folder-open zt_yellow',
                href: '#child1',
                tags: ['2']
            }]
        },
        {
            text: '<b>教学满意度</b>',
            icon: 'fa fa-folder-open zt_yellow',
            href: '#parent5',
            tags: ['0'],
            state: {
                expanded: false
            },
            nodes: [{
                text: '家长投诉或教学事故',
                icon: 'fa fa-folder-open zt_yellow',
                href: '#child1',
                tags: ['2']
            }]
        }
    ];

    var alternateData = [{
            text: 'Parent 1',
            tags: ['2'],
            nodes: [{
                    text: 'Child 1',
                    tags: ['3'],
                    nodes: [{
                            text: 'Grandchild 1',
                            tags: ['6']
                        },
                        {
                            text: 'Grandchild 2',
                            tags: ['3']
                        }
                    ]
                },
                {
                    text: 'Child 2',
                    tags: ['3']
                }
            ]
        },
        {
            text: 'Parent 2',
            tags: ['7']
        },
        {
            text: 'Parent 3',
            icon: 'fa fa-earphone',
            href: '/demo.html',
            tags: ['11']
        },
        {
            text: 'Parent 4',
            icon: 'fa fa-cloud-download',
            href: '/demo.html',
            tags: ['19'],
            selected: true
        },
        {
            text: 'Parent 5',
            icon: 'fa fa-certificate',
            color: 'pink',
            backColor: 'red',
            href: 'http://www.tesco.com',
            tags: ['available', '0']
        }
    ];




    $('#treeview1').treeview({
        data: defaultData
    });

    $('#treeview2').treeview({
        levels: 1,
        data: defaultData
    });

    $('#treeview3').treeview({
        levels: 99,
        data: defaultData
    });

    $('#treeview4').treeview({

        color: "#428bca",
        data: defaultData
    });

    $('#treeview5').treeview({
        color: "#333",
        expandIcon: 'fa fa-chevron-right',
        collapseIcon: 'fa fa-chevron-down',
        enableLinks: true,
        data: defalu
    });

    $('#treeview6').treeview({
        color: "#428bca",
        expandIcon: "fa fa-stop",
        collapseIcon: "fa fa-unchecked",
        nodeIcon: "fa fa-user",
        showTags: true,
        data: defaultData
    });

    $('#treeview7').treeview({
        color: "#428bca",
        showBorder: false,
        data: defaultData
    });

    $('#treeview8').treeview({
        expandIcon: "fa fa-stop",
        collapseIcon: "fa fa-unchecked",
        nodeIcon: "fa fa-user",
        color: "yellow",
        backColor: "purple",
        onhoverColor: "orange",
        borderColor: "red",
        showBorder: false,
        showTags: true,
        highlightSelected: true,
        selectedColor: "yellow",
        selectedBackColor: "darkorange",
        data: defaultData
    });

    $('#treeview9').treeview({
        expandIcon: "fa fa-stop",
        collapseIcon: "fa fa-unchecked",
        nodeIcon: "fa fa-user",
        color: "yellow",
        backColor: "purple",
        onhoverColor: "orange",
        borderColor: "red",
        showBorder: false,
        showTags: true,
        highlightSelected: true,
        selectedColor: "yellow",
        selectedBackColor: "darkorange",
        data: alternateData
    });

    $('#treeview10').treeview({
        color: "#428bca",
        enableLinks: true,
        data: defaultData
    });



    var $searchableTree = $('#treeview-searchable').treeview({
        data: defaultData
    });

    var search = function(e) {
        var pattern = $('#input-search').val();
        var options = {
            ignoreCase: $('#chk-ignore-case').is(':checked'),
            exactMatch: $('#chk-exact-match').is(':checked'),
            revealResults: $('#chk-reveal-results').is(':checked')
        };
        var results = $searchableTree.treeview('search', [pattern, options]);

        var output = '<p>' + results.length + ' matches found</p>';
        $.each(results, function(index, result) {
            output += '<p>- ' + result.text + '</p>';
        });
        $('#search-output').html(output);
    };

    $('#btn-search').on('click', search);
    $('#input-search').on('keyup', search);

    $('#btn-clear-search').on('click', function(e) {
        $searchableTree.treeview('clearSearch');
        $('#input-search').val('');
        $('#search-output').html('');
    });


    var initSelectableTree = function() {
        return $('#treeview-selectable').treeview({
            data: defaultData,
            multiSelect: $('#chk-select-multi').is(':checked'),
            onNodeSelected: function(event, node) {
                $('#selectable-output').prepend('<p>' + node.text + ' was selected</p>');
            },
            onNodeUnselected: function(event, node) {
                $('#selectable-output').prepend('<p>' + node.text + ' was unselected</p>');
            }
        });
    };
    var $selectableTree = initSelectableTree();

    var findSelectableNodes = function() {
        return $selectableTree.treeview('search', [$('#input-select-node').val(), { ignoreCase: false, exactMatch: false }]);
    };
    var selectableNodes = findSelectableNodes();

    $('#chk-select-multi:checkbox').on('change', function() {
        console.log('multi-select change');
        $selectableTree = initSelectableTree();
        selectableNodes = findSelectableNodes();
    });

    // Select/unselect/toggle nodes
    $('#input-select-node').on('keyup', function(e) {
        selectableNodes = findSelectableNodes();
        $('.select-node').prop('disabled', !(selectableNodes.length >= 1));
    });

    $('#btn-select-node.select-node').on('click', function(e) {
        $selectableTree.treeview('selectNode', [selectableNodes, { silent: $('#chk-select-silent').is(':checked') }]);
    });

    $('#btn-unselect-node.select-node').on('click', function(e) {
        $selectableTree.treeview('unselectNode', [selectableNodes, { silent: $('#chk-select-silent').is(':checked') }]);
    });

    $('#btn-toggle-selected.select-node').on('click', function(e) {
        $selectableTree.treeview('toggleNodeSelected', [selectableNodes, { silent: $('#chk-select-silent').is(':checked') }]);
    });



    var $expandibleTree = $('#treeview-expandible').treeview({
        data: defaultData,
        onNodeCollapsed: function(event, node) {
            $('#expandible-output').prepend('<p>' + node.text + ' was collapsed</p>');
        },
        onNodeExpanded: function(event, node) {
            $('#expandible-output').prepend('<p>' + node.text + ' was expanded</p>');
        }
    });

    var findExpandibleNodess = function() {
        return $expandibleTree.treeview('search', [$('#input-expand-node').val(), { ignoreCase: false, exactMatch: false }]);
    };
    var expandibleNodes = findExpandibleNodess();

    // Expand/collapse/toggle nodes
    $('#input-expand-node').on('keyup', function(e) {
        expandibleNodes = findExpandibleNodess();
        $('.expand-node').prop('disabled', !(expandibleNodes.length >= 1));
    });

    $('#btn-expand-node.expand-node').on('click', function(e) {
        var levels = $('#select-expand-node-levels').val();
        $expandibleTree.treeview('expandNode', [expandibleNodes, { levels: levels, silent: $('#chk-expand-silent').is(':checked') }]);
    });

    $('#btn-collapse-node.expand-node').on('click', function(e) {
        $expandibleTree.treeview('collapseNode', [expandibleNodes, { silent: $('#chk-expand-silent').is(':checked') }]);
    });

    $('#btn-toggle-expanded.expand-node').on('click', function(e) {
        $expandibleTree.treeview('toggleNodeExpanded', [expandibleNodes, { silent: $('#chk-expand-silent').is(':checked') }]);
    });

    // Expand/collapse all
    $('#btn-expand-all').on('click', function(e) {
        var levels = $('#select-expand-all-levels').val();
        $expandibleTree.treeview('expandAll', { levels: levels, silent: $('#chk-expand-silent').is(':checked') });
    });

    $('#btn-collapse-all').on('click', function(e) {
        $expandibleTree.treeview('collapseAll', { silent: $('#chk-expand-silent').is(':checked') });
    });



    var $checkableTree = $('#treeview-checkable').treeview({
        data: defaultData,
        showIcon: false,
        showCheckbox: true,
        onNodeChecked: function(event, node) {
            $('#checkable-output').prepend('<p>' + node.text + ' was checked</p>');
        },
        onNodeUnchecked: function(event, node) {
            $('#checkable-output').prepend('<p>' + node.text + ' was unchecked</p>');
        }
    });

    var findCheckableNodess = function() {
        return $checkableTree.treeview('search', [$('#input-check-node').val(), { ignoreCase: false, exactMatch: false }]);
    };
    var checkableNodes = findCheckableNodess();

    // Check/uncheck/toggle nodes
    $('#input-check-node').on('keyup', function(e) {
        checkableNodes = findCheckableNodess();
        $('.check-node').prop('disabled', !(checkableNodes.length >= 1));
    });

    $('#btn-check-node.check-node').on('click', function(e) {
        $checkableTree.treeview('checkNode', [checkableNodes, { silent: $('#chk-check-silent').is(':checked') }]);
    });

    $('#btn-uncheck-node.check-node').on('click', function(e) {
        $checkableTree.treeview('uncheckNode', [checkableNodes, { silent: $('#chk-check-silent').is(':checked') }]);
    });

    $('#btn-toggle-checked.check-node').on('click', function(e) {
        $checkableTree.treeview('toggleNodeChecked', [checkableNodes, { silent: $('#chk-check-silent').is(':checked') }]);
    });

    // Check/uncheck all
    $('#btn-check-all').on('click', function(e) {
        $checkableTree.treeview('checkAll', { silent: $('#chk-check-silent').is(':checked') });
    });

    $('#btn-uncheck-all').on('click', function(e) {
        $checkableTree.treeview('uncheckAll', { silent: $('#chk-check-silent').is(':checked') });
    });



    var $disabledTree = $('#treeview-disabled').treeview({
        data: defaultData,
        onNodeDisabled: function(event, node) {
            $('#disabled-output').prepend('<p>' + node.text + ' was disabled</p>');
        },
        onNodeEnabled: function(event, node) {
            $('#disabled-output').prepend('<p>' + node.text + ' was enabled</p>');
        },
        onNodeCollapsed: function(event, node) {
            $('#disabled-output').prepend('<p>' + node.text + ' was collapsed</p>');
        },
        onNodeUnchecked: function(event, node) {
            $('#disabled-output').prepend('<p>' + node.text + ' was unchecked</p>');
        },
        onNodeUnselected: function(event, node) {
            $('#disabled-output').prepend('<p>' + node.text + ' was unselected</p>');
        }
    });

    var findDisabledNodes = function() {
        return $disabledTree.treeview('search', [$('#input-disable-node').val(), { ignoreCase: false, exactMatch: false }]);
    };
    var disabledNodes = findDisabledNodes();

    // Expand/collapse/toggle nodes
    $('#input-disable-node').on('keyup', function(e) {
        disabledNodes = findDisabledNodes();
        $('.disable-node').prop('disabled', !(disabledNodes.length >= 1));
    });

    $('#btn-disable-node.disable-node').on('click', function(e) {
        $disabledTree.treeview('disableNode', [disabledNodes, { silent: $('#chk-disable-silent').is(':checked') }]);
    });

    $('#btn-enable-node.disable-node').on('click', function(e) {
        $disabledTree.treeview('enableNode', [disabledNodes, { silent: $('#chk-disable-silent').is(':checked') }]);
    });

    $('#btn-toggle-disabled.disable-node').on('click', function(e) {
        $disabledTree.treeview('toggleNodeDisabled', [disabledNodes, { silent: $('#chk-disable-silent').is(':checked') }]);
    });

    // Expand/collapse all
    $('#btn-disable-all').on('click', function(e) {
        $disabledTree.treeview('disableAll', { silent: $('#chk-disable-silent').is(':checked') });
    });

    $('#btn-enable-all').on('click', function(e) {
        $disabledTree.treeview('enableAll', { silent: $('#chk-disable-silent').is(':checked') });
    });

});

function item(obj) {

    var nodeid = $(obj).attr('data-nodeid');
    var tree = $("#treeview5");
    var node = tree.treeview('getNode', nodeid);
    var siblings = tree.treeview('getSiblings', node);

    if (node.state.expanded) {
        //处于展开状态则折叠
        tree.treeview('collapseNode', node.nodeId);
    } else {
        //展开
        tree.treeview('expandNode', node.nodeId);
        $(obj).css({ color: "#fff" })
        for (var i = 0; i < siblings.length; i++) {
            if (siblings[i].state.expanded) {
                siblings[i].state.expanded = false;
            }
        }
    }
}
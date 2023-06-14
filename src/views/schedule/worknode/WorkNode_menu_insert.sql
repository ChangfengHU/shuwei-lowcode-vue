-- 注意：该页面对应的前台目录为views/system文件夹下
-- 如果你想更改到其他目录，请修改sql中component字段对应的值


INSERT INTO sys_permission(id, parent_id, name, url, component, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_route, is_leaf, keep_alive, hidden, hide_tab, description, status, del_flag, rule_flag, create_by, create_time, update_by, update_time, internal_or_external)
VALUES ('2023051601419910270', NULL, '工作节点,能够提供调度能力的节点会让节点信息注册上来', '/shcedule/worknode/workNodeList', 'shcedule/worknode/WorkNodeList', NULL, NULL, 0, NULL, '1', 0.00, 0, NULL, 1, 0, 0, 0, 0, NULL, '1', 0, 0, 'admin', '2023-05-16 01:41:27', NULL, NULL, 0);

-- 权限控制sql
-- 新增
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2023051601419920271', '2023051601419910270', '添加工作节点,能够提供调度能力的节点会让节点信息注册上来', NULL, NULL, 0, NULL, NULL, 2, 'system:work_node:add', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2023-05-16 01:41:27', NULL, NULL, 0, 0, '1', 0);
-- 编辑
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2023051601419920272', '2023051601419910270', '编辑工作节点,能够提供调度能力的节点会让节点信息注册上来', NULL, NULL, 0, NULL, NULL, 2, 'system:work_node:edit', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2023-05-16 01:41:27', NULL, NULL, 0, 0, '1', 0);
-- 删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2023051601419920273', '2023051601419910270', '删除工作节点,能够提供调度能力的节点会让节点信息注册上来', NULL, NULL, 0, NULL, NULL, 2, 'system:work_node:delete', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2023-05-16 01:41:27', NULL, NULL, 0, 0, '1', 0);
-- 批量删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2023051601419920274', '2023051601419910270', '批量删除工作节点,能够提供调度能力的节点会让节点信息注册上来', NULL, NULL, 0, NULL, NULL, 2, 'system:work_node:deleteBatch', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2023-05-16 01:41:27', NULL, NULL, 0, 0, '1', 0);
-- 导出excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2023051601419920275', '2023051601419910270', '导出excel_工作节点,能够提供调度能力的节点会让节点信息注册上来', NULL, NULL, 0, NULL, NULL, 2, 'system:work_node:exportXls', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2023-05-16 01:41:27', NULL, NULL, 0, 0, '1', 0);
-- 导入excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2023051601419920276', '2023051601419910270', '导入excel_工作节点,能够提供调度能力的节点会让节点信息注册上来', NULL, NULL, 0, NULL, NULL, 2, 'system:work_node:importExcel', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2023-05-16 01:41:27', NULL, NULL, 0, 0, '1', 0);

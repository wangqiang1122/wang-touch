
exports.house_table_config = {  ID:'ID', title:'标题' ,ave_price: '均价', tel:'电话',area_min:'最小面积'};
exports.broker_table_config = {  ID:'ID', title:'标题' };
exports.link_table_config = {  ID:'ID', title:'标题', type:'类型', expires: '过期时间'};
exports.ad_table_config = {  ID:'ID', title:'标题', type:'类型', link: '链接'};


exports.insert_house = ['title','sub_title','position_main',
    'position_second','ave_price','area_min','area_max','tel','building_type',
    'property_types','sale_time','submit_time','ID','admin_ID','img_paths','img_real_paths',
    'main_img_path','main_img_real_path','property_img_paths','property_img_real_paths'];
exports.insert_ad = ['title','ID','admin_ID','type','link',
    'img_path','img_real_path','expires','n_order','n_show','n_click'];
exports.insert_broker = ['title','ID','admin_ID','img_path','img_real_path'];
exports.insert_link = ['title','ID','admin_ID','type','link','n_order','expires'];



exports.disable_data = ['ID','admin_ID','create_time'];
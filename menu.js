//Link Icon http://www.urbanui.com/inspire/pages/ui/icons.html

var menu = [
	
	{ 	name: 'แดชบอร์ด',
		link: 'index.html',
		sub: null

	},
	{
		name: 'การซื้อรถ',
        link: 'receivecar.html',
		submenu : [{
			name: 'รับรถเข้า',
	        link: 'receivecar.html',
	        submenu: null
		},
		{
			name: 'ฟอร์มรับรถเข้า',
	        link: 'add_receivecar.html',
	        submenu: null
		},
		{
			name: 'สัญญามัดจำ',
    		link: 'deposit_contract.html',
    		submenu: null
		},
		{
			name: 'ฟอร์มสัญญามัดจำ',
    		link: 'add_deposit_contract.html',
    		submenu: null
		},
		{
			name: 'ข้อตกลงมัดจำรถ used',
    		link: 'deposit.html',
    		submenu: null
		},
		{
			name: 'ฟอร์มข้อตกลงมัดจำรถ used',
	        link: 'add_deposit.html',
	        submenu: null
		}	
		]
	},
	{
		name: 'สต๊อกรถยนต์',
		link: 'stock.html',
		submenu: [{
			name: 'สต๊อกรถยนต์',
			link: 'stock.html',
			sub: null
		},
		{
			name: 'ปรับสถานะสต๊อกรถยนต์',
			link: 'edit_stock.html',
			sub: null
		}
		]
	},
	{
		name: 'การขายรถ',
		link: 'sale_contract.html',
		submenu : [{
			name: 'สัญญามัดจำ',
			link: 'sale_contract.html',
			submenu: null
		},
		{
			name: 'ฟอร์มสัญญามัดจำ',
			link: 'add_sale_contract.html',
			submenu: null
		},
		{
			name: 'ส่งมอบรถ',
			link: 'sale_sendcar.html',
			submenu: null
		},
		{
			name: 'ฟอร์มส่งมอบรถ',
			link: 'add_sale_sendcar.html',
			submenu: null
		}
		]
	},
		{
		name: 'ข้อมูลพื้นฐาน',
        link: '',
		submenu : [{
			name: 'Brand',
	        link: 'brand.html',
	        submenu: null
		},
		{
			name: 'Model',
	        link: 'model.html',
	        submenu: null
		},
		{
			name: 'Colour',
    		link: 'colour.html',
    		submenu: null
		},
		{
			name: 'Special option',
    		link: 'option.html',
    		submenu: null
		},
		{
			name: 'ชนิดเชื้อเพลง',
    		link: 'fuel.html',
    		submenu: null
		},
		{
			name: 'ประเภทของรถ',
    		link: 'type.html',
    		submenu: null
		},
		{
			name: 'สถานะดำเนินงาน',
	        link: 'status.html',
	        submenu: null
		}	
		]
	}

];
var data = "";

$.each(menu,function(i,v){
	
	if(v.submenu!==undefined){
		if(v.link==main_menu){
			var active = "active";
			var collapse = "";
			var show = 'show';
			var expanded = true;
		}else{
			var active = "";
			var collapse = "";
			var show = 'show';
			var expanded = true;
		}
		data+='<li class="d-flex flex-column '+active+'">\
                <a data-toggle="collapse" href="#menu_'+i+'" class="'+collapse+' nav-link" aria-expanded="true">\
                    <i class="nav-icon '+v.icon+'"></i>\
                    <p>\
                        '+v.name+'\
                        <i class="fa fa-sort-desc submenu-toggle"></i>\
                    </p>\
                </a>\
                <div class="collapse '+show+'" id="menu_'+i+'" role="navigation" aria-expanded="'+expanded+'">\
                    <ul class="nav flex-column">';
                    $.each(v.submenu,function(j,w){
                    	if(w.link==current_page){
							var active = "active";
							var collapse = "collapse";
							var show = 'show';
							var expanded = true;
						}else{
							var active = "";
							var collapse = "";
							var show = 'show';
							var expanded = false;
						}
                    	data+='\
                    	<li class="'+active+'">\
                            <a class="nav-link" href="'+w.link+'">\
                                '+w.name+'\
                            </a>\
                        </li>';
                    });
            data+='\
                    </ul>\
                </div>\
            </li>';
	}else{
		if(v.link==current_page){
			var active = "active";
			var collapse = "collapse";
			var show = 'show';
			var expanded = true;
		}else{
			var active = "";
			var collapse = "";
			var show = 'show';
			var expanded = true;
		}
		data+='<li class="d-flex flex-column '+active+'">\
	                <a class="nav-link" href="'+v.link+'">\
	                    <i class="nav-icon '+v.icon+'"></i>\
	                    <p>'+v.name+'</p>\
	                </a>\
	            </li>';
	}
});

// console.log(data);

$('#show_menu_on_sidebar').append(data);
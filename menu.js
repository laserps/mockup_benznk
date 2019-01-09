//Link Icon http://www.urbanui.com/inspire/pages/ui/icons.html

var menu = [
	
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
	        link: 'form_receivecar.html',
	        submenu: null
		},
		{
			name: 'สัญญามัดจำ',
    		link: 'deposit_contract.html',
    		submenu: null
		},
		{
			name: 'ฟอร์มสัญญามัดจำ',
    		link: 'form_deposit_contract.html',
    		submenu: null
		},
		{
			name: 'ข้อตกลงมัดจำรถ used',
    		link: 'deposit.html',
    		submenu: null
		},
		{
			name: 'ฟอร์มข้อตกลงมัดจำรถ used',
	        link: 'form_deposit.html',
	        submenu: null
		}	
		]
	},
	{
		name: 'สต๊อกรถยนต์',
		link: 'sataus',
		submenu: [{
			name: 'สต๊อกรถยนต์',
			link: 'status.html',
			sub: null
		},
		{
			name: 'ปรับสถานะสต๊อกรถยนต์',
			link: 'edit_status.html',
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
			link: 'form_sale_contract.html',
			submenu: null
		},
		{
			name: 'ส่งมอบรถ',
			link: 'sale_sendcar.html',
			submenu: null
		},
		{
			name: 'ฟอร์มส่งมอบรถ',
			link: 'form_sale_sendcar.html',
			submenu: null
		}
		]
	},

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
							var show = '';
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
			var show = '';
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
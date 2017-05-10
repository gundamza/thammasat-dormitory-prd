angular.module('leadApp', [])
.controller('mainController', function ($scope, $http) {
  $scope.id = null;
  $scope.lead = { };
  
  //$scope.salutation = ['Mr.', 'Ms.', 'Mrs.', 'Dr.', 'Prof.'];
  $scope.title = ['นาย', 'นางสาว', 'นาง'];
  $scope.gender = ['Male', 'Female'];
  
  $scope.salutation=[{'Gender':'Male','salutations':['Mr.','Dr.','Prof.']} 
                 , {'Gender':'Female' ,'salutations':['Ms.', 'Mrs.', 'Dr.', 'Prof.']} ];
 
  
  
  
  /*
  $scope.faculty = ['นิติศาสตร์ 99/3', 'พาณิชยศาสตร์และการบัญชี 99/4', 'รัฐศาสตร์ 99/10', 'เศรษฐศาสตร์ 99/8', 'สังคมสงเคราะห์ศาสตร์ 99/9', 'สังคมวิทยามนุษย์วิทยา 99/10', 'ศิลปศาสตร์ 99/5',
	  				'วารสารศาสตร์และสื่อสารมวลชน 99/10', 'วิทยาศาสตร์และเทคโนโลยี 99/2', 'วิศวกรรมศาสตร์ 99/6', 'สถาบันเทคโนโลยีนานาชาติสิรินธร 99/7', 'สถาปัตยกรรมศาสตร์และผังเมือง 99/10',
	  				'ศิลปกรรมศาสตร์ 99/10', 'แพทย์ศาสตร์ 99/10', 'สหเวชศาสตร์ 99/10', 'ทันตแพทยศาสตร์ 99/10', 'พยาบาลศาสตร์ 99/10', 'สาธารณสุขศาสตร์ 99/10', 'เภสัชศาสตร์ 99/10',
	  				'วิทยาการเรียนรู้และศึกษาศาสตร์ 99/10', 'วิทยาลัยพัฒนศาสตร์ ป๋วย อึ๊งภากรณ์ 99/10', 'วิทยาลัยนานาชาติ ปรีดี พนมยงค์ 99/10', 'วิทยาลัยแพทยศาสตร์นานาชาติจุฬาภรณ์ 99/10',
	  				'วิทยาลัยโลกคดีศึกษา 99/10', 'อื่นๆ 99/10', 'สถาบันภาษา 99/10', 'วิทยาลัยนวัตกรรม 99/10', 'วิทยาลัยสหวิทยาการ 99/10'];
	  				*/
  $scope.faculty = ['นิติศาสตร์', 'พาณิชยศาสตร์และการบัญชี', 'รัฐศาสตร์', 'เศรษฐศาสตร์', 'สังคมสงเคราะห์ศาสตร์', 'สังคมวิทยามนุษย์วิทยา', 'ศิลปศาสตร์',
		'วารสารศาสตร์และสื่อสารมวลชน', 'วิทยาศาสตร์และเทคโนโลยี', 'วิศวกรรมศาสตร์', 'สถาบันเทคโนโลยีนานาชาติสิรินธร', 'สถาปัตยกรรมศาสตร์และผังเมือง',
		'ศิลปกรรมศาสตร์', 'แพทย์ศาสตร์', 'สหเวชศาสตร์', 'ทันตแพทยศาสตร์', 'พยาบาลศาสตร์', 'สาธารณสุขศาสตร์', 'เภสัชศาสตร์',
		'วิทยาการเรียนรู้และศึกษาศาสตร์', 'วิทยาลัยพัฒนศาสตร์ ป๋วย อึ๊งภากรณ์', 'วิทยาลัยนานาชาติ ปรีดี พนมยงค์', 'วิทยาลัยแพทยศาสตร์นานาชาติจุฬาภรณ์',
		'วิทยาลัยโลกคดีศึกษา', 'อื่นๆ', 'สถาบันภาษา', 'วิทยาลัยนวัตกรรม', 'วิทยาลัยสหวิทยาการ'];
  $scope.zone = [{'Gender':'Male', 'zones':['หอพักเอเชี่ยนเกมส์โซน B','หอพักเอเชี่ยนเกมส์โซน B8','หอพักเอเชี่ยนเกมส์โซน C Plus',
	  										'หอพักเอเชี่ยนเกมส์โซน C,E','หอพักคู่โดมพัดลม ห้องน้ำรวม','หอพักคู่โดมพัดลม ห้องน้ำในตัว',
	  										'หอพักคู่โดมปรับอากาศ ห้องน้ำรวม','หอพักคู่โดมปรับอากาศ ห้องน้ำในตัว',
	  										'หอพักมธ.ลำปาง โดม ๒ (ปรับอากาศ) พัก 4 คน','หอพักมธ.ลำปาง โดม ๒ (พัดลม) พัก 4 คน']}, 
	  			 {'Gender':'Female', 'zones':['หอพักเอเชี่ยนเกมส์โซน B','หอพักเอเชี่ยนเกมส์โซน B8','หอพักเอเชี่ยนเกมส์โซน C Plus',
	  				 						  'หอพักเอเชี่ยนเกมส์โซน C,E','หอพักเคียงโดมพัดลม ห้องน้ำรวม','หอพักเคียงโดมพัดลม ห้องน้ำในตัว',
	  				 						  'หอพักเคียงโดมปรับอากาศ ห้องน้ำรวม','หอพักเคียงโดมปรับอากาศ ห้องน้ำในตัว','หอพักมธ.ลำปาง โดม ๑ (พัดลม) พัก 4 คน',
	  				 						  'หอพักมธ.ลำปาง โดม ๑ (ปรับอากาศ) พัก 4 คน','หอพักมธ.ลำปาง โดม ๒ (ปรับอากาศ) พัก 4 คน',
	  				 						  'หอพักมธ.ลำปาง โดม ๒ (พัดลม) พัก 4 คน']}];
  
  $scope.sleepingtime = ['ก่อนเวลา 22.00 น.','หลังเวลา 22.00 น.'];
  $scope.sleepingbehavior = ['นอนไม่กรน','นอนกรน'];
  $scope.usingairconditioner = ['เปิดเครื่องปรับอากาศ','ไม่เปิดเครื่องปรับอากาศ'];
  
	  			
  $scope.$watch('lead.gender__c', function(newVal) {
      if (newVal)
      {
    	  //alert($scope.lead.gender__c);
    	  angular.forEach($scope.zone , function(value)
	      {
    		  //alert(value.Gender);
    		  
    		  if(value.Gender == $scope.lead.gender__c)
    		  {
    			//alert(value.zones);
    	  		$scope.zones = value.zones;
    		  }
	      });
    	  
    	  
    	  angular.forEach($scope.salutation , function(value)
	      {
    		  //alert(value.Gender);
    		  
    		  if(value.Gender == $scope.lead.gender__c)
    		  {
    			//alert(value.zones);
    	  		$scope.salutations = value.salutations;
    		  }
	      });
    	  
      }
  });
  
  $scope.zone2 = ['หอพักเอเชี่ยนเกมโซน B (ทั้งผู้ชายและผู้หญิง)', 'หอพักเอเชี่ยนเกมส์โซน C Plus (ทั้งผู้ชายและผู้หญิง)', 'หอพักเอเชี่ยนเกมส์โซน C,E(ทั้งผู้ชายและผู้หญิง)', 'หอพักเคียงโดมปรับอากาศ ห้องน้ำในตัว (ผู้หญิงเท่านั้น)',
	  			 'หอพักเคียงโดมปรับอากาศ ห้องน้ำรวม (ผู้หญิงเท่านั้น)', 'หอพักเคียงโดมพัดลม ห้องน้ำในตัว (ผู้หญิงเท่านั้น)', 'หอพักเคียงโดมพัดลม ห้องน้ำรวม (ผู้หญิงเท่านั้น)', 'หอพักคู่โดมปรับอากาศ ห้องน้ำในตัว (ผู้ชายเท่านั้น)',
	  			 'หอพักคู่โดมปรับอากาศ ห้องน้ำรวม (ผู้ชายเท่านั้น)', 'หอพักคู่โดมพัดลม ห้องน้ำในตัว (ผู้ชายเท่านั้น)', 'หอพักคู่โดมพัดลม ห้องน้ำรวม (ผู้ชายเท่านั้น)', 'หอพักเอเชี่ยนเกมส์โซน C,E(ทั้งผู้ชายและผู้หญิง) (4 คน)',
	  			 'หอพักเคียงโดมปรับอากาศห้องน้ำในตัว (ผู้หญิงเท่านั้น)', 'หอพักมธ.ลำปาง โดม ๑ (ปรับอากาศ) พัก 4 คน (ผู้หญิงเท่านั้น)', 'หอพักมธ.ลำปาง โดม ๑ (พัดลม) พัก 4 คน (ผู้หญิงเท่านั้น)',
	  			 'หอพักมธ.ลำปาง โดม ๒ (ปรับอากาศ) พัก 4 คน (ผู้หญิงเท่านั้น)', 'หอพักมธ.ลำปาง โดม ๒ (พัดลม) พัก 4 คน (ผู้หญิงเท่านั้น)', 'หอพักมธ.ลำปาง โดม ๒ (ปรับอากาศ) พัก 4 คน (ผู้ชายเท่านั้น)',
	  			 'หอพักมธ.ลำปาง โดม ๒ (พัดลม) พัก 4 คน (ผู้ชายเท่านั้น)'];
  $scope.country = ['Thailand'];
  $scope.state = ['กระบี่', 'กรุงเทพมหานคร', 'กาญจนบุรี', 'กาฬสินธุ์', 'กำแพงเพชร', 'ขอนแก่น', 'จันทบุรี', 'ฉะเชิงเทรา', 'ชลบุรี', 'ชัยนาท', 'ชัยภูมิ', 'ชุมพร', 'ตรัง', 'ตราด', 'ตาก', 'นครนายก',
	  			  'นครปฐม', 'นครพนม', 'นครราชสีมา', 'นครศรีธรรมราช', 'นครสวรรค์', 'นนทบุรี','นราธิวาส', 'น่าน', 'บึงกาฬ', 'บุรีรัมย์', 'ปทุมธานี', 'ประจวบคีรีขันธ์', 'ปราจีนบุรี', 'ปัตตานี', 'พระนครศรีอยุธยา',
	  			  'พะเยา', 'พังงา', 'พัทลุง', 'พิจิตร', 'พิษณุโลก', 'ภูเก็ต', 'มหาสารคาม', 'มุกดาหาร', 'ยะลา', 'ยโสธร', 'ระนอง', 'ระยอง', 'ราชบุรี', 'ร้อยเอ็ด', 'ลพบุรี', 'ลำปาง', 'ลำพูน', 'ศรีสะเกษ',
	  			  'สกลนคร', 'สงขลา', 'สตูล', 'สมุทรปราการ', 'สมุทรสงคราม', 'สมุทรสาคร', 'สระบุรี', 'สระแก้ว', 'สิงห์บุรี', 'สุพรรณบุรี', 'สุราษฎร์ธานี', 'สุรินทร์', 'สุโขทัย', 'หนองคาย', 'หนองบัวลำภู',
	  			  'อำนาจเจริญ', 'อุดรธานี', 'อุตรดิตถ์', 'อุทัยธานี', 'อุบลราชธานี', 'อ่างทอง', 'เชียงราย', 'เชียงใหม่','เพชรบุรี', 'เพชรบูรณ์', 'เลย', 'แพร่', 'แม่ฮ่องสอน'];
 
  
  $scope.scholarshipname =[{'Scholarship__c':true, 'scholarshipnames':['ทุนเต็ม','ทุนบางส่วน','ทุนวันเกิด','ทุน. รพ.ธรรมศาสตร์','ทุนสมเด็จย่า','ทุนโครงการ. ว.ม.ว.','นักศึกษาพิการ']}];
  $scope.$watch('lead.scholarship__c', function(newVal) {
      if (newVal)
      {
    	  angular.forEach($scope.scholarshipname , function(value)
	      {
    		  if(value.Scholarship__c == $scope.lead.scholarship__c)
    		  {
    	  		$scope.scholarshipnames = value.scholarshipnames;
    		  }
	      });
      }
  });
  
  $scope.getData = function () {	
	//alert(accountId);
    $http.get('../studentinfo/' + $scope.id)
    .success((data) => {
    	console.log(data);
    	
    	data[0].Name = data[0].Name == null || data[0].Name =='null' ? '' : data[0].Name;
    	data[0].identification_number__c = data[0].identification_number__c == null || data[0].identification_number__c =='null' ? '' : data[0].identification_number__c;
    	data[0].passport_number__c = data[0].passport_number__c == null || data[0].passport_number__c =='null' ? '' : data[0].passport_number__c;
    	data[0].gender__c = data[0].gender__c == null || data[0].gender__c =='null' ? '' : data[0].gender__c;
    	data[0].title_th__c = data[0].title_th__c == null || data[0].title_th__c =='null' ? '' : data[0].title_th__c;
    	data[0].first_name_th__c = data[0].first_name_th__c == null || data[0].first_name_th__c =='null' ? '' : data[0].first_name_th__c;
    	data[0].last_name_th__c = data[0].last_name_th__c == null || data[0].last_name_th__c =='null' ? '' : data[0].last_name_th__c;
    	data[0].salutation = data[0].salutation == null || data[0].salutation =='null' ? '' : data[0].salutation;
    	data[0].firstname = data[0].firstname == null || data[0].firstname =='null' ? '' : data[0].firstname;
    	data[0].lastname = data[0].lastname == null || data[0].lastname =='null' ? '' : data[0].lastname;
    	data[0].birthdate__c = data[0].birthdate__c == null || data[0].birthdate__c =='null' ? '' : data[0].birthdate__c;
    	data[0].personmobilephone = data[0].personmobilephone == null || data[0].personmobilephone =='null' ? '' : data[0].personmobilephone;
    	data[0].personemail = data[0].personemail == null || data[0].personemail =='null' ? '' : data[0].personemail;
    	data[0].congenital_disease__c = data[0].congenital_disease__c == null || data[0].congenital_disease__c =='null' ? '' : data[0].congenital_disease__c;
    	data[0].student_id__c = data[0].student_id__c == null || data[0].student_id__c =='null' ? '' : data[0].student_id__c;
    	data[0].faculty__c = data[0].faculty__c == null || data[0].faculty__c =='null' ? '' : data[0].faculty__c;
    	data[0].request_zone__c = data[0].request_zone__c == null || data[0].request_zone__c =='null' ? '' : data[0].request_zone__c;
    	data[0].scholarship__c = data[0].scholarship__c == null || data[0].Scholarship__c =='null' ? '' : data[0].scholarship__c;
    	data[0].scholarship_Name__c = data[0].scholarship_Name__c == null || data[0].scholarship__c =='null' ? '' : data[0].scholarship__c;
    	data[0].billingstreet = data[0].billingstreet == null || data[0].billingstreet =='null' ? '' : data[0].billingstreet;
    	data[0].billingcity = data[0].billingcity == null || data[0].billingcity =='null' ? '' : data[0].billingcity;
    	data[0].billingstate = data[0].billingstate == null || data[0].billingstate =='null' ? '' : data[0].billingstate;
    	data[0].billingpostalcode = data[0].billingpostalcode == null || data[0].billingpostalcode =='null' ? '' : data[0].billingpostalcode;
    	data[0].billingcountry = data[0].billingcountry == null || data[0].billingcountry =='null' ? '' : data[0].billingcountry;
    	data[0].parent_name__c = data[0].parent_name__c == null || data[0].parent_name__c =='null' ? '' : data[0].parent_name__c;
    	data[0].parent_phone__c = data[0].parent_phone__c == null || data[0].parent_phone__c =='null' ? '' : data[0].parent_phone__c;
    	data[0].parent_income__c = data[0].parent_income__c == null || data[0].parent_income__c =='null' ? '' : data[0].parent_income__c;
    	data[0].parent_name_2__c = data[0].parent_name_2__c == null || data[0].parent_name_2__c =='null' ? '' : data[0].parent_name_2__c;
    	data[0].parent_phone_2__c = data[0].parent_phone_2__c == null || data[0].parent_phone_2__c =='null' ? '' : data[0].parent_phone_2__c;
    	data[0].disabled__c = data[0].disabled__c == null || data[0].disabled__c =='null' ? '' : data[0].disabled__c;
    	
    	data[0].sleeping_time__c = data[0].sleeping_time__c == null || data[0].sleeping_time__c =='null' ? '' : data[0].sleeping_time__c;
    	data[0].sleeping_behavior__c = data[0].sleeping_behavior__c == null || data[0].sleeping_behavior__c =='null' ? '' : data[0].sleeping_behavior__c;
    	data[0].using_air_conditioner__c = data[0].using_air_conditioner__c == null || data[0].using_air_conditioner__c =='null' ? '' : data[0].using_air_conditioner__c;
    	
    	
    	if (data[0].birthdate__c) {
    		var str = data[0].birthdate__c;
    		var res = str.substring(0, 10);
		    var dd = res.substring(8,10);
		    var mm = res.substring(5,7);
		    var yyyy = res.substring(0,4);
		    
		    res = dd + "/" + mm + "/" + yyyy;
		    
		    data[0].birthdate__c = res;
    	}
    	
    	
    	$scope.lead = data[0];
    })
    .error((data) => {
      console.log('Error: ' + data);
    });
  }
  
  $scope.saveData = function() {
	
	  
	  var sss =$scope.lead.birthdate__c;
	  var BeforeChange=$scope.lead.birthdate__c;
	  
	  var dd=BeforeChange.substring(0, 2);
	  var mm = BeforeChange.substring(3, 5);
	  var yyyy = BeforeChange.substring(6, 10);
	  $scope.lead.birthdate__c = mm+"/"+dd+"/"+yyyy;

	  
	  
	 
	  if($scope.id == null)
		{
			$scope.createLead();
		}
		else
		{
			$scope.updateLead();
		}
	  
	  $scope.lead.birthdate__c=BeforeChange;
  }
  
  $scope.createLead = function () {
	var data = JSON.stringify($scope.lead);
	//alert("Create : " + data);
	$http.post('../createstudent', data)
	.success((data) => {
		$scope.lead = data[0];
		$scope.id = data[0].sfid;
		alert('create success');
		
	})
	.error((data) => {
		console.log('Error: ' + data);
	});
  }
  
  $scope.updateLead = function () {
		  
	var data = JSON.stringify($scope.lead);
	
	//alert("Update : " + data);
	$http.post('../updatestudent/' + $scope.id, data)
	.success((data) => {
		alert('update success');
	})
	.error((data) => {
		alert('Error: ' + data);
		console.log('Error: ' + data);
	});
	
	
	
  }
  
});
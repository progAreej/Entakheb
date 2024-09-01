exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("candidates")
      .del()
      .then(function () {
        // Inserts seed entries
        return knex("candidates").insert([
            
            
            // قائمة البناء و العمل دائرة أولى الزرقاء

            {
              name: "سوسن محمد",//1
              city: "الزرقاء",
              list: "قائمة البناء و العمل",
              circle: "الدائرة الاولى",
              party: "حزب المستقبل الأردني",
              circle_list: "قائمة الدائرة الاولى",
              candidate_votes: 0,
              list_votes: 0,
              gender: "female",
              type: "كوتا",
              isActivate: true,
              party_votes: 0,
              isPass: false,
              isPassparty: false,
              totalSeatsparty: 0,
              candidate_national_id: 2068486497,
            },
            {
              name: "جانسيل سامي",//2
              city: "الزرقاء",
              list: "قائمة البناء و العمل",
              circle: "الدائرة الاولى",
              party: "حزب المستقبل الأردني",
              circle_list: "قائمة الدائرة الاولى",
              candidate_votes: 0,
              list_votes: 0,
              gender: "female",
              type: "مسيحي",
              isActivate: true,
              party_votes: 0,
              isPass: false,
    
              isPassparty: false,
              totalSeatsparty: 0,
              candidate_national_id: 2000000102,
            },
            {
              name: "لورنس قاسم",//3
              city: "الزرقاء",
              list: "قائمة البناء و العمل",
              circle: "الدائرة الاولى",
              party: "حزب المستقبل الأردني",
              circle_list: "قائمة الدائرة الاولى",
              candidate_votes: 0,
              list_votes: 0,
              gender: "male",
              type: "شيشاني",
              isActivate: true,
              party_votes: 0,
              isPass: false,
    
              isPassparty: false,
              totalSeatsparty: 0,
              candidate_national_id: 2000000225,
            },
            {
              name: "خميس حسين",//4
              city: "الزرقاء",
              list: "قائمة البناء و العمل",
              circle: "الدائرة الاولى",
              party: "حزب المستقبل الأردني",
              circle_list: "قائمة الدائرة الاولى",
              candidate_votes: 0,
              list_votes: 0,
              gender: "male",
              type: "مسلم",
              isActivate: true,
              party_votes: 0,
              isPass: false,
    
              isPassparty: false,
              totalSeatsparty: 0,
              candidate_national_id: 1730183497,
            },
    
            {
              name: "عمار ضيف الله",//5
              city: "الزرقاء",
              list: "قائمة البناء و العمل",
              circle: "الدائرة الاولى",
              party: "حزب المستقبل الأردني",
              circle_list: "قائمة الدائرة الاولى",
              candidate_votes: 0,
              list_votes: 0,
              gender: "male",
              type: "مسلم",
              isActivate: true,
              party_votes: 0,
              isPass: false,
    
              isPassparty: false,
              totalSeatsparty: 0,
              candidate_national_id: 2000003288,
            },
    
            {
              name: "علي موسى",//6
              city: "الزرقاء",
              list: "قائمة البناء و العمل",
              circle: "الدائرة الاولى",
              party: "حزب المستقبل الأردني",
              circle_list: "قائمة الدائرة الاولى",
              candidate_votes: 0,
              list_votes: 0,
              gender: "male",
              type: "مسلم",
              isActivate: true,
              party_votes: 0,
              isPass: false,
    
              isPassparty: false,
              totalSeatsparty: 0,
              candidate_national_id: 2000600285,
            },
    
            {
              name: "ضياء فايز",//7
              city: "الزرقاء",
              list: "قائمة البناء و العمل",
              circle: "الدائرة الاولى",
              party: "حزب المستقبل الأردني",
              circle_list: "قائمة الدائرة الاولى",
              candidate_votes: 0,
              list_votes: 0,
              gender: "male",
              type: "مسلم",
              isActivate: true,
              party_votes: 0,
              isPass: false,
    
              isPassparty: false,
              totalSeatsparty: 0,
              candidate_national_id: 2003000278,
            },
    
            {
              name: "أحمد عيسى",//8
              city: "الزرقاء",
              list: "قائمة البناء و العمل",
              circle: "الدائرة الاولى",
              party: "حزب المستقبل الأردني",
              circle_list: "قائمة الدائرة الاولى",
              candidate_votes: 0,
              list_votes: 0,
              gender: "male",
              type: "مسلم",
              isActivate: true,
              party_votes: 0,
              isPass: false,
    
              isPassparty: false,
              totalSeatsparty: 0,
              candidate_national_id: 2091672238,
            },
    
            {
              name: "أيمن غسان",//9
              city: "الزرقاء",
              list: "قائمة البناء و العمل",
              circle: "الدائرة الاولى",
              party: "حزب المستقبل الأردني",
              circle_list: "قائمة الدائرة الاولى",
              candidate_votes: 0,
              list_votes: 0,
              gender: "male",
              type: "مسلم",
              isActivate: true,
              party_votes: 0,
              isPass: false,
    
              isPassparty: false,
              totalSeatsparty: 0,
              candidate_national_id: 2000672238,
            },
    
            {
              name: "عدنان شاهر",//10
              city: "الزرقاء",
              list: "قائمة البناء و العمل",
              circle: "الدائرة الاولى",
              party: "حزب المستقبل الأردني",
              circle_list: "قائمة الدائرة الاولى",
              candidate_votes: 0,
              list_votes: 0,
              gender: "male",
              type: "مسلم",
              isActivate: true,
              party_votes: 0,
              isPass: false,
    
              isPassparty: false,
              totalSeatsparty: 0,
              candidate_national_id: 2008510224,
            },
        
          
            // قائمة البناء و العمل دائرة أولى الزرقاء
        
        
            // قائمة  المستقبل  دائرة أولى الزرقاء

           {
            name: "هادي عمر",//1
            city: "الزرقاء",
            list: "قائمة  المستقبل",
            circle: "الدائرة الاولى",
            party: "حزب المستقبل الأردني",
            circle_list: "قائمة الدائرة الاولى",
            candidate_votes: 0,
            list_votes: 0,
            gender: "male",
            type: "مسلم",
            isActivate: true,
            party_votes: 0,
            isPass: false,
  
            isPassparty: false,
            totalSeatsparty: 0,
            candidate_national_id: 2060000246,
          },
          {
            name: "أماني محمد",//2
            city: "الزرقاء",
            list: "قائمة  المستقبل",
            circle: "الدائرة الاولى",
            party: "حزب إرادة",
            circle_list: "قائمة الدائرة الاولى",
            candidate_votes: 0,
            list_votes: 0,
            gender: "female",
            type: "كوتا",
            isActivate: true,
            party_votes: 0,
            isPass: false,
  
            isPassparty: false,
            totalSeatsparty: 0,
            candidate_national_id: 2008000232,
          },
          {
            name: "اسامة عمر",//3
            city: "الزرقاء",
            list: "قائمة المستقبل",
            circle: "الدائرة الاولى",
            party: "حزب إرادة",
            circle_list: "قائمة الدائرة الاولى",
            candidate_votes: 0,
            list_votes: 0,
            gender: "male",
            type: "مسيحي",
            isActivate: true,
            party_votes: 0,
            isPass: false,
  
            isPassparty: false,
            totalSeatsparty: 0,
            candidate_national_id: 2000600222,
          },
          {
            name: "كمال صالح",//4
            city: "الزرقاء",
            list: "قائمة المستقبل",
            circle: "الدائرة الاولى",
            party: "حزب إرادة",
            circle_list: "قائمة الدائرة الاولى",
            candidate_votes: 0,
            list_votes: 0,
            gender: "male",
            type: "شيشاني",
            isActivate: true,
            party_votes: 0,
            isPass: false,
  
            isPassparty: false,
            totalSeatsparty: 0,
            candidate_national_id: 2000600229,
          },
          {
            name: "نور الدين فادي",//5
            city: "الزرقاء",
            list: "قائمة  المستقبل",
            circle: "الدائرة الاولى",
            party: "حزب إرادة",
            circle_list: "قائمة الدائرة الاولى",
            candidate_votes: 0,
            list_votes: 0,
            gender: "male",
            type: "مسلم",
            isActivate: true,
            party_votes: 0,
            isPass: false,
  
            isPassparty: false,
            totalSeatsparty: 0,
            candidate_national_id: 2000600230,
          },
  
          {
            name: "عيد عطا الله",//6
            city: "الزرقاء",
            list: "قائمة المستقبل",
            circle: "الدائرة الاولى",
            party: "حزب إرادة",
            circle_list: "قائمة الدائرة الاولى",
            candidate_votes: 0,
            list_votes: 0,
            gender: "male",
            type: "مسلم",
            isActivate: true,
            party_votes: 0,
            isPass: false,
  
            isPassparty: false,
            totalSeatsparty: 0,
            candidate_national_id: 2000600232,
          },
  
          {
            name: "سمر هاني",//7
            city: "الزرقاء",
            list: "قائمة المستقبل",
            circle: "الدائرة الاولى",
            party: "حزب إرادة",
            circle_list: "قائمة الدائرة الاولى",
            candidate_votes: 0,
            list_votes: 0,
            gender: "female",
            type: "مسلم",
            isActivate: true,
            party_votes: 0,
            isPass: false,
  
            isPassparty: false,
            totalSeatsparty: 0,
            candidate_national_id: 2000600233,
          },
  
          {
            name: "رافع محمود",//8
            city: "الزرقاء",
            list: "قائمة المستقبل",
            circle: "الدائرة الاولى",
            party: "حزب إرادة",
            circle_list: "قائمة الدائرة الاولى",
            candidate_votes: 0,
            list_votes: 0,
            gender: "male",
            type: "مسلم",
            isActivate: true,
            party_votes: 0,
            isPass: false,
  
            isPassparty: false,
            totalSeatsparty: 0,
            candidate_national_id: 2000600234,
          },
  
          {
            name: "صخر سميح",//9
            city: "الزرقاء",
            list: "قائمة  المستقبل",
            circle: "الدائرة الاولى",
            party: "حزب إرادة",
            circle_list: "قائمة الدائرة الاولى",
            candidate_votes: 0,
            list_votes: 0,
            gender: "male",
            type: "مسلم",
            isActivate: true,
            party_votes: 0,
            isPass: false,
  
            isPassparty: false,
            totalSeatsparty: 0,
            candidate_national_id: 2000600236,
          },

          {
            name: "مالك سميح شحادة",//10
            city: "الزرقاء",
            list: "قائمة  المستقبل",
            circle: "الدائرة الاولى",
            party: "حزب إرادة",
            circle_list: "قائمة الدائرة الاولى",
            candidate_votes: 0,
            list_votes: 0,
            gender: "male",
            type: "مسلم",
            isActivate: true,
            party_votes: 0,
            isPass: false,
            isPassparty: false,
            totalSeatsparty: 0,
            candidate_national_id: 2000600346,
          },

          
          // قائمة  المستقبل  دائرة أولى الزرقاء
        
        
                  // قائمة  رؤية  دائرة أولى الزرقاء

          {
            name: "دينا جمال",//1
            city: "الزرقاء",
            list: "قائمة رؤية",
            circle: "الدائرة الاولى",
            party: "حزب الوحدة الشعبية الديمقراطي الأردني",
            circle_list: "قائمة الدائرة الاولى",
            candidate_votes: 0,
            list_votes: 0,
            gender: "female",
            type: "كوتا",
            isActivate: true,
            party_votes: 0,
            isPass: false,
  
            isPassparty: false,
            totalSeatsparty: 0,
  
            candidate_national_id: 2000600240,
          },
          {
            name: "محمود إياد",//2
            city: "الزرقاء",
            list: "قائمة رؤية",
            circle: "الدائرة الاولى",
            party: "حزب الوحدة الشعبية الديمقراطي الأردني",
            circle_list: "قائمة الدائرة الاولى",
            candidate_votes: 0,
            list_votes: 0,
            gender: "male",
            type: "مسيحي",
            isActivate: true,
            party_votes: 0,
            isPass: false,
  
            isPassparty: false,
            totalSeatsparty: 0,
            candidate_national_id: 2000600241,
          },
          {
            name: "رزق داود",//3
            city: "الزرقاء",
            list: "قائمة رؤية",
            circle: "الدائرة الاولى",
            party: "حزب الوحدة الشعبية الديمقراطي الأردني",
            circle_list: "قائمة الدائرة الاولى",
            candidate_votes: 0,
            list_votes: 0,
            gender: "male",
            type: "شيشاني",
            isActivate: true,
            party_votes: 0,
            isPass: false,
  
            isPassparty: false,
            totalSeatsparty: 0,
            candidate_national_id: 2000600244,
          },
          {
            name: "مايا عيسى",//4
            city: "الزرقاء",
            list: "قائمة رؤية",
            circle: "الدائرة الاولى",
            party: "حزب الوحدة الشعبية الديمقراطي الأردني",
            circle_list: "قائمة الدائرة الاولى",
            candidate_votes: 0,
            list_votes: 0,
            gender: "female",
            type: "مسلم",
            isActivate: true,
            party_votes: 0,
            isPass: false,
  
            isPassparty: false,
            totalSeatsparty: 0,
            candidate_national_id: 2000600260,
          },
  
          {
            name: "طارق محمد",//5
            city: "الزرقاء",
            list: "قائمة رؤية",
            circle: "الدائرة الاولى",
            party: "حزب الوحدة الشعبية الديمقراطي الأردني",
            circle_list: "قائمة الدائرة الاولى",
            candidate_votes: 0,
            list_votes: 0,
            gender: "male",
            type: "مسلم",
            isActivate: true,
            party_votes: 0,
            isPass: false,
  
            isPassparty: false,
            totalSeatsparty: 0,
            candidate_national_id: 2000600243,
          },
  
          {
            name: "مجد الدين عبد الله",//6
            city: "الزرقاء",
            list: "قائمة رؤية",
            circle: "الدائرة الاولى",
            party: "حزب الوحدة الشعبية الديمقراطي الأردني",
            circle_list: "قائمة الدائرة الاولى",
            candidate_votes: 0,
            list_votes: 0,
            gender: "male",
            type: "مسلم",
            isActivate: true,
            party_votes: 0,
            isPass: false,
  
            isPassparty: false,
            totalSeatsparty: 0,
            candidate_national_id: 2000600242,
          },
  
          {
            name: "زيد حمزة",//7
            city: "الزرقاء",
            list: "قائمة رؤية",
            circle: "الدائرة الاولى",
            party: "حزب الوحدة الشعبية الديمقراطي الأردني",
            circle_list: "قائمة الدائرة الاولى",
            candidate_votes: 0,
            list_votes: 0,
            gender: "male",
            type: "مسلم",
            isActivate: true,
            party_votes: 0,
            isPass: false,
  
            isPassparty: false,
            totalSeatsparty: 0,
            candidate_national_id: 2000600246,
          },
  
          {
            name: "سعيد حامد",//8
            city: "الزرقاء",
            list: "قائمة رؤية",
            circle: "الدائرة الاولى",
            party: "حزب الوحدة الشعبية الديمقراطي الأردني",
            circle_list: "قائمة الدائرة الاولى",
            candidate_votes: 0,
            list_votes: 0,
            gender: "male",
            type: "مسلم",
            isActivate: true,
            party_votes: 0,
            isPass: false,
  
            isPassparty: false,
            totalSeatsparty: 0,
            candidate_national_id: 2000600249,
          },
  
          {
            name: "حمود فيصل",//9
            city: "الزرقاء",
            list: "قائمة رؤية",
            circle: "الدائرة الاولى",
            party: "حزب الوحدة الشعبية الديمقراطي الأردني",
            circle_list: "قائمة الدائرة الاولى",
            candidate_votes: 0,
            list_votes: 0,
            gender: "male",
            type: "مسلم",
            isActivate: true,
            party_votes: 0,
            isPass: false,
  
            isPassparty: false,
            totalSeatsparty: 0,
            isPassparty: false,
            totalSeatsparty: 0,
            candidate_national_id: 2000600248,
          },



          {
            name: "عبدالمجيد عبداللطيف العجارمه",//10
            city: "الزرقاء",
            list: "قائمة رؤية",
            circle: "الدائرة الاولى",
            party: "حزب الوحدة الشعبية الديمقراطي الأردني",
            circle_list: "قائمة الدائرة الاولى",
            candidate_votes: 0,
            list_votes: 0,
            gender: "male",
            type: "مسلم",
            isActivate: true,
            party_votes: 0,
            isPass: false,
  
            isPassparty: false,
            totalSeatsparty: 0,
            isPassparty: false,
            totalSeatsparty: 0,
            candidate_national_id: 2000602346,
          },


                  // قائمة  رؤية  دائرة أولى الزرقاء
        
        
                 // قائمة  كرامه  دائرة أولى الزرقاء

                 {
                    name: "تسنيم ابو عرقوب",//1
                    city: "الزرقاء",
                    list: "قائمة كرامه",
                    circle: "الدائرة الاولى",
                    party: "حزب الوحدة الشعبية الديمقراطي الأردني",
                    circle_list: "قائمة الدائرة الاولى",
                    candidate_votes: 0,
                    list_votes: 0,
                    gender: "female",
                    type: "كوتا",
                    isActivate: true,
                    party_votes: 0,
                    isPass: false,
          
                    isPassparty: false,
                    totalSeatsparty: 0,
          
                    candidate_national_id: 2005550008,
                  },
                  {
                    name: "مايكل جورج",//2
                    city: "الزرقاء",
                    list: "قائمة كرامه",
                    circle: "الدائرة الاولى",
                    party: "حزب الوحدة الشعبية الديمقراطي الأردني",
                    circle_list: "قائمة الدائرة الاولى",
                    candidate_votes: 0,
                    list_votes: 0,
                    gender: "male",
                    type: "مسيحي",
                    isActivate: true,
                    party_votes: 0,
                    isPass: false,
          
                    isPassparty: false,
                    totalSeatsparty: 0,
                    candidate_national_id: 2330000003,
                  },
                  {
                    name: "ميرزا بولاد الشيشاني",//3
                    city: "الزرقاء",
                    list: "قائمة كرامه",
                    circle: "الدائرة الاولى",
                    party: "حزب الوحدة الشعبية الديمقراطي الأردني",
                    circle_list: "قائمة الدائرة الاولى",
                    candidate_votes: 0,
                    list_votes: 0,
                    gender: "male",
                    type: "شيشاني",
                    isActivate: true,
                    party_votes: 0,
                    isPass: false,
          
                    isPassparty: false,
                    totalSeatsparty: 0,
                    candidate_national_id: 2000088807,
                  },
                  {
                    name: "عبدالمجيد العجارمه",//4
                    city: "الزرقاء",
                    list: "قائمة كرامه",
                    circle: "الدائرة الاولى",
                    party: "حزب الوحدة الشعبية الديمقراطي الأردني",
                    circle_list: "قائمة الدائرة الاولى",
                    candidate_votes: 0,
                    list_votes: 0,
                    gender: "female",
                    type: "مسلم",
                    isActivate: true,
                    party_votes: 0,
                    isPass: false,
          
                    isPassparty: false,
                    totalSeatsparty: 0,
                    candidate_national_id: 2000622346,
                  },
          
                  {
                    name: "يوسف البوريني",//5
                    city: "الزرقاء",
                    list: "قائمة كرامه",
                    circle: "الدائرة الاولى",
                    party: "حزب الوحدة الشعبية الديمقراطي الأردني",
                    circle_list: "قائمة الدائرة الاولى",
                    candidate_votes: 0,
                    list_votes: 0,
                    gender: "male",
                    type: "مسلم",
                    isActivate: true,
                    party_votes: 0,
                    isPass: false,
          
                    isPassparty: false,
                    totalSeatsparty: 0,
                    candidate_national_id: 2000222346,
                  },
          
                  {
                    name: "عثمان داوود",//6
                    city: "الزرقاء",
                    list: "قائمة كرامه",
                    circle: "الدائرة الاولى",
                    party: "حزب الوحدة الشعبية الديمقراطي الأردني",
                    circle_list: "قائمة الدائرة الاولى",
                    candidate_votes: 0,
                    list_votes: 0,
                    gender: "male",
                    type: "مسلم",
                    isActivate: true,
                    party_votes: 0,
                    isPass: false,
          
                    isPassparty: false,
                    totalSeatsparty: 0,
                    candidate_national_id: 2002222346,
                  },
          
                  {
                    name: "عبادة الجوابرة",//7
                    city: "الزرقاء",
                    list: "قائمة كرامه",
                    circle: "الدائرة الاولى",
                    party: "حزب الوحدة الشعبية الديمقراطي الأردني",
                    circle_list: "قائمة الدائرة الاولى",
                    candidate_votes: 0,
                    list_votes: 0,
                    gender: "male",
                    type: "مسلم",
                    isActivate: true,
                    party_votes: 0,
                    isPass: false,
          
                    isPassparty: false,
                    totalSeatsparty: 0,
                    candidate_national_id: 2022222346,
                  },
          
                  {
                    name: "عطا الشايب",//8
                    city: "الزرقاء",
                    list: "قائمة كرامه",
                    circle: "الدائرة الاولى",
                    party: "حزب الوحدة الشعبية الديمقراطي الأردني",
                    circle_list: "قائمة الدائرة الاولى",
                    candidate_votes: 0,
                    list_votes: 0,
                    gender: "male",
                    type: "مسلم",
                    isActivate: true,
                    party_votes: 0,
                    isPass: false,
          
                    isPassparty: false,
                    totalSeatsparty: 0,
                    candidate_national_id: 2222222346,
                  },
          
                  {
                    name: "عبدالله الجبور",//9
                    city: "الزرقاء",
                    list: "قائمة كرامه",
                    circle: "الدائرة الاولى",
                    party: "حزب الوحدة الشعبية الديمقراطي الأردني",
                    circle_list: "قائمة الدائرة الاولى",
                    candidate_votes: 0,
                    list_votes: 0,
                    gender: "male",
                    type: "مسلم",
                    isActivate: true,
                    party_votes: 0,
                    isPass: false,
          
                    isPassparty: false,
                    totalSeatsparty: 0,
                    isPassparty: false,
                    totalSeatsparty: 0,
                    candidate_national_id: 2223222346,
                  },
        
        
        
                  {
                    name: "طارق جابر",//10
                    city: "الزرقاء",
                    list: "قائمة كرامه",
                    circle: "الدائرة الاولى",
                    party: "حزب الوحدة الشعبية الديمقراطي الأردني",
                    circle_list: "قائمة الدائرة الاولى",
                    candidate_votes: 0,
                    list_votes: 0,
                    gender: "male",
                    type: "مسلم",
                    isActivate: true,
                    party_votes: 0,
                    isPass: false,
          
                    isPassparty: false,
                    totalSeatsparty: 0,
                    isPassparty: false,
                    totalSeatsparty: 0,
                    candidate_national_id: 2223622346,
                  },
        
        
                          // قائمة  كرامه  دائرة أولى الزرقاء
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        ]);
    });
};

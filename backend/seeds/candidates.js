exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("candidates")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("candidates").insert([
        // قائمة البناء و العمل دائرة أولى الزرقاء

        {
          name: "سوسن محمد",
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
          name: "جانسيل سامي",
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
          name: "لورنس قاسم",
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
          name: "خميس حسين",
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
          name: "عمار ضيف الله",
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
          name: "علي موسى",
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
          name: "ضياء فايز",
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
          name: "أحمد عيسى",
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
          name: "أيمن غسان",
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
          name: "عدنان شاهر",
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

        {
          name: "لارا مؤيد",
          city: "عمان",
          list: "قائمة صوت",
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
          candidate_national_id: 2093400162,
        },
        {
          name: "جورج نيكولا",
          city: "عمان",
          list: "قائمة القوه",
          circle: "الدائرة الاولى",
          party: "حزب المستقبل الأردني",
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
          candidate_national_id: 2000248201,
        },
        {
          name: "سيما محمد",
          city: "عمان",
          list: "قائمة القوه",
          circle: "الدائرة الاولى",
          party: "حزب المستقبل الأردني",
          circle_list: "قائمة الدائرة الاولى",
          candidate_votes: 0,
          list_votes: 0,
          gender: "female",
          type: "شيشاني",
          isActivate: true,
          party_votes: 0,
          isPass: false,

          isPassparty: false,
          totalSeatsparty: 0,
          candidate_national_id: 2001970201,
        },
        {
          name: "رعد عصام",
          city: "عمان",
          list: "قائمة صوت",
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
          candidate_national_id: 2008430174,
        },

        {
          name: "حسين عواد",
          city: "عمان",
          list: "قائمة القوه",
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
          candidate_national_id: 2024600162,
        },

        {
          name: "تامر موسى",
          city: "عمان",
          list: "قائمة صوت",
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
          candidate_national_id: 2044003147,
        },

        {
          name: "سامر فريد",
          city: "عمان",
          list: "قائمة القوه",
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
          candidate_national_id: 2068400291,
        },

        {
          name: "سامي سالم",
          city: "عمان",
          list: "قائمة القوه",
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
          candidate_national_id: 2005400246,
        },

        {
          name: "أمير فرحان",
          city: "عمان",
          list: "قائمة صوت",
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
          candidate_national_id: 2040030260,
        },

        {
          name: "أمير فرحان",
          city: "عمان",
          list: "قائمة الحق",
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
          candidate_national_id: 2040030260,
        },
        /////////////////////////////// دائره لاولى زرقاء قائعمانه

        {
          name: "هادي عمر",
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
          name: "أماني محمد",
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
          name: "اسامة عمر",
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
          name: "كمال صالح",
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
          name: "نور الدين فادي",
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
          name: "صلاح مطاوع",
          city: "عمان",
          list: "قائمة الحق",
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
          candidate_national_id: 2000600231,
        },

        {
          name: "عيد عطا الله",
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
          name: "سمر هاني",
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
          name: "رافع محمود",
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
          name: "صخر سميح",
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
        //////////////////////////////دائره الزرقاء قائمه المستقبل
        {
          name: "مهند فاتح",
          city: "عمان",
          list: "قائمة الحق",
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
          candidate_national_id: 2000600239,
        },

        {
          name: "دينا جمال",
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
          name: "محمود إياد",
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
          name: "رزق داود",
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
          name: "مايا عيسى",
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
          name: "طارق محمد",
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
          name: "مجد الدين عبد الله",
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
          name: "زيد حمزة",
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
          name: "سعيد حامد",
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
          name: "حمود فيصل",
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
        //////////////////////////////////دائره الزرقاء قائمه رؤيه
        {
          name: "وسام مالزرقاء اهر",
          city: "عمان",
          list: "قائمة العز",
          circle: "الدائرة الثالثة",
          party: "حزب الوحدة الشعبية الديمقراطي الأردني",
          circle_list: "قائمة الدائرة الثالثة",
          candidate_votes: 0,
          list_votes: 0,
          gender: "male",
          type: "مسلم",
          isActivate: true,
          party_votes: 0,
          isPass: false,

          isPassparty: false,
          totalSeatsparty: 0,
          candidate_national_id: 2000600250,
        },
        {
          name: "عائشة سالم",
          city: "عمان",
          list: "قائمة العز",
          circle: "الدائرة الثالثة",
          party: null,
          circle_list: "قائمة الدائرة الثالثة",
          candidate_votes: 0,
          list_votes: 10,
          gender: "female",
          type: "كوتا",
          isActivate: true,
          candidate_national_id: 100017,
          party_votes: 0,
        },
        {
          name: "علي رحمن",
          city: "عمان",
          list: "قائمة العز",
          circle: "الدائرة الثالثة",
          party: null,
          circle_list: "قائمة الدائرة الثالثة",
          candidate_votes: 0,
          list_votes: 10,
          gender: "male",
          type: "مسلم",
          isActivate: true,
          candidate_national_id: 100018,
          party_votes: 0,
        },
        {
          name: "سامية أحمد",
          city: "عمان",
          list: "قائمة العز",
          circle: "الدائرة الثالثة",
          party: null,
          circle_list: "قائمة الدائرة الثالثة",
          candidate_votes: 10,
          list_votes: 10,
          gender: "female",
          type: "مسيحي",
          isActivate: true,
          candidate_national_id: 100019,
          party_votes: 0,
        },
        {
          name: "خالد محمد",
          city: "عمان",
          list: "قائمة العز",
          circle: "الدائرة الثالثة",
          party: null,
          circle_list: "قائمة الدائرة الثالثة",
          candidate_votes: 0,
          list_votes: 10,
          gender: "male",
          type: "شيشاني",
          isActivate: true,
          candidate_national_id: 100020,
          party_votes: 0,
        },
        {
          name: "ماروى نبيل",
          city: "عمان",
          list: "قائمة العز",
          circle: "الدائرة الثالثة",
          party: null,
          circle_list: "قائمة الدائرة الثالثة",
          candidate_votes: 0,
          list_votes: 10,
          gender: "female",
          type: "كوتا",
          isActivate: true,
          candidate_national_id: 100021,
          party_votes: 0,
        },
        {
          name: "طارق علي",
          city: "عمان",
          list: "قائمة العز",
          circle: "الدائرة الثالثة",
          party: null,
          circle_list: "قائمة الدائرة الثالثة",
          candidate_votes: 0,
          list_votes: 10,
          gender: "male",
          type: "مسلم",
          isActivate: true,
          candidate_national_id: 100022,
          party_votes: 0,
        },
        ////////////////////////عمان الثالثه قائمه العز
        {
          name: "ليلى سعيد ",
          city: "عمان",
          list: "قائمة الحق",
          circle: "الدائرة الثالثة",
          party: "Test",
          circle_list: "قائمة الدائرة الثالثة",
          candidate_votes: 0,
          list_votes: 10,
          gender: "female",
          type: "مسيحي",
          isActivate: true,
          candidate_national_id: 100023,
          party_votes: 0,
        },
        {
          name: "محمد حسين",
          city: "عمان",
          list: "قائمة الحق",
          circle: "الدائرة الثالثة",
          party: 1111,
          circle_list: "قائمة الدائرة الثالثة",
          candidate_votes: 10,
          list_votes: 10,
          gender: "male",
          type: "شيشاني",
          isActivate: true,
          candidate_national_id: 100024,
          party_votes: 0,
        },
        {
          name: "نوال خالد",
          city: "عمان",
          list: "قائمة الحق",
          circle: "الدائرة الثالثة",
          party: "hh",
          circle_list: "قائمة الدائرة الثالثة",
          candidate_votes: 0,
          list_votes: 0,
          gender: "female",
          type: "كوتا",
          isActivate: true,
          candidate_national_id: 100025,
          party_votes: 20,
        },
        {
          name: "محمد ناصر",
          city: "عمان",
          list: "قائمة الحق",
          circle: "الدائرة الثالثة",
          party: null,
          circle_list: "قائمة الدائرة الثالثة",
          candidate_votes: 60,
          list_votes: 10,
          gender: "male",
          type: "مسلم",
          isActivate: true,
          candidate_national_id: 100026,
          party_votes: 0,
        },
        {
          name: "رها عبد الله",
          city: "عمان",
          list: "قائمة الحق",
          circle: "الدائرة الثالثة",
          party: null,
          circle_list: "قائمة الدائرة الثالثة",
          candidate_votes: 10,
          list_votes: 90,
          gender: "female",
          type: "مسيحي",
          isActivate: true,
          candidate_national_id: 100027,
          party_votes: 0,
        },

        //////////////////////////////////عمان الثالثه قائمه الحق
        {
          name: "خليل أحمد ",
          city: "عمان",
          list: "قائمة العهد",
          circle: "الدائرة الثالثة",
          party: null,
          circle_list: "قائمة الدائرة الثالثة",
          candidate_votes: 60,
          list_votes: 100,
          gender: "male",
          type: "شيشاني",
          isActivate: true,
          candidate_national_id: 100028,
          party_votes: 0,
        },
        {
          name: "أحمد صادق",
          city: "عمان",
          list: "قائمة العهد",
          circle: "الدائرة الثالثة",
          party: null,
          circle_list: "قائمة الدائرة الثالثة",
          candidate_votes: 10,
          list_votes: 200,
          gender: "male",
          type: "كوتا",
          isActivate: true,
          candidate_national_id: 100029,
          party_votes: 0,
        },
        {
          name: "نور أحمد",
          city: "عمان",
          list: "قائمة العهد",
          circle: "الدائرة الثالثة",
          party: null,
          circle_list: "قائمة الدائرة الثالثة",
          candidate_votes: 0,
          list_votes: 0,
          gender: "female",
          type: "مسلم",
          isActivate: true,
          candidate_national_id: 100030,
          party_votes: 0,
        },
        {
          name: "فادي أحمد",
          city: "عمان",
          list: "قائمة العهد",
          circle: "الدائرة الثالثة",
          party: null,
          circle_list: "قائمة الدائرة الثالثة",
          candidate_votes: 50,
          list_votes: 100,
          gender: "male",
          type: "مسيحي",
          isActivate: true,
          candidate_national_id: 100031,
          party_votes: 0,
        },
        {
          name: "مريم جابر",
          city: "عمان",
          list: "قائمة العهد",
          circle: "الدائرة الثالثة",
          party: null,
          circle_list: "قائمة الدائرة الثالثة",
          candidate_votes: 10,
          list_votes: 10,
          gender: "female",
          type: "شيشاني",
          isActivate: true,
          candidate_national_id: 100032,
          party_votes: 0,
        },
        {
          name: "إبراهيم صالح",
          city: " عمان",
          list: "قائمة العهد",
          circle: "الدائرة الثالثة",
          party: null,
          circle_list: "قائمة الدائرة الثالثة",
          candidate_votes: 10,
          list_votes: 10,
          gender: "male",
          type: "كوتا",
          isActivate: true,
          candidate_national_id: 100033,
          party_votes: 0,
        },
        //////////////////////////////////////عمان الثالثه قائمه العهد
        {
          name: "ناديا محمد ",
          city: "عمان",
          list: "قائمة الحق",
          circle: "الدائرة الاولى",
          party: null,
          circle_list: "قائمة الدائرة الاولى",
          candidate_votes: 10,
          list_votes: 10,
          gender: "female",
          type: "مسلم",
          isActivate: true,
          candidate_national_id: 100034,
          party_votes: 0,
        },
        {
          name: "وليد عبد الله",
          city: "عمان",
          list: "قائمة الحق",
          circle: "الدائرة الاولى",
          party: null,
          circle_list: "قائمة الدائرة الاولى",
          candidate_votes: 10,
          list_votes: 10,
          gender: "male",
          type: "مسيحي",
          isActivate: true,
          candidate_national_id: 100035,
          party_votes: 0,
        },
        {
          name: "فرح نبيل",
          city: "عمان",
          list: "قائمة الحق",
          circle: "الدائرة الاولى",
          party: null,
          circle_list: "قائمة الدائرة الاولى",
          candidate_votes: 0,
          list_votes: 0,
          gender: "female",
          type: "شيشاني",
          isActivate: true,
          candidate_national_id: 100036,
          party_votes: 0,
        },
        {
          name: "خالد محمد",
          city: "عمان",
          list: "قائمة الحق",
          circle: "الدائرة الاولى",
          party: null,
          circle_list: "قائمة الدائرة الاولى",
          candidate_votes: 0,
          list_votes: 0,
          gender: "male",
          type: "كوتا",
          isActivate: true,
          candidate_national_id: 100037,
          party_votes: 0,
        },
        {
          name: "سارة علي",
          city: "عمان",
          list: "قائمة صوت",
          circle: "الدائرة الاولى",
          party: null,
          circle_list: "قائمة الدائرة الاولى",
          candidate_votes: 0,
          list_votes: 0,
          gender: "female",
          type: "مسلم",
          isActivate: true,
          candidate_national_id: 100038,
          party_votes: 0,
        },

        //////////////////////////////////////عمان الاولى قائمه القوه
        {
          name: "محمد سالم ",
          city: "عمان",
          list: "قائمة القوه",
          circle: "الدائرة الاولى",
          party: null,
          circle_list: "قائمة الدائرة الاولى",
          candidate_votes: 0,
          list_votes: 0,
          gender: "male",
          type: "مسيحي",
          isActivate: true,
          candidate_national_id: 100039,
          party_votes: 0,
        },
        {
          name: "نور عبد الله",
          city: "عمان",
          list: "قائمة القوه",
          circle: "الدائرة الاولى",
          party: null,
          circle_list: "قائمة الدائرة الاولى",
          candidate_votes: 0,
          list_votes: 0,
          gender: "female",
          type: "شيشاني",
          isActivate: true,
          candidate_national_id: 100040,
          party_votes: 0,
        },
        // {
        //   name: "عمر عبد الله",
        //   city: "عمان",
        //   list: "قائمة عداله",
        //   circle: "الدائرة الاولى",
        //   party: null,
        //   circle_list: "قائمة الدؤائرة الاولى",
        //   candidate_votes: 10,
        //   list_votes: 10,
        //   gender: "female",
        //   type: "شيشاني",
        //   isActivate: true,
        //   candidate_national_id: 100071,
        //   party_votes: 0,
        // },
        // {
        //   name: "محمد عبد الله",
        //   city: "عمان",
        //   list: "قائمة عداله",
        //   circle: "الدائرة الاولى",
        //   party: null,
        //   circle_list: "قائمة الدؤائرة الاولى",
        //   candidate_votes: 10,
        //   list_votes: 10,
        //   gender: "female",
        //   type: "مسلم",
        //   isActivate: true,
        //   candidate_national_id: 100070,
        //   party_votes: 0,
        // },
        {
          name: "عزيز عبد الله",
          city: "عمان",
          list: "قائمة صوت",
          circle: "الدائرة الاولى",
          party: null,
          circle_list: "قائمة الدؤائرة الاولى",
          candidate_votes: 10,
          list_votes: 10,
          gender: "female",
          type: "مسلم",
          isActivate: true,
          candidate_national_id: 100077,
          party_votes: 0,
        },
        //////////////////////////////////////عمان الاولى قائمه عداله

        //عمان  {
        //   name: "سامي الحسن",
        //   city: "عمان",
        //   list: "قائمة التغيير",
        //   circle: "الدائرة الاولى",
        //   party: null,
        //   circle_list: "قائمة الدؤائرة الاولى",
        //   candidate_votes: 15,
        //   list_votes: 20,
        //   gender: "male",
        //   type: "مسيحي",
        //   isActivate: true,
        //   candidate_national_id: 100078,
        //   party_votes: 5,
        // },

        // {
        //   name: "ليلى خالد",
        //   city: "عمان",
        //   list: "قائمة التغيير",
        //   circle: "الدائرة الاولى",
        //   party: null,
        //   circle_list: "قائمة الدؤائرة الاولى",
        //   candidate_votes: 25,
        //   list_votes: 30,
        //   gender: "female",
        //   type: "مسلم",
        //   isActivate: true,
        //   candidate_national_id: 100079,
        //   party_votes: 10,
        // },

        // {
        //   name: "عمر سليمان",
        //   city: "عمان",
        //   list: "قائمة التغيير",
        //   circle: "الدائرة الاولى",
        //   party: null,
        //   circle_list: "قائمة الدؤائرة الاولى",
        //   candidate_votes: 18,
        //   list_votes: 25,
        //   gender: "male",
        //   type: "مسلم",
        //   isActivate: true,
        //   candidate_national_id: 100080,
        //   party_votes: 8,
        // },

        // {
        //   name: "هدى عبد الرحمن",
        //   city: "عمان",
        //   list: "قائمة التغيير",
        //   circle: "الدائرة الاولى",
        //   party: null,
        //   circle_list: "قائمة الدؤائرة الاولى",
        //   candidate_votes: 22,
        //   list_votes: 28,
        //   gender: "female",
        //   type: "مسلم",
        //   isActivate: true,
        //   candidate_national_id: 100081,
        //   party_votes: 7,
        // },

        // {
        //   name: "يوسف سعيد",
        //   city: "عمان",
        //   list: "قائمة التغيير",
        //   circle: "الدائرة الاولى",
        //   party: null,
        //   circle_list: "قائمة الدؤائرة الاولى",
        //   candidate_votes: 19,
        //   list_votes: 24,
        //   gender: "male",
        //   type: "مسلم",
        //   isActivate: true,
        //   candidate_national_id: 100082,
        //   party_votes: 6,
        // },
      ]);
    });
};

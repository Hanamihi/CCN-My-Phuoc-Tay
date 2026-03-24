export type Language = 'vi' | 'en';

export const translations = {
  vi: {
    nav: {
      brand: "CCN MỸ PHƯỚC TÂY",
      overview: "Tổng quan",
      location: "Vị trí",
      industries: "Ngành nghề",
      incentives: "Ưu đãi",
      cta: "Tải Brochure dự án",
      register: "Đăng Ký Ngay"
    },
    hero: {
      badge: "Cơ Hội Đầu Tư Mới Tại Tiền Giang",
      title_prefix: "CỤM CÔNG NGHIỆP",
      title_highlight: "MỸ PHƯỚC TÂY",
      subtitle: "Diện tích 42,9 ha • Pháp lý hoàn chỉnh (1/500) • Thuế TNDN 10% trong 15 năm",
      cta_primary: "Tải Brochure dự án",
      cta_secondary: "Xem Vị Trí",
      price_tag: "Giá ưu đãi chỉ từ 115 USD/m²"
    },
    overview: {
      title_prefix: "Thông Tin Chung &",
      title_highlight: "Pháp Lý Minh Bạch",
      description: "Cụm Công Nghiệp Mỹ Phước Tây tọa lạc tại vị trí chiến lược sát đường Tỉnh 865, Phường Mỹ Phước Tây, mang đến cơ hội đầu tư bền vững với pháp lý hoàn chỉnh và hạ tầng đồng bộ.",
      investor: "Chủ đầu tư",
      investor_value: "CÔNG TY TNHH SƠN PHÚC TIỀN GIANG",
      area: "Tổng diện tích",
      area_value: "42,9 ha (Đất CN: 32,1 ha)",
      capital: "Tổng vốn đầu tư",
      capital_value: "913 Tỷ VNĐ",
      duration: "Thời hạn",
      duration_value: "50 năm",
      legal_title: "Pháp Lý Hoàn Chỉnh 100%",
      legal_items: [
        "• Quyết định Chấp thuận chủ trương đầu tư (19/02/2025)",
        "• Quyết định Thành lập CCN (26/06/2025)",
        "• Quyết định Phê duyệt quy hoạch chi tiết 1/500 (01/12/2025)"
        "• Quyết định Phê duyệt phương án bồi thường GPMB/ QĐ giao đất"
      ]
    },
    location: {
      title_prefix: "Vị Trí Vàng -",
      title_highlight: "Kết Nối Thuận Lợi",
      description: "Nằm trên tuyến Tỉnh 865 - trục giao thông huyết mạch kết nối ĐBSCL với TP. HCM, dự kiến nâng cấp thành QL30B trước năm 2030.",
      map_note: "* Hình ảnh minh họa kết nối Logistics",
      hcm: "TP. Hồ Chí Minh",
      airport: "Sân bay Tân Sơn Nhất",
      port: "Cảng Mỹ Tho",
      highway: "QL1A",
      junction: "Nút giao Cao Lãnh – Vàm Cống",
      advantage_title: "Lợi thế giao thông",
      advantage_desc: "Vị trí chiến lược giúp tối ưu hóa chi phí vận chuyển và logistics cho các doanh nghiệp xuất nhập khẩu."
    },
    industries: {
      title_prefix: "Ngành Nghề Ưu Tiên &",
      title_highlight: "Phân Khu Chức Năng",
      description: "Quy hoạch khoa học, tối ưu hóa chuỗi cung ứng và sản xuất cho đa dạng ngành nghề.",
      map_title: "Bản Đồ Quy Hoạch Tổng Thể",
      map_desc: "Phân khu chức năng được thiết kế đồng bộ, hiện đại theo tiêu chuẩn quốc tế.",
      zones: [
        {
          id: "CN1",
          title: "Công Nghiệp Nhẹ & Công Nghệ Cao",
          desc: "May trang phục, sản xuất giày/túi xách, sản phẩm từ cao su/plastic, điện tử, máy vi tính."
        },
        {
          id: "CN2-CN3",
          title: "Chế Biến Nông Sản & Thực Phẩm",
          desc: "Chế biến thủy sản, trái cây tươi/sấy khô, thức ăn chăn nuôi, sản phẩm kim loại đúc sẵn."
        },
        {
          id: "KHO",
          title: "Khu Vực Kho Bãi & Logistics",
          desc: "Nhà xưởng xây sẵn cho thuê, bãi tập kết và trung tâm giao nhận hàng hóa."
        }
      ]
    },
    incentives: {
      title_prefix: "Chính Sách Ưu Đãi",
      title_highlight: "Hấp Dẫn Nhất Khu Vực",
      description: "Chúng tôi cam kết đồng hành cùng nhà đầu tư với các chính sách hỗ trợ tài chính và pháp lý vượt trội, tối ưu hóa lợi nhuận ngay từ ngày đầu tiên.",
      tax_cit_title: "Ưu Đãi Thuế TNDN",
      tax_cit_desc: "Thuế suất 10% trong 15 năm. Miễn thuế 2 năm, giảm 50% trong 4 năm tiếp theo.",
      tax_import_title: "Ưu Đãi Thuế Nhập Khẩu",
      tax_import_desc: "Miễn thuế 100% hàng hóa nhập khẩu để tạo tài sản cố định của dự án.",
      support_title: "Hỗ Trợ Toàn Diện",
      support_desc: "Hỗ trợ thủ tục pháp lý, vay vốn ngân hàng và tuyển dụng lao động địa phương.",
      chart_title: "So Sánh Giá Thuê",
      chart_unit: "Đơn vị: USD/m²",
      chart_items: [
        { name: "CCN Mỹ Phước Tây", value: "115 USD" },
        { name: "KCN Long Giang", value: "150 - 170 USD" },
        { name: "KCN Vĩnh Lộc 2", value: "200 - 270 USD" }
      ],
      chart_note: "Giá thuê cạnh tranh nhất khu vực Tây Nam Bộ"
    },
    timeline: {
      title_prefix: "Lộ Trình &",
      title_highlight: "Lợi Thế Cạnh Tranh",
      timeline_title: "Tiến Độ Triển Khai",
      milestones: [
    {
      date: "Q3/2026",
      title: "Khởi Công Hạ Tầng Kỹ Thuật",
      desc: "Bắt đầu xây dựng hệ thống đường giao thông, điện, nước và xử lý nước thải."
    },
    {
      date: "Q3/2027",
      title: "Hoàn thành xây dựng Hạ tầng Kỹ thuật",
      desc: "Nghiệm thu toàn bộ hệ thống hạ tầng, đảm bảo sẵn sàng kết nối cho các nhà máy."
    },
    {
      date: "Q4/2027",
      title: "Hoàn Thành & Khai Thác",
      desc: "Bàn giao đất cho nhà đầu tư, chính thức đi vào hoạt động sản xuất."
    }
  ],
      swot_title: "Tại Sao Chọn Mỹ Phước Tây?",
      swot_items: [
        {
          title: "DƯ ĐỊA PHÁT TRIỂN LỚN",
          desc: "Thị trường còn nhiều quỹ đất sạch quy hoạch bài bản, mở ra cơ hội đón đầu chu kỳ tăng trưởng công nghiệp mới của khu vực Tây Nam Bộ."
        },
        {
          title: "CHI PHÍ VẬN HÀNH CẠNH TRANH",
          desc: "Tổng chi phí đầu tư tối ưu hơn so với TP.HCM và Long An. Giá thuê đất hợp lý, chi phí nhân công cạnh tranh."
        },
        {
          title: "CHÍNH SÁCH HỖ TRỢ & THỦ TỤC THUẬN LỢI",
          desc: "Hưởng lợi từ chính sách thu hút đầu tư của tỉnh Tiền Giang. Hỗ trợ pháp lý minh bạch, chính quyền đồng hành cùng doanh nghiệp."
        },
        {
          title: "KẾT NỐI GIAO THÔNG LIÊN VÙNG",
          desc: "Vị trí chiến lược kết nối Quốc lộ 1A, TP.HCM và hệ thống cảng sông, tối ưu chuỗi cung ứng logistics."
        },
        {
          title: "ĐÓN ĐẦU LÀN SÓNG FDI MỚI",
          desc: "Điểm đến lý tưởng cho doanh nghiệp chế biến, chế tạo và logistics trong xu hướng dịch chuyển sản xuất về miền Tây."
        }
      ]
    },
    contact: {
      title: "Đừng Bỏ Lỡ Cơ Hội Đầu Tư",
      description: "Đăng ký ngay để nhận bảng giá ưu đãi theo tỷ lệ lấp đầy và tư vấn quy trình pháp lý chi tiết.",
      labels: {
        hotline: "Hotline",
        email: "Email",
        investor: "Chủ Đầu Tư"
      },
      process_title: "Quy trình đơn giản",
      process_desc: "Thủ tục nhanh chóng để ký Hợp đồng Thuê Lại Đất và nhận bàn giao đất. Đội ngũ pháp lý của chúng tôi sẽ hỗ trợ trọn gói.",
      form_title: "Đăng Ký Nhận Thông Tin",
      form_labels: {
        name: "Họ và tên",
        phone: "Số điện thoại",
        email: "Email",
        company: "Tên công ty",
        needs: "Nhu cầu đầu tư"
      },
      form_placeholders: {
        name: "Nguyễn Văn A",
        phone: "0909...",
        email: "example@company.com",
        company: "Công ty ABC"
      },
      form_options: [
        "Thuê đất xây nhà máy",
        "Thuê nhà xưởng xây sẵn",
        "Kho bãi & Logistics",
        "Khác"
      ],
      submit: "TẢI BROCHURE DỰ ÁN",
      privacy: "Chúng tôi cam kết bảo mật thông tin của bạn."
    },
    footer: {
      description: "Cụm Công nghiệp Mỹ Phước Tây - Điểm đến đầu tư lý tưởng tại Tiền Giang với hạ tầng đồng bộ, pháp lý hoàn chỉnh và chính sách ưu đãi vượt trội.",
      quick_links: "Liên Kết Nhanh",
      contact: "Liên Hệ",
      address: "Phường Mỹ Phước Tây, TX. Cai Lậy, Tiền Giang",
      copyright: "CÔNG TY TNHH SƠN PHÚC TIỀN GIANG. All rights reserved."
    }
  },
  en: {
    nav: {
      brand: "MY PHUOC TAY IC",
      overview: "Overview",
      location: "Location",
      industries: "Industries",
      incentives: "Incentives",
      cta: "Download Brochure",
      register: "Register Now"
    },
    hero: {
      badge: "New Investment Opportunity in Tien Giang",
      title_prefix: "MY PHUOC TAY",
      title_highlight: "INDUSTRIAL CLUSTER",
      subtitle: "Area 42.9 ha • Complete Legal (1/500) • 10% CIT for 15 years",
      cta_primary: "Download Brochure",
      cta_secondary: "View Location",
      price_tag: "Preferential price from only 115 USD/m²"
    },
    overview: {
      title_prefix: "General Info &",
      title_highlight: "Transparent Legal",
      description: "My Phuoc Tay Industrial Cluster is strategically located near Provincial Road 865, My Phuoc Tay Ward, offering sustainable investment opportunities with complete legality and synchronized infrastructure.",
      investor: "Investor",
      investor_value: "SON PHUC TIEN GIANG CO., LTD",
      area: "Total Area",
      area_value: "42.9 ha (Ind. Land: 32.1 ha)",
      capital: "Total Investment",
      capital_value: "913 Billion VND",
      duration: "Duration",
      duration_value: "50 years",
      legal_title: "100% Complete Legal Status",
      legal_items: [
        "• Investment Policy Approval Decision (Feb 19, 2025)",
        "• Cluster Establishment Decision (Jun 26, 2025)",
        "• 1/500 Detailed Planning Approval Decision (Dec 01, 2025)"
        "• Decision approving the compensation plan for land clearance/ Decision on land allocation"
      ]
    },
    location: {
      title_prefix: "Golden Location -",
      title_highlight: "Seamless Connectivity",
      description: "Located on Provincial Road 865 - a vital traffic axis connecting the Mekong Delta with HCMC, expected to be upgraded to National Highway 30B before 2030.",
      map_note: "* Illustration of Logistics connectivity",
      hcm: "Ho Chi Minh City",
      airport: "Tan Son Nhat Airport",
      port: "My Tho Port",
      highway: "National Highway 1A",
      junction: "Cao Lanh – Vam Cong Junction",
      advantage_title: "Traffic Advantage",
      advantage_desc: "Strategic location helps optimize transportation and logistics costs for import-export businesses."
    },
    industries: {
      title_prefix: "Priority Industries &",
      title_highlight: "Functional Zoning",
      description: "Scientific planning, optimizing supply chains and production for diverse industries.",
      map_title: "Master Plan Map",
      map_desc: "Functional zones are designed synchronously and modernly according to international standards.",
      zones: [
        {
          id: "CN1",
          title: "Light Industry & High Tech",
          desc: "Apparel, footwear/handbags, rubber/plastic products, electronics, computers."
        },
        {
          id: "CN2-CN3",
          title: "Agri-Product & Food Processing",
          desc: "Seafood processing, fresh/dried fruits, animal feed, prefabricated metal products."
        },
        {
          id: "KHO",
          title: "Warehousing & Logistics",
          desc: "Ready-built factories for rent, gathering yards, and goods forwarding centers."
        }
      ]
    },
    incentives: {
      title_prefix: "Incentive Policies",
      title_highlight: "Most Attractive in Region",
      description: "We are committed to accompanying investors with superior financial support and legal policies, optimizing profits from day one.",
      tax_cit_title: "CIT Incentives",
      tax_cit_desc: "10% tax rate for 15 years. Tax exemption for 2 years, 50% reduction for the next 4 years.",
      tax_import_title: "Import Tax Incentives",
      tax_import_desc: "100% exemption on imported goods to create fixed assets for the project.",
      support_title: "Comprehensive Support",
      support_desc: "Support for legal procedures, bank loans, and local labor recruitment.",
      chart_title: "Rental Price Comparison",
      chart_unit: "Unit: USD/m²",
      chart_items: [
        { name: "My Phuoc Tay IC", value: "115 USD" },
        { name: "Long Giang IP", value: "150 - 170 USD" },
        { name: "Vinh Loc 2 IP", value: "200 - 270 USD" }
      ],
      chart_note: "Most competitive rental price in the Southwest region"
    },
    timeline: {
      title_prefix: "Roadmap &",
      title_highlight: "Competitive Advantages",
      timeline_title: "Implementation Progress",
      milestones: [
    {
      date: "Q3/2026",
      title: "Infrastructure Construction Commencement",
      desc: "Construction of road, electricity, water, and wastewater treatment systems begins."
    },
    {
      date: "Q3/2027",
      title: "Infrastructure Construction Completion",
      desc: "Acceptance of the entire infrastructure system, ensuring readiness for connection to the factories."
    },
    {
      date: "Q4/2027",
      title: "Completion & Operation",
      desc: "Land handover to the investor, officially commencing production."
    }
  ],
      swot_title: "Why Choose My Phuoc Tay?",
      swot_items: [
        {
          title: "HUGE DEVELOPMENT POTENTIAL",
          desc: "The market still has plenty of clean, well-planned land funds, opening up opportunities to catch the new industrial growth cycle of the Southwest region."
        },
        {
          title: "COMPETITIVE OPERATING COSTS",
          desc: "Total investment costs are more optimal compared to HCMC and Long An. Reasonable land rental prices, competitive labor costs."
        },
        {
          title: "SUPPORT POLICIES & FAVORABLE PROCEDURES",
          desc: "Benefit from Tien Giang province's investment attraction policies. Transparent legal support, government accompanying businesses."
        },
        {
          title: "INTER-REGIONAL TRANSPORT CONNECTIVITY",
          desc: "Strategic location connecting National Highway 1A, HCMC, and river port systems, optimizing logistics supply chains."
        },
        {
          title: "CATCHING THE NEW FDI WAVE",
          desc: "Ideal destination for processing, manufacturing, and logistics enterprises in the trend of shifting production to the West."
        }
      ]
    },
    contact: {
      title: "Don't Miss The Investment Opportunity",
      description: "Register now to receive the preferential price list based on occupancy rate and detailed legal process consultation.",
      labels: {
        hotline: "Hotline",
        email: "Email",
        investor: "Investor"
      },
      process_title: "Simple Process",
      process_desc: "Simple steps to sign the Land Sublease Agreement and receive land handover. Our legal team will support the full package.",
      form_title: "Register for Information",
      form_labels: {
        name: "Full Name",
        phone: "Phone Number",
        email: "Email",
        company: "Company Name",
        needs: "Investment Needs"
      },
      form_placeholders: {
        name: "John Doe",
        phone: "+84...",
        email: "example@company.com",
        company: "ABC Company"
      },
      form_options: [
        "Land rental for factory construction",
        "Ready-built factory rental",
        "Warehousing & Logistics",
        "Other"
      ],
      submit: "DOWNLOAD PROJECT BROCHURE",
      privacy: "We are committed to keeping your information confidential."
    },
    footer: {
      description: "My Phuoc Tay Industrial Cluster - Ideal investment destination in Tien Giang with synchronized infrastructure, complete legality, and superior incentive policies.",
      quick_links: "Quick Links",
      contact: "Contact",
      address: "My Phuoc Tay Ward, Cai Lay Town, Tien Giang",
      copyright: "SON PHUC TIEN GIANG CO., LTD. All rights reserved."
    }
  }
};

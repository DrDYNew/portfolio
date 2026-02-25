import {
  FaGraduationCap,
  FaCoffee,
  FaPlane,
  FaTruck,
  FaUsers,
  FaServer,
  FaGamepad,
} from "react-icons/fa";
import type { IconType } from "react-icons";

export type Project = {
  slug: string;
  tech: string[];
  icon: IconType;
  github: string;
  features: { en: string[]; vi: string[] };
  screenshots?: string[];
};

export const projectsData: Project[] = [
  {
    slug: "f-education-management",
    tech: ["C#", "ASP.NET", "React", "React Native"],
    icon: FaGraduationCap,
    github: "https://github.com/DrDYNew/F-Education-Management-System",
    features: {
      en: [
        "RESTful API backend with C# ASP.NET",
        "React web dashboard for admin & teachers",
        "React Native mobile app for students",
        "Authentication & role-based access control",
        "Course management & enrollment system",
        "Real-time notifications",
      ],
      vi: [
        "Backend RESTful API với C# ASP.NET",
        "Giao diện web React cho admin & giáo viên",
        "Ứng dụng mobile React Native cho sinh viên",
        "Xác thực & phân quyền truy cập",
        "Quản lý khóa học & đăng ký",
        "Thông báo thời gian thực",
      ],
    },
  },
  {
    slug: "coffee-shop",
    tech: ["Java", "Servlet", "JSP", "MySQL"],
    icon: FaCoffee,
    github: "https://github.com/DrDYNew/ISP392_CoffeeShop",
    features: {
      en: [
        "Java Servlet & JSP backend architecture",
        "MySQL database for data persistence",
        "Order management system",
        "Inventory tracking & stock alerts",
        "Sales reporting & analytics",
        "Employee management",
      ],
      vi: [
        "Kiến trúc backend Java Servlet & JSP",
        "Cơ sở dữ liệu MySQL",
        "Hệ thống quản lý đơn hàng",
        "Theo dõi kho hàng & cảnh báo tồn kho",
        "Báo cáo & phân tích doanh thu",
        "Quản lý nhân viên",
      ],
    },
  },
  {
    slug: "booking-flight",
    tech: ["C#", "ASP.NET Core", "SQL Server"],
    icon: FaPlane,
    github: "https://github.com/vuvien07/PRN232_BookingFlight_Group4",
    features: {
      en: [
        "C# ASP.NET Core Web API",
        "Flight search with filters",
        "Seat selection & booking flow",
        "Payment integration",
        "Booking history & management",
        "Admin panel for flight CRUD",
      ],
      vi: [
        "Web API C# ASP.NET Core",
        "Tìm kiếm chuyến bay với bộ lọc",
        "Chọn ghế & quy trình đặt vé",
        "Tích hợp thanh toán",
        "Lịch sử & quản lý đặt vé",
        "Trang quản trị cho CRUD chuyến bay",
      ],
    },
  },
  {
    slug: "hola-express",
    tech: ["C#", "ASP.NET", "React Native"],
    icon: FaTruck,
    github: "https://github.com/DrDYNew/Hola-Express",
    features: {
      en: [
        "C# ASP.NET backend API",
        "React Native mobile app (iOS & Android)",
        "Real-time order tracking",
        "Delivery management & routing",
        "Push notifications",
        "User & driver dashboards",
      ],
      vi: [
        "Backend API C# ASP.NET",
        "Ứng dụng mobile React Native (iOS & Android)",
        "Theo dõi đơn hàng thời gian thực",
        "Quản lý giao hàng & định tuyến",
        "Thông báo đẩy",
        "Giao diện người dùng & tài xế",
      ],
    },
  },
  {
    slug: "club-management",
    tech: ["C#", "WPF", ".NET", "MVVM"],
    icon: FaUsers,
    github: "https://github.com/DrDYNew/ManageClub_PRN212",
    features: {
      en: [
        "WPF desktop application with MVVM pattern",
        "Member registration & management",
        "Event scheduling & tracking",
        "Club activity reports",
        "Role-based permissions",
        "Data binding & modern UI",
      ],
      vi: [
        "Ứng dụng desktop WPF theo mô hình MVVM",
        "Đăng ký & quản lý thành viên",
        "Lập lịch & theo dõi sự kiện",
        "Báo cáo hoạt động câu lạc bộ",
        "Phân quyền theo vai trò",
        "Data binding & giao diện hiện đại",
      ],
    },
  },
  {
    slug: "management-systems",
    tech: ["Java", "Spring Boot", "MySQL", "REST API"],
    icon: FaServer,
    github: "https://github.com/buidat2003/Management-Systems",
    features: {
      en: [
        "Java Spring Boot backend",
        "RESTful API architecture",
        "MySQL database with JPA/Hibernate",
        "Role-based access control (RBAC)",
        "CRUD operations for all entities",
        "API documentation with Swagger",
      ],
      vi: [
        "Backend Java Spring Boot",
        "Kiến trúc RESTful API",
        "Cơ sở dữ liệu MySQL với JPA/Hibernate",
        "Phân quyền truy cập (RBAC)",
        "CRUD cho tất cả thực thể",
        "Tài liệu API với Swagger",
      ],
    },
  },
  {
    slug: "unity-game",
    tech: ["C#", "Unity", "Game Dev"],
    icon: FaGamepad,
    github: "#",
    features: {
      en: [
        "Unity engine with C# scripting",
        "2D/3D game mechanics",
        "Physics & collision systems",
        "Player controls & interaction",
        "UI/UX game menus",
        "Score system & game states",
      ],
      vi: [
        "Unity engine với lập trình C#",
        "Cơ chế game 2D/3D",
        "Hệ thống vật lý & va chạm",
        "Điều khiển & tương tác người chơi",
        "Giao diện menu game",
        "Hệ thống điểm & trạng thái game",
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((p) => p.slug === slug);
}

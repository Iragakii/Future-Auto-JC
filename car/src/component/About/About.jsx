import React from "react";
import Header3 from "./Header3";
import smoke from "./smoke.gif";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="smoke-container">
        <Header3></Header3>
        <div className="group">
          <img src={smoke} alt="smoke" className="smoke" />
          <div className="ty">
            <div className="jc">JC GROUP</div>
            <hr class="cigarette" />
          </div>
          <div className="intro">
            <span>
              {" "}
              • Tập đoàn JC Group , thành lập năm 2017 tại Hà Nội. <br></br>Đầu
              những năm 2017 tập trung đầu tư vào lĩnh vực IT và bán lẻ , BĐS{" "}
              <br></br>
              Cybersecurity , thú cưng với bốn thương hiệu chiến lược ban đầu là{" "}
              <br></br>DreamyLand , Ashura Cattery và JCyber , JC Group .{" "}
            </span>
            <h3 className="h3-1">
              • DreamyLand <br></br>
              Hoạt động với vai trò cung cấp cho thị trường ngành bán lẻ những
              sản phẩm Herb <br></br>tiêu chuẩn quốc tế . Doanh thu cuối những
              năm 2018 là 1 tỷ 8 trăm triệu đồng .
            </h3>
            <h3 className="h3-2">
              • Ashura Cattery <br></br>
              Ashura Cattery là một công ty chuyên về thú cưng . Với tiêu chuẩn
              quốc tế WCF <br></br> Sphynx là dòng mèo chủ lực của công ty .
              Doanh thu vào năm 2022 là 400 triệu .
            </h3>
            <h3 className="h3-3">
              • JCyber <br></br>
              JCyber cung cấp dịch vụ an ninh mạng cho các doanh nghiệp . Đào
              tạo và giảng dạy <br></br> các khóa học về an ninh mạng cho sinh
              viên với các chứng chỉ như
              <br></br> CompTIA Security+ , CompTIA A+ , CEH , OSCP . Doanh thu
              2022 là 3 tỷ 200 triệu .
            </h3>
            <h3 className="h3-4">
              {" "}
              • Với mong muốn đem đến cho thị trường những sản phẩm - dịch vụ
              theo tiêu chuẩn quốc tế .
            </h3>
            <h3 className="h3-5">
              {" "}
              • Người thành lập tập đoàn JC Group iragaki , Co-Founder Sơn Hoàng
              .
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

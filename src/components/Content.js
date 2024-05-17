import "../css/global.css";
import "../css/content.css";
import AccessStudent from "./AccessStudent";
import CreateListClass from "./CreateListClass";
function Content() {
  return (
    <div className="content">
      <div className="content-container">
        <ul className="function-list">
          <li className="function-item">
            <a href="" alt=" ">
              Tiếp nhận học sinh
            </a>
          </li>
          <li className="function-item">
            <a href=" " alt=" ">
              Lập danh sách lớp
            </a>
          </li>
          <li className="function-item">
            <a href=" " alt=" ">
              Tra cứu học sinh
            </a>
          </li>
          <li className="function-item">
            <a href=" " alt=" ">
              Nhận bảng điểm môn
            </a>
          </li>
          <li className="function-item">
            <a href=" " alt=" ">
              Lập báo cáo tổng kết
            </a>
          </li>
          <li className="function-item">
            <a href=" " alt=" ">
              Thay đổi qui định
            </a>
          </li>
        </ul>
        <div className="content-body">
          {/* <AccessStudent /> */}
          <CreateListClass />
        </div>
      </div>
    </div>
  );
}
export default Content;
